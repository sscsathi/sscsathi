# Security Specification — SSC Sathi Firestore Rules

## 1. Data Invariants
1. Every document under `/users/{userId}` and `/users/{userId}/attempts/{attemptId}` is strictly private to the verified owner (`request.auth.uid == userId` and `request.auth.token.email_verified == true`).
2. `UserProfile.uid` and `ExamAttempt.userId` must strictly equal `request.auth.uid` and `userId` path parameter, and remain immutable after creation.
3. `createdAt` and `updatedAt` timestamps on user profiles and private attempts must match `request.time` (server timestamps only).
4. All document IDs (`userId`, `attemptId`, `testId`) must match `^[a-zA-Z0-9_\-]+$` with max length 128.
5. `ExamAttempt` and `TestAttempt` (`/test_attempts/{attemptId}`) documents are immutable records of completed tests (no client-side updates or deletes allowed once written).
6. Shadow/ghost fields are strictly forbidden via `keys().hasAll(...) && keys().hasOnly(...)` and `affectedKeys().hasOnly(...)`.
7. `TestAttempt` documents under `/test_attempts/{attemptId}` contain ZERO PII (only `testId`, `userId`, `score`, `accuracy`, `timeTaken`, `correct`, `incorrect`, `unattempted`, `submittedAt`), enforce bounded numeric ranges (`score` in `[-400, 400]`, `accuracy` in `[0, 100]`, `correct`/`incorrect`/`unattempted` integers in `[0, 200]`), require `userId == request.auth.uid` when signed in or `^guest_[a-zA-Z0-9_\-]{8,64}$` when guest, and enforce bounded `list` queries scoped by `testId` (`limit <= 5000`).

## 2. Adversarial Payloads ("Dirty Dozen")
1. Unauthenticated read/write to `/users/uid_1` -> `PERMISSION_DENIED`
2. Cross-user read/list on `/users/other_uid/attempts` -> `PERMISSION_DENIED`
3. Unverified email write (`email_verified: false`) to `/users/*` or signed-in `test_attempts` -> `PERMISSION_DENIED`
4. Identity spoofing (`uid: "other_uid"` inside `/users/my_uid`, or signed-in user submitting `userId: "other_uid"`, or guest submitting non-`guest_` `userId` to `/test_attempts`) -> `PERMISSION_DENIED`
5. Shadow field injection (`isAdmin: true` or `email: "leak@x.com"` on `UserProfile` or `TestAttempt`) -> `PERMISSION_DENIED`
6. Oversized `customName` (> 40 chars) or oversized `photoURL` (> 512 chars) -> `PERMISSION_DENIED`
7. Invalid `dailyTargetDate` format (`"2026/11/18"` instead of `YYYY-MM-DD`) -> `PERMISSION_DENIED`
8. Fake client `createdAt` timestamp (`!= request.time`) on `UserProfile` or `ExamAttempt` -> `PERMISSION_DENIED`
9. Malicious `userId` / `attemptId` containing path traversal or >128 chars -> `PERMISSION_DENIED`
10. Modifying `uid` or `createdAt` during `UserProfile` update -> `PERMISSION_DENIED`
11. Modifying or deleting a submitted `ExamAttempt` or `TestAttempt` score after creation -> `PERMISSION_DENIED`
12. Creating `TestAttempt` with forged `score > 400` or `accuracy > 100`, or issuing an unbounded `list` query on `/test_attempts` without `testId` filter and `limit <= 5000` -> `PERMISSION_DENIED`

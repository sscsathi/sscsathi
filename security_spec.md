# Security Specification — SSC Sathi Firestore Rules

## 1. Data Invariants
1. Every document under `/users/{userId}` and `/users/{userId}/attempts/{attemptId}` is strictly private to the verified owner (`request.auth.uid == userId` and `request.auth.token.email_verified == true`).
2. `UserProfile.uid` and `ExamAttempt.userId` must strictly equal `request.auth.uid` and `userId` path parameter, and remain immutable after creation.
3. `createdAt` and `updatedAt` timestamps must match `request.time` (server timestamps only).
4. All document IDs (`userId`, `attemptId`) must match `^[a-zA-Z0-9_\-]+$` with max length 128.
5. `ExamAttempt` documents are immutable records of completed tests (no client-side updates allowed once written; owner may read/create/delete if clearing personal history, or read/create only).
6. Shadow/ghost fields are strictly forbidden via `keys().hasAll(...) && keys().hasOnly(...)` and `affectedKeys().hasOnly(...)`.

## 2. Adversarial Payloads ("Dirty Dozen")
1. Unauthenticated read/write to `/users/uid_1` -> `PERMISSION_DENIED`
2. Cross-user read/list on `/users/other_uid/attempts` -> `PERMISSION_DENIED`
3. Unverified email write (`email_verified: false`) -> `PERMISSION_DENIED`
4. Identity spoofing (`uid: "other_uid"` inside `/users/my_uid`) -> `PERMISSION_DENIED`
5. Shadow field injection (`isAdmin: true` or `role: "admin"` on `UserProfile`) -> `PERMISSION_DENIED`
6. Oversized `customName` (> 40 chars) or oversized `photoURL` (> 512 chars) -> `PERMISSION_DENIED`
7. Invalid `dailyTargetDate` format (`"2026/11/18"` instead of `YYYY-MM-DD`) -> `PERMISSION_DENIED`
8. Fake client `createdAt` timestamp (`!= request.time`) -> `PERMISSION_DENIED`
9. Malicious `userId` / `attemptId` containing path traversal or >128 chars -> `PERMISSION_DENIED`
10. Modifying `uid` or `createdAt` during `UserProfile` update -> `PERMISSION_DENIED`
11. Modifying a submitted `ExamAttempt` score after creation -> `PERMISSION_DENIED`
12. Creating `ExamAttempt` with `responses` exceeding 200 entries or invalid types -> `PERMISSION_DENIED`

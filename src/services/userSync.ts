import { User } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { OperationType, db, handleFirestoreError } from '../firebaseConfig';
import { ExamResult } from '../types/exam';

export interface DailyTargetProgress {
  date: string;
  miniQuizDone: boolean;
  sectionalMockDone: boolean;
}

export interface UserProfileRecord {
  uid: string;
  customName: string;
  photoURL?: string;
  isFollowingCommunity: boolean;
  dailyTargetDate: string;
  miniQuizDone: boolean;
  sectionalMockDone: boolean;
}

export function getTodayDateString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
    now.getDate()
  ).padStart(2, '0')}`;
}

export function getUserFirstName(displayName: string | null | undefined): string {
  const trimmed = (displayName || '').trim();
  if (!trimmed) return 'Aspirant';
  return trimmed.split(/\s+/)[0].slice(0, 40) || 'Aspirant';
}

function sanitizeId(raw: string): string {
  const cleaned = raw.replace(/[^a-zA-Z0-9_\-]/g, '_').slice(0, 128);
  return cleaned || `id_${Date.now()}`;
}

function sanitizeName(raw: string): string {
  const cleaned = raw.trim().slice(0, 40);
  return cleaned || 'Aspirant';
}

export async function ensureAndLoadUserProfile(user: User): Promise<UserProfileRecord> {
  const today = getTodayDateString();
  const defaultFirstName = getUserFirstName(user.displayName);

  if (!db) {
    return {
      uid: user.uid,
      customName: defaultFirstName,
      photoURL: user.photoURL || undefined,
      isFollowingCommunity: false,
      dailyTargetDate: today,
      miniQuizDone: false,
      sectionalMockDone: false,
    };
  }

  const path = `users/${user.uid}`;
  const ref = doc(db, 'users', user.uid);

  try {
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data = snap.data();
      const sameDay = data.dailyTargetDate === today;
      const record: UserProfileRecord = {
        uid: user.uid,
        customName: sanitizeName(defaultFirstName),
        photoURL:
          user.photoURL ||
          (typeof data.photoURL === 'string' && data.photoURL) ||
          undefined,
        isFollowingCommunity: Boolean(data.isFollowingCommunity),
        dailyTargetDate: today,
        miniQuizDone: sameDay ? Boolean(data.miniQuizDone) : false,
        sectionalMockDone: sameDay ? Boolean(data.sectionalMockDone) : false,
      };

      // Refresh Google name, photoURL, or roll over date if needed
      if (
        !sameDay ||
        data.customName !== record.customName ||
        (user.photoURL && data.photoURL !== user.photoURL)
      ) {
        const updatePayload: Record<string, unknown> = {
          customName: record.customName,
          dailyTargetDate: today,
          miniQuizDone: record.miniQuizDone,
          sectionalMockDone: record.sectionalMockDone,
          updatedAt: serverTimestamp(),
        };
        if (user.photoURL) {
          updatePayload.photoURL = user.photoURL.slice(0, 512);
        }
        await updateDoc(ref, updatePayload);
      }

      return record;
    }

    const createPayload: Record<string, unknown> = {
      uid: sanitizeId(user.uid),
      customName: sanitizeName(defaultFirstName),
      isFollowingCommunity: false,
      dailyTargetDate: today,
      miniQuizDone: false,
      sectionalMockDone: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    if (user.photoURL) {
      createPayload.photoURL = user.photoURL.slice(0, 512);
    }

    await setDoc(ref, createPayload);

    return {
      uid: user.uid,
      customName: sanitizeName(defaultFirstName),
      photoURL: user.photoURL ? user.photoURL.slice(0, 512) : undefined,
      isFollowingCommunity: false,
      dailyTargetDate: today,
      miniQuizDone: false,
      sectionalMockDone: false,
    };
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function updateUserProfileFields(
  userId: string,
  fields: Partial<{
    isFollowingCommunity: boolean;
    dailyTargetDate: string;
    miniQuizDone: boolean;
    sectionalMockDone: boolean;
  }>
): Promise<void> {
  if (!db) return;
  const path = `users/${userId}`;
  const ref = doc(db, 'users', userId);
  const payload: Record<string, unknown> = {
    updatedAt: serverTimestamp(),
  };

  if (fields.isFollowingCommunity !== undefined) {
    payload.isFollowingCommunity = Boolean(fields.isFollowingCommunity);
  }
  if (fields.dailyTargetDate !== undefined) {
    payload.dailyTargetDate = fields.dailyTargetDate.slice(0, 10);
  }
  if (fields.miniQuizDone !== undefined) {
    payload.miniQuizDone = Boolean(fields.miniQuizDone);
  }
  if (fields.sectionalMockDone !== undefined) {
    payload.sectionalMockDone = Boolean(fields.sectionalMockDone);
  }

  try {
    await updateDoc(ref, payload);
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

export async function loadUserAttemptsFromCloud(userId: string): Promise<ExamResult[]> {
  if (!db) return [];
  const path = `users/${userId}/attempts`;
  try {
    const q = query(
      collection(db, 'users', userId, 'attempts'),
      where('userId', '==', userId),
      limit(50)
    );
    const snap = await getDocs(q);
    return snap.docs
      .map((d) => {
        const data = d.data();
        return {
          attemptId: String(data.attemptId || d.id),
          testId: String(data.testId || ''),
          testTitle: String(data.testTitle || 'Mock Test'),
          submittedAt: String(data.submittedAt || new Date().toISOString()),
          totalQuestions: Number(data.totalQuestions || 0),
          correctCount: Number(data.correctCount || 0),
          incorrectCount: Number(data.incorrectCount || 0),
          unattemptedCount: Number(data.unattemptedCount || 0),
          score: Number(data.score || 0),
          maxScore: Number(data.maxScore || 0),
          accuracyPercent: Number(data.accuracyPercent || 0),
          timeTakenSeconds: Number(data.timeTakenSeconds || 0),
          totalDurationSeconds: Number(data.totalDurationSeconds || 0),
          responses: (data.responses && typeof data.responses === 'object'
            ? data.responses
            : {}) as ExamResult['responses'],
        };
      })
      .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
  }
}

export async function saveUserAttemptToCloud(
  userId: string,
  result: ExamResult
): Promise<void> {
  if (!db) return;
  const safeAttemptId = sanitizeId(result.attemptId);
  const path = `users/${userId}/attempts/${safeAttemptId}`;
  const ref = doc(db, 'users', userId, 'attempts', safeAttemptId);

  try {
    await setDoc(ref, {
      attemptId: safeAttemptId,
      userId: sanitizeId(userId),
      testId: String(result.testId).slice(0, 128),
      testTitle: String(result.testTitle).slice(0, 160),
      submittedAt: String(result.submittedAt).slice(0, 64),
      totalQuestions: Math.max(1, Math.min(200, Math.round(result.totalQuestions))),
      correctCount: Math.max(0, Math.round(result.correctCount)),
      incorrectCount: Math.max(0, Math.round(result.incorrectCount)),
      unattemptedCount: Math.max(0, Math.round(result.unattemptedCount)),
      score: Number.isFinite(result.score) ? result.score : 0,
      maxScore: Math.max(0, Number.isFinite(result.maxScore) ? result.maxScore : 0),
      accuracyPercent: Math.max(
        0,
        Math.min(100, Number.isFinite(result.accuracyPercent) ? result.accuracyPercent : 0)
      ),
      timeTakenSeconds: Math.max(0, Math.round(result.timeTakenSeconds)),
      totalDurationSeconds: Math.max(0, Math.round(result.totalDurationSeconds)),
      responses: result.responses || {},
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

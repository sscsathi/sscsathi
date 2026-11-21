import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { Auth, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { Firestore, doc, getDocFromServer, getFirestore } from 'firebase/firestore';
import appletConfig from '../firebase-applet-config.json';

interface FirebaseRuntimeConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  firestoreDatabaseId?: string;
}

function resolveFirebaseConfig(): FirebaseRuntimeConfig {
  const envApiKey = import.meta.env.VITE_FIREBASE_API_KEY?.trim();
  const envAuthDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN?.trim();
  const envProjectId = import.meta.env.VITE_FIREBASE_PROJECT_ID?.trim();
  const envStorageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET?.trim();
  const envMessagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID?.trim();
  const envAppId = import.meta.env.VITE_FIREBASE_APP_ID?.trim();
  const envDatabaseId = import.meta.env.VITE_FIREBASE_DATABASE_ID?.trim();

  if (envApiKey && envAuthDomain && envProjectId && envAppId) {
    return {
      apiKey: envApiKey,
      authDomain: envAuthDomain,
      projectId: envProjectId,
      storageBucket: envStorageBucket || '',
      messagingSenderId: envMessagingSenderId || '',
      appId: envAppId,
      firestoreDatabaseId: envDatabaseId || appletConfig.firestoreDatabaseId,
    };
  }

  return {
    apiKey: appletConfig.apiKey || '',
    authDomain: appletConfig.authDomain || '',
    projectId: appletConfig.projectId || '',
    storageBucket: appletConfig.storageBucket || '',
    messagingSenderId: appletConfig.messagingSenderId || '',
    appId: appletConfig.appId || '',
    firestoreDatabaseId: appletConfig.firestoreDatabaseId || undefined,
  };
}

const resolvedConfig = resolveFirebaseConfig();

export const isFirebaseConfigured = Boolean(
  resolvedConfig.apiKey &&
    resolvedConfig.authDomain &&
    resolvedConfig.projectId &&
    resolvedConfig.appId
);

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let googleProvider: GoogleAuthProvider | null = null;

if (isFirebaseConfigured) {
  app = getApps().length > 0 ? getApps()[0] : initializeApp(resolvedConfig);
  auth = getAuth(app);
  db = resolvedConfig.firestoreDatabaseId
    ? getFirestore(app, resolvedConfig.firestoreDatabaseId)
    : getFirestore(app);
  googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
}

export { app, auth, db, googleProvider };

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth?.currentUser?.uid ?? null,
      email: auth?.currentUser?.email ?? null,
      emailVerified: auth?.currentUser?.emailVerified ?? null,
      isAnonymous: auth?.currentUser?.isAnonymous ?? null,
      tenantId: auth?.currentUser?.tenantId ?? null,
      providerInfo:
        auth?.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export async function testFirestoreConnection(): Promise<void> {
  if (!db) return;
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}

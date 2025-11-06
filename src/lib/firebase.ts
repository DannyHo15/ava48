import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp | null = null;
// Initialize Firebase only in browser runtime (window is defined)
if (typeof window !== "undefined") {
  if (!getApps().length) {
    try {
      app = initializeApp(firebaseConfig as any);
    } catch (e) {
      // ignore init errors in non-browser or misconfigured envs
      app = null;
    }
  } else {
    app = getApps()[0];
  }
}

// Lazily initialize analytics (isSupported is async and only works in browsers)
export async function initAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null;
  if (!app) return null;
  try {
    const supported = await isSupported();
    if (!supported) return null;
    return getAnalytics(app);
  } catch (e) {
    return null;
  }
}

export default app;

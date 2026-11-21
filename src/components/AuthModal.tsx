import { AlertCircle, ArrowRight, CheckCircle2, ShieldCheck, X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  isSigningIn: boolean;
  authError: string | null;
  isFirebaseReady: boolean;
  onGoogleSignIn: () => void;
  onContinueAsGuest: () => void;
  onClose?: () => void;
  canClose?: boolean;
}

export function AuthModal({
  isOpen,
  isSigningIn,
  authError,
  isFirebaseReady,
  onGoogleSignIn,
  onContinueAsGuest,
  onClose,
  canClose = false,
}: AuthModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/65 p-4 backdrop-blur-xs">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ssc-login-title"
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-indigo-100 bg-white p-6 sm:p-8 shadow-2xl"
      >
        {canClose && onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close login dialog"
            className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-[#0F172A]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}

        {/* Brand Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#F59E0B]/70 bg-white p-1 shadow-md">
            <img
              src="/assets/aistudio/1795032296907_b1ef824a.png"
              alt="SSC Sathi logo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h2
            id="ssc-login-title"
            className="mt-4 text-xl sm:text-2xl font-extrabold tracking-tight text-[#0F172A]"
          >
            Welcome to SSC Sathi
          </h2>
          <p className="mt-1.5 text-sm font-medium text-slate-600 [text-wrap:balance]">
            Track Your All-India Rank &amp; Save Mock Analytics
          </p>
        </div>

        {/* Key Benefits */}
        <div className="mt-5 space-y-2 rounded-2xl border border-indigo-100/80 bg-[#F8FAFC] p-3.5 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
            <span>Save mock scores, percentile &amp; accuracy across devices</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
            <span>Sync your attempted tests &amp; PYQ scorecards anytime</span>
          </div>
        </div>

        {authError && (
          <div className="mt-4 flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-800">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" aria-hidden="true" />
            <span>{authError}</span>
          </div>
        )}

        {!isFirebaseReady && (
          <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
            <span>
              Firebase keys are not configured yet. You can continue as Guest to practice all free mocks immediately.
            </span>
          </div>
        )}

        {/* Prominent Continue with Google CTA */}
        <div className="mt-6 space-y-3">
          <button
            type="button"
            disabled={isSigningIn || !isFirebaseReady}
            onClick={onGoogleSignIn}
            className="flex min-h-[48px] w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-[#0F172A] shadow-xs transition-all hover:border-[#0F172A] hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-55"
          >
            {/* Official Google G Icon */}
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
              />
            </svg>
            <span>{isSigningIn ? 'Signing in...' : 'Continue with Google'}</span>
          </button>

          <button
            type="button"
            disabled={isSigningIn}
            onClick={onContinueAsGuest}
            className="flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-xl bg-[#F59E0B]/15 px-4 py-2.5 text-sm font-bold text-[#0F172A] transition-colors hover:bg-[#F59E0B]/25"
          >
            <span>Continue as Guest</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-4 text-center text-[11px] text-slate-400">
          Built for Dedicated SSC Aspirants
        </p>
      </div>
    </div>
  );
}

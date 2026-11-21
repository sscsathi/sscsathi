import { useEffect, useRef, useState } from 'react';
import { User } from 'firebase/auth';
import {
  Bell,
  CheckCircle2,
  ChevronDown,
  LogIn,
  LogOut,
  ShieldCheck,
  X,
} from 'lucide-react';
import { getUserFirstName } from '../services/userSync';

interface NavbarProps {
  user: User | null;
  isFollowing: boolean;
  onToggleFollow: () => void;
  onOpenLoginModal: () => void;
  onLogout: () => void;
  onNavigateHome: () => void;
  onQuickFilter?: (series: 'live' | 'pyq') => void;
}

const NOTIF_READ_STORAGE_KEY = 'ssc_sathi_notifs_read_v1';
const TELEGRAM_CHANNEL_URL = 'https://t.me/ssc_sathi';

function TelegramPlaneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M21.42 4.18c.32-1.18-.44-1.69-1.29-1.36L2.95 9.48c-1.02.4-1.01.96-.18 1.22l4.41 1.38 10.22-6.44c.48-.3.92-.13.56.19l-8.27 7.46-.31 4.59c.45 0 .66-.21.91-.45l2.17-2.11 4.51 3.33c.83.46 1.43.22 1.64-.76l2.81-13.71Z"
        fill="currentColor"
      />
    </svg>
  );
}

interface UpdateItem {
  id: string;
  title: string;
  detail: string;
  time: string;
  actionSeries?: 'live' | 'pyq';
}

const EXAM_UPDATES: UpdateItem[] = [
  {
    id: 'upd-1',
    title: 'All-India Live Mock Open',
    detail: 'SSC CGL Tier-1 Live Mock (+2.0 / -0.50 Latest Pattern) is ready to attempt.',
    time: 'Today',
    actionSeries: 'live',
  },
  {
    id: 'upd-2',
    title: '2026 PYQ Series Updated',
    detail: 'New 30 Sept Shift 2 Math bilingual PYQ mock test added under PYQ Practice.',
    time: 'Today',
    actionSeries: 'pyq',
  },
];

export function Navbar({
  user,
  isFollowing,
  onToggleFollow,
  onOpenLoginModal,
  onLogout,
  onNavigateHome,
  onQuickFilter,
}: NavbarProps) {
  const [avatarLoadError, setAvatarLoadError] = useState<boolean>(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
  const [isNotifOpen, setIsNotifOpen] = useState<boolean>(false);
  const [hasReadNotifs, setHasReadNotifs] = useState<boolean>(() => {
    try {
      return localStorage.getItem(NOTIF_READ_STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });

  const profileRef = useRef<HTMLDivElement | null>(null);
  const notifRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setAvatarLoadError(false);
  }, [user?.photoURL]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileMenuOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const markNotificationsRead = () => {
    setHasReadNotifs(true);
    try {
      localStorage.setItem(NOTIF_READ_STORAGE_KEY, '1');
    } catch {
      // Ignore storage errors
    }
  };

  const firstName = user ? getUserFirstName(user.displayName) : 'Aspirant';
  const fullName = user?.displayName?.trim() || 'Aspirant';

  const initials =
    fullName
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('') || 'A';

  const hasPhoto = Boolean(user?.photoURL && !avatarLoadError);

  return (
    <header className="sticky top-0 z-30 border-b border-[#E2E8F0] bg-[#FFFFFF]/95 backdrop-blur-md shadow-[0_2px_14px_-4px_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* Left: Google Avatar (with Profile Menu) + Read-Only Greeting + Brand Badge */}
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <div className="relative shrink-0" ref={profileRef}>
            <button
              type="button"
              onClick={() => {
                setIsProfileMenuOpen((v) => !v);
                setIsNotifOpen(false);
              }}
              aria-label="Open profile menu"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#0F172A] text-xs font-extrabold text-[#F59E0B] ring-2 ring-white shadow-xs transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
            >
              {hasPhoto ? (
                <img
                  src={user!.photoURL!}
                  alt={fullName}
                  referrerPolicy="no-referrer"
                  onError={() => setAvatarLoadError(true)}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <span>{initials}</span>
              )}
              <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#0F172A] ring-1 ring-indigo-200">
                <ChevronDown className="h-2.5 w-2.5" aria-hidden="true" />
              </span>
            </button>

            {isProfileMenuOpen && (
              <div
                role="dialog"
                aria-label="Account profile menu"
                className="absolute left-0 mt-2 w-72 rounded-2xl border border-indigo-100 bg-white p-4 shadow-xl z-50"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0F172A] text-sm font-extrabold text-[#F59E0B] ring-1 ring-indigo-200">
                    {hasPhoto ? (
                      <img
                        src={user!.photoURL!}
                        alt={fullName}
                        referrerPolicy="no-referrer"
                        onError={() => setAvatarLoadError(true)}
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <span>{initials}</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-extrabold text-[#0F172A]">
                      {fullName}
                    </div>
                    <div className="truncate text-xs text-slate-500">
                      {user?.email || 'Guest Practice Session'}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold">
                  <ShieldCheck
                    className={`h-3.5 w-3.5 shrink-0 ${
                      user ? 'text-emerald-600' : 'text-amber-600'
                    }`}
                    aria-hidden="true"
                  />
                  <span className={user ? 'text-emerald-700' : 'text-amber-800'}>
                    {user
                      ? 'Signed in with Google Account'
                      : 'Guest Mode (Saved locally on this device)'}
                  </span>
                </div>

                <div className="mt-3 border-t border-slate-100 pt-3">
                  {user ? (
                    <button
                      type="button"
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        onLogout();
                      }}
                      className="flex min-h-[40px] w-full items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-700 hover:bg-rose-100"
                    >
                      <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Logout</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        onOpenLoginModal();
                      }}
                      className="flex min-h-[40px] w-full items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-3 py-2 text-xs font-bold text-white hover:bg-indigo-950"
                    >
                      <LogIn className="h-3.5 w-3.5 text-[#F59E0B]" aria-hidden="true" />
                      <span>Continue with Google</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="truncate max-w-[140px] sm:max-w-[220px] text-sm sm:text-base font-extrabold text-[#0F172A]">
                Hi, {firstName}
              </span>

              {!user && (
                <button
                  type="button"
                  onClick={onOpenLoginModal}
                  className="inline-flex items-center gap-1 rounded-full bg-[#0F172A] px-2.5 py-0.5 text-[11px] font-bold text-[#F59E0B] shadow-2xs transition-colors hover:bg-indigo-950 whitespace-nowrap shrink-0"
                >
                  <LogIn className="h-3 w-3 shrink-0" aria-hidden="true" />
                  <span>Sign in</span>
                </button>
              )}
            </div>

            {/* Compact SSC Sathi Brand Badge */}
            <button
              type="button"
              onClick={onNavigateHome}
              className="mt-0.5 inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F4F6FB] px-2.5 py-0.5 text-[11px] font-bold text-[#1E3A8A] transition-colors hover:border-indigo-200 hover:bg-indigo-50/70"
            >
              <img
                src="/assets/aistudio/1795032296907_b1ef824a.png"
                alt="SSC Sathi logo"
                className="h-4 w-4 rounded-full object-cover"
              />
              <span>SSC Sathi</span>
            </button>
          </div>
        </div>

        {/* Right: Official Telegram Follow Pill + Notification Bell */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <a
            href={TELEGRAM_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (!isFollowing) onToggleFollow();
            }}
            aria-label="Follow SSC Sathi on Telegram"
            className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full bg-[#0088cc] px-4 py-1.5 text-xs font-bold text-white shadow-[0_6px_16px_-4px_rgba(0,136,204,0.48)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0077b5] hover:shadow-[0_8px_20px_-4px_rgba(0,136,204,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0088cc] whitespace-nowrap shrink-0"
          >
            <TelegramPlaneIcon className="h-3.5 w-3.5 shrink-0 text-white" />
            <span>Follow</span>
          </a>

          {/* Notification Bell + Updates Popup */}
          <div className="relative" ref={notifRef}>
            <button
              type="button"
              onClick={() => {
                const nextOpen = !isNotifOpen;
                setIsNotifOpen(nextOpen);
                setIsProfileMenuOpen(false);
                if (nextOpen) markNotificationsRead();
              }}
              aria-label="Exam updates notifications"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#0F172A] shadow-xs transition-all hover:border-slate-300 hover:bg-[#F4F6FB]"
            >
              <Bell className="h-4.5 w-4.5" aria-hidden="true" />
              {!hasReadNotifs && (
                <span
                  aria-label="Unread updates"
                  className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white"
                />
              )}
            </button>

            {isNotifOpen && (
              <div
                role="dialog"
                aria-label="Latest Exam Updates"
                className="absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl z-50"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="text-sm font-bold text-[#0F172A]">
                    Updates &amp; Alerts
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsNotifOpen(false)}
                    aria-label="Close notifications"
                    className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-2.5 space-y-2.5">
                  {EXAM_UPDATES.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-2.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#0F172A]">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400">
                          {item.time}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600 leading-snug">
                        {item.detail}
                      </p>
                      {item.actionSeries && onQuickFilter && (
                        <button
                          type="button"
                          onClick={() => {
                            onQuickFilter(item.actionSeries!);
                            setIsNotifOpen(false);
                          }}
                          className="mt-1.5 text-[11px] font-bold text-indigo-700 hover:underline"
                        >
                          Open Now →
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    All caught up
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsNotifOpen(false)}
                    className="font-semibold text-[#0F172A] hover:underline"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

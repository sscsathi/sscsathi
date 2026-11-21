interface IconProps {
  className?: string;
}

/** 1a. Colorful 3D Dartboard / Target icon for "TODAY'S TARGET" */
export function TargetDartboard3DIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="td-outer" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6B81" />
          <stop offset="65%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#9F1239" />
        </radialGradient>
        <radialGradient id="td-white" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </radialGradient>
        <linearGradient id="td-dart" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="td-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <ellipse cx="22" cy="43" rx="14" ry="3" fill="#0F172A" fillOpacity="0.12" />
      <circle cx="22" cy="25" r="18" fill="url(#td-outer)" />
      <circle cx="22" cy="25" r="13.2" fill="url(#td-white)" />
      <circle cx="22" cy="25" r="8.6" fill="url(#td-outer)" />
      <circle cx="22" cy="25" r="4.2" fill="url(#td-gold)" />
      {/* Glossy top-left highlight */}
      <path
        d="M11 16C14 11.5 19.5 9.5 25 10.5"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
      {/* 3D Dart hitting bullseye */}
      <path d="M22.5 24.5L38 9" stroke="#1E293B" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M22.5 24.5L38 9" stroke="url(#td-gold)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 13L35 5.5L40 8L37 13Z" fill="url(#td-dart)" />
      <path d="M35 12L42.5 13L40 8L35 11Z" fill="#0EA5E9" />
      <circle cx="22" cy="25" r="2" fill="#FFFBEB" />
    </svg>
  );
}

/** 1b. Glowing Purple Target-Compass Badge for "START PRACTICE" */
export function StartPracticeCompass3DIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="sp-bg" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="55%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#4C1D95" />
        </radialGradient>
        <linearGradient id="sp-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="#A855F7" fillOpacity="0.18" />
      <circle cx="24" cy="24" r="17.5" fill="url(#sp-bg)" />
      <circle cx="24" cy="24" r="14" stroke="#E9D5FF" strokeOpacity="0.45" strokeWidth="1.5" />
      {/* Cardinal ticks */}
      <path
        d="M24 9V12M24 36V39M9 24H12M36 24H39"
        stroke="#FDE68A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Compass Needle */}
      <path d="M32 16L26.2 26.2L21.8 21.8L32 16Z" fill="url(#sp-gold)" />
      <path d="M16 32L21.8 21.8L26.2 26.2L16 32Z" fill="#F8FAFC" />
      <circle cx="24" cy="24" r="2.6" fill="#0F172A" stroke="#FDE68A" strokeWidth="1.4" />
      {/* Glossy arc */}
      <path
        d="M14 15.5C16.8 12.2 21 10.5 25.5 11"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
    </svg>
  );
}

/** 1c. Red-and-Gold 3D Stopwatch Icon for "QUICK ACCESS" */
export function QuickAccessStopwatch3DIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="qa-red" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#FB7185" />
          <stop offset="55%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#9F1239" />
        </linearGradient>
        <linearGradient id="qa-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>
      {/* Top crown & side pusher */}
      <rect x="20" y="5" width="8" height="4" rx="2" fill="url(#qa-gold)" />
      <rect x="22.5" y="8.5" width="3" height="4" fill="#B45309" />
      <path d="M35.5 13L39 16.5" stroke="url(#qa-gold)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Outer metallic gold rim + glossy red body */}
      <circle cx="24" cy="27" r="16.5" fill="url(#qa-gold)" />
      <circle cx="24" cy="27" r="14.2" fill="url(#qa-red)" />
      <circle cx="24" cy="27" r="11" fill="#FFFBEB" />
      {/* Speed sector */}
      <path d="M24 27V18.5A8.5 8.5 0 0 1 31.8 23.5L24 27Z" fill="#FDE68A" />
      {/* Hands */}
      <path d="M24 27V20" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 27L29.5 24" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="27" r="2.2" fill="#0F172A" />
      {/* Specular shine */}
      <path
        d="M15 20.5C17 17.8 20 16.5 23 16.3"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

/** 1d. Glossy Purple Question-Mark Bubble Icon for "TODAY'S QUIZ" */
export function TodaysQuizBubble3DIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="tq-bubble" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#D8B4FE" />
          <stop offset="45%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#581C87" />
        </radialGradient>
        <linearGradient id="tq-mark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
      </defs>
      <path
        d="M24 7C13.5 7 6 14 6 22.8C6 27.6 8.3 31.9 12 34.8L9.5 41.5L17.4 37.9C19.5 38.4 21.7 38.7 24 38.7C34.5 38.7 42 31.7 42 22.8C42 14 34.5 7 24 7Z"
        fill="url(#tq-bubble)"
      />
      {/* Glossy rim reflection */}
      <path
        d="M12.5 16.5C15.2 12.6 20 10.6 25.2 11"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
      {/* Bold Question Mark */}
      <path
        d="M19.8 19.2C19.8 16.6 21.7 14.8 24.3 14.8C26.9 14.8 28.7 16.4 28.7 18.7C28.7 20.6 27.5 21.8 25.8 22.7C24.5 23.4 23.9 24.2 23.9 25.6V26.3"
        stroke="url(#tq-mark)"
        strokeWidth="3.3"
        strokeLinecap="round"
      />
      <circle cx="23.9" cy="31.2" r="2.1" fill="#FDE68A" />
    </svg>
  );
}

/** 2a. Bright Quiz Notepad Mini 3D Icon for "Daily Quiz" */
export function DailyQuizNotepad3DIcon({ className = 'h-9 w-9' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="dq-pad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
        <linearGradient id="dq-head" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="dq-pencil" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      {/* Back shadow card */}
      <rect x="9" y="10" width="26" height="33" rx="6" fill="#0F172A" fillOpacity="0.1" />
      {/* Notepad body */}
      <rect x="7" y="8" width="26" height="33" rx="6" fill="url(#dq-pad)" stroke="#F59E0B" strokeWidth="1.4" />
      <path d="M7 14C7 10.686 9.686 8 13 8H27C30.314 8 33 10.686 33 14V16H7V14Z" fill="url(#dq-head)" />
      {/* Spiral rings */}
      <rect x="12" y="5" width="3" height="6.5" rx="1.5" fill="#1E293B" />
      <rect x="18.5" y="5" width="3" height="6.5" rx="1.5" fill="#1E293B" />
      <rect x="25" y="5" width="3" height="6.5" rx="1.5" fill="#1E293B" />
      {/* Quiz check rows */}
      <path d="M11.5 22L13.2 23.7L16.2 20.5" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="19" y="21" width="10" height="2.4" rx="1.2" fill="#92400E" fillOpacity="0.55" />
      <path d="M11.5 29L13.2 30.7L16.2 27.5" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="19" y="28" width="8.5" height="2.4" rx="1.2" fill="#92400E" fillOpacity="0.55" />
      <rect x="11.5" y="34.5" width="12" height="2.4" rx="1.2" fill="#D97706" fillOpacity="0.45" />
      {/* Floating glossy blue pencil */}
      <g transform="rotate(32 35 28)">
        <rect x="31" y="17" width="6.5" height="19" rx="2" fill="url(#dq-pencil)" />
        <rect x="31" y="17" width="6.5" height="4" rx="1.5" fill="#F43F5E" />
        <path d="M31 36L34.25 41.5L37.5 36H31Z" fill="#FDE68A" />
        <path d="M33.2 39.7L34.25 41.5L35.3 39.7H33.2Z" fill="#0F172A" />
      </g>
    </svg>
  );
}

/** 2b. Vibrant Newspaper + Globe Mini 3D Icon for "Attempt 1 Sectional Mock" */
export function SectionalNewsGlobe3DIcon({ className = 'h-9 w-9' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="sg-globe" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="60%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </radialGradient>
        <linearGradient id="sg-paper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0E7FF" />
        </linearGradient>
      </defs>
      {/* Back glossy globe */}
      <circle cx="29" cy="20" r="13" fill="url(#sg-globe)" />
      {/* Emerald continents */}
      <path
        d="M23 14.5C25.5 13 29 13.8 30.2 16.5C31.2 18.8 28.4 20 27 21.8C25.6 23.6 22.8 22.4 21.6 19.6C20.8 17.7 21.4 15.5 23 14.5Z"
        fill="#34D399"
      />
      <path
        d="M33.5 19.2C36 19.6 38.5 21.8 37.8 24.5C37 27.2 33.4 28.5 31.8 26.2C30.8 24.7 31.2 18.9 33.5 19.2Z"
        fill="#10B981"
      />
      <ellipse cx="29" cy="20" rx="13" ry="5" stroke="#BFDBFE" strokeOpacity="0.45" strokeWidth="1.2" />
      <path d="M23 10.5C26 9 30 9 33 10.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.6" />
      {/* Front Newspaper / Mock Sheet */}
      <rect x="6" y="21" width="24" height="20" rx="4.5" fill="url(#sg-paper)" stroke="#6366F1" strokeWidth="1.5" />
      <rect x="10" y="25" width="9" height="6" rx="1.5" fill="#F59E0B" />
      <rect x="21" y="25.5" width="6" height="2" rx="1" fill="#1E293B" />
      <rect x="21" y="29" width="6" height="2" rx="1" fill="#64748B" />
      <rect x="10" y="33.5" width="17" height="2" rx="1" fill="#475569" />
      <rect x="10" y="37" width="12" height="2" rx="1" fill="#94A3B8" />
    </svg>
  );
}

/** 3a. Live Test Illustration: 3D Laptop with Blue Timer & Analytics */
export function LiveTestLaptop3D({ className = 'h-16 w-20' }: IconProps) {
  return (
    <svg viewBox="0 0 96 76" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lt-screen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="lt-display" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
        <linearGradient id="lt-base" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="50%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
        <radialGradient id="lt-timer" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="65%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </radialGradient>
      </defs>
      {/* Ambient shadow */}
      <ellipse cx="48" cy="68" rx="38" ry="5" fill="#0F172A" fillOpacity="0.12" />
      {/* Laptop Lid */}
      <rect x="15" y="10" width="66" height="44" rx="7" fill="url(#lt-screen)" />
      <rect x="19" y="14" width="58" height="36" rx="4" fill="url(#lt-display)" />
      {/* Screen UI lines on left */}
      <rect x="23" y="19" width="22" height="4" rx="2" fill="#1E3A8A" />
      <rect x="23" y="26" width="18" height="3" rx="1.5" fill="#93C5FD" />
      <rect x="23" y="32" width="21" height="3" rx="1.5" fill="#93C5FD" />
      <rect x="23" y="38" width="14" height="5" rx="2.5" fill="#F59E0B" />
      {/* Glossy Blue Timer Dial overlapping right side of screen */}
      <circle cx="62" cy="32" r="14" fill="url(#lt-timer)" />
      <circle cx="62" cy="32" r="10.2" fill="#FFFFFF" />
      <path d="M62 32V24.5A7.5 7.5 0 0 1 68.8 29L62 32Z" fill="#93C5FD" />
      <path d="M62 32V25.5" stroke="#1E3A8A" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M62 32L66.8 29.5" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      <circle cx="62" cy="32" r="2" fill="#0F172A" />
      {/* Timer top crown */}
      <rect x="59" y="15.5" width="6" height="2.8" rx="1.4" fill="#3B82F6" />
      {/* Laptop Deck */}
      <path d="M8 55H88L83 64C82.3 65.2 81 66 79.6 66H16.4C15 66 13.7 65.2 13 64L8 55Z" fill="url(#lt-base)" />
      <rect x="38" y="57.5" width="20" height="3" rx="1.5" fill="#475569" fillOpacity="0.45" />
    </svg>
  );
}

/** 3b. Free Mocks Illustration: 3D Smartphone with Open Glowing Book */
export function FreeMocksPhoneBook3D({ className = 'h-16 w-20' }: IconProps) {
  return (
    <svg viewBox="0 0 96 76" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="fm-phone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#312E81" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="fm-screen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="100%" stopColor="#C7D2FE" />
        </linearGradient>
        <radialGradient id="fm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE047" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fm-pageL" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
        <linearGradient id="fm-pageR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <ellipse cx="48" cy="69" rx="30" ry="4.5" fill="#0F172A" fillOpacity="0.12" />
      {/* Smartphone Body */}
      <rect x="27" y="7" width="42" height="59" rx="8.5" fill="url(#fm-phone)" />
      <rect x="30.5" y="11" width="35" height="50" rx="5.5" fill="url(#fm-screen)" />
      <rect x="42" y="13" width="12" height="2.4" rx="1.2" fill="#1E1B4B" fillOpacity="0.5" />
      {/* Warm Golden Glow behind book */}
      <circle cx="48" cy="39" r="21" fill="url(#fm-glow)" />
      {/* Open Glowing Book popping out of phone */}
      <path
        d="M48 33C42 29 31 28.5 21 31.5V51.5C31 48.8 42 49.5 48 53.5V33Z"
        fill="url(#fm-pageL)"
        stroke="#D97706"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M48 33C54 29 65 28.5 75 31.5V51.5C65 48.8 54 49.5 48 53.5V33Z"
        fill="url(#fm-pageR)"
        stroke="#B45309"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Book cover base */}
      <path d="M19 52.5C30 49.5 41 50.5 48 55C55 50.5 66 49.5 77 52.5" stroke="#1E3A8A" strokeWidth="3.2" strokeLinecap="round" />
      {/* Crisp book page lines */}
      <path d="M26 37H42M26 42H40" stroke="#B45309" strokeOpacity="0.55" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M54 37H70M54 42H68" stroke="#78350F" strokeOpacity="0.55" strokeWidth="1.8" strokeLinecap="round" />
      {/* Radiant light rays */}
      <path d="M48 19V24M39 22L42 25.5M57 22L54 25.5" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/** 3c. PYQ Series Illustration: Golden Exam Clipboard with Stopwatch */
export function PyqClipboardStopwatch3D({ className = 'h-16 w-20' }: IconProps) {
  return (
    <svg viewBox="0 0 96 76" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="pyq-board" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="55%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="pyq-watch" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>
      </defs>
      <ellipse cx="48" cy="69" rx="32" ry="4.5" fill="#0F172A" fillOpacity="0.12" />
      {/* Golden Clipboard */}
      <rect x="21" y="12" width="44" height="54" rx="7" fill="url(#pyq-board)" />
      {/* Metallic Top Clip */}
      <rect x="34" y="7" width="18" height="9" rx="3.5" fill="#1E293B" />
      <circle cx="43" cy="11.5" r="2" fill="#FDE68A" />
      {/* White Exam Sheet */}
      <rect x="26" y="19" width="34" height="42" rx="4" fill="#FFFFFF" />
      {/* Question Rows & Green Checkmarks */}
      <path d="M30 27L32 29L35.5 25" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="38.5" y="26" width="17" height="2.6" rx="1.3" fill="#CBD5E1" />
      <path d="M30 35L32 37L35.5 33" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="38.5" y="34" width="15" height="2.6" rx="1.3" fill="#CBD5E1" />
      <path d="M30 43L32 45L35.5 41" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="38.5" y="42" width="13" height="2.6" rx="1.3" fill="#CBD5E1" />
      <rect x="30" y="50" width="22" height="3" rx="1.5" fill="#FDE68A" />
      {/* Overlapping Glossy Stopwatch */}
      <rect x="64" y="31" width="7" height="3.2" rx="1.6" fill="#D97706" />
      <circle cx="67.5" cy="49" r="15.5" fill="#F59E0B" />
      <circle cx="67.5" cy="49" r="13" fill="url(#pyq-watch)" />
      <circle cx="67.5" cy="49" r="9.8" fill="#FFFBEB" />
      <path d="M67.5 49V42.5" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M67.5 49L72.5 46.5" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
      <circle cx="67.5" cy="49" r="2" fill="#0F172A" />
    </svg>
  );
}

/** 4a. SSC CGL Circular Navy/Gold Shield Emblem */
export function SscCglBadge3D({ className = 'h-12 w-12' }: IconProps) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="cgl-bg" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#0F172A" />
        </radialGradient>
        <linearGradient id="cgl-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r="26" fill="url(#cgl-gold)" />
      <circle cx="28" cy="28" r="23.2" fill="url(#cgl-bg)" />
      {/* Shield */}
      <path
        d="M28 11L40 16V26.5C40 34.2 34.8 40.8 28 43.5C21.2 40.8 16 34.2 16 26.5V16L28 11Z"
        fill="#1E293B"
        stroke="url(#cgl-gold)"
        strokeWidth="2.2"
      />
      {/* Star Crest */}
      <path
        d="M28 17.5L30.2 22L35.2 22.7L31.6 26.1L32.5 31L28 28.6L23.5 31L24.4 26.1L20.8 22.7L25.8 22L28 17.5Z"
        fill="url(#cgl-gold)"
      />
      {/* Bottom ribbon bar */}
      <rect x="20" y="33.5" width="16" height="3.2" rx="1.6" fill="#F59E0B" fillOpacity="0.85" />
    </svg>
  );
}

/** 4b. SSC CHSL Circular Royal Blue/Teal Emblem */
export function SscChslBadge3D({ className = 'h-12 w-12' }: IconProps) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="chsl-bg" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </radialGradient>
        <linearGradient id="chsl-teal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5EEAD4" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r="26" fill="url(#chsl-teal)" />
      <circle cx="28" cy="28" r="23.2" fill="url(#chsl-bg)" />
      {/* Open Book + Graduation Cap */}
      <path d="M28 14L39 19.2L28 24.4L17 19.2L28 14Z" fill="#5EEAD4" />
      <path d="M22 22.5V26.2C22 27.6 24.7 28.8 28 28.8C31.3 28.8 34 27.6 34 26.2V22.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      {/* Open Book Pages */}
      <path d="M28 32.5C24.5 30.5 19.5 30.5 16 32V40.5C19.5 39 24.5 39 28 41V32.5Z" fill="#FFFFFF" />
      <path d="M28 32.5C31.5 30.5 36.5 30.5 40 32V40.5C36.5 39 31.5 39 28 41V32.5Z" fill="#99F6E4" />
    </svg>
  );
}

/** 4c. RRB NTPC Circular Crimson/Gold Express Emblem */
export function RrbNtpcBadge3D({ className = 'h-12 w-12' }: IconProps) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="rrb-bg" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#881337" />
        </radialGradient>
        <linearGradient id="rrb-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r="26" fill="url(#rrb-gold)" />
      <circle cx="28" cy="28" r="23.2" fill="url(#rrb-bg)" />
      {/* High-Speed Express Locomotive Front */}
      <rect x="18" y="14" width="20" height="22" rx="6" fill="#FFFFFF" />
      <rect x="21" y="18" width="14" height="8" rx="2.5" fill="#1E293B" />
      {/* Headlights */}
      <circle cx="22.5" cy="31" r="2.2" fill="#F59E0B" />
      <circle cx="33.5" cy="31" r="2.2" fill="#F59E0B" />
      {/* Gold Grille */}
      <rect x="26" y="30" width="4" height="2" rx="1" fill="#E11D48" />
      {/* Express Tracks */}
      <path d="M22 37L17 44M34 37L39 44" stroke="url(#rrb-gold)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M20 40.5H36" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** 4d. All Exams Clean Circular "+" Emblem */
export function AllExamsPlusBadge3D({ className = 'h-12 w-12' }: IconProps) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ae-bg" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="100%" stopColor="#C7D2FE" />
        </radialGradient>
      </defs>
      <circle cx="28" cy="28" r="26" fill="#E0E7FF" />
      <circle cx="28" cy="28" r="22.5" fill="url(#ae-bg)" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M28 18V38M18 28H38" stroke="#1E1B4B" strokeWidth="3.8" strokeLinecap="round" />
    </svg>
  );
}

/** 4e. Attempted Tests Glossy Emerald & Gold Checkmark / History Emblem */
export function AttemptedTestsBadge3D({ className = 'h-12 w-12' }: IconProps) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="att-bg" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </radialGradient>
        <linearGradient id="att-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r="26" fill="url(#att-gold)" />
      <circle cx="28" cy="28" r="23.2" fill="url(#att-bg)" />
      {/* Subtle History Progress Arc */}
      <path
        d="M17.5 22.5A12 12 0 1 1 16.4 31"
        stroke="#A7F3D0"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M14.5 21.5L17.6 23.2L19.4 20"
        stroke="#A7F3D0"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Crisp White Checkmark */}
      <path
        d="M22.5 28.5L26.5 32.5L34.5 24"
        stroke="#FFFFFF"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

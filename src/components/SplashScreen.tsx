import { motion } from 'motion/react';

export function SplashScreen() {
  return (
    <motion.div
      key="ssc-sathi-splash"
      role="status"
      aria-label="Loading SSC Sathi"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] px-6 select-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center"
      >
        {/* Original SSC Sathi Logo with Subtle Ambient Glow */}
        <div className="relative flex items-center justify-center">
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: [0.35, 0.6, 0.35],
              scale: [0.96, 1.08, 0.96],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute -inset-4 rounded-full bg-[#22D3EE]/25 blur-2xl"
          />

          <div className="relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full border border-cyan-400/40 bg-white p-1 shadow-[0_0_42px_-6px_rgba(34,211,238,0.5)]">
            <img
              src="/assets/aistudio/1795032296907_b1ef824a.png"
              alt="SSC Sathi logo"
              referrerPolicy="no-referrer"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Bold Brand Title: SSC in bright cyan-blue, Sathi in white */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight"
        >
          <span className="text-[#22D3EE]">SSC</span>{' '}
          <span className="text-white">Sathi</span>
        </motion.h1>

        {/* Clean Subtitle Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-slate-400"
        >
          Smart Practice for Smart Selection
        </motion.p>
      </motion.div>

      {/* Sleek Minimal Bottom Progress Bar */}
      <div className="absolute bottom-10 left-1/2 w-44 sm:w-52 -translate-x-1/2">
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.75, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left' }}
            className="h-full w-full rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#22D3EE] to-white"
          />
        </div>
      </div>
    </motion.div>
  );
}

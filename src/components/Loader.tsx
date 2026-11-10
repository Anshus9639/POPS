"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { markWelcomeDone } from "@/lib/welcome";

const SESSION_KEY = "sush-welcome-seen";

/**
 * Short, elegant welcome screen. Shown once per browser session
 * (so navigating back to the page doesn't replay it) and skipped
 * automatically if the visitor prefers reduced motion.
 */
export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* storage can be unavailable — just show the loader */
    }
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (seen || reduce) {
      markWelcomeDone();
      const t = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(t);
    }

    // Let the hero start animating while the loader is still fading out
    const heroTimer = window.setTimeout(markWelcomeDone, 650);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
    }, 1250);
    return () => {
      window.clearTimeout(heroTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="gradient-wash absolute inset-0 opacity-70" />
          <div className="relative flex flex-col items-center">
            <div className="relative grid h-28 w-28 place-items-center">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full -rotate-90"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="var(--color-blush-200)"
                  strokeWidth="1.5"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="var(--color-rose-500)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
              <motion.span
                className="font-display text-4xl italic text-rose-600"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {site.nickname.charAt(0)}
              </motion.span>
            </div>
            <motion.p
              className="mt-6 font-display text-2xl text-ink"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hello, welcome
            </motion.p>
            <motion.p
              className="mt-1 text-xs uppercase tracking-[0.3em] text-mauve-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {site.name}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

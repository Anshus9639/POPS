"use client";

import { motion } from "framer-motion";
import { ArrowDown, GraduationCap, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import { site } from "@/content/site";
import { useWelcomeDone } from "@/lib/welcome";

const PETALS = [
  { left: "8%", delay: "0s", size: 14, dur: "17s" },
  { left: "22%", delay: "5s", size: 10, dur: "21s" },
  { left: "47%", delay: "9s", size: 12, dur: "19s" },
  { left: "68%", delay: "2s", size: 16, dur: "23s" },
  { left: "86%", delay: "7s", size: 11, dur: "18s" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ready = useWelcomeDone();
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-20 pt-28 sm:pt-36 lg:pb-28"
    >
      {/* Animated gradient + soft blobs */}
      <div aria-hidden="true" className="gradient-wash absolute inset-0 -z-20" />
      <div
        aria-hidden="true"
        className="decor-motion absolute -left-24 top-24 -z-10 h-80 w-80 animate-drift rounded-full bg-blush-300/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="decor-motion absolute -right-20 bottom-10 -z-10 h-96 w-96 animate-drift-slow rounded-full bg-champagne-200/70 blur-3xl"
      />

      {/* Drifting petals (decorative, hidden for reduced motion) */}
      <div
        aria-hidden="true"
        className="decor-motion pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {PETALS.map((p, i) => (
          <span
            key={i}
            className="absolute top-0 block animate-petal rounded-[60%_40%_60%_40%] bg-gradient-to-br from-blush-200 to-pastel-400 opacity-0"
            style={{
              left: p.left,
              width: p.size,
              height: p.size * 1.3,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, delay: 0, ease }}
            className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-rose-600"
          >
            <span aria-hidden="true" className="h-px w-10 bg-rose-400" />
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="text-balance text-[clamp(2.5rem,9vw,4.5rem)] font-medium leading-[1.02] text-ink sm:text-7xl lg:text-[5.4rem]"
          >
            {site.firstName}{" "}
            <span className="font-normal italic text-rose-600">
              {site.name.slice(site.firstName.length).trim()}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full border border-blush-300 bg-white/80 px-4 py-1.5 text-sm font-semibold tracking-wide text-rose-700 shadow-sm">
              aka {site.nickname}
            </span>
            <span className="text-base font-medium text-mauve-700 sm:text-lg">
              {site.headline}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {site.heroIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full bg-rose-600 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-700 hover:shadow-lift"
            >
              Explore My World
              <ArrowDown
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-blush-300 bg-white/80 px-7 py-3.5 text-base font-semibold text-rose-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-400 hover:bg-white hover:shadow-soft"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: ready ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center gap-2 text-sm text-mauve-700"
          >
            <MapPin className="h-4 w-4 text-rose-500" aria-hidden="true" />
            {site.location} · from {site.origin}
          </motion.p>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={
            ready
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.96, y: 24 }
          }
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative order-first mx-auto w-full max-w-[16.5rem] sm:max-w-md lg:order-last lg:max-w-none"
        >
          {/* offset blush frames */}
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-4 h-full w-full rounded-t-[999px] rounded-b-[2rem] border border-blush-300"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 h-3/4 w-3/4 rounded-[2rem] bg-gradient-to-br from-blush-200 to-champagne-200"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-[6px] border-white bg-blush-100 shadow-lift">
            <Image
              src={site.hero.src}
              alt={site.hero.alt}
              width={site.hero.width}
              height={site.hero.height}
              preload
              sizes="(min-width: 1024px) 460px, (min-width: 640px) 448px, 90vw"
              className="h-full w-full object-cover object-[50%_60%]"
            />
          </div>

          {/* floating info chips */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-[58%] hidden items-center gap-3 rounded-2xl border border-blush-200 bg-white/95 px-4 py-3 shadow-card sm:flex lg:-left-10"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-blush-100 text-rose-600">
              <Briefcase className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-[0.7rem] uppercase tracking-widest text-mauve-500">
                Currently
              </span>
              <span className="block text-sm font-semibold text-ink">
                HR Executive
              </span>
            </span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-10 hidden items-center gap-3 rounded-2xl border border-blush-200 bg-white/95 px-4 py-3 shadow-card sm:flex lg:-right-8"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-champagne-200 text-champagne-600">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-[0.7rem] uppercase tracking-widest text-mauve-500">
                Education
              </span>
              <span className="block text-sm font-semibold text-ink">
                MBA in HR
              </span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

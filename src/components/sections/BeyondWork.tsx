"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Cat,
  Flame,
  MapPin,
  Palette,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { site } from "@/content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  palette: Palette,
  cat: Cat,
  chatpati: Flame,
  roots: MapPin,
};

export function BeyondWork() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  return (
    <section
      id="beyond"
      className="relative overflow-hidden bg-gradient-to-b from-blush-50 to-cream py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Beyond work"
          title="The things that make me, me"
          accent="me"
          description="Did you know? Tap a card to find out."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.beyondWork.map((item, i) => {
            const Icon = icons[item.icon] ?? Sparkles;
            const open = !!revealed[item.id];
            return (
              <Reveal as="li" key={item.id} delay={i * 0.08}>
                <button
                  type="button"
                  aria-pressed={open}
                  onClick={() =>
                    setRevealed((r) => ({ ...r, [item.id]: !r[item.id] }))
                  }
                  className={`group relative flex h-56 w-full flex-col items-center justify-center overflow-hidden rounded-3xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 ${
                    open
                      ? "border-rose-400/60 bg-white shadow-lift"
                      : "border-blush-200 bg-white shadow-card hover:shadow-soft"
                  }`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {open ? (
                      <motion.span
                        key="back"
                        initial={{ opacity: 0, rotateX: -60 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        exit={{ opacity: 0, rotateX: 60 }}
                        transition={{ duration: 0.28 }}
                        className="block"
                      >
                        <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-rose-600">
                          Did you know?
                        </span>
                        <span className="mt-3 block font-display text-lg leading-snug text-ink">
                          {item.fact}
                        </span>
                      </motion.span>
                    ) : (
                      <motion.span
                        key="front"
                        initial={{ opacity: 0, rotateX: -60 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        exit={{ opacity: 0, rotateX: 60 }}
                        transition={{ duration: 0.28 }}
                        className="flex flex-col items-center"
                      >
                        <span className="grid h-16 w-16 place-items-center rounded-full bg-blush-100 text-rose-600 transition-colors duration-300 group-hover:bg-blush-200">
                          <Icon className="h-7 w-7" aria-hidden="true" />
                        </span>
                        <span className="mt-4 font-display text-2xl text-ink">
                          {item.title}
                        </span>
                        <span className="mt-2 text-xs uppercase tracking-[0.2em] text-mauve-500">
                          Tap to reveal
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

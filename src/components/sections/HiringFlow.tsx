"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ClipboardCheck,
  Handshake,
  MessageCircle,
  Search,
  Settings2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import { site } from "@/content/site";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const icons: Record<string, LucideIcon> = {
  search: Search,
  clipboard: ClipboardCheck,
  message: MessageCircle,
  handshake: Handshake,
  welcome: Sparkles,
  operations: Settings2,
};

export function HiringFlow() {
  const steps = site.hiringFlow;
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = steps[index];

  const move = (next: number) => {
    const clamped = (next + steps.length) % steps.length;
    setIndex(clamped);
    tabRefs.current[clamped]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      move(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      move(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      move(0);
    } else if (e.key === "End") {
      e.preventDefault();
      move(steps.length - 1);
    }
  };

  return (
    <section
      id="process"
      className="relative bg-gradient-to-b from-cream via-blush-50 to-cream py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I do"
          title="From hello to hired"
          accent="hired"
          align="center"
          description="Recruitment and HR operations, the way a hire moves through the process."
        />

        <Reveal className="mt-14">
          <div
            role="tablist"
            aria-label="Stages of hiring"
            onKeyDown={onKeyDown}
            className="relative grid grid-cols-3 gap-3 sm:grid-cols-6"
          >
            {steps.map((step, i) => {
              const Icon = icons[step.icon] ?? Sparkles;
              const selected = i === index;
              const reached = i <= index;
              return (
                <button
                  key={step.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`flow-tab-${step.id}`}
                  aria-selected={selected}
                  aria-controls="flow-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setIndex(i)}
                  className="group flex flex-col items-center gap-3 rounded-2xl px-2 py-3 text-center"
                >
                  <span
                    className={`relative grid h-14 w-14 place-items-center rounded-full border-2 transition-all duration-300 ${
                      selected
                        ? "scale-110 border-rose-600 bg-rose-600 text-white shadow-lift"
                        : reached
                          ? "border-rose-400 bg-blush-100 text-rose-600"
                          : "border-blush-300 bg-white text-mauve-500 group-hover:border-rose-400 group-hover:text-rose-600"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      selected ? "text-rose-700" : "text-ink-soft"
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* progress track */}
          <div
            aria-hidden="true"
            className="mx-4 mt-2 hidden h-1 overflow-hidden rounded-full bg-blush-200 sm:block"
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blush-300 to-rose-500"
              animate={{ width: `${((index + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div
            id="flow-panel"
            role="tabpanel"
            aria-labelledby={`flow-tab-${current.id}`}
            className="mt-8 min-h-[8.5rem] rounded-3xl border border-blush-200 bg-white p-7 text-center shadow-card sm:p-9"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600">
                  Step {index + 1} of {steps.length}
                </p>
                <h3 className="mt-2 font-display text-3xl text-ink">
                  {current.label}
                </h3>
                <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">
                  {current.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronDown, GraduationCap } from "lucide-react";
import { useState } from "react";
import { site } from "@/content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Journey() {
  // The most recent entry starts open
  const [openId, setOpenId] = useState<string | null>(
    site.timeline[0]?.id ?? null,
  );

  return (
    <section
      id="journey"
      className="relative bg-gradient-to-b from-blush-50 via-blush-50 to-cream py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My journey"
          title="Where I've been, where I'm headed"
          accent="headed"
          description="Tap any milestone to open it up."
        />

        <ol className="relative mt-14">
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[1.15rem] top-3 w-px bg-gradient-to-b from-rose-400 via-blush-300 to-transparent md:left-[11.45rem]"
          />

          {site.timeline.map((entry, i) => {
            const open = openId === entry.id;
            const Icon = entry.type === "work" ? Briefcase : GraduationCap;
            const panelId = `timeline-panel-${entry.id}`;
            return (
              <Reveal as="li" key={entry.id} delay={i * 0.08} className="relative pb-6 last:pb-0">
                <div className="grid gap-3 md:grid-cols-[10.5rem_1fr] md:gap-8">
                  <p className="hidden pt-5 text-right text-sm font-semibold tracking-wide text-mauve-700 md:block">
                    {entry.period}
                  </p>

                  <div className="relative pl-12 md:pl-10">
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-4 grid h-10 w-10 place-items-center rounded-full border-2 transition-colors duration-300 md:-left-[1.35rem] ${
                        open
                          ? "border-rose-600 bg-rose-600 text-white"
                          : "border-blush-300 bg-white text-rose-600"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <div
                      className={`rounded-3xl border bg-white transition-all duration-300 ${
                        open
                          ? "border-rose-400/60 shadow-lift"
                          : "border-blush-200 shadow-card hover:border-blush-300 hover:shadow-soft"
                      }`}
                    >
                      <h3 className="m-0">
                        <button
                          type="button"
                          aria-expanded={open}
                          aria-controls={panelId}
                          onClick={() => setOpenId(open ? null : entry.id)}
                          className="flex w-full items-start justify-between gap-4 rounded-3xl p-5 text-left sm:p-6"
                        >
                          <span>
                            <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-rose-600 md:hidden">
                              {entry.period}
                            </span>
                            <span className="block font-display text-2xl text-ink">
                              {entry.title}
                            </span>
                            <span className="mt-1 block text-base text-ink-soft">
                              {entry.organisation}
                            </span>
                          </span>
                          <ChevronDown
                            aria-hidden="true"
                            className={`mt-2 h-5 w-5 shrink-0 text-rose-600 transition-transform duration-300 ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            id={panelId}
                            key="panel"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-6 text-lg leading-relaxed text-ink-soft sm:px-6">
                              {entry.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ClipboardCheck,
  HeartHandshake,
  Plus,
  ShieldCheck,
  Sparkles,
  UserPlus,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { site } from "@/content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  talent: UserPlus,
  lifecycle: ClipboardCheck,
  culture: Users,
  compliance: ShieldCheck,
  tools: Wrench,
  soft: HeartHandshake,
};

export function Expertise() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="expertise" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="HR expertise"
          title="What I bring to the table"
          accent="table"
          description="The skills behind great hiring and happy teams. Tap a card to see what it means."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.skillGroups.map((group, i) => {
            const Icon = icons[group.icon] ?? Sparkles;
            const open = openId === group.id;
            return (
              <Reveal as="li" key={group.id} delay={(i % 3) * 0.08}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : group.id)}
                  className={`group flex h-full w-full flex-col rounded-3xl border bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                    open
                      ? "border-rose-400/60 shadow-lift"
                      : "border-blush-200 shadow-card hover:border-blush-300 hover:shadow-soft"
                  }`}
                >
                  <span className="flex items-start justify-between">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 ${
                        open
                          ? "bg-rose-600 text-white"
                          : "bg-blush-100 text-rose-600 group-hover:bg-blush-200"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <Plus
                      aria-hidden="true"
                      className={`h-5 w-5 text-mauve-500 transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    />
                  </span>

                  <span className="mt-5 block font-display text-2xl text-ink">
                    {group.title}
                  </span>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.span
                        key="meaning"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="block overflow-hidden"
                      >
                        <span className="mt-2 block text-base leading-relaxed text-ink-soft">
                          {group.meaning}
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>

                  <span className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-blush-50 px-3 py-1 text-sm font-medium text-mauve-700 ring-1 ring-blush-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

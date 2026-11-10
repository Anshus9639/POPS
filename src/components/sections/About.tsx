import Image from "next/image";
import { Cat, Flame } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-blush-300"
          />
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-blush-100 shadow-lift">
            <Image
              src={site.aboutPhoto.src}
              alt={site.aboutPhoto.alt}
              width={site.aboutPhoto.width}
              height={site.aboutPhoto.height}
              sizes="(min-width: 1024px) 460px, 90vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-2xl border border-blush-200 bg-white px-5 py-3 shadow-card sm:-right-6">
            <p className="font-display text-lg italic text-rose-600">
              &ldquo;{site.nickname}&rdquo;
            </p>
            <p className="text-xs uppercase tracking-widest text-mauve-500">
              to those who know me best
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About me"
            title="A little about me"
            accent="me"
          />

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
            {site.about.map((paragraph, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-7 flex flex-wrap gap-3">
            {site.traits.map((trait) => (
              <span
                key={trait}
                className="inline-flex items-center gap-2 rounded-full border border-blush-300 bg-white px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm"
              >
                {trait === "Cat lover" ? (
                  <Cat className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Flame className="h-4 w-4" aria-hidden="true" />
                )}
                {trait}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.25}>
            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {site.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-blush-200 bg-white p-5 shadow-card"
                >
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-mauve-500">
                    {h.label}
                  </dt>
                  <dd className="mt-2 font-display text-lg leading-snug text-ink">
                    {h.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

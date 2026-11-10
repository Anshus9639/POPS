"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Gallery() {
  const photos = site.gallery;
  const [active, setActive] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    opener.current?.focus();
  }, []);
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + photos.length) % photos.length,
      ),
    [photos.length],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  const isOpen = active !== null;

  // Keyboard controls + scroll lock + focus handling while the lightbox is open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Tab") {
        // keep focus inside the dialog
        const dialog = document.getElementById("lightbox");
        const focusable = dialog?.querySelectorAll<HTMLElement>("button");
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen, close, prev, next]);

  const current = active !== null ? photos[active] : null;

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments, framed"
          accent="framed"
          description="A few favourite frames. Tap any photo to see it bigger."
        />

        <div className="mt-14 columns-2 gap-4 sm:gap-5 lg:columns-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 0.08} className="mb-4 break-inside-avoid sm:mb-5">
              <button
                type="button"
                aria-label={`Open photo: ${photo.caption}`}
                onClick={(e) => {
                  opener.current = e.currentTarget;
                  setActive(i);
                }}
                className="group relative block w-full overflow-hidden rounded-3xl border-4 border-white bg-blush-100 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 380px, 50vw"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/60 to-transparent px-4 pb-3 pt-10 text-left font-display text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {photo.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && active !== null && (
          <motion.div
            id="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo viewer — ${current.caption}`}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button
              ref={closeRef}
              type="button"
              aria-label="Close photo viewer"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:right-8 sm:top-8"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:left-8"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:right-8"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>

            <AnimatePresence mode="wait">
              <motion.figure
                key={current.src}
                className="flex max-h-full flex-col items-center"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  sizes="90vw"
                  loading="eager"
                  className="max-h-[78vh] w-auto max-w-[calc(100vw-2rem)] rounded-2xl border-4 border-white object-contain shadow-2xl sm:max-w-[calc(100vw-10rem)]"
                />
                <figcaption className="mt-4 text-center text-white">
                  <span className="font-display text-xl italic">
                    {current.caption}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.25em] text-white/70">
                    {active + 1} / {photos.length}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Optional word(s) inside the title to italicise in rose. */
  accent?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: SectionHeadingProps) {
  const at = accent ? title.lastIndexOf(accent) : -1;
  const before = at >= 0 ? title.slice(0, at) : title;
  const after = at >= 0 && accent ? title.slice(at + accent.length) : "";
  return (
    <Reveal className={align === "center" ? "mx-auto text-center" : ""}>
      <p className="mb-3 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-rose-600">
        <span aria-hidden="true" className="h-px w-8 bg-rose-400" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-medium text-ink sm:text-5xl">
        {before}
        {at >= 0 && (
          <em className="font-normal italic text-rose-600">{accent}</em>
        )}
        {after}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl text-lg text-ink-soft ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

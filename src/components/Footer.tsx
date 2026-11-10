import { Heart, Mail } from "lucide-react";
import { brandInitials, navLinks, site } from "@/content/site";
import { BrandMark, InstagramIcon, LinkedInIcon } from "./ui/BrandIcons";

export function Footer() {
  const { linkedin, instagram, email } = site.social;
  const iconLink =
    "grid h-11 w-11 place-items-center rounded-full border border-blush-300 bg-white text-rose-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-600 hover:text-white";

  return (
    <footer className="border-t border-blush-200 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <BrandMark initials={brandInitials} />
            <div>
              <p className="font-display text-2xl text-ink">
                {site.name}{" "}
                <span className="italic text-rose-600">· {site.nickname}</span>
              </p>
              <p className="mt-1 text-sm text-ink-soft">{site.headline}</p>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-ink-soft">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition-colors hover:text-rose-600"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
                className={iconLink}
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (opens in a new tab)"
                className={iconLink}
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} aria-label="Email" className={iconLink}>
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-mauve-700 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2">
            {site.closing}
            <Heart
              className="h-4 w-4 fill-rose-500 text-rose-500"
              aria-hidden="true"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}

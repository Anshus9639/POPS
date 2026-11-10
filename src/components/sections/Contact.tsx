import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { InstagramIcon, LinkedInIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const buttonBase =
  "inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5";

export function Contact() {
  const { linkedin, instagram, instagramHandle, email } = site.social;

  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="gradient-wash absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="decor-motion absolute -left-20 top-10 -z-10 h-72 w-72 animate-drift rounded-full bg-blush-300/50 blur-3xl"
      />

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          accent="connect"
          align="center"
          description="Always happy to connect with people in HR, recruitment and talent. Say hello!"
        />

        <Reveal delay={0.1} className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} bg-rose-600 text-white shadow-soft hover:bg-rose-700 hover:shadow-lift`}
            >
              <LinkedInIcon className="h-5 w-5" />
              Connect on LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-blush-300 bg-white text-rose-700 hover:border-rose-400 hover:shadow-soft`}
            >
              <InstagramIcon className="h-5 w-5" />
              {instagramHandle || "Instagram"}
              <span className="sr-only"> on Instagram (opens in a new tab)</span>
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className={`${buttonBase} border border-blush-300 bg-white text-rose-700 hover:border-rose-400 hover:shadow-soft`}
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Email me
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}

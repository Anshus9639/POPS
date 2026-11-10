import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/fraunces/wght.css";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/dm-sans/wght.css";
import "./globals.css";
import { site } from "@/content/site";
import { BackToTop } from "@/components/BackToTop";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import { ScrollProgress } from "@/components/ScrollProgress";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const siteUrl =
  configuredSiteUrl ||
  (vercelProductionUrl ? `https://${vercelProductionUrl}` : undefined);
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

const title = `${site.name} | ${site.role}`;
const description = `${site.name} is an HR Executive focused on talent acquisition and HR operations in ${site.location}. Explore her career, education, interests, and photographs.`;

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  alternates: metadataBase ? { canonical: "/" } : undefined,
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    site.name,
    site.nickname,
    "HR Executive",
    "Talent Acquisition",
    "Recruitment",
    "HR Operations",
    "MBA in HR",
    "Gurugram",
  ],
  openGraph: {
    type: "website",
    title,
    description,
    siteName: site.name,
    ...(metadataBase
      ? {
          url: "/",
          images: [
            {
              url: site.hero.src,
              width: site.hero.width,
              height: site.hero.height,
              alt: site.hero.alt,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: metadataBase ? "summary_large_image" : "summary",
    title,
    description,
    ...(metadataBase ? { images: [site.hero.src] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#fffaf8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: site.nickname,
    jobTitle: site.role,
    worksFor: { "@type": "Organization", name: "Radical Mind Technology" },
    sameAs: [site.social.linkedin, site.social.instagram].filter(Boolean),
  };

  return (
    <html lang="en">
      <body>
        <a
          href="#about"
          className="sr-only z-[200] rounded-full bg-rose-600 px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Providers>
          <Loader />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <BackToTop />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

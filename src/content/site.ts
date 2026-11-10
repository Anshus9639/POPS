/**
 * ----------------------------------------------------------------------
 *  EDIT ME — all the words, links and photos on the site live in this file.
 *  Change the text here and the whole website updates. No design code needed.
 * ----------------------------------------------------------------------
 */

export type TimelineEntry = {
  id: string;
  type: "work" | "education";
  period: string;
  title: string;
  organisation: string;
  description: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  icon: "talent" | "lifecycle" | "culture" | "compliance" | "tools" | "soft";
  meaning: string;
  skills: string[];
};

export type PhotoItem = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const site = {
  name: "Priyanka Hembram",
  firstName: "Priyanka",
  nickname: "SUSH",
  role: "HR Executive",
  headline: "HR Executive · Talent Acquisition & HR Operations",
  location: "Gurugram, India",
  origin: "Kolkata",
  heroIntro:
    "I help teams find the right people and keep the everyday HR machinery running smoothly — with a lot of warmth and a little chatpati spice.",
  about: [
    "Hi, I'm Priyanka, or SUSH to the people who know me best. I'm from Kolkata and building my career in Gurugram as an HR Executive at Radical Mind Technology, where I handle recruitment and day-to-day HR operations.",
    "With an MBA in HR, I'm drawn to the people side of business: finding the right talent and making work a better place to be. I want to keep growing in the HR field and build the kind of workplaces people are glad to walk into.",
    "Off the clock, I'm chatpati at heart, with a soft spot for cats.",
  ],
  traits: ["Chatpati", "Cat lover"],
  highlights: [
    { label: "Education", value: "MBA in HR" },
    { label: "Currently", value: "HR Executive, Radical Mind Technology" },
    { label: "Based in", value: "Gurugram · from Kolkata" },
  ],
  hero: {
    src: "/images/hero.jpg",
    alt: "Priyanka smiling and tossing pink bougainvillea petals in front of a flowering hedge",
    width: 807,
    height: 1082,
  } satisfies Omit<PhotoItem, "caption">,
  aboutPhoto: {
    src: "/images/portrait-saree.jpg",
    alt: "Priyanka in a white embroidered saree, smiling, with festive lights behind her",
    width: 1080,
    height: 1209,
  } satisfies Omit<PhotoItem, "caption">,

  /** Leave a value as "" to hide that button. */
  social: {
    linkedin: "https://www.linkedin.com/in/priyanka-hembram-6778282bb",
    instagram: "https://www.instagram.com/sushmita.yaaar",
    instagramHandle: "@sushmita.yaaar",
    email: "", // e.g. "name@example.com" — shows an Email button when filled in
  },

  /**
   * Newest first. Add, remove or reorder entries freely.
   * To add undergraduate / school details later, copy an entry below,
   * set type to "education" and fill in the text.
   */
  timeline: [
    {
      id: "radical-mind",
      type: "work",
      period: "Feb 2026 — Present",
      title: "HR Executive",
      organisation: "Radical Mind Technology · Gurugram",
      description:
        "Handling recruitment and a wide range of day-to-day HR operations.",
    },
    {
      id: "hometrust",
      type: "work",
      period: "Jun 2024 — Jul 2024",
      title: "Intern",
      organisation: "Hometrust Realty Pvt. Ltd.",
      description: "A two-month internship experience in a corporate setting.",
    },
    {
      id: "mba",
      type: "education",
      period: "2023 — 2025",
      title: "MBA in Human Resources",
      organisation: "Chandigarh Group of Colleges, Jhanjheri",
      description:
        "Postgraduate study focused on human resource management.",
    },
  ] satisfies TimelineEntry[],

  skillGroups: [
    {
      id: "talent",
      title: "Talent Acquisition",
      icon: "talent",
      meaning:
        "Finding, shortlisting and lining up the right candidates for each role.",
      skills: ["Sourcing", "Screening", "Interview coordination"],
    },
    {
      id: "lifecycle",
      title: "Employee Lifecycle",
      icon: "lifecycle",
      meaning:
        "Making the journey from offer letter to a settled team member smooth.",
      skills: ["Onboarding", "Documentation", "HR operations"],
    },
    {
      id: "culture",
      title: "People & Culture",
      icon: "culture",
      meaning:
        "Keeping teams connected, heard and working well together.",
      skills: ["Employee engagement", "Communication", "Conflict handling"],
    },
    {
      id: "compliance",
      title: "Compliance & Records",
      icon: "compliance",
      meaning:
        "Keeping policies, attendance and payroll inputs accurate and organised.",
      skills: ["HR policies", "Attendance & payroll coordination"],
    },
    {
      id: "tools",
      title: "Tools",
      icon: "tools",
      meaning: "The everyday toolkit that keeps hiring and HR work moving.",
      skills: ["MS Office & Excel", "Job portals", "LinkedIn sourcing"],
    },
    {
      id: "soft",
      title: "Soft Skills",
      icon: "soft",
      meaning:
        "The human side of HR — the part no tool can do for you.",
      skills: ["Empathy", "Active listening", "Confidentiality", "Negotiation"],
    },
  ] satisfies SkillGroup[],

  /** The recruitment journey shown in the "From hello to hired" section. */
  hiringFlow: [
    {
      id: "source",
      label: "Source",
      icon: "search",
      text: "It starts with finding people — through job portals, LinkedIn and referrals — who could genuinely fit the role.",
    },
    {
      id: "screen",
      label: "Screen",
      icon: "clipboard",
      text: "Reading profiles and having first conversations to shortlist candidates who match what the team needs.",
    },
    {
      id: "interview",
      label: "Interview",
      icon: "message",
      text: "Coordinating interview rounds so candidates and hiring managers both have a smooth, respectful experience.",
    },
    {
      id: "select",
      label: "Select",
      icon: "handshake",
      text: "Closing the loop with clear communication, offers and the conversations that turn a candidate into a colleague.",
    },
    {
      id: "onboard",
      label: "Onboard",
      icon: "welcome",
      text: "Documentation, joining formalities and a warm welcome, so day one feels easy.",
    },
    {
      id: "operate",
      label: "Operate",
      icon: "operations",
      text: "The day-to-day HR operations that keep records, policies and people processes running well.",
    },
  ],

  /** Cards in "Beyond Work". Front = title, back = the fun fact. */
  beyondWork: [
    {
      id: "pink",
      title: "Pink",
      icon: "palette",
      fact: "Her favourite colour — which is why this whole site blushes.",
    },
    {
      id: "cats",
      title: "Cats",
      icon: "cat",
      fact: "A proper cat person. Cat photos are welcome, anytime.",
    },
    {
      id: "chatpati",
      title: "Chatpati",
      icon: "chatpati",
      fact: "Tangy, spicy and full of flavour — the way she likes her food, and her company.",
    },
    {
      id: "kolkata",
      title: "Kolkata roots",
      icon: "roots",
      fact: "From the City of Joy, now building her career in Gurugram.",
    },
  ],

  gallery: [
    {
      src: "/images/hero.jpg",
      alt: "Priyanka tossing pink bougainvillea petals in front of a flowering hedge",
      caption: "Petals & pink",
      width: 807,
      height: 1082,
    },
    {
      src: "/images/portrait-saree.jpg",
      alt: "Priyanka in a white embroidered saree with festive lights behind her",
      caption: "Festive glow",
      width: 1080,
      height: 1209,
    },
    {
      src: "/images/gallery-velvet.jpg",
      alt: "Priyanka in a royal blue velvet dress holding a white handbag, standing by a leafy hedge",
      caption: "Evening elegance",
      width: 829,
      height: 1246,
    },
    {
      src: "/images/gallery-monument.jpg",
      alt: "Priyanka in a blue top smiling at dusk with historic stone pillars behind her",
      caption: "Golden hour",
      width: 720,
      height: 896,
    },
    {
      src: "/images/gallery-festive.jpg",
      alt: "Priyanka in a pink outfit with an orange dupatta, smiling softly among fairy lights",
      caption: "Lights & laughter",
      width: 1080,
      height: 1209,
    },
    {
      src: "/images/gallery-mirror.jpg",
      alt: "Mirror photo of Priyanka in a red rose-print dress",
      caption: "Mirror mood",
      width: 790,
      height: 1341,
    },
  ] satisfies PhotoItem[],

  closing: "Made with love, for someone who deserves every good thing.",
};

export const brandInitials = site.name
  .split(/\s+/)
  .slice(0, 2)
  .map((part) => part[0])
  .join("")
  .toUpperCase();

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#expertise", label: "Expertise" },
  { href: "#process", label: "Recruitment" },
  { href: "#gallery", label: "Gallery" },
  { href: "#beyond", label: "Beyond Work" },
  { href: "#contact", label: "Contact" },
] as const;

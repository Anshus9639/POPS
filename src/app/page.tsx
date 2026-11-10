import { About } from "@/components/sections/About";
import { BeyondWork } from "@/components/sections/BeyondWork";
import { Contact } from "@/components/sections/Contact";
import { Expertise } from "@/components/sections/Expertise";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { HiringFlow } from "@/components/sections/HiringFlow";
import { Journey } from "@/components/sections/Journey";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Expertise />
      <HiringFlow />
      <Gallery />
      <BeyondWork />
      <Contact />
      <Footer />
    </>
  );
}

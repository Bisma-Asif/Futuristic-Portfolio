import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Navbar } from "@/components/portfolio/Navbar";
import { SectionDivider } from "@/components/portfolio/SectionDivider";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Achievements } from "@/sections/Achievements";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-foreground bg-background">
      <div className="fixed inset-0 z-[-10] pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[160px]" style={{ animation: 'orb-drift-1 15s ease-in-out infinite' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-[140px]" style={{ animation: 'orb-drift-2 18s ease-in-out infinite' }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-[120px]" style={{ animation: 'orb-drift-3 12s ease-in-out infinite' }} />
      </div>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <CursorGlow />
      <Navbar />
      <main className="w-full">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

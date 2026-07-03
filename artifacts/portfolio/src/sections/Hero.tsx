import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ChevronDown, Linkedin } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import bismaPhoto from "../assets/bisma-portrait.jpeg";

const roles = [
  "Software Engineer",
  "AI Startup Founder",
  "Frontend Developer",
  "WordPress Developer",
  "Tech Trainer"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(() => {}, 500);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 50);
      }
    } else {
      if (displayText.length === currentRole.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0 opacity-50 mix-blend-screen" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none z-0 opacity-40 mix-blend-screen" />
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
            }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mb-8"
            >
              <span className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full border border-primary/30 shadow-[0_0_15px_rgba(147,51,234,0.2)]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse-glow_2s_infinite]" />
                <span className="text-sm font-medium tracking-wide text-muted-foreground">Available for Freelance Projects</span>
              </span>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-4">
              <h1 className="text-4xl md:text-5xl font-serif text-muted-foreground font-light mb-2">Hi, I'm</h1>
              <h2 className="text-6xl md:text-8xl font-bold font-serif tracking-tight gradient-text pb-2">Bisma Asif</h2>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="h-10 md:h-12 mb-6"
            >
              <p className="text-2xl md:text-3xl font-medium text-foreground">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
            >
              Building the future with code, creativity & AI
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <button 
                onClick={() => scrollTo('#projects')}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium glow-purple hover:scale-105 transition-transform"
                data-testid="button-view-projects"
              >
                View Projects
              </button>
              <button 
                className="px-8 py-3 rounded-full glass border-border hover:bg-white/5 font-medium hover:scale-105 transition-transform"
                data-testid="button-download-resume"
              >
                Download Resume
              </button>
              <button 
                onClick={() => scrollTo('#contact')}
                className="px-8 py-3 rounded-full border border-secondary text-secondary hover:bg-secondary/10 font-medium glow-cyan hover:scale-105 transition-transform"
                data-testid="button-contact"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex space-x-6 justify-center lg:justify-start"
            >
              {[
                { icon: Linkedin, href: "#", testid: "link-linkedin", color: "hover:text-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]" },
                { icon: SiGithub, href: "#", testid: "link-github", color: "hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]" },
                { icon: SiInstagram, href: "#", testid: "link-instagram", color: "hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]" },
                { icon: Mail, href: "#contact", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); scrollTo('#contact'); }, testid: "link-email", color: "hover:text-primary hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  onClick={social.onClick}
                  className={`w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color} hover:scale-110`}
                  data-testid={social.testid}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity:0, x:60 }} 
            animate={{ opacity:1, x:0 }} 
            transition={{ duration:0.8, delay:0.6 }} 
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-[420px] h-[420px] flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />
              </svg>

              <div className="absolute inset-0 bg-primary/30 rounded-full blur-[80px] animate-pulse" />
              <div className="absolute top-10 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-[60px]" />
              
              <div className="relative w-[320px] h-[320px] rounded-full p-1 bg-gradient-to-br from-primary via-secondary to-accent" style={{ animation: 'border-glow 3s infinite' }}>
                <div className="w-full h-full bg-background rounded-full overflow-hidden">
                  <img src={bismaPhoto} alt="Bisma Asif" className="w-full h-full object-cover object-top" />
                </div>
              </div>

              <div className="absolute top-4 left-0 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary border border-primary/30 flex items-center gap-2" style={{ animation: 'float 3s ease-in-out infinite' }}>
                <span className="w-2 h-2 rounded-full bg-primary" /> React.js
              </div>
              <div className="absolute top-1/3 right-0 glass px-3 py-1.5 rounded-full text-xs font-medium text-secondary border border-secondary/30 flex items-center gap-2" style={{ animation: 'float 4s ease-in-out infinite 0.5s' }}>
                <span className="w-2 h-2 rounded-full bg-secondary" /> AI/ML
              </div>
              <div className="absolute bottom-1/3 left-0 glass px-3 py-1.5 rounded-full text-xs font-medium text-orange-500 border border-orange-500/30 flex items-center gap-2" style={{ animation: 'float 3.5s ease-in-out infinite 1s' }}>
                <span className="w-2 h-2 rounded-full bg-orange-500" /> Firebase
              </div>
              <div className="absolute bottom-4 right-8 glass px-3 py-1.5 rounded-full text-xs font-medium text-blue-500 border border-blue-500/30 flex items-center gap-2" style={{ animation: 'float 5s ease-in-out infinite 0.3s' }}>
                <span className="w-2 h-2 rounded-full bg-blue-500" /> TypeScript
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <button 
            onClick={() => scrollTo('#about')} 
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-scroll-down"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

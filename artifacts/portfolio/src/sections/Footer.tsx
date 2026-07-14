import { Mail, ArrowUp, Linkedin, Phone } from "lucide-react";
import { SiGithub, SiInstagram, SiFacebook } from "react-icons/si";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "bisma-asif26",
    href: "https://www.linkedin.com/in/bisma-asif26/",
    color: "hover:text-blue-400",
    testid: "footer-linkedin",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    handle: "Bisma-Asif",
    href: "https://github.com/Bisma-Asif",
    color: "hover:text-white",
    testid: "footer-github",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    handle: "bisma.asif",
    href: "https://www.instagram.com/bisma.asif/",
    color: "hover:text-pink-400",
    testid: "footer-instagram",
  },
  {
    icon: SiFacebook,
    label: "Facebook",
    handle: "Bisma Asif",
    href: "https://www.facebook.com/profile.php?id=61591333746940",
    color: "hover:text-blue-500",
    testid: "footer-facebook",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "bisma.asif2060@gmail.com",
    href: "mailto:bisma.asif2060@gmail.com",
    color: "hover:text-primary",
    testid: "footer-email",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    handle: "+92 317 1230707",
    href: "https://wa.me/923171230707",
    color: "hover:text-green-400",
    testid: "footer-whatsapp",
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-border/50 relative overflow-hidden bg-background">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="text-[12rem] font-bold font-serif opacity-[0.02] whitespace-nowrap gradient-text tracking-widest">
          BISMA
        </span>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-24 bg-primary/10 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Top row: name + tagline */}
        <div className="text-center mb-12">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            className="text-3xl font-bold font-serif gradient-text"
          >
            Bisma Asif
          </a>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
            Building the future with code & AI. Open for freelance opportunities and collaborations.
          </p>
        </div>

        {/* Social links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {socials.map((s) => (
            <a
              key={s.testid}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              data-testid={s.testid}
              className={`glass rounded-xl px-4 py-3 flex flex-col items-center gap-2 text-muted-foreground ${s.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] group`}
            >
              <s.icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs font-semibold tracking-wide">{s.label}</span>
              <span className="text-[10px] text-muted-foreground/70 truncate w-full text-center">{s.handle}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/50 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Bisma Asif. Crafted with passion in Pakistan.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-foreground transition-colors"
            data-testid="button-back-to-top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

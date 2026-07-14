import { Mail, ArrowUp, Linkedin } from "lucide-react";
import { SiGithub, SiInstagram, SiFacebook } from "react-icons/si";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden bg-background">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="text-[12rem] font-bold font-serif opacity-[0.02] whitespace-nowrap gradient-text tracking-widest">BISMA</span>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-24 bg-primary/10 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="text-3xl font-bold font-serif mb-2">
            <span className="gradient-text">Bisma Asif</span>
          </a>
          
          <p className="text-muted-foreground mb-8 max-w-md">
            Building the future with code & AI. Open for freelance opportunities and collaborations.
          </p>

          <div className="flex items-center space-x-6 mb-12">
            {[
              { icon: Linkedin,    href: "https://www.linkedin.com/in/bisma-asif26/",                     testid: "footer-linkedin"  },
              { icon: SiGithub,   href: "https://github.com/Bisma-Asif",                                 testid: "footer-github"    },
              { icon: SiInstagram,href: "https://www.instagram.com/bisma.asif/",                         testid: "footer-instagram" },
              { icon: SiFacebook, href: "https://www.facebook.com/profile.php?id=61591333746940",        testid: "footer-facebook"  },
              { icon: Mail,       href: "mailto:bisma.asif2060@gmail.com",                               testid: "footer-email"     },
            ].map((social) => (
              <a
                key={social.testid}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:glow-purple rounded-full p-2"
                data-testid={social.testid}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="w-full h-[1px] bg-border/50 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between w-full text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Bisma Asif. Crafted with passion in Pakistan.</p>
            
            <button 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 flex items-center space-x-2 hover:text-foreground transition-colors"
              data-testid="button-back-to-top"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

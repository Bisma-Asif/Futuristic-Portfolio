import { motion } from "framer-motion";
import { Globe, Code, Layers, Cpu, Palette, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Portfolio Websites",
    desc: "High-end, cinematic personal sites that make you stand out.",
    icon: Globe,
    color: "text-primary bg-primary/10 border-primary/20",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
  },
  {
    title: "React.js Development",
    desc: "Complex, scalable, and highly interactive frontend applications.",
    icon: Code,
    color: "text-secondary bg-secondary/10 border-secondary/20",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
  },
  {
    title: "WordPress Development",
    desc: "Custom themes and robust e-commerce solutions for businesses.",
    icon: Layers,
    color: "text-accent bg-accent/10 border-accent/20",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
  },
  {
    title: "AI Startup Consultation",
    desc: "Guidance on integrating AI models and building smart MVPs.",
    icon: Cpu,
    color: "text-primary bg-primary/10 border-primary/20",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, user-centric designs created in Figma.",
    icon: Palette,
    color: "text-secondary bg-secondary/10 border-secondary/20",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
  },
  {
    title: "Tech Training",
    desc: "Comprehensive bootcamps and 1-on-1 mentorship sessions.",
    icon: GraduationCap,
    color: "text-accent bg-accent/10 border-accent/20",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
  }
];

export function Services() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-serif font-bold inline-block relative mb-4">
            Services
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From ideation to deployment, I offer specialized services to help you build your digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-8 rounded-2xl border border-border group transition-all duration-300 hover:-translate-y-2 ${service.hoverGlow}`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center border mb-6 transition-transform duration-500 group-hover:rotate-[360deg] ${service.color}`}>
                <service.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-2">
                {service.desc}
              </p>
              
              <button 
                onClick={scrollToContact}
                className="flex items-center space-x-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors"
                data-testid={`button-service-${service.title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <span>Get Started</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

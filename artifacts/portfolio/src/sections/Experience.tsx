import { motion } from "framer-motion";
import { Briefcase, Code, Users, Rocket } from "lucide-react";

const experiences = [
  {
    role: "AI Startup Founder",
    company: "RishtaAI",
    date: "2024 – Present",
    description: "Founded and currently leading an AI matchmaking platform tailored for the Pakistani diaspora. Architected the entire stack, integrated AI models, and driving product vision.",
    icon: Rocket,
    color: "bg-primary text-white",
    glow: "glow-purple",
  },
  {
    role: "Tech Trainer",
    company: "Freelance / Bootcamps",
    date: "2023 – Present",
    description: "Conducting intensive bootcamps and mentoring over 100 students in modern web development, React.js, and practical software engineering.",
    icon: Users,
    color: "bg-secondary text-white",
    glow: "glow-cyan",
  },
  {
    role: "Frontend Developer",
    company: "Various Clients",
    date: "2022 – 2023",
    description: "Built dynamic React.js applications with complex state management, responsive designs, and smooth animations. Focused on performance and accessible UI/UX.",
    icon: Code,
    color: "bg-accent text-white",
    glow: "glow-pink",
  },
  {
    role: "WordPress Freelancer",
    company: "Self-Employed",
    date: "2021 – 2022",
    description: "Delivered custom, high-converting WordPress sites for local and international clients. Handled theme customization, SEO optimization, and e-commerce setups.",
    icon: Briefcase,
    color: "bg-primary text-white",
    glow: "glow-purple",
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-serif font-bold inline-block relative">
            Experience
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2 opacity-30 shadow-[0_0_15px_rgba(147,51,234,0.5)]" />

          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="relative mb-12 md:mb-24 flex flex-col md:flex-row items-start md:items-center justify-between">
                
                {/* Desktop Left Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`w-full md:w-5/12 pl-24 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-3 md:text-left md:pl-12'}`}
                >
                  <div className="glass p-6 rounded-2xl hover:border-border/80 transition-colors">
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <div className="text-primary font-medium mb-3">{exp.company}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>

                {/* Center Icon */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full border-4 border-background ${exp.color} ${exp.glow} z-10 md:order-2`}
                >
                  <exp.icon size={24} />
                </motion.div>

                {/* Desktop Right Side (Date) */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 }}
                  className={`w-full md:w-5/12 pl-24 md:pl-0 mt-2 md:mt-0 ${isEven ? 'md:order-3 md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}
                >
                  <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-mono text-muted-foreground border-primary/20">
                    {exp.date}
                  </span>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

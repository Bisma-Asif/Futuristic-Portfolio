import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  SiHtml5, SiCss, SiJavascript, SiBootstrap,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiPhp, SiLaravel,
  SiWordpress, SiGit, SiGithub,
  SiMysql, SiPython,
} from "react-icons/si";
import {
  Globe, Monitor, Palette, Layers, Code2,
  Database, Server, Puzzle, PaintBucket, ShoppingCart,
} from "lucide-react";

type SkillCategory = "All" | "Frontend" | "Backend" | "WordPress" | "Database & Tools";

type Skill = {
  name: string;
  icon: React.ElementType;
  percentage: number;
  color: string;
  category: SkillCategory;
};

const skills: Skill[] = [
  /* ── Frontend ──────────────────────────────────────── */
  { name: "HTML5",               icon: SiHtml5,      percentage: 95, color: "text-[#E34F26]", category: "Frontend" },
  { name: "CSS3",                icon: SiCss,        percentage: 92, color: "text-[#1572B6]", category: "Frontend" },
  { name: "JavaScript (ES6+)",   icon: SiJavascript, percentage: 88, color: "text-[#F7DF1E]", category: "Frontend" },
  { name: "Bootstrap 5",         icon: SiBootstrap,  percentage: 85, color: "text-[#7952B3]", category: "Frontend" },
  { name: "React.js",            icon: SiReact,      percentage: 85, color: "text-[#61DAFB]", category: "Frontend" },
  { name: "Next.js",             icon: SiNextdotjs,  percentage: 75, color: "text-foreground", category: "Frontend" },
  { name: "Responsive Design",   icon: Monitor,      percentage: 92, color: "text-secondary",  category: "Frontend" },
  { name: "UI/UX Implementation",icon: Palette,      percentage: 82, color: "text-[#FF007F]", category: "Frontend" },
  { name: "Canvas API",          icon: Layers,       percentage: 78, color: "text-primary",    category: "Frontend" },
  { name: "DOM Manipulation",    icon: Code2,        percentage: 85, color: "text-[#F7DF1E]", category: "Frontend" },

  /* ── Backend ───────────────────────────────────────── */
  { name: "Node.js",             icon: SiNodedotjs,  percentage: 80, color: "text-[#339933]", category: "Backend" },
  { name: "Express.js",          icon: SiExpress,    percentage: 78, color: "text-foreground", category: "Backend" },
  { name: "PHP",                 icon: SiPhp,        percentage: 72, color: "text-[#777BB4]", category: "Backend" },
  { name: "Laravel",             icon: SiLaravel,    percentage: 70, color: "text-[#FF2D20]", category: "Backend" },
  { name: "REST API Integration",icon: Globe,        percentage: 82, color: "text-secondary",  category: "Backend" },
  { name: "ASP.NET (Basic)",     icon: Server,       percentage: 60, color: "text-[#512BD4]", category: "Backend" },
  { name: "Python (Basic)",      icon: SiPython,     percentage: 65, color: "text-[#3776AB]", category: "Backend" },

  /* ── WordPress ─────────────────────────────────────── */
  { name: "WordPress Dev",            icon: SiWordpress,   percentage: 92, color: "text-[#21759B]", category: "WordPress" },
  { name: "Theme Customization",      icon: PaintBucket,   percentage: 90, color: "text-[#21759B]", category: "WordPress" },
  { name: "Plugin Configuration",     icon: Puzzle,        percentage: 88, color: "text-[#21759B]", category: "WordPress" },
  { name: "Elementor",                icon: SiWordpress,   percentage: 90, color: "text-[#92003B]", category: "WordPress" },
  { name: "WooCommerce",              icon: ShoppingCart,  percentage: 85, color: "text-[#96588A]", category: "WordPress" },

  /* ── Database & Tools ──────────────────────────────── */
  { name: "MongoDB",    icon: SiMongodb,  percentage: 75, color: "text-[#47A248]", category: "Database & Tools" },
  { name: "MySQL",      icon: SiMysql,    percentage: 72, color: "text-[#4479A1]", category: "Database & Tools" },
  { name: "SQL Server", icon: Database,   percentage: 70, color: "text-[#CC2927]", category: "Database & Tools" },
  { name: "Git",        icon: SiGit,      percentage: 88, color: "text-[#F05032]", category: "Database & Tools" },
  { name: "GitHub",     icon: SiGithub,   percentage: 90, color: "text-foreground", category: "Database & Tools" },
];

const TABS: { label: SkillCategory | "All" }[] = [
  { label: "All" },
  { label: "Frontend" },
  { label: "Backend" },
  { label: "WordPress" },
  { label: "Database & Tools" },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ delay: index * 0.03, duration: 0.25 }}
      className="glass rounded-xl p-4 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <skill.icon className={`text-2xl ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
          <span className="font-mono text-xs font-bold text-muted-foreground">{skill.percentage}%</span>
        </div>
        <h3 className="text-sm font-medium mb-2.5 leading-tight">{skill.name}</h3>

        <div className="h-1 w-full bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.1 + index * 0.03, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [active, setActive] = useState<SkillCategory | "All">("All");

  const filtered = active === "All"
    ? skills
    : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* bg decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.03'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.3h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute top-0 right-0 w-72 h-72 opacity-20 pointer-events-none hidden md:block">
        <div className="absolute inset-0 rounded-full border border-primary/30" style={{ animation: "spin-slow 20s linear infinite" }} />
        <div className="absolute inset-8 rounded-full border border-secondary/20" style={{ animation: "spin-slow 15s linear infinite reverse" }} />
        <div className="absolute inset-16 rounded-full border border-accent/20" style={{ animation: "spin-slow 10s linear infinite" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl font-serif font-bold inline-block relative mb-4">
            Tech Stack
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Tools and technologies I use to design, build, and ship real-world products.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map(tab => {
            const count = tab.label === "All" ? skills.length : skills.filter(s => s.category === tab.label).length;
            return (
              <button
                key={tab.label}
                onClick={() => setActive(tab.label)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  active === tab.label
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    : "glass border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {tab.label}
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                  active === tab.label ? "bg-primary-foreground/20" : "bg-muted"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Total count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          {filtered.length} skill{filtered.length !== 1 ? "s" : ""} {active !== "All" ? `in ${active}` : "total"}
        </motion.p>
      </div>
    </section>
  );
}

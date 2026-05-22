import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, 
  SiTailwindcss, SiWordpress, SiFigma, 
  SiFirebase, SiSupabase, SiGithub 
} from "react-icons/si";
import { Cpu, Palette } from "lucide-react";

type Skill = {
  name: string;
  icon: React.ElementType;
  percentage: number;
  color: string;
};

const skills: Skill[] = [
  { name: "HTML5", icon: SiHtml5, percentage: 95, color: "text-[#E34F26]" },
  { name: "CSS3", icon: SiCss, percentage: 90, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, percentage: 85, color: "text-[#F7DF1E]" },
  { name: "React.js", icon: SiReact, percentage: 85, color: "text-[#61DAFB]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, percentage: 88, color: "text-[#06B6D4]" },
  { name: "WordPress", icon: SiWordpress, percentage: 90, color: "text-[#21759B]" },
  { name: "UI/UX", icon: Palette, percentage: 80, color: "text-[#FF007F]" },
  { name: "AI Prompting", icon: Cpu, percentage: 82, color: "text-[#9333ea]" },
  { name: "Firebase", icon: SiFirebase, percentage: 75, color: "text-[#FFCA28]" },
  { name: "Supabase", icon: SiSupabase, percentage: 72, color: "text-[#3ECF8E]" },
  { name: "GitHub", icon: SiGithub, percentage: 90, color: "text-foreground" },
  { name: "Figma", icon: SiFigma, percentage: 80, color: "text-[#F24E1E]" },
];

function SkillCard({ skill, index }: { skill: Skill, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className="glass rounded-2xl p-6 group relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
      style={{ perspective: "1000px" }}
    >
      {/* Hover glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <skill.icon className={`text-3xl ${skill.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`} />
          <span className="font-mono text-sm font-bold text-muted-foreground">{skill.percentage}%</span>
        </div>
        <h3 className="font-medium mb-3">{skill.name}</h3>
        
        <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.2 + (index * 0.05), ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-serif font-bold inline-block relative mb-4">
            Tech Stack
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

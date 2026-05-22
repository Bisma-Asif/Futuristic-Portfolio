import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Monitor } from "lucide-react";

const educationItems = [
  {
    title: "Software Engineering",
    icon: GraduationCap,
    desc: "Foundation in SE principles, algorithms, data structures, and systems design. Learning the core theories that build scalable software.",
    color: "text-primary"
  },
  {
    title: "Self-Taught Developer",
    icon: BookOpen,
    desc: "Continuous learning through building projects, taking online courses, and solving real-world problems. Adapting fast to new frameworks.",
    color: "text-secondary"
  },
  {
    title: "Workshops Conducted",
    icon: Users,
    desc: "Organized and led 5+ web development workshops for student communities. Teaching helps reinforce my own understanding.",
    color: "text-accent"
  },
  {
    title: "University Presentations",
    icon: Monitor,
    desc: "Delivered technical talks on AI, React.js, and modern web dev at university events, advocating for emerging technologies.",
    color: "text-primary"
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif font-bold inline-block relative">
            Education & Learning
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors border border-border group"
            >
              <div className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

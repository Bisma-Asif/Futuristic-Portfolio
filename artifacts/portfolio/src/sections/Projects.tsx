import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";

const projects = [
  {
    title: "RishtaAI",
    description: "AI-powered matchmaking platform for the Pakistani diaspora. Features personality analysis, astrology compatibility, AI predictions, and intelligent matching.",
    tags: ["React.js", "AI", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&fit=crop",
    overlay: "from-purple-900/80 via-purple-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]",
  },
  {
    title: "Portfolio Website",
    description: "Cinematic interactive portfolio built with React, Framer Motion, and GSAP. Features 3D effects, smooth scrolling, and dark mode.",
    tags: ["React.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80&fit=crop",
    overlay: "from-cyan-900/80 via-cyan-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
  },
  {
    title: "WordPress Business Sites",
    description: "Professional WordPress sites with custom themes, responsive design, and SEO. Tailored for small to medium enterprises to drive conversion.",
    tags: ["WordPress", "PHP", "CSS3", "UI/UX"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&fit=crop",
    overlay: "from-blue-900/80 via-blue-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]",
  },
  {
    title: "React.js Web Apps",
    description: "Dynamic frontend applications with real-time data and smooth animations. Built for performance and user engagement.",
    tags: ["React.js", "JavaScript", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&fit=crop",
    overlay: "from-pink-900/80 via-pink-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif font-bold inline-block relative mb-4">
            Featured Projects
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className={`group glass rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-2 ${project.glowClass}`}
              style={{ animation: 'card-hover-glow 3s infinite' }}
            >
              <div className="relative h-52 overflow-hidden rounded-t-2xl group/img">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.overlay}`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/40">
                  <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-white">
                    <Play size={16} className="fill-current" />
                    <span className="text-sm font-medium">Live Preview</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 relative z-10 bg-card">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors border border-primary/20" data-testid={`button-preview-${project.title.replace(/\s+/g, '-').toLowerCase()}`}>
                    <ExternalLink size={16} />
                    <span>Live Preview</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg glass hover:bg-white/10 transition-colors" data-testid={`button-github-${project.title.replace(/\s+/g, '-').toLowerCase()}`}>
                    <Github size={16} />
                    <span>GitHub</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

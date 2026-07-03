import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import rishtaAiImg from "../assets/rishta-ai.png";
import zaraClinciImg from "@assets/screenshots/anumtaasnain_github_io_zara_clinic.png";
import pareesImg from "@assets/screenshots/anumtaasnain-perfumes-parees-web_vercel_app.png";
import askMeImg from "@assets/screenshots/anumtaasnain_github_io_ask_me_mobile.png";
import covidCareImg from "@assets/screenshots/covidcare-production_up_railway_app.png";

const projects = [
  {
    title: "Zara Clinic",
    description:
      "A fully responsive professional website for a therapy clinic. Features appointment booking, therapies listing, gallery, and services pages — designed to build trust and convert visitors into patients.",
    tags: ["WordPress", "HTML", "CSS3", "UI/UX"],
    image: zaraClinciImg,
    overlay: "from-teal-900/80 via-teal-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]",
    liveUrl: "https://anumtaasnain.github.io/zara_clinic/",
    githubUrl: "https://github.com/anumtaasnain/zara_clinic",
  },
  {
    title: "Parees Perfumes",
    description:
      "A luxury e-commerce website for a premium perfume brand. Features product categories, brand showcasing, sale section, and an elegant order flow with cinematic full-screen visuals.",
    tags: ["WordPress", "HTML", "CSS3", "E-Commerce"],
    image: pareesImg,
    overlay: "from-rose-900/80 via-rose-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]",
    liveUrl: "https://anumtaasnain-perfumes-parees-web.vercel.app/",
    githubUrl: "https://github.com/anumtaasnain/perfumes-parees-web",
  },
  {
    title: "Ask Me Mobile",
    description:
      "A sleek multi-brand mobile store website showcasing the latest smartphones and accessories. Features product sliders, brand categories, support pages, and a privacy policy section.",
    tags: ["HTML", "CSS3", "JavaScript", "Bootstrap"],
    image: askMeImg,
    overlay: "from-slate-900/80 via-slate-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(100,116,139,0.3)]",
    liveUrl: "https://anumtaasnain.github.io/ask_me_mobile/",
    githubUrl: "https://github.com/anumtaasnain/ask_me_mobile",
  },
  {
    title: "CovidCare Center",
    description:
      "A full-stack healthcare web application for COVID-19 services. Features specialist listings, testing & vaccination booking, a news section, and secure user registration — deployed on Railway.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: covidCareImg,
    overlay: "from-cyan-900/80 via-cyan-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    liveUrl: "https://covidcare-production.up.railway.app/",
    githubUrl: "https://github.com/anumtaasnain/covidcare",
  },
  {
    title: "RishtaAI",
    description:
      "AI-powered matchmaking platform for the Pakistani diaspora. Features personality analysis, compatibility scoring, AI-driven match predictions, and intelligent partner suggestions.",
    tags: ["React.js", "AI/ML", "Node.js", "Tailwind CSS"],
    image: rishtaAiImg,
    overlay: "from-pink-900/80 via-rose-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]",
    liveUrl: "https://rishta-ai-app.vercel.app/",
    githubUrl: "https://github.com/bismaasif/rishta-ai",
  },
  {
    title: "Portfolio Website",
    description:
      "This cinematic interactive portfolio built with React, Framer Motion, and GSAP. Features scroll-triggered animations, custom cursor, particle background, and full dark mode.",
    tags: ["React.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80&fit=crop",
    overlay: "from-indigo-900/80 via-indigo-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]",
    liveUrl: "#",
    githubUrl: "#",
  },
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
          <p className="text-muted-foreground mt-6 max-w-2xl">
            A selection of real-world projects built for clients and personal ventures — from healthcare platforms to luxury e-commerce and AI startups.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className={`group glass rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-2 ${project.glowClass} flex flex-col`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden group/img flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.overlay}`} />

                {/* Live Preview hover overlay */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/50"
                  data-testid={`link-preview-hover-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-white border border-white/20">
                    <Play size={15} className="fill-current" />
                    <span className="text-sm font-medium">View Live</span>
                  </div>
                </a>
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1 bg-card">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 line-clamp-3 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors border border-primary/20 text-sm font-medium"
                    data-testid={`link-preview-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <ExternalLink size={15} />
                    <span>Live Preview</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg glass hover:bg-white/10 transition-colors text-sm font-medium"
                    data-testid={`link-github-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

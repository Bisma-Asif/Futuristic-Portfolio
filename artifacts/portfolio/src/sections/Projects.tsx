import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";

import rishtaAiImg from "../assets/rishta-ai.png";
import zaraClinciImg from "@assets/screenshots/anumtaasnain_github_io_zara_clinic.png";
import pareesImg from "@assets/screenshots/anumtaasnain-perfumes-parees-web_vercel_app.png";
import askMeImg from "@assets/screenshots/anumtaasnain_github_io_ask_me_mobile.png";
import covidCareImg from "@assets/screenshots/covidcare-production_up_railway_app.png";

import ambreeneImg from "@assets/screenshots/ambreenehtisham_com.png";
import hastenChemImg from "@assets/screenshots/hastenchemical_com.png";
import hastenCleansImg from "@assets/screenshots/hastencleanse_com.png";
import electraImg from "@assets/screenshots/electra_ae.png";
import brandtImg from "@assets/screenshots/brandtplastering_com.png";
import metExtImg from "@assets/screenshots/metexteriors_com.png";
import reviveImg from "@assets/screenshots/reviverenovation_ae.png";
import eyesOnImg from "@assets/screenshots/eyesonoptometry_ca.png";
import smartRenovImg from "@assets/screenshots/smartrenovation_ae.png";
import atelierImg from "@assets/screenshots/atelierinteriors_me.png";
import goldenBalloonImg from "@assets/screenshots/goldenballoon_ae.png";

type Category = "All" | "WordPress" | "React & Frontend" | "AI";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  overlay: string;
  glowClass: string;
  liveUrl: string;
  githubUrl: string;
  category: Category[];
}

const projects: Project[] = [
  /* ── AI ─────────────────────────────────────────────────── */
  {
    title: "RishtaAI",
    description: "AI-powered matchmaking platform for the Pakistani diaspora. Features personality analysis, compatibility scoring, AI-driven match predictions, and intelligent partner suggestions.",
    tags: ["React.js", "AI/ML", "Node.js", "Tailwind CSS"],
    image: rishtaAiImg,
    overlay: "from-orange-900/80 via-amber-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    liveUrl: "https://rishta-ai-app.vercel.app/",
    githubUrl: "https://github.com/bismaasif/rishta-ai",
    category: ["AI"],
  },

  /* ── React & Frontend ───────────────────────────────────── */
  {
    title: "CovidCare Center",
    description: "Full-stack healthcare app for COVID-19 services — specialist listings, testing & vaccination booking, news section, and secure user registration. Deployed on Railway.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: covidCareImg,
    overlay: "from-emerald-900/80 via-teal-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    liveUrl: "https://covidcare-production.up.railway.app/",
    githubUrl: "https://github.com/anumtaasnain/covidcare",
    category: ["React & Frontend"],
  },
  {
    title: "Ask Me Mobile",
    description: "Sleek multi-brand mobile store showcasing the latest smartphones and accessories. Features product sliders, brand categories, and support pages.",
    tags: ["HTML", "CSS3", "JavaScript", "Bootstrap"],
    image: askMeImg,
    overlay: "from-slate-900/80 via-slate-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    liveUrl: "https://anumtaasnain.github.io/ask_me_mobile/",
    githubUrl: "https://github.com/anumtaasnain/ask_me_mobile",
    category: ["React & Frontend"],
  },
  {
    title: "Portfolio Website",
    description: "This cinematic interactive portfolio with React, Framer Motion & GSAP. Features scroll-triggered animations, custom cursor, particle background, and dark mode.",
    tags: ["React.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80&fit=crop",
    overlay: "from-stone-900/80 via-stone-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    liveUrl: "#",
    githubUrl: "#",
    category: ["React & Frontend"],
  },

  /* ── WordPress ──────────────────────────────────────────── */
  {
    title: "Zara Clinic",
    description: "Fully responsive professional website for a therapy clinic with appointment booking, therapies listing, gallery, and services pages.",
    tags: ["WordPress", "HTML", "CSS3", "UI/UX"],
    image: zaraClinciImg,
    overlay: "from-emerald-900/80 via-emerald-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    liveUrl: "https://anumtaasnain.github.io/zara_clinic/",
    githubUrl: "#",
    category: ["WordPress"],
  },
  {
    title: "Parees Perfumes",
    description: "Luxury e-commerce website for a premium perfume brand with product categories, brand showcase, sale section, and cinematic full-screen visuals.",
    tags: ["WordPress", "WooCommerce", "CSS3", "UI/UX"],
    image: pareesImg,
    overlay: "from-amber-900/80 via-amber-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    liveUrl: "https://anumtaasnain-perfumes-parees-web.vercel.app/",
    githubUrl: "#",
    category: ["WordPress"],
  },
  {
    title: "Ambreen Ehtisham",
    description: "Premium e-commerce store for a contemporary Canadian resin artist. Features a full WooCommerce shop, commission system, and elegant art-gallery-style layout.",
    tags: ["WordPress", "WooCommerce", "E-Commerce", "UI/UX"],
    image: ambreeneImg,
    overlay: "from-amber-900/80 via-yellow-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    liveUrl: "https://www.ambreenehtisham.com/",
    githubUrl: "#",
    category: ["WordPress"],
  },
  {
    title: "Hasten Chemical",
    description: "Corporate website for Texas's trusted industrial fly ash & chemical supplier. Includes solutions catalog, raw material pages, partnerships, and media section.",
    tags: ["WordPress", "Corporate", "SEO", "UI/UX"],
    image: hastenChemImg,
    overlay: "from-stone-900/80 via-stone-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    liveUrl: "https://hastenchemical.com/",
    githubUrl: "#",
    category: ["WordPress"],
  },
  {
    title: "Hasten Cleanse",
    description: "Product-focused website for a Texas hydrocarbon cleaning chemical. Features solution pages, technology explainer, FAQ, and an industry insights blog.",
    tags: ["WordPress", "Industrial", "SEO", "UI/UX"],
    image: hastenCleansImg,
    overlay: "from-lime-900/80 via-green-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    liveUrl: "https://hastencleanse.com/",
    githubUrl: "#",
    category: ["WordPress"],
  },
  {
    title: "Electra Abu Dhabi",
    description: "Corporate website for a UAE electrical & lighting solutions company. Showcases brands/products, completed projects, and decade-long expertise since 1965.",
    tags: ["WordPress", "Corporate", "UAE", "UI/UX"],
    image: electraImg,
    overlay: "from-blue-900/80 via-blue-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    liveUrl: "https://electra.ae/",
    githubUrl: "#",
    category: ["WordPress"],
  },
  {
    title: "Brandt Plastering",
    description: "Full-service masonry contractor website for Edmonton, Canada. Covers masonry, limestone plastering, stone products, and project portfolio with blogs.",
    tags: ["WordPress", "Construction", "Canada", "UI/UX"],
    image: brandtImg,
    overlay: "from-red-900/80 via-red-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]",
    liveUrl: "https://brandtplastering.com/",
    githubUrl: "#",
    category: ["WordPress"],
  },
  {
    title: "Met Exteriors",
    description: "Professional masonry and exterior contractor site for Alberta, Canada — EIFS, stucco, siding, lime plaster, stone products, and 40+ years of expertise.",
    tags: ["WordPress", "Construction", "Canada", "SEO"],
    image: metExtImg,
    overlay: "from-stone-900/80 via-red-900/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]",
    liveUrl: "https://metexteriors.com/",
    githubUrl: "#",
    category: ["WordPress"],
  },
  {
    title: "Revive Renovation",
    description: "Premium construction & renovation company website for Dubai — contracting, interior renovation, joinery, and productions. Features portfolio downloads and bilingual content.",
    tags: ["WordPress", "Dubai", "Construction", "UI/UX"],
    image: reviveImg,
    overlay: "from-emerald-900/80 via-green-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    liveUrl: "https://www.reviverenovation.ae/",
    githubUrl: "#",
    category: ["WordPress"],
  },
  {
    title: "Eyes on Optometry",
    description: "Modern optometric clinic website for Canada featuring eye exam booking, services catalog, eyewear info, and a blog — designed to build patient trust.",
    tags: ["WordPress", "Healthcare", "Canada", "UI/UX"],
    image: eyesOnImg,
    overlay: "from-yellow-900/80 via-amber-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    liveUrl: "https://eyesonoptometry.ca/",
    githubUrl: "#",
    category: ["WordPress"],
  },
  {
    title: "Smart Renovation",
    description: "Luxury renovation company website for Dubai with Italian creativity. Showcases services, projects, media coverage, and how-we-work process since 1970.",
    tags: ["WordPress", "Dubai", "Luxury", "UI/UX"],
    image: smartRenovImg,
    overlay: "from-stone-900/80 via-amber-900/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]",
    liveUrl: "https://smartrenovation.ae/",
    githubUrl: "#",
    category: ["WordPress"],
  },
  {
    title: "Atelier Interiors",
    description: "High-end interior design & fitout firm website for Dubai — showcases services, projects, team insights, and enables quote requests. Sophisticated minimal design.",
    tags: ["WordPress", "Dubai", "Interior Design", "UI/UX"],
    image: atelierImg,
    overlay: "from-neutral-900/80 via-stone-800/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    liveUrl: "https://atelierinteriors.me/",
    githubUrl: "#",
    category: ["WordPress"],
  },
  {
    title: "Golden Balloon",
    description: "Advertising & publishing company website for Dubai serving since 1995. Features services, portfolio, and contact with an elegant dark gold premium design.",
    tags: ["WordPress", "Dubai", "Advertising", "UI/UX"],
    image: goldenBalloonImg,
    overlay: "from-yellow-900/80 via-amber-900/40 to-transparent",
    glowClass: "hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]",
    liveUrl: "https://goldenballoon.ae/",
    githubUrl: "#",
    category: ["WordPress"],
  },
];

const TABS: { label: Category | "All"; count: number }[] = [
  { label: "All", count: projects.length },
  { label: "WordPress", count: projects.filter(p => p.category.includes("WordPress")).length },
  { label: "React & Frontend", count: projects.filter(p => p.category.includes("React & Frontend")).length },
  { label: "AI", count: projects.filter(p => p.category.includes("AI")).length },
];

export function Projects() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = active === "All"
    ? projects
    : projects.filter(p => p.category.includes(active as Category));

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10"
        >
          <h2 className="text-4xl font-serif font-bold inline-block relative mb-4">
            Featured Projects
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl">
            Real-world projects delivered for clients across UAE, Canada, USA, and Pakistan — from AI startups to luxury WordPress sites.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map(tab => (
            <button
              key={tab.label}
              onClick={() => setActive(tab.label)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                active === tab.label
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                  : "glass border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {tab.label}
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                active === tab.label ? "bg-primary-foreground/20" : "bg-muted"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 10 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className={`group glass rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-2 ${project.glowClass} flex flex-col`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden flex-shrink-0 group/img">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.overlay}`} />
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/50"
                  >
                    <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-white border border-white/20">
                      <Play size={14} className="fill-current" />
                      <span className="text-sm font-medium">View Live</span>
                    </div>
                  </a>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 bg-card">
                  <h3 className="text-lg font-bold mb-1.5">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors border border-primary/20 text-xs font-semibold"
                    >
                      <ExternalLink size={13} />
                      Live Preview
                    </a>
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg glass hover:bg-white/10 transition-colors text-xs font-semibold"
                      >
                        <Github size={13} />
                        GitHub
                      </a>
                    )}
                    {project.githubUrl === "#" && (
                      <span className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg glass text-muted-foreground text-xs font-semibold opacity-50 cursor-default">
                        <Github size={13} />
                        Private
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

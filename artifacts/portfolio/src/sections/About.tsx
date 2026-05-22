import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const update = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(end * easeOutQuart));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif font-bold inline-block relative">
            About Me
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-lg text-muted-foreground"
          >
            <p>
              I am a passionate Software Engineer and AI enthusiast with a mission to bring innovative tech solutions to life. My journey in tech started with a curiosity for how things work on the web, and it has evolved into founding an AI startup.
            </p>
            <p>
              As the founder of <span className="text-primary font-medium">RishtaAI</span>, I'm building an intelligent matchmaking platform tailored for the Pakistani diaspora, leveraging modern AI to create meaningful connections.
            </p>
            <p>
              Beyond building products, I'm deeply committed to giving back to the community. As a Tech Trainer, I've mentored over 100 students, helping them break into the industry as Frontend and WordPress developers.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Years Experience", value: 3, suffix: "+" },
                { label: "Projects", value: 20, suffix: "+" },
                { label: "Students Mentored", value: 100, suffix: "+" },
                { label: "AI Startup", value: 1, suffix: "" }
              ].map((stat, i) => (
                <div key={i} className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center border-border hover:border-primary/50 transition-colors">
                  <div className="text-4xl font-bold font-serif gradient-text mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-medium text-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Floating cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden md:block absolute -left-12 -top-12 glass p-4 rounded-xl border border-primary/30 glow-purple z-10 w-48 shadow-2xl"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <h3 className="font-bold text-primary mb-1">RishtaAI</h3>
              <p className="text-xs text-muted-foreground">Founder & Lead Engineer</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="hidden md:block absolute -right-8 -bottom-8 glass p-4 rounded-xl border border-secondary/30 glow-cyan z-10 w-48 shadow-2xl"
              style={{ animation: "float 8s ease-in-out infinite" }}
            >
              <h3 className="font-bold text-secondary mb-1">Tech Trainer</h3>
              <p className="text-xs text-muted-foreground">Mentoring the next generation</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

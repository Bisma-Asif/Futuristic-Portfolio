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
          <div className="relative h-96 lg:h-[450px] w-full flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              whileInView={{ opacity: 0.7, scale: 1, rotate: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute top-8 left-8 lg:left-12 w-full h-full max-w-xs rounded-2xl overflow-hidden border border-border"
            >
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80&fit=crop" className="object-cover w-full h-full" alt="Coding setup" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              whileInView={{ opacity: 0.85, scale: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute top-4 left-4 lg:left-6 w-full h-full max-w-xs rounded-2xl overflow-hidden border border-primary/20 glow-purple"
            >
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&fit=crop" className="object-cover w-full h-full" alt="Tech setup" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-0 left-0 w-full h-full max-w-xs rounded-2xl overflow-hidden border-2 border-primary/40 glow-purple"
            >
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop&crop=face" className="object-cover w-full h-full" alt="Bisma Asif" />
              <div className="absolute bottom-4 left-4 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary shadow-lg border border-primary/20">
                AI Startup Founder
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
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

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Years Experience", value: 3, suffix: "+" },
                { label: "Projects", value: 20, suffix: "+" },
                { label: "Students Mentored", value: 100, suffix: "+" },
                { label: "AI Startup", value: 1, suffix: "" }
              ].map((stat, i) => (
                <div key={i} className="glass p-4 rounded-2xl flex flex-col items-center justify-center text-center border-border hover:border-primary/50 transition-colors">
                  <div className="text-3xl font-bold font-serif gradient-text mb-1">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-medium text-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Users, Briefcase, Clock, Presentation, Heart } from "lucide-react";

function Counter({ end, suffix = "", duration = 2000, startWhenInView = false }: { end: number | string, suffix?: string, duration?: number, startWhenInView?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (typeof end === "string") return;
    if (startWhenInView && !isInView) return;
    
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
  }, [end, duration, isInView, startWhenInView]);

  return <span ref={ref}>{typeof end === 'string' ? end : count}{suffix}</span>;
}

const achievements = [
  { label: "AI Startup Founded", value: 1, suffix: "", icon: Rocket, glow: "glow-purple" },
  { label: "Students Mentored", value: 100, suffix: "+", icon: Users, glow: "glow-cyan" },
  { label: "Projects Delivered", value: 20, suffix: "+", icon: Briefcase, glow: "glow-pink" },
  { label: "Years Experience", value: 3, suffix: "+", icon: Clock, glow: "glow-purple" },
  { label: "Workshops Conducted", value: 5, suffix: "+", icon: Presentation, glow: "glow-cyan" },
  { label: "Passion for Code", value: "∞", suffix: "", icon: Heart, glow: "glow-pink" },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-serif font-bold inline-block relative">
            Achievements
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-8 rounded-2xl flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-white/5 ${item.glow.replace('glow-', 'hover:shadow-[0_0_30px_rgba(')}${item.glow.includes('purple')?'147,51,234,0.2)]':item.glow.includes('cyan')?'34,211,238,0.2)]':'236,72,153,0.2)]'}`}
            >
              <item.icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-white transition-colors" />
              <div className="text-5xl font-serif font-bold gradient-text mb-3">
                <Counter end={item.value} suffix={item.suffix} startWhenInView={true} />
              </div>
              <h3 className="font-medium text-foreground">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

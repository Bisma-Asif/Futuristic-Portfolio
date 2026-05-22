import { useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center justify-center">
        <motion.div 
          className="flex space-x-2 text-6xl font-bold font-serif mb-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {['B', 'A'].map((letter, i) => (
            <motion.span 
              key={i}
              className="gradient-text glow-purple"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.h2 
          className="text-xl text-muted-foreground font-sans tracking-[0.2em]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          BISMA ASIF
        </motion.h2>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Bisma built our business website in WordPress. The quality exceeded expectations — responsive, fast, exactly what we needed.",
    author: "Ahmed K.",
    role: "Small Business Owner",
    initials: "AK",
    color: "bg-primary text-white"
  },
  {
    quote: "I learned React.js under Bisma's training and landed my first dev job in 3 months. Her teaching is practical and motivating.",
    author: "Fatima Z.",
    role: "Junior Developer",
    initials: "FZ",
    color: "bg-secondary text-white"
  },
  {
    quote: "RishtaAI is genuinely innovative. Bisma's passion for AI and her technical execution are both impressive.",
    author: "Usman R.",
    role: "Tech Entrepreneur",
    initials: "UR",
    color: "bg-accent text-white"
  },
  {
    quote: "The portfolio Bisma built for me is stunning. Multiple clients have commented on how professional it looks.",
    author: "Sara M.",
    role: "Freelance Designer",
    initials: "SM",
    color: "bg-primary text-white"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-serif font-bold inline-block relative">
            What People Say
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((test, i) => (
                <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4">
                  <div className="glass p-8 rounded-2xl h-full flex flex-col justify-between border-border hover:border-primary/30 transition-colors">
                    <div>
                      <div className="flex space-x-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={16} className="fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-lg italic text-muted-foreground mb-8 line-clamp-4">
                        "{test.quote}"
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-auto">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${test.color}`}>
                        {test.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{test.author}</h4>
                        <p className="text-sm text-muted-foreground">{test.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center mt-12 space-x-6">
            <button 
              onClick={scrollPrev} 
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
              data-testid="button-testimonal-prev"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === selectedIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-testid={`button-testimonal-dot-${i}`}
                />
              ))}
            </div>

            <button 
              onClick={scrollNext} 
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
              data-testid="button-testimonal-next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

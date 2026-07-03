import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, CheckCircle2, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => setIsSuccess(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-background/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif font-bold inline-block relative">
            Let's Connect
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="glass p-8 rounded-2xl border-border">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-[400px] text-center">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-500 glow-cyan"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                    <input 
                      id="name" 
                      required 
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      required 
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                    <input 
                      id="subject" 
                      required 
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                    <textarea 
                      id="message" 
                      required 
                      rows={5} 
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" 
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="mb-8 flex flex-col items-center">
              <div className="relative w-36 h-36 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full border border-primary/20" />
                <div className="absolute inset-0 rounded-full border border-primary/10" style={{ transform: 'rotateX(75deg)', animation: 'spin-slow 8s linear infinite' }} />
                <div className="absolute inset-4 rounded-full border border-secondary/15" style={{ transform: 'rotateY(60deg)', animation: 'spin-slow 6s linear infinite reverse' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary glow-purple" />
                <div className="absolute w-2 h-2 bg-secondary rounded-full" style={{ top: '50%', left: '50%', marginTop: -4, marginLeft: -4, animation: 'orbit 3s linear infinite', transformOrigin: 'center' }} />
              </div>
              <p className="text-center text-sm text-primary font-medium">Based in Pakistan</p>
              <p className="text-center text-xs text-muted-foreground">Available Worldwide</p>
            </div>

            <h3 className="text-2xl font-bold mb-4">Other ways to connect</h3>
            
            <a href="mailto:bismaasif.dev@gmail.com" className="flex items-center space-x-4 p-6 glass rounded-2xl hover:bg-white/5 transition-colors group" data-testid="link-contact-email">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform glow-purple">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium text-foreground">bismaasif.dev@gmail.com</div>
              </div>
            </a>

            <a href="#" className="flex items-center space-x-4 p-6 glass rounded-2xl hover:bg-white/5 transition-colors group" data-testid="link-contact-whatsapp">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <SiWhatsapp size={24} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">WhatsApp</div>
                <div className="font-medium text-foreground">Chat on WhatsApp</div>
              </div>
            </a>

            <a href="#" className="flex items-center space-x-4 p-6 glass rounded-2xl hover:bg-white/5 transition-colors group" data-testid="link-contact-calendly">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform glow-cyan">
                <Calendar size={24} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Calendly</div>
                <div className="font-medium text-foreground">Book a Call</div>
              </div>
            </a>

            <a href="#" className="flex items-center space-x-4 p-6 glass rounded-2xl hover:bg-white/5 transition-colors group" data-testid="link-contact-linkedin">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform glow-purple">
                <Linkedin size={24} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">LinkedIn</div>
                <div className="font-medium text-foreground">Connect on LinkedIn</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

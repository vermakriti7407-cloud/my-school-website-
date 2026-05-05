import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Send, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[hsl(220_60%_10%)] text-primary-foreground pt-20 pb-8 relative overflow-hidden">
      {/* Decorative aurora background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 opacity-5 mandala-bg text-white pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Newsletter Signup Banner */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="max-w-xl relative z-10 text-center md:text-left">
            <h3 className="font-serif text-3xl font-bold text-white mb-2">Join the AS Community</h3>
            <p className="text-white/70">Subscribe to our newsletter for updates on admissions, events, and academic achievements.</p>
          </div>
          <div className="w-full md:w-auto flex-1 max-w-md relative z-10 flex gap-2">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 rounded-xl focus-visible:ring-secondary"
            />
            <Button className="h-14 px-6 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg shadow-secondary/20 transition-all hover:scale-105 border-none">
              Subscribe <Send className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-display font-bold text-2xl border border-white/20 shadow-lg">
                AS
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-white leading-tight">Anglo Sanskrit</span>
                <span className="text-xs font-semibold text-secondary uppercase tracking-[0.2em]">Sr. Sec. School</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              A premium heritage institution in Pundri, offering a harmonious blend of profound Vedic values and progressive global education since its inception.
            </p>
            <div className="space-y-1 bg-white/5 border border-white/10 p-4 rounded-xl inline-block">
              <p className="font-devanagari text-secondary text-xl font-medium">विद्या ददाति विनयं</p>
              <p className="text-xs text-white/70 italic tracking-wider">"Knowledge imparts humility"</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-white tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Admissions", path: "/admissions" },
                { name: "Academics", path: "/academics" },
                { name: "Facilities", path: "/facilities" },
                { name: "Photo Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm text-white/60 hover:text-secondary hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-white tracking-wide uppercase">
              Important Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Fee Structure", path: "/admissions" },
                { name: "Faculty & Staff", path: "/faculty" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm text-white/60 hover:text-secondary hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm font-semibold text-white">Affiliated to BSEH, Bhiwani</p>
              <p className="text-xs text-white/60 mt-1">School Code: 12345</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-white tracking-wide uppercase">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Anglo Sanskrit Sr. Sec. School,<br/>Pundri, District Kaithal,<br/>Haryana - 136026</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+91-9876543210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>info@anglosanskritschool.com</span>
              </li>
            </ul>
            
            <div className="flex items-center gap-3 mt-8">
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 border border-white/10 hover:bg-secondary hover:text-secondary-foreground hover:-translate-y-1 transition-all text-white h-10 w-10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 border border-white/10 hover:bg-secondary hover:text-secondary-foreground hover:-translate-y-1 transition-all text-white h-10 w-10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 border border-white/10 hover:bg-secondary hover:text-secondary-foreground hover:-translate-y-1 transition-all text-white h-10 w-10">
                <Youtube className="w-4 h-4" />
              </Button>
              <a href="mailto:info@anglosanskritschool.com">
                <Button variant="ghost" size="icon" className="rounded-full bg-white/5 border border-white/10 hover:bg-secondary hover:text-secondary-foreground hover:-translate-y-1 transition-all text-white h-10 w-10">
                  <Mail className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50 mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50 text-center w-full">
            &copy; 2025 Anglo Sanskrit Sr. Sec. School, Pundri. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{ backgroundColor: "#25D366" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: "#25D366" }}
          animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <svg viewBox="0 0 32 32" className="w-7 h-7 relative z-10" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.65 4.83 1.79 6.86L2 30l7.34-1.77A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm7.41 19.59c-.31.87-1.82 1.67-2.5 1.77-.65.1-1.47.14-2.37-.15-.55-.17-1.25-.4-2.15-.79-3.79-1.64-6.27-5.45-6.46-5.7-.19-.25-1.56-2.08-1.56-3.97 0-1.89.99-2.82 1.34-3.21.35-.39.76-.49 1.01-.49.25 0 .5.01.72.01.23.01.54-.09.84.64.31.75 1.06 2.6 1.15 2.79.09.19.15.41.03.66-.12.25-.18.4-.36.62-.18.22-.38.49-.54.66-.18.19-.37.39-.16.77.21.38.93 1.54 2 2.49 1.37 1.22 2.53 1.6 2.91 1.78.38.18.6.15.82-.09.22-.24.93-1.09 1.18-1.46.25-.37.5-.31.84-.19.34.12 2.18 1.03 2.55 1.22.37.19.62.28.71.44.09.16.09.93-.22 1.8Z"/>
        </svg>
      </motion.a>

      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg shadow-secondary/20 hover:-translate-y-1 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
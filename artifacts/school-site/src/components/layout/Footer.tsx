import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-[8px] border-secondary relative overflow-hidden">
      {/* Decorative mandala bg */}
      <div className="absolute inset-0 opacity-5 mandala-bg pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-primary font-serif font-bold text-xl border-2 border-secondary shadow-md">
                AS
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-primary-foreground leading-tight">Anglo Sanskrit</span>
                <span className="text-xs font-medium text-secondary uppercase tracking-wider">Sr. Sec. School</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A trusted heritage institution in Pundri offering a blend of traditional Vedic values and modern English-medium education since its inception.
            </p>
            <div className="space-y-2">
              <p className="font-devanagari text-secondary text-xl font-medium">विद्या ददाति विनयं</p>
              <p className="text-xs text-primary-foreground/70 italic">"Knowledge imparts humility"</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-secondary flex items-center">
              <span className="w-6 h-[2px] bg-secondary mr-3"></span>
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
                  <Link href={link.path} className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-secondary flex items-center">
              <span className="w-6 h-[2px] bg-secondary mr-3"></span>
              Information
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Fee Structure", path: "/admissions" },
                { name: "Faculty & Staff", path: "/faculty" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-black/10 rounded-lg border border-white/10">
              <p className="text-sm font-medium text-primary-foreground">Affiliated to BSEH, Bhiwani</p>
              <p className="text-xs text-primary-foreground/70 mt-1">School Code: 12345</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-secondary flex items-center">
              <span className="w-6 h-[2px] bg-secondary mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Anglo Sanskrit Sr. Sec. School,<br/>Pundri, District Kaithal,<br/>Haryana - 136026</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+91-9876543210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>info@anglosanskritschool.com</span>
              </li>
            </ul>
            
            <div className="flex items-center gap-3 mt-6">
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-secondary hover:text-primary text-primary-foreground h-10 w-10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-secondary hover:text-primary text-primary-foreground h-10 w-10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-secondary hover:text-primary text-primary-foreground h-10 w-10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60 text-center md:text-left">
            &copy; {new Date().getFullYear()} Anglo Sanskrit Senior Secondary School, Pundri. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Designed with reverence for heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}

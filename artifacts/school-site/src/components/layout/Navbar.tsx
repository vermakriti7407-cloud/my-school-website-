import { Link, useLocation } from "wouter";
import { Menu, Phone, MapPin, ChevronRight, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useState, useEffect, useRef } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Faculty", path: "/faculty" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navTop, setNavTop] = useState(0);
  const infoBarRef = useRef<HTMLDivElement>(null);
  const isHome = location === "/";

  useEffect(() => {
    const getInfoBarHeight = () => infoBarRef.current?.offsetHeight ?? 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const infoH = getInfoBarHeight();
      setScrolled(scrollY > 50);
      // Navbar top tracks the info bar: starts at infoBarHeight, slides to 0 as user scrolls
      setNavTop(Math.max(0, infoH - scrollY));
    };

    // Set initial top on mount
    setNavTop(getInfoBarHeight());

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = "glass border-b shadow-sm";
  const textClass = "text-primary";
  const mutedTextClass = "text-muted-foreground";

  return (
    <>
      {/* Info bar — NOT fixed, scrolls away with page */}
      <div ref={infoBarRef} className="bg-primary text-primary-foreground py-2 px-4 text-xs md:text-sm font-medium relative overflow-hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 hover:text-secondary cursor-pointer transition-colors">
              <MapPin className="h-3.5 w-3.5 text-secondary" />
              <span className="hidden sm:inline">Pundri, Kaithal, Haryana - 136026</span>
              <span className="sm:hidden">Pundri, Haryana</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-1.5 hover:text-secondary cursor-pointer transition-colors">
              <Phone className="h-3.5 w-3.5 text-secondary" /> +91-9876543210
            </span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Youtube className="w-4 h-4" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar — FIXED, always visible. Starts just below info bar, moves to top-0 as info bar scrolls away */}
      <div className="fixed w-full z-50 left-0" style={{ top: navTop }}>
        <header className={`w-full transition-all duration-300 ${navClass}`}>
          <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center font-display font-bold text-xl md:text-2xl border transition-all duration-500 group-hover:scale-105 shadow-lg bg-primary text-white border-primary/20">
                AS
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-xl md:text-2xl leading-tight transition-colors ${textClass}`}>Anglo Sanskrit</span>
                <span className={`text-xs md:text-sm font-medium uppercase tracking-[0.2em] transition-colors ${mutedTextClass}`}>Sr. Sec. School</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
              {NAV_LINKS.map((link) => {
                const isActive = location === link.path;
                return (
                  <Link key={link.path} href={link.path}>
                    <Button
                      variant="ghost"
                      className={`font-medium rounded-full transition-all duration-300 px-4 ${
                        isActive
                          ? 'bg-primary text-white hover:bg-primary hover:text-white'
                          : 'text-foreground hover:bg-black/5'
                      }`}
                    >
                      {link.name}
                    </Button>
                  </Link>
                );
              })}
            </nav>

            <div className="hidden xl:block">
              <Link href="/admissions">
                <Button className="rounded-full px-6 font-semibold transition-all duration-300 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_20px_rgba(244,185,66,0.3)]">
                  Admissions
                </Button>
              </Link>
            </div>

            {/* Mobile Nav */}
            <div className="xl:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={`${textClass} hover:bg-white/10`}>
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-primary/20 glass bg-white/95">
                  <VisuallyHidden.Root>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Navigation</SheetDescription>
                  </VisuallyHidden.Root>
                  <div className="flex flex-col gap-6 py-6 h-full">
                    <div className="flex items-center gap-3 border-b border-primary/10 pb-6">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-display font-bold text-xl shadow-md">
                        AS
                      </div>
                      <div className="flex flex-col">
                        <span className="font-serif font-bold text-xl text-primary leading-tight">Anglo Sanskrit</span>
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Sr. Sec. School</span>
                      </div>
                    </div>
                    <nav className="flex flex-col gap-1 flex-1">
                      {NAV_LINKS.map((link) => {
                        const isActive = location === link.path;
                        return (
                          <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)}>
                            <span className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all ${
                              isActive
                                ? 'bg-primary text-white shadow-md'
                                : 'text-foreground hover:bg-primary/5 hover:text-primary'
                            }`}>
                              {link.name}
                              {isActive && <ChevronRight className="w-4 h-4" />}
                            </span>
                          </Link>
                        );
                      })}
                      <div className="mt-4 pt-4 border-t border-primary/10">
                        <Link href="/admissions" onClick={() => setIsOpen(false)}>
                          <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl h-12 text-base font-bold shadow-md">
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer so page content doesn't go under the fixed navbar */}
      <div className="h-20 md:h-24" />
    </>
  );
}

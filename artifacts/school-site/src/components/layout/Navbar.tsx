import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useState } from "react";
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

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs md:text-sm font-medium flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> +91-9876543210</span>
          <span className="hidden md:flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> info@anglosanskritschool.com</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline font-devanagari text-primary-foreground/90">तमसो मा ज्योतिर्गमय</span>
          <span>Affiliated to BSEH, Bhiwani</span>
        </div>
      </div>
      
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-serif font-bold text-xl border-2 border-secondary shadow-md">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-primary leading-tight">Anglo Sanskrit</span>
              <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">Sr. Sec. School, Pundri</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button 
                  variant={location === link.path ? "secondary" : "ghost"} 
                  className={`font-medium ${location === link.path ? 'bg-secondary/10 text-primary' : 'text-foreground hover:text-primary hover:bg-secondary/5'}`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-primary bg-background">
                <VisuallyHidden.Root>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Navigation</SheetDescription>
                </VisuallyHidden.Root>
                <div className="flex flex-col gap-6 py-6 h-full">
                  <div className="flex items-center gap-3 border-b pb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-serif font-bold text-lg border-2 border-secondary">
                      AS
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif font-bold text-primary leading-tight">Anglo Sanskrit</span>
                      <span className="text-xs font-medium text-muted-foreground uppercase">Sr. Sec. School</span>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-2 flex-1">
                    {NAV_LINKS.map((link) => (
                      <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)}>
                        <span className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                          location === link.path 
                            ? 'bg-primary/10 text-primary border-l-4 border-primary' 
                            : 'text-foreground hover:bg-secondary/10 hover:text-primary border-l-4 border-transparent'
                        }`}>
                          {link.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto border-t pt-4 text-center">
                    <p className="font-devanagari text-primary text-lg mb-2">विद्या ददाति विनयं</p>
                    <p className="text-sm text-muted-foreground">Knowledge imparts humility</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

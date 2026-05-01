import { useEffect, useState, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap, Bell, MapPin, Phone, Mail, MonitorPlay, FlaskConical, Bus, MicVocal, Star, ChevronLeft, ChevronRight, CheckCircle2, CalendarDays } from "lucide-react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionDivider } from "@/components/layout/SectionDivider";

import photo2 from "@assets/photo2_1777460778481.jpg";
import photo4 from "@assets/photo4_1777460808796.jpg";
import photo3 from "@assets/photo3_1777460794570.jpg";
import photo5 from "@assets/photo5_1777460832099.jpg";
import photo6 from "@assets/photo6_1777460848228.jpg";

const HERO_SLIDES = [
  {
    image: photo2,
    title: "Anglo Sanskrit Sr. Sec. School",
    subtitle: "Where Tradition Meets Tomorrow — Since 1916"
  },
  {
    image: photo4,
    title: "A Century of Excellence",
    subtitle: "Over 109 years of nurturing minds in Pundri, Kaithal"
  },
  {
    image: photo3,
    title: "Holistic Education",
    subtitle: "Hindi & English medium • Co-educational • Classes 1 to 12"
  }
];

const ANNOUNCEMENTS = [
  "Admissions open for Session 2026-27 — Apply before May 31st",
  "Annual Sports Day scheduled for Feb 15, 2026",
  "Class XII students achieve 98% pass rate in BSEH 2025-26 board exams",
  "Science Exhibition winners announced — Congratulations to Team Aryabhatta",
  "Parent-Teacher Meeting on the first Saturday of every month"
];

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>{from}</span>;
}

export default function Home() {
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
  
  const [testimonialsRef, testimonialsApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  useEffect(() => {
    document.title = "Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Dynamic Hero Slider */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-primary pt-20 scroll-mt-24">
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {HERO_SLIDES.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
                <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10" />
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-panel text-white font-semibold text-sm mb-8 shadow-2xl border-white/20"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                    </span>
                    Admissions Open for 2026-27
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl max-w-5xl"
                  >
                    {slide.title}
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8 text-lg md:text-2xl text-white/90 max-w-3xl font-light leading-relaxed drop-shadow-lg"
                  >
                    {slide.subtitle}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12 w-full sm:w-auto"
                  >
                    <Link href="/admissions">
                      <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-secondary to-yellow-400 text-secondary-foreground hover:opacity-90 text-lg h-16 px-10 rounded-full shadow-[0_0_30px_rgba(244,185,66,0.4)] border-none font-bold transition-all hover:scale-105">
                        Enroll Your Child
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                    <Link href="/about">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white text-lg h-16 px-10 rounded-full backdrop-blur-md transition-all hover:scale-105">
                        Explore Campus
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-secondary scale-125" : "bg-white/50 hover:bg-white/80"}`}
              onClick={() => emblaApi?.scrollTo(idx)}
            />
          ))}
        </div>
      </section>

      {/* Announcements Ticker */}
      <div className="bg-primary border-y border-white/10 py-3 overflow-hidden relative z-30 shadow-xl flex">
        <div className="container mx-auto px-4 flex items-center">
          <div className="bg-secondary text-secondary-foreground px-4 py-1.5 font-bold text-xs uppercase tracking-widest rounded-full flex items-center gap-2 shrink-0 z-10 shadow-lg">
            <Bell className="w-3.5 h-3.5" /> Announcements
          </div>
          <div className="flex-1 overflow-hidden ml-4 relative">
            <div className="whitespace-nowrap animate-[marquee_25s_linear_infinite] font-medium text-sm text-white/90 tracking-wide flex items-center">
              {ANNOUNCEMENTS.map((announcement, i) => (
                <span key={i} className="flex items-center">
                  <span className="mx-6 text-secondary">•</span> {announcement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Section - Deep Navy */}
      <section id="stats" className="py-20 md:py-28 relative z-10 bg-[hsl(220_60%_12%)] scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { icon: Trophy, stat: 109, suffix: "+", label: "Years of Legacy" },
              { icon: BookOpen, stat: 50, suffix: "", label: "Classrooms" },
              { icon: BookOpen, stat: 5000, suffix: "+", label: "Library Books" },
              { icon: MonitorPlay, stat: 85, suffix: "", label: "Computers" },
            ].map((fact, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center group p-6 md:p-8 rounded-2xl glass-dark border border-white/10 hover:bg-white/5 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1">
                <div className="w-20 h-20 rounded-2xl bg-white/5 shadow-inner flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-500 border border-white/10">
                  <fact.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-3 tracking-tight flex items-center">
                  <Counter from={0} to={fact.stat} />
                  {fact.suffix}
                </h3>
                <p className="text-sm font-bold text-white/60 uppercase tracking-widest">{fact.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Life at School - Masonry Gallery - Ivory */}
      <section id="gallery" className="py-20 md:py-28 relative bg-background scroll-mt-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            eyebrow="Visual Journey"
            title="Life at Anglo Sanskrit"
            subtitle="Glimpses of everyday excellence, vibrant events, and our premium campus."
            icon={<Trophy className="w-5 h-5 text-secondary" />}
          />

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { src: photo3, alt: "Internal Campus View", title: "Spacious Corridors" },
              { src: photo5, alt: "Inner Courtyard", title: "Lush Green Lawns" },
              { src: photo6, alt: "School Building", title: "Beti Bachao Beti Padhao" },
              { src: "/gallery-4.jpg", alt: "Library", title: "Knowledge Hub" },
              { src: "/gallery-5.jpg", alt: "Science Lab", title: "Practical Learning" },
              { src: "/gallery-6.jpg", alt: "Art Class", title: "Creative Expressions" },
              { src: "/gallery-7.jpg", alt: "Outdoor Activities", title: "Holistic Growth" }
            ].map((img, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl border border-border/40 bg-white"
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_60%_10%)]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white font-serif font-bold text-xl">{img.title}</h4>
                    <p className="text-secondary text-sm font-medium tracking-wider">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/gallery">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 rounded-full font-bold shadow-lg transition-all hover:scale-105">
                View Full Gallery <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* School Facilities Grid - Soft Warm Cream */}
      <section id="facilities" className="py-20 md:py-28 relative overflow-hidden bg-[#Fdfbf7] scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader 
            eyebrow="Infrastructure"
            title="World-Class Facilities"
            subtitle="Providing an elite, high-tech environment designed to foster innovation, comfort, and holistic excellence."
            icon={<MonitorPlay className="w-5 h-5 text-secondary" />}
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Computer Lab", icon: MonitorPlay, desc: "Computer lab with 85 functional computers for teaching and learning." },
              { title: "Library", icon: BookOpen, desc: "Expansive space stocked with 5,000+ books for students of all classes." },
              { title: "Playground", icon: Trophy, desc: "Spacious playground offering adequate space for physical development." },
              { title: "Well-maintained Classrooms", icon: BookOpen, desc: "50 well-maintained classrooms (all in good condition) with reliable electricity." },
              { title: "Essential Amenities", icon: CheckCircle2, desc: "Functional drinking water facility and separate toilets for boys and girls." },
              { title: "Secure Campus", icon: CheckCircle2, desc: "Pucca private school building with permanent boundary wall." }
            ].map((facility, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="bg-white border-border/40 h-full p-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl rounded-2xl">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <facility.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">{facility.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {facility.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <Link href="/facilities">
              <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary hover:text-white h-14 px-10 rounded-full font-bold shadow-sm transition-all hover:scale-105">
                Explore All Facilities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Faculty + Hall of Fame - Soft Navy Tint */}
      <section id="faculty" className="py-20 md:py-28 relative bg-[hsl(220_40%_96%)] scroll-mt-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Faculty */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <SectionHeader 
                eyebrow="Our Mentors"
                title="Meet Our Experts"
                align="left"
                icon={<Users className="w-5 h-5 text-secondary" />}
                className="mb-8"
              />
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { name: "Dr. R.K. Sharma", role: "Principal", qual: "Ph.D., M.Ed.", img: "RS" },
                  { name: "Mrs. M. Verma", role: "HOD Physics", qual: "M.Sc., B.Ed.", img: "MV" },
                  { name: "Mr. S. Rathi", role: "HOD Mathematics", qual: "M.Sc. Maths", img: "SR" },
                  { name: "Dr. S. Vats", role: "PGT Sanskrit", qual: "Ph.D. Sanskrit", img: "SV" }
                ].map((faculty, i) => (
                  <Card key={i} className="bg-white border-border/40 p-6 rounded-2xl flex items-center gap-4 group shadow-lg hover:shadow-xl transition-shadow">
                    <Avatar className="w-16 h-16 border-2 border-primary/10 shadow-sm">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg group-hover:bg-primary group-hover:text-white transition-colors">{faculty.img}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-primary">{faculty.name}</h4>
                      <p className="text-xs text-secondary font-bold uppercase tracking-wider mb-1">{faculty.role}</p>
                      <p className="text-sm text-muted-foreground font-light">{faculty.qual}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <Link href="/faculty">
                <Button variant="link" className="text-primary p-0 h-auto font-bold group text-base">
                  View All Faculty <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Hall of Fame */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <SectionHeader 
                eyebrow="Student Achievements"
                title="Hall of Fame"
                align="left"
                icon={<Star className="w-5 h-5 text-secondary" />}
                className="mb-8"
              />

              <div className="space-y-4">
                {[
                  { name: "Aarav Sharma", achievement: "State Topper Class XII Science 2024-25", icon: Trophy },
                  { name: "Priya Singh", achievement: "National-level Kabaddi Player", icon: Star },
                  { name: "Rohit Verma", achievement: "Gold Medal District Science Olympiad", icon: Trophy }
                ].map((student, i) => (
                  <div key={i} className="bg-primary rounded-2xl p-6 flex items-center gap-6 text-white shadow-lg border border-primary/20 hover:bg-[hsl(220_60%_10%)] transition-colors duration-300">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary shrink-0">
                      <student.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl mb-1">{student.name}</h4>
                      <p className="text-white/70 font-light text-sm">{student.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admissions Process - Deep Navy Band */}
      <section id="admissions" className="py-20 md:py-28 relative bg-[hsl(220_60%_12%)] scroll-mt-24">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity pointer-events-none"></div>
         <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
           
           <SectionHeader 
             eyebrow="Join Us"
             title="Simplified Admission Process"
             subtitle="Take the first step towards a premium educational experience for your child."
             dark={true}
             icon={<CheckCircle2 className="w-5 h-5 text-secondary" />}
           />

           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mx-auto"
           >
              <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 max-w-5xl mx-auto">
                <div className="hidden md:block absolute top-8 left-[10%] w-[80%] h-[2px] bg-white/20 z-0"></div>
                {[
                  { step: "1", title: "Inquiry", desc: "Visit campus or online" },
                  { step: "2", title: "Form Submission", desc: "Submit details & docs" },
                  { step: "3", title: "Interaction", desc: "Meet with educators" },
                  { step: "4", title: "Confirmation", desc: "Complete enrollment" }
                ].map((item, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
                    <div className="w-16 h-16 rounded-full bg-[hsl(220_60%_12%)] border-4 border-secondary flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-xl shadow-secondary/20">
                      {item.step}
                    </div>
                    <h4 className="font-serif font-bold text-lg text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-white/70 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16 text-center">
                <Link href="/admissions">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-10 rounded-full font-bold shadow-lg shadow-secondary/20 transition-all hover:scale-105 text-lg">
                    Admissions Details
                  </Button>
                </Link>
              </div>
           </motion.div>
         </div>
      </section>

      {/* Testimonials - Ivory with faint warm gradient */}
      <section id="testimonials" className="py-20 md:py-28 relative bg-gradient-to-b from-background to-[#fdfbf7] scroll-mt-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
           <SectionHeader 
             eyebrow="Community Voices"
             title="What Parents Say"
             icon={<Users className="w-5 h-5 text-secondary" />}
           />
           
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative max-w-6xl mx-auto"
           >
              <div className="overflow-hidden" ref={testimonialsRef}>
                <div className="flex gap-6 py-4">
                  {[
                    { name: "Anjali Gupta", class: "Mother of Class V student", quote: "The school provides an excellent balance of traditional values and modern education. My son loves going to school every day." },
                    { name: "Rajesh Kumar", class: "Father of Class IX student", quote: "Impressed by the dedication of the teachers. The computer lab and library have really sparked my daughter's curiosity." },
                    { name: "Pooja Desai", class: "Mother of Class II student", quote: "The focus on holistic development is remarkable. It's not just about studies, but also sports, character, and Indian values." },
                    { name: "Vikram Singh", class: "Father of Class XII student", quote: "The BSEH board result preparation is outstanding. The faculty provides individual attention which gave my child great confidence." },
                    { name: "Neha Sharma", class: "Mother of Class III student", quote: "A safe, well-maintained heritage campus with caring teachers. Truly a school the whole Pundri community trusts." }
                  ].map((testimonial, i) => (
                    <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6 first:pl-0">
                      <Card className="bg-white border-border/40 h-full rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-1 mb-6">
                          {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-secondary text-secondary" />)}
                        </div>
                        <p className="text-muted-foreground font-light text-lg italic mb-8 relative">
                          <span className="text-4xl text-primary/10 absolute -top-4 -left-2 font-serif">"</span>
                          {testimonial.quote}
                        </p>
                        <div className="mt-auto border-t border-border/50 pt-6">
                          <p className="font-bold text-primary">{testimonial.name}</p>
                          <p className="text-sm text-secondary font-semibold uppercase tracking-wider">{testimonial.class}</p>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center gap-4 mt-8">
                <Button variant="outline" size="icon" className="rounded-full bg-white border-border/40 shadow-sm hover:bg-primary hover:text-white transition-colors" onClick={() => testimonialsApi?.scrollPrev()}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-white border-border/40 shadow-sm hover:bg-primary hover:text-white transition-colors" onClick={() => testimonialsApi?.scrollNext()}>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Contact Section - Ivory */}
      <section id="contact" className="py-20 md:py-28 relative bg-background scroll-mt-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            eyebrow="Get in Touch"
            title="Contact Us"
            subtitle="Have a question? Leave us a message and our admissions team will get back to you."
            icon={<Phone className="w-5 h-5 text-secondary" />}
          />

           <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-border/40"
              >
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                      <Input required placeholder="Your Name" className="bg-background border-border/50 h-12 focus-visible:ring-secondary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Phone</label>
                      <Input required placeholder="Your Phone" className="bg-background border-border/50 h-12 focus-visible:ring-secondary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                    <Input type="email" placeholder="Your Email" className="bg-background border-border/50 h-12 focus-visible:ring-secondary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                    <Textarea required placeholder="How can we help?" className="bg-background border-border/50 min-h-[120px] focus-visible:ring-secondary resize-none" />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-xl font-bold text-lg shadow-md transition-transform hover:scale-[1.02]">
                    Send Message
                  </Button>
                </form>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="h-full min-h-[500px] rounded-2xl overflow-hidden relative border border-border/40 shadow-lg"
              >
                <iframe 
                  src="https://maps.google.com/maps?q=Anglo+Sanskrit+Sr.+Sec.+School+Pundri+Haryana+136026&output=embed&z=17" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Anglo Sanskrit Sr. Sec. School Location"
                  className="absolute inset-0"
                ></iframe>
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl text-primary shadow-lg border border-border/40">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <h4 className="font-bold">Anglo Sanskrit Sr. Sec. School</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-8">Pundri, District Kaithal, Haryana - 136026</p>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

    </Layout>
  );
}
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap, Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.title = "Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-primary pt-20">
        {/* Soft Radial Glow behind hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-gradient-to-tr from-accent/40 to-secondary/20 rounded-full blur-[100px] md:blur-[150px] opacity-70"></div>
        
        {/* Background Image with Parallax & Floating effect */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10" />
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="/hero-bg.png" 
              alt="Modern Campus" 
              className="w-full h-full object-cover object-center opacity-80"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=2000&auto=format&fit=crop";
              }}
            />
          </motion.div>
        </motion.div>
        
        <div className="container mx-auto px-4 z-20 relative text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-panel text-white font-semibold text-sm mb-8 shadow-2xl border-white/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            Admissions Open for 2024-25
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl"
          >
            Join the <span className="text-gradient-gold italic pr-2">Future.</span><br />
            Respect the Past.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 text-lg md:text-2xl text-white/90 max-w-3xl font-light leading-relaxed"
          >
            Empowering generations in Pundri with a premium blend of profound Vedic values and progressive global education.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
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
      </section>

      {/* Announcements Ticker */}
      <div className="bg-primary border-y border-white/10 py-3 overflow-hidden relative z-30 shadow-xl">
        <div className="container mx-auto px-4 flex items-center">
          <div className="bg-secondary text-secondary-foreground px-4 py-1.5 font-bold text-xs uppercase tracking-widest rounded-full flex items-center gap-2 shrink-0 z-10 shadow-lg">
            <Bell className="w-3.5 h-3.5" /> Updates
          </div>
          <div className="flex-1 overflow-hidden ml-4 relative">
            <div className="whitespace-nowrap animate-[marquee_25s_linear_infinite] font-medium text-sm text-white/90 tracking-wide">
              <span className="mx-6 text-secondary">•</span> Annual Sports Meet scheduled for 15th November 2024.
              <span className="mx-6 text-secondary">•</span> Nursery Admissions forms now available at the school counter.
              <span className="mx-6 text-secondary">•</span> Congratulations to Class 12th students for achieving 100% board results!
              <span className="mx-6 text-secondary">•</span> Parent-Teacher Meeting on 2nd Saturday of the month.
            </div>
          </div>
        </div>
      </div>

      <div className="aurora-bg">
        {/* Quick Facts */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            >
              {[
                { icon: GraduationCap, stat: "30+", label: "Years of Legacy" },
                { icon: Users, stat: "1500+", label: "Happy Students" },
                { icon: BookOpen, stat: "4", label: "Academic Streams" },
                { icon: Trophy, stat: "100%", label: "Board Results" },
              ].map((fact, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center group p-6 rounded-3xl hover:bg-white/50 transition-colors">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-500 border border-border">
                    <fact.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-3 tracking-tight">{fact.stat}</h3>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{fact.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="space-y-10"
              >
                <div className="inline-flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-secondary"></span>
                  <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Welcome</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-[1.1]">
                  Nurturing Minds, <br/>
                  <span className="text-accent">Building Character.</span>
                </h2>
                <p className="text-muted-foreground text-xl leading-relaxed font-light">
                  At Anglo Sanskrit Senior Secondary School, education transcends academic excellence. We shape character, instill values, and prepare leaders who will define tomorrow's global landscape.
                </p>
                <div className="pl-8 border-l-4 border-secondary space-y-6 relative">
                  <div className="absolute -left-3 top-0 text-secondary/30 text-6xl font-serif leading-none">"</div>
                  <p className="font-serif italic text-2xl text-foreground/90 leading-relaxed">
                    Our endeavor is to create an environment where the timeless wisdom of our culture seamlessly integrates with the demands of the modern world.
                  </p>
                  <p className="font-bold text-primary text-lg tracking-wide uppercase">— Dr. R.K. Sharma, Principal</p>
                </div>
                <Link href="/about">
                  <Button variant="link" className="text-accent hover:text-accent/80 p-0 h-auto font-bold group text-lg tracking-wide">
                    Read Full Message
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
                  <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop" alt="School Principal" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-full h-full bg-secondary/20 rounded-[3rem] z-0 blur-xl"></div>
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/20 rounded-full z-0 blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-20 space-y-6"
            >
              <div className="inline-flex items-center gap-4 justify-center w-full">
                <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">The AS Advantage</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary">A Class Apart</h2>
              <p className="text-muted-foreground text-xl font-light">We provide a premium ecosystem that fosters academic rigor, cultural pride, and exceptional personal growth.</p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Cultural Heritage",
                  desc: "Rooted in Vedic values, we instill deep respect for our traditions, combining moral education with global perspectives.",
                  icon: "ॐ"
                },
                {
                  title: "Modern Pedagogy",
                  desc: "State-of-the-art smart classrooms and advanced laboratories ensure our students are ready for the digital future.",
                  icon: "🚀"
                },
                {
                  title: "Holistic Growth",
                  desc: "A balanced focus on elite sports, performing arts, and leadership activities for all-round personality development.",
                  icon: "💎"
                }
              ].map((pillar, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="glass-card border-white/60 h-full p-8 md:p-10 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150"></div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg border border-border group-hover:-translate-y-2 transition-transform duration-500 relative z-10">
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4 relative z-10">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg font-light relative z-10">
                      {pillar.desc}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/50"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ready to Shape the Future?</h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 font-light leading-relaxed">
              Admissions for the upcoming academic session are currently open. Experience the premium education your child deserves.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/admissions">
                <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full shadow-[0_0_30px_rgba(244,185,66,0.3)] font-bold transition-all hover:scale-105">
                  Start Application Process
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 text-lg border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-md transition-all hover:scale-105">
                  Schedule a Campus Tour
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}

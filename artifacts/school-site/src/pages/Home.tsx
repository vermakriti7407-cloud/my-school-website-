import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap, ChevronRight, Bell, Calendar } from "lucide-react";

export default function Home() {
  useEffect(() => {
    document.title = "Anglo Sanskrit Sr. Sec. School, Pundri";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Anglo Sanskrit Senior Secondary School, Pundri - Blending traditional Vedic values with modern English-medium education.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Anglo Sanskrit Senior Secondary School, Pundri - Blending traditional Vedic values with modern English-medium education.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Decorative background color/pattern fallback */}
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat" />
        
        <div className="container mx-auto px-4 z-20 relative pt-20 pb-24 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/90 text-primary font-medium text-sm mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Admissions Open for 2024-25
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Roots in Tradition.<br/>
              <span className="text-secondary italic">Wings for Tomorrow.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              Empowering generations in Pundri with a harmonious blend of profound Vedic values and progressive modern education.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Link href="/admissions">
                <Button size="lg" className="w-full sm:w-auto bg-secondary text-primary hover:bg-secondary/90 text-base h-14 px-8 rounded-full shadow-xl">
                  Enroll Your Child
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white text-base h-14 px-8 rounded-full backdrop-blur-sm">
                  Discover Our Heritage
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom curved mask */}
        <div className="absolute bottom-0 w-full h-16 md:h-24 bg-background z-20" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </section>

      {/* Announcements Ticker */}
      <div className="bg-secondary text-primary py-3 overflow-hidden border-y border-primary/10">
        <div className="container mx-auto px-4 flex items-center">
          <div className="bg-primary text-secondary px-4 py-1 font-bold text-sm uppercase tracking-wider shrink-0 rounded flex items-center gap-2">
            <Bell className="w-4 h-4" /> Updates
          </div>
          <div className="flex-1 overflow-hidden ml-4 relative">
            <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] font-medium text-sm">
              <span className="mx-4">• Annual Sports Meet scheduled for 15th November 2024.</span>
              <span className="mx-4">• Nursery Admissions forms now available at the school counter.</span>
              <span className="mx-4">• Congratulations to Class 12th students for achieving 100% board results!</span>
              <span className="mx-4">• Parent-Teacher Meeting on 2nd Saturday of the month.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: GraduationCap, stat: "30+", label: "Years of Legacy" },
              { icon: Users, stat: "1500+", label: "Happy Students" },
              { icon: BookOpen, stat: "4", label: "Academic Streams" },
              { icon: Trophy, stat: "100%", label: "Board Results" },
            ].map((fact, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <fact.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{fact.stat}</h3>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message & Intro */}
      <section className="py-20 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 mandala-bg pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3">
                <span className="w-12 h-[2px] bg-secondary"></span>
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Welcome</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Nurturing Minds, <br/>
                <span className="text-primary">Building Character.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Anglo Sanskrit Senior Secondary School, we believe that education is not merely about academic excellence, but about shaping character, instilling values, and preparing individuals to contribute meaningfully to society.
              </p>
              <div className="pl-6 border-l-4 border-secondary space-y-4">
                <p className="font-serif italic text-xl text-foreground/80">
                  "Our endeavor is to create an environment where the timeless wisdom of our culture seamlessly integrates with the demands of the modern world."
                </p>
                <p className="font-semibold text-primary">— Dr. R.K. Sharma, Principal</p>
              </div>
              <Link href="/about">
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group text-base">
                  Read Full Message
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop" alt="School Principal" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-secondary rounded-2xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-3 justify-center w-full">
              <span className="w-8 h-[2px] bg-secondary"></span>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">The AS Advantage</span>
              <span className="w-8 h-[2px] bg-secondary"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Why Choose Us?</h2>
            <p className="text-muted-foreground text-lg">We provide a holistic ecosystem that fosters academic rigor, cultural pride, and personal growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Heritage",
                desc: "Rooted in Vedic values, we instill deep respect for our traditions, including daily assembly prayers, yoga, and moral education.",
                icon: "ॐ"
              },
              {
                title: "Modern Pedagogy",
                desc: "Equipped with smart classrooms, advanced science & computer labs to ensure our students are ready for global challenges.",
                icon: "💻"
              },
              {
                title: "Holistic Growth",
                desc: "A balanced focus on sports, arts, and co-curricular activities alongside academics for all-round personality development.",
                icon: "🌱"
              }
            ].map((pillar, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-14 h-14 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Glimpses / Gallery Teaser */}
      <section className="py-24 bg-primary text-primary-foreground relative">
        <div className="absolute inset-0 opacity-5 mandala-bg pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Glimpses of AS Life</h2>
              <p className="text-primary-foreground/80 text-lg">Experience the vibrant energy, focused learning, and joyful celebrations at our campus.</p>
            </div>
            <Link href="/gallery">
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary rounded-full">
                View Full Gallery
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" alt="Classroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <span className="text-white font-serif text-xl font-medium">Interactive Learning</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden group relative aspect-square">
              <img src="https://images.unsplash.com/photo-1546410531-bea4766861cb?q=80&w=600&auto=format&fit=crop" alt="Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-white font-serif font-medium">Science Labs</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden group relative aspect-square">
              <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop" alt="Sports" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-white font-serif font-medium">Sports Ground</span>
              </div>
            </div>
            <div className="col-span-2 rounded-xl overflow-hidden group relative h-48 md:h-auto">
              <img src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=800&auto=format&fit=crop" alt="Library" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-white font-serif font-medium">Rich Library</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Begin Your Child's Journey With Us</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Admissions for the upcoming academic session are currently open. Download the prospectus or visit the campus to learn more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admissions">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-primary hover:bg-primary/90 rounded-full shadow-lg">
                Admission Process
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-primary text-primary hover:bg-primary/5 rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}

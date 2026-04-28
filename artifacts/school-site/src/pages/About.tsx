import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

export default function About() {
  useEffect(() => {
    document.title = "About Us - Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mandala-bg pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Our Institution</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            A legacy of excellence, rooted in Indian traditions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-secondary"></span>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Legacy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Decades of Shaping Futures</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Established with the vision to provide quality education in the heart of Pundri, Anglo Sanskrit Senior Secondary School stands as a beacon of learning. For decades, we have been committed to offering an educational experience that bridges the gap between traditional Indian values and modern global demands.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our campus is a thriving ecosystem where students from diverse backgrounds come together to learn, grow, and excel. Affiliated with the Board of School Education Haryana (BSEH), we ensure rigorous academic standards alongside holistic development.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 relative">
              <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop" alt="School Building" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full z-0 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full z-0 blur-2xl"></div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-muted/40 p-8 md:p-12 rounded-2xl border border-border/50 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl">👁️</span>
              Our Vision
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To be an institution of excellence that nurtures intellectual curiosity, cultural pride, and moral integrity, empowering students to become responsible global citizens while staying deeply connected to their roots.
            </p>
          </div>
          <div className="bg-muted/40 p-8 md:p-12 rounded-2xl border border-border/50 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-secondary text-primary-foreground flex items-center justify-center text-xl">🎯</span>
              Our Mission
            </h3>
            <ul className="space-y-3 text-muted-foreground text-lg">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold mt-1">•</span>
                To provide accessible, high-quality English-medium education.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold mt-1">•</span>
                To foster Vedic values, ethics, and character building.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold mt-1">•</span>
                To equip students with modern skills for the 21st century.
              </li>
            </ul>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Leadership Messages</h2>
            <div className="w-24 h-[3px] bg-secondary mx-auto mt-4"></div>
          </div>

          {/* Chairman */}
          <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 border-4 border-muted shadow-md">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="Chairman" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-primary">Message from the Chairman</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                "Education is the most powerful tool to transform a community. When we laid the foundation of this institution, our dream was to ensure that the children of Pundri and surrounding areas do not have to compromise on quality education. Today, it fills my heart with pride to see our students excelling in various fields while holding onto the cultural ethos we imparted to them. We remain committed to upgrading our infrastructure and pedagogy to meet future challenges."
              </p>
              <div>
                <p className="font-bold text-foreground text-lg">Sh. Ram Niwas Vidyarthi</p>
                <p className="text-sm text-muted-foreground">Manager / Chairman</p>
              </div>
            </div>
          </div>

          {/* Principal */}
          <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-8 md:p-12 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 border-4 border-muted shadow-md">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop" alt="Principal" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 space-y-4 text-center md:text-right">
              <h3 className="text-2xl font-serif font-bold text-primary">Message from the Principal</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                "Welcome to Anglo Sanskrit Sr. Sec. School. Our motto 'Tamaso Ma Jyotirgamaya' guides our daily endeavors. We strive to lead our students from the darkness of ignorance to the light of knowledge. Our dedicated faculty ensures that each child is given individual attention, fostering not just academic excellence, but emotional resilience and moral strength. We invite you to be a part of this vibrant learning community."
              </p>
              <div>
                <p className="font-bold text-foreground text-lg">Dr. R.K. Sharma</p>
                <p className="text-sm text-muted-foreground">Principal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

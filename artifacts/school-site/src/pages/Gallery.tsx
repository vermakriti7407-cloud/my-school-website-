import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Camera } from "lucide-react";

import photo1 from "@assets/photo1_1777460765776.jpg";
import photo2 from "@assets/photo2_1777460778481.jpg";
import photo3 from "@assets/photo3_1777460794570.jpg";
import photo4 from "@assets/photo4_1777460808796.jpg";
import photo5 from "@assets/photo5_1777460832099.jpg";
import photo6 from "@assets/photo6_1777460848228.jpg";

const galleryImages = [
  { id: 1, category: "campus", src: photo2, alt: "School Main Entrance & Signboard" },
  { id: 2, category: "campus", src: photo4, alt: "Front Lawn & Building View" },
  { id: 3, category: "campus", src: photo3, alt: "Inner Courtyard & Corridors" },
  { id: 4, category: "campus", src: photo5, alt: "Garden Quadrangle & Arched Verandah" },
  { id: 5, category: "campus", src: photo6, alt: "Beti Bachao Beti Padhao Wing" },
  { id: 6, category: "events", src: photo1, alt: "School Management Welcome Ceremony" },
];

export default function Gallery() {
  useEffect(() => {
    document.title = "Photo Gallery - Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  const renderGrid = (category: string) => {
    const images = category === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === category);

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="columns-1 sm:columns-2 md:columns-3 gap-6 md:gap-8 mt-12 space-y-6 md:space-y-8"
      >
        {images.map((img, index) => (
          <motion.div 
            key={img.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group rounded-2xl overflow-hidden bg-muted shadow-lg hover:shadow-2xl border border-border/40 break-inside-avoid transition-all duration-300"
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_60%_10%)]/90 via-[hsl(220_60%_10%)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-serif font-bold text-2xl mb-1">
                  {img.alt}
                </p>
                <p className="text-secondary text-sm font-bold tracking-widest uppercase">
                  {img.category}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground pt-32 pb-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url(${photo3})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Visual Journey</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">Photo Gallery</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Authentic moments from our 109-year-old campus in Pundri — buildings, gardens, corridors, and community.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-background min-h-screen relative py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <SectionHeader 
            eyebrow="Our Moments"
            title="Campus in Pictures"
            icon={<Camera className="w-5 h-5 text-secondary" />}
          />

          <Tabs defaultValue="all" className="w-full mt-12">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white p-2 rounded-2xl h-auto flex flex-wrap justify-center gap-2 border border-border/40 shadow-lg">
                <TabsTrigger value="all" className="rounded-xl px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white font-semibold transition-all">All</TabsTrigger>
                <TabsTrigger value="campus" className="rounded-xl px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white font-semibold transition-all">Campus</TabsTrigger>
                <TabsTrigger value="events" className="rounded-xl px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white font-semibold transition-all">Events</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">{renderGrid('all')}</TabsContent>
            <TabsContent value="campus">{renderGrid('campus')}</TabsContent>
            <TabsContent value="events">{renderGrid('events')}</TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

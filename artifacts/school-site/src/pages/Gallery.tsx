import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const galleryImages = [
  { id: 1, category: "campus", src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop", alt: "Premium Campus Exterior" },
  { id: 2, category: "campus", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop", alt: "Architectural Corridors" },
  { id: 3, category: "academic", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop", alt: "Smart Classroom Session" },
  { id: 4, category: "academic", src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop", alt: "Advanced Science Labs" },
  { id: 5, category: "academic", src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1200&auto=format&fit=crop", alt: "Knowledge Resource Center" },
  { id: 6, category: "events", src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop", alt: "Annual Global Symposium" },
  { id: 7, category: "events", src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1200&auto=format&fit=crop", alt: "Cultural Excellence Festival" },
  { id: 8, category: "sports", src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop", alt: "Elite Sports Ground" },
  { id: 9, category: "sports", src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1200&auto=format&fit=crop", alt: "Athletics Championship" },
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12"
      >
        {images.map((img, index) => (
          <motion.div 
            key={img.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group rounded-[2rem] overflow-hidden aspect-[4/3] bg-muted shadow-lg border border-border"
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
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
              Glimpses of world-class infrastructure, events, and everyday excellence at our premium campus.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="aurora-bg min-h-screen">
        <div className="container mx-auto px-4 py-24 max-w-7xl">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="glass p-2 rounded-2xl h-auto flex-wrap justify-center gap-2 border-white/60 shadow-xl">
                <TabsTrigger value="all" className="rounded-xl px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white font-semibold">All</TabsTrigger>
                <TabsTrigger value="campus" className="rounded-xl px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white font-semibold">Campus</TabsTrigger>
                <TabsTrigger value="academic" className="rounded-xl px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white font-semibold">Academics & Labs</TabsTrigger>
                <TabsTrigger value="events" className="rounded-xl px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white font-semibold">Events</TabsTrigger>
                <TabsTrigger value="sports" className="rounded-xl px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white font-semibold">Sports</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">{renderGrid('all')}</TabsContent>
            <TabsContent value="campus">{renderGrid('campus')}</TabsContent>
            <TabsContent value="academic">{renderGrid('academic')}</TabsContent>
            <TabsContent value="events">{renderGrid('events')}</TabsContent>
            <TabsContent value="sports">{renderGrid('sports')}</TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

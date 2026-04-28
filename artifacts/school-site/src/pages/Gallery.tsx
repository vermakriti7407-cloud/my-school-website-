import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const galleryImages = [
  { id: 1, category: "campus", src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop", alt: "School Building Exterior" },
  { id: 2, category: "campus", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop", alt: "School Corridor" },
  { id: 3, category: "academic", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", alt: "Students in Classroom" },
  { id: 4, category: "academic", src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop", alt: "Science Lab Practical" },
  { id: 5, category: "academic", src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=800&auto=format&fit=crop", alt: "Library" },
  { id: 6, category: "events", src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop", alt: "Annual Function" },
  { id: 7, category: "events", src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop", alt: "Republic Day Celebration" },
  { id: 8, category: "sports", src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop", alt: "Sports Ground" },
  { id: 9, category: "sports", src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop", alt: "Annual Sports Meet" },
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 animate-in fade-in duration-500">
        {images.map((img) => (
          <div key={img.id} className="relative group rounded-xl overflow-hidden aspect-[4/3] bg-muted shadow-sm">
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-center font-medium font-serif text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mandala-bg pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Memories, events, and everyday life at our campus.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50 p-1 flex-wrap h-auto justify-center">
              <TabsTrigger value="all" className="px-6 py-2">All</TabsTrigger>
              <TabsTrigger value="campus" className="px-6 py-2">Campus</TabsTrigger>
              <TabsTrigger value="academic" className="px-6 py-2">Academics & Labs</TabsTrigger>
              <TabsTrigger value="events" className="px-6 py-2">Events & Functions</TabsTrigger>
              <TabsTrigger value="sports" className="px-6 py-2">Sports</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">{renderGrid('all')}</TabsContent>
          <TabsContent value="campus">{renderGrid('campus')}</TabsContent>
          <TabsContent value="academic">{renderGrid('academic')}</TabsContent>
          <TabsContent value="events">{renderGrid('events')}</TabsContent>
          <TabsContent value="sports">{renderGrid('sports')}</TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

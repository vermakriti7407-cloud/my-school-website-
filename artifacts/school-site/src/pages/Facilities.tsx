import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { MonitorPlay, FlaskConical, BookOpen, Trophy, Bus, Utensils, Stethoscope, MicVocal } from "lucide-react";

const facilitiesList = [
  {
    title: "Smart Classrooms",
    icon: MonitorPlay,
    desc: "Interactive digital boards in classrooms to make learning engaging and visual. This technology bridges traditional teaching with modern audio-visual aids.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Well-Equipped Science Labs",
    icon: FlaskConical,
    desc: "Separate, fully-equipped laboratories for Physics, Chemistry, and Biology to facilitate hands-on experiments for secondary and senior secondary students.",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Computer Lab",
    icon: MonitorPlay, // reusing icon for simplicity
    desc: "A modern computer lab with internet connectivity to ensure students are tech-savvy and prepared for the digital era from an early age.",
    img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Vast Library",
    icon: BookOpen,
    desc: "A quiet, resourceful space stocked with thousands of books, reference materials, encyclopedias, and periodicals to cultivate a love for reading.",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Sports Ground",
    icon: Trophy,
    desc: "Spacious playgrounds for cricket, volleyball, athletics, and Kho-Kho, promoting physical fitness, teamwork, and sportsmanship among students.",
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Auditorium / Assembly Hall",
    icon: MicVocal,
    desc: "A large hall used for daily morning assemblies, cultural functions, debates, and guest lectures, accommodating a large gathering of students.",
    img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Transport Facility",
    icon: Bus,
    desc: "A fleet of school buses providing safe and reliable transport for students covering Pundri town and nearby villages.",
    img: "https://images.unsplash.com/photo-1557223562-6c77ef16010f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Medical & Health Care",
    icon: Stethoscope,
    desc: "A dedicated medical room with basic first-aid facilities. Regular health check-ups are conducted to ensure student well-being.",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Facilities() {
  useEffect(() => {
    document.title = "Facilities - Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mandala-bg pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Campus Facilities</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Providing a conducive environment for holistic growth and learning.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((facility, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={facility.img} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-secondary text-primary rounded-full flex items-center justify-center shadow-lg">
                  <facility.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{facility.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

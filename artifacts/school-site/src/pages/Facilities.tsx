import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { MonitorPlay, FlaskConical, BookOpen, Trophy, Bus, Stethoscope, MicVocal, Palette } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const facilitiesList = [
  {
    title: "Smart Classrooms",
    icon: MonitorPlay,
    desc: "Interactive digital boards in climate-controlled environments, making learning highly engaging and visually stimulating.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Advanced Science Labs",
    icon: FlaskConical,
    desc: "Premium, fully-equipped laboratories for Physics, Chemistry, and Biology to facilitate cutting-edge hands-on experiments.",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Technology Center",
    icon: MonitorPlay,
    desc: "A futuristic computer lab with high-speed internet and modern workstations to prepare students for the digital era.",
    img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Knowledge Resource Center",
    icon: BookOpen,
    desc: "An expansive, quiet space stocked with thousands of premium books, digital archives, and international periodicals.",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Elite Sports Complex",
    icon: Trophy,
    desc: "Professional-grade sporting facilities for athletics, cricket, and team sports, promoting elite physical fitness.",
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Grand Auditorium",
    icon: MicVocal,
    desc: "A state-of-the-art acoustic hall used for cultural symposiums, debates, and international guest lectures.",
    img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Premium Transport",
    icon: Bus,
    desc: "A modern fleet of GPS-tracked, air-conditioned school buses providing safe and comfortable transit.",
    img: "https://images.unsplash.com/photo-1557223562-6c77ef16010f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Wellness Clinic",
    icon: Stethoscope,
    desc: "A dedicated health center staffed by qualified professionals to ensure complete student well-being.",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop"
  }
];

function FacilityCard({ facility, index }: { facility: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="glass-card rounded-[2rem] overflow-hidden h-full flex flex-col group relative transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(244,185,66,0.2)] border border-white/60"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-10 pointer-events-none rounded-[2rem]"></div>
        
        <div 
          className="h-56 overflow-hidden relative"
          style={{ transform: "translateZ(30px)" }}
        >
          <img 
            src={facility.img} 
            alt={facility.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_60%_12%)]/90 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
            <facility.icon className="w-6 h-6" />
          </div>
        </div>
        
        <div 
          className="p-8 flex-1 flex flex-col relative z-20 bg-white/50 backdrop-blur-md"
          style={{ transform: "translateZ(40px)" }}
        >
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">{facility.title}</h3>
          <p className="text-muted-foreground text-base leading-relaxed font-light flex-1">
            {facility.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Facilities() {
  useEffect(() => {
    document.title = "Premium Facilities - Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">World-Class Infrastructure</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">Campus Facilities</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Providing an elite, high-tech environment designed to foster innovation, comfort, and holistic excellence.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="aurora-bg relative py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {facilitiesList.map((facility, index) => (
              <FacilityCard key={index} facility={facility} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

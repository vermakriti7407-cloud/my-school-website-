import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { MonitorPlay, BookOpen, Trophy, Building2, Droplets, Zap, ShieldCheck, Users, Route } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionDivider } from "@/components/layout/SectionDivider";

import photo2 from "@assets/photo2_1777460778481.jpg";
import photo3 from "@assets/photo3_1777460794570.jpg";
import photo5 from "@assets/photo5_1777460832099.jpg";
import photo6 from "@assets/photo6_1777460848228.jpg";

const facilitiesList = [
  {
    title: "50 Well-Maintained Classrooms",
    icon: Building2,
    desc: "Fifty spacious classrooms—every one in good condition—designed for focused learning and comfort throughout the academic year.",
    img: photo6
  },
  {
    title: "Library — 5,000+ Books",
    icon: BookOpen,
    desc: "An extensive library stocked with over 5,000 books spanning academics, literature, reference, and competitive exam preparation.",
    img: photo3
  },
  {
    title: "Computer Lab — 85 Systems",
    icon: MonitorPlay,
    desc: "A fully functional computer lab with 85 working computers used for teaching, learning, and digital literacy across all classes.",
    img: photo5
  },
  {
    title: "Spacious Playground",
    icon: Trophy,
    desc: "A large open playground for daily sports, physical education, athletics, and inter-house competitions.",
    img: photo2
  },
  {
    title: "Pucca Boundary Wall",
    icon: ShieldCheck,
    desc: "A complete pucca (permanent) boundary wall surrounds the entire campus—ensuring student safety and a secure learning environment.",
    img: photo2
  },
  {
    title: "Tap Water & Electricity",
    icon: Droplets,
    desc: "Reliable functional tap-water drinking facility and uninterrupted electric connection across the entire school building.",
    img: photo5
  },
  {
    title: "Separate Toilet Blocks",
    icon: Users,
    desc: "Ten boys' toilets and ten girls' toilets — all functional and regularly maintained for hygiene and student well-being.",
    img: photo6
  },
  {
    title: "Principal & Admin Rooms",
    icon: Zap,
    desc: "A dedicated room for the Head Master/Principal plus two additional rooms for non-teaching activities and administration.",
    img: photo3
  },
  {
    title: "All-Weather Road Access",
    icon: Route,
    desc: "The school is approachable by an all-weather road, ensuring safe and easy access for students and parents in every season.",
    img: photo2
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
        className="bg-white rounded-2xl overflow-hidden h-full flex flex-col group relative transition-all duration-300 shadow-lg hover:shadow-2xl border border-border/40 hover:-translate-y-1"
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
          
          <div className="absolute bottom-6 left-6 w-14 h-14 bg-white backdrop-blur-md border border-border/40 text-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary/20 transition-colors duration-300">
            <facility.icon className="w-6 h-6" />
          </div>
        </div>
        
        <div 
          className="p-8 flex-1 flex flex-col relative z-20 bg-white"
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
    document.title = "Facilities - Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground pt-32 pb-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url(${photo5})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Our Infrastructure</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">Campus Facilities</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Honest, well-maintained infrastructure built around what students need most — safe spaces, reliable utilities, and room to learn and grow.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#fdfbf7] relative py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <SectionHeader 
            eyebrow="Verified Amenities"
            title="What Our Campus Offers"
            icon={<Building2 className="w-5 h-5 text-secondary" />}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {facilitiesList.map((facility, index) => (
              <FacilityCard key={index} facility={facility} index={index} />
            ))}
          </div>

          <SectionDivider />

          {/* Quick Facts */}
          <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-14 mt-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-10">
              <div>
                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">At a Glance</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                  A Heritage Campus Built for Today
                </h2>
                <p className="text-white/80 text-lg leading-relaxed font-light">
                  Established in 1916, our campus has been continuously cared for, expanded and modernised. Every facility listed here has been independently verified and is fully operational.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "50", label: "Classrooms" },
                  { num: "5,000+", label: "Library Books" },
                  { num: "85", label: "Computers" },
                  { num: "20", label: "Toilets (10 + 10)" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
                    <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">{item.num}</div>
                    <div className="text-white/70 text-sm tracking-wider uppercase font-semibold">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

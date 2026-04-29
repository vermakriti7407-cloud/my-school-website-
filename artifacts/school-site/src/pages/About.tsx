import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { BookOpen, Star, Shield, Award } from "lucide-react";

import photo2 from "@assets/photo2_1777460778481.jpg";
import photo6 from "@assets/photo6_1777460848228.jpg";
import photo1 from "@assets/photo1_1777460765776.jpg";

export default function About() {
  useEffect(() => {
    document.title = "About Us - Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

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
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Our Heritage</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">About Our Institution</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              A legacy of uncompromising excellence, deeply rooted in timeless Indian traditions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="aurora-bg">
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-28 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="space-y-8"
            >
              <SectionHeader 
                eyebrow="Established 1916 • A 109-year legacy"
                title="Decades of Shaping Global Leaders"
                align="left"
                icon={<BookOpen className="w-5 h-5 text-secondary" />}
                className="mb-8"
              />
              <p className="text-muted-foreground leading-relaxed text-base font-light">
                Founded in 1916, Anglo Sanskrit Senior Secondary School stands as one of the oldest educational institutions in the Pundri region. Serving the Pundri-Kaithal community for over 109 years, we are a privately aided pillar of education in Haryana.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base font-light">
                Our institution has continuously evolved while preserving its heritage values. We offer a bilingual (Hindi and English) medium, co-educational environment from Class 1 to Class 12, ensuring rigorous academic standards alongside character-driven development.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white z-10 relative">
                <img src={photo2} alt="School Building" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary/30 rounded-full z-0 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full z-0 blur-3xl"></div>
            </motion.div>
          </div>

          <SectionDivider />

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-10 mb-16 mt-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="bg-white border border-border/40 shadow-lg hover:shadow-2xl transition-shadow p-8 md:p-12 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-125 duration-700"></div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Star className="w-6 h-6" />
                </div>
                Our Vision
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed font-light relative z-10">
                To be an institution of excellence that nurtures intellectual curiosity, cultural pride, and uncompromising moral integrity, empowering students to become responsible citizens while staying deeply connected to their roots.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="bg-white border border-border/40 shadow-lg hover:shadow-2xl transition-shadow p-8 md:p-12 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-125 duration-700"></div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/20 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                  <Shield className="w-6 h-6" />
                </div>
                Our Mission
              </h3>
              <ul className="space-y-4 text-muted-foreground text-base font-light relative z-10">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1 text-xl">•</span>
                  To provide accessible, high-quality bilingual (Hindi & English) education.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1 text-xl">•</span>
                  To foster profound Vedic values, ethics, and character building.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1 text-xl">•</span>
                  To equip students with knowledge and skills for the 21st century.
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full rounded-[2rem] overflow-hidden shadow-2xl border-border/40 relative mb-32 h-64 md:h-96"
          >
             <img src={photo6} alt="Beti Bachao Beti Padhao" className="w-full h-full object-cover object-center" />
          </motion.div>

          <SectionDivider />

          {/* Messages */}
          <div className="space-y-16 mt-20">
            <SectionHeader 
              eyebrow="Guidance & Vision"
              title="Leadership Perspectives"
              icon={<Award className="w-5 h-5 text-secondary" />}
            />

            {/* Chairman */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow border border-border/40 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="w-56 h-56 rounded-full overflow-hidden shrink-0 border-4 border-primary/10 shadow-lg">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="Chairman" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-6 text-center md:text-left relative">
                <div className="absolute -top-6 -left-6 text-accent/10 text-8xl font-serif leading-none hidden md:block">"</div>
                <h3 className="text-2xl font-serif font-bold text-primary">Message from the Chairman</h3>
                <p className="text-muted-foreground leading-relaxed italic text-base font-light relative z-10">
                  "Education is the most powerful tool to transform a community. When we laid the foundation of this institution, our dream was to ensure that the children of Pundri do not have to compromise on premium quality education. Today, it fills my heart with pride to see our students excelling globally while holding onto the cultural ethos we imparted. We remain fiercely committed to upgrading our infrastructure to world-class standards."
                </p>
                <div>
                  <p className="font-bold text-primary text-xl">Sh. Ram Niwas Vidyarthi</p>
                  <p className="text-xs text-secondary font-bold tracking-wider uppercase mt-1">Manager / Chairman</p>
                </div>
              </div>
            </motion.div>

            {/* Principal */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow border border-border/40 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row-reverse gap-12 items-center"
            >
              <div className="w-56 h-56 rounded-full overflow-hidden shrink-0 border-4 border-secondary/20 shadow-lg">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop" alt="Principal" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-6 text-center md:text-right relative">
                <div className="absolute -top-6 -right-6 text-secondary/10 text-8xl font-serif leading-none hidden md:block">"</div>
                <h3 className="text-2xl font-serif font-bold text-primary">Message from the Principal</h3>
                <p className="text-muted-foreground leading-relaxed italic text-base font-light relative z-10">
                  "Welcome to Anglo Sanskrit Sr. Sec. School. Our ancient motto 'Tamaso Ma Jyotirgamaya' guides our modern endeavors. We strive to lead our students from the darkness of ignorance to the brilliant light of knowledge. Our elite faculty ensures that each child is given meticulous attention, fostering not just academic dominance, but emotional resilience and moral strength. We invite you to experience this extraordinary learning community."
                </p>
                <div>
                  <p className="font-bold text-primary text-xl">Dr. R.K. Sharma</p>
                  <p className="text-xs text-secondary font-bold tracking-wider uppercase mt-1">Principal</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
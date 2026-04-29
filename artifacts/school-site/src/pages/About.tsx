import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

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
        <div className="container mx-auto px-4 py-24 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-4">
                <span className="w-12 h-[2px] bg-secondary"></span>
                <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">The AS Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">Decades of Shaping Global Leaders</h2>
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                Established with a visionary mandate to provide elite education in the heart of Pundri, Anglo Sanskrit Senior Secondary School stands as an undisputed beacon of learning. For decades, we have been committed to offering a premium educational experience that bridges the gap between profound Indian values and modern global demands.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                Our campus is a thriving, high-tech ecosystem where students from diverse backgrounds converge to learn, grow, and excel. Affiliated with the Board of School Education Haryana (BSEH), we ensure rigorous academic standards alongside holistic, character-driven development.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white z-10 relative">
                <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop" alt="School Building" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary/30 rounded-full z-0 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full z-0 blur-3xl"></div>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-10 mb-32">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="glass-card p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group border-white/60"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-125 duration-700"></div>
              <h3 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center gap-4">
                <span className="w-14 h-14 rounded-2xl bg-white shadow-md text-accent flex items-center justify-center text-2xl border border-border">👁️</span>
                Our Vision
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-light relative z-10">
                To be an international institution of excellence that nurtures intellectual curiosity, cultural pride, and uncompromising moral integrity, empowering students to become responsible global citizens while staying deeply connected to their roots.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="glass-card p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group border-white/60"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/20 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-125 duration-700"></div>
              <h3 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center gap-4">
                <span className="w-14 h-14 rounded-2xl bg-white shadow-md text-secondary flex items-center justify-center text-2xl border border-border">🎯</span>
                Our Mission
              </h3>
              <ul className="space-y-4 text-muted-foreground text-lg font-light relative z-10">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1 text-xl">•</span>
                  To provide accessible, elite-tier English-medium education.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1 text-xl">•</span>
                  To foster profound Vedic values, ethics, and character building.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1 text-xl">•</span>
                  To equip students with advanced technological skills for the 21st century.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Messages */}
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Guidance & Vision</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Leadership Perspectives</h2>
              <div className="w-24 h-[3px] bg-secondary mx-auto mt-6"></div>
            </motion.div>

            {/* Chairman */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row gap-12 items-center border-white/60"
            >
              <div className="w-56 h-56 rounded-full overflow-hidden shrink-0 border-8 border-white shadow-xl">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="Chairman" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-6 text-center md:text-left relative">
                <div className="absolute -top-6 -left-6 text-accent/10 text-8xl font-serif leading-none hidden md:block">"</div>
                <h3 className="text-3xl font-serif font-bold text-primary">Message from the Chairman</h3>
                <p className="text-muted-foreground leading-relaxed italic text-lg font-light relative z-10">
                  "Education is the most powerful tool to transform a community. When we laid the foundation of this institution, our dream was to ensure that the children of Pundri do not have to compromise on premium quality education. Today, it fills my heart with pride to see our students excelling globally while holding onto the cultural ethos we imparted. We remain fiercely committed to upgrading our infrastructure to world-class standards."
                </p>
                <div>
                  <p className="font-bold text-primary text-xl">Sh. Ram Niwas Vidyarthi</p>
                  <p className="text-sm text-accent font-semibold tracking-wider uppercase mt-1">Manager / Chairman</p>
                </div>
              </div>
            </motion.div>

            {/* Principal */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row-reverse gap-12 items-center border-white/60"
            >
              <div className="w-56 h-56 rounded-full overflow-hidden shrink-0 border-8 border-white shadow-xl">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop" alt="Principal" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-6 text-center md:text-right relative">
                <div className="absolute -top-6 -right-6 text-secondary/10 text-8xl font-serif leading-none hidden md:block">"</div>
                <h3 className="text-3xl font-serif font-bold text-primary">Message from the Principal</h3>
                <p className="text-muted-foreground leading-relaxed italic text-lg font-light relative z-10">
                  "Welcome to Anglo Sanskrit Sr. Sec. School. Our ancient motto 'Tamaso Ma Jyotirgamaya' guides our modern endeavors. We strive to lead our students from the darkness of ignorance to the brilliant light of knowledge. Our elite faculty ensures that each child is given meticulous attention, fostering not just academic dominance, but emotional resilience and moral strength. We invite you to experience this extraordinary learning community."
                </p>
                <div>
                  <p className="font-bold text-primary text-xl">Dr. R.K. Sharma</p>
                  <p className="text-sm text-accent font-semibold tracking-wider uppercase mt-1">Principal</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

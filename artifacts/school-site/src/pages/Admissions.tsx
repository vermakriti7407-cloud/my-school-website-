import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, CheckCircle2, CalendarDays, FileText, UserPlus, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionDivider } from "@/components/layout/SectionDivider";

export default function Admissions() {
  useEffect(() => {
    document.title = "Admissions - Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
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
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Join Our Community</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">Admissions</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Take the first step towards a premium educational experience for your child.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-background relative py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-20 md:space-y-32">
          
          {/* Important Dates Notice */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl border border-border/40 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
            <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0 border border-secondary/20">
              <CalendarDays className="w-10 h-10" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-serif font-bold text-primary mb-2">Admissions Open</h3>
              <p className="text-muted-foreground text-lg font-light">Registration forms for Class 1 to Class 11 are available at the school reception between 9:00 AM and 2:00 PM on all working days.</p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
               <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 h-14 px-8 rounded-full shadow-lg font-bold text-base transition-transform hover:scale-105">
                 <Download className="mr-2 w-5 h-5" /> Download Form
               </Button>
            </div>
          </motion.div>

          <SectionDivider />

          {/* Admission Process Step-by-Step */}
          <section>
            <SectionHeader 
              eyebrow="Application"
              title="The Admission Process"
              icon={<UserPlus className="w-5 h-5 text-secondary" />}
            />
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-4 gap-8 relative"
            >
              <div className="hidden md:block absolute top-16 left-[10%] w-[80%] h-[2px] border-t-2 border-dashed border-border/60 z-0"></div>
              
              {[
                { step: "01", title: "Registration", desc: "Obtain the registration form from the school office or download it from the website." },
                { step: "02", title: "Submission", desc: "Submit the meticulously filled form along with necessary documents and registration fee." },
                { step: "03", title: "Assessment", desc: "Informal interaction for pre-primary. Basic comprehensive assessment test for higher classes." },
                { step: "04", title: "Enrollment", desc: "Upon selection, pay the admission fee to secure the seat and complete enrollment." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-4xl font-display font-bold text-primary mb-8 shadow-lg group-hover:-translate-y-2 transition-transform duration-500 border border-border/40 relative">
                    <div className="absolute inset-2 border-2 border-dashed border-secondary/30 rounded-full group-hover:rotate-12 transition-transform duration-700"></div>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground text-base font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <SectionDivider />

          {/* Two Col Layout: Age Criteria & Documents */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Age Criteria */}
            <motion.section 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                Age Criteria
              </h2>
              <Card className="bg-white border border-border/40 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-primary/5 border-b border-border/50">
                        <th className="p-6 font-bold text-primary text-lg">Class</th>
                        <th className="p-6 font-bold text-primary text-lg">Age Requirement<br/><span className="text-sm font-normal text-muted-foreground">(as on 31st March)</span></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50 text-muted-foreground text-base">
                      <tr className="hover:bg-primary/5 transition-colors"><td className="p-6 font-semibold text-foreground">Class 1</td><td className="p-6 font-light">6+ Years</td></tr>
                      <tr className="hover:bg-primary/5 transition-colors"><td className="p-6 font-semibold text-foreground">Class 2 onwards</td><td className="p-6 font-light">Based on previous class passing certificate</td></tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </motion.section>

            {/* Documents Required */}
            <motion.section 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-secondary" />
                </div>
                Required Documents
              </h2>
              <Card className="bg-[hsl(220_60%_12%)] text-white border-none h-full rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
                <CardContent className="p-8 md:p-10 space-y-8 relative z-10">
                  <p className="text-base text-white/70 font-light border-b border-white/10 pb-6">Please bring self-attested photocopies along with original documents for verification at the time of admission.</p>
                  <ul className="space-y-5">
                    {[
                      "Birth Certificate issued by Municipal Corporation.",
                      "Aadhar Card of the student and parents.",
                      "4 recent passport-size photographs of the student.",
                      "School Leaving Certificate (SLC) / Transfer Certificate.",
                      "Report Card / Marksheet of the previous class.",
                      "Parivar Pehchan Patra (Family ID) - Haryana.",
                    ].map((doc, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                        <span className="text-base text-white/90 font-light leading-relaxed">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.section>

          </div>

          <SectionDivider />

          {/* Fee Structure Note */}
          <motion.section 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#fdfbf7] border border-border/40 rounded-[2rem] p-12 md:p-16 shadow-lg text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <FileText className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Premium Value, Transparent Structure</h2>
              <p className="text-muted-foreground text-lg mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                Our fee structure is meticulously designed to reflect the premium quality of education and world-class infrastructure provided, while remaining transparent and devoid of hidden costs. The detailed fee chart for the current academic session is available exclusively at the school accounts office.
              </p>
              <Button size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-base shadow-lg hover:scale-105 transition-all">
                Contact Office for Fee Details
              </Button>
            </div>
          </motion.section>

        </div>
      </div>
    </Layout>
  );
}
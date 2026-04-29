import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const departments = [
  {
    name: "Leadership",
    staff: [
      { name: "Dr. R.K. Sharma", role: "Principal", qual: "M.A., M.Ed., Ph.D.", exp: "25+ years" },
      { name: "Mr. Rajinder Singh", role: "Vice Principal", qual: "M.Sc., B.Ed.", exp: "20+ years" },
    ]
  },
  {
    name: "Department of Sciences",
    staff: [
      { name: "Mrs. Meenakshi Verma", role: "HOD / PGT Physics", qual: "M.Sc. Physics, B.Ed.", exp: "15 years" },
      { name: "Mr. Anil Kumar", role: "PGT Chemistry", qual: "M.Sc. Chemistry, B.Ed.", exp: "12 years" },
      { name: "Ms. Priyanka Sharma", role: "PGT Biology", qual: "M.Sc. Botany, B.Ed.", exp: "8 years" },
      { name: "Mr. Sunil Dahiya", role: "TGT Science", qual: "B.Sc., B.Ed.", exp: "10 years" },
    ]
  },
  {
    name: "Department of Mathematics",
    staff: [
      { name: "Mr. Suresh Rathi", role: "HOD / PGT Mathematics", qual: "M.Sc. Maths, B.Ed.", exp: "18 years" },
      { name: "Mr. Amit Bansal", role: "TGT Mathematics", qual: "B.Sc. Maths Hons., B.Ed.", exp: "7 years" },
      { name: "Mrs. Kavita Rani", role: "PRT Mathematics", qual: "B.A., JBT", exp: "14 years" },
    ]
  },
  {
    name: "Department of Humanities & Commerce",
    staff: [
      { name: "Mr. Rajesh Goyal", role: "HOD Commerce", qual: "M.Com., B.Ed.", exp: "16 years" },
      { name: "Mrs. Sunita Devi", role: "PGT Economics", qual: "M.A. Economics, B.Ed.", exp: "11 years" },
      { name: "Mr. Dharamvir Singh", role: "PGT History / Pol. Sci.", qual: "M.A. History, B.Ed.", exp: "13 years" },
    ]
  },
  {
    name: "Department of Languages",
    staff: [
      { name: "Mrs. Anjali Sharma", role: "HOD English", qual: "M.A. English, B.Ed.", exp: "19 years" },
      { name: "Dr. Sushma Vats", role: "PGT Hindi/Sanskrit", qual: "M.A., Ph.D. Sanskrit", exp: "22 years" },
      { name: "Mr. Vikas Kumar", role: "TGT English", qual: "B.A. English Hons., B.Ed.", exp: "5 years" },
    ]
  },
  {
    name: "Primary & Co-Scholastic",
    staff: [
      { name: "Mrs. Poonam Malik", role: "Primary Co-ordinator", qual: "B.A., N.T.T.", exp: "15 years" },
      { name: "Mr. Deepak Dhiman", role: "PTI (Physical Education)", qual: "B.P.Ed., M.P.Ed.", exp: "10 years" },
      { name: "Ms. Ritu Saini", role: "Computer Instructor", qual: "MCA", exp: "6 years" },
      { name: "Mr. Jagdish Chander", role: "Art & Craft Teacher", qual: "B.F.A.", exp: "12 years" },
    ]
  }
];

export default function Faculty() {
  useEffect(() => {
    document.title = "Faculty & Staff - Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  const getInitials = (name: string) => {
    return name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/, '').split(' ').map(n => n[0]).join('').substring(0, 2);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Elite Educators</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">Our Faculty</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Distinguished mentors dedicated to nurturing the next generation of global leaders.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="aurora-bg relative py-24">
        <div className="container mx-auto px-4 max-w-7xl space-y-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              The supreme strength of Anglo Sanskrit School lies in its highly qualified, internationally experienced, and intensely dedicated teaching faculty. Our educators are not merely subject matter experts; they are visionaries who guide students through their academic and personal journeys.
            </p>
          </motion.div>

          {departments.map((dept, i) => (
            <motion.section 
              key={i} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="space-y-10"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <h2 className="text-3xl font-serif font-bold text-primary">
                  {dept.name}
                </h2>
                <div className="h-[2px] flex-1 bg-border/50 hidden md:block"></div>
              </motion.div>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {dept.staff.map((teacher, j) => (
                  <motion.div key={j} variants={fadeUp}>
                    <Card className="glass-card border-white/60 h-full overflow-hidden group rounded-[2rem]">
                      <div className="h-3 bg-gradient-to-r from-secondary to-yellow-400 group-hover:h-4 transition-all duration-300"></div>
                      <CardContent className="p-8 text-center space-y-6">
                        <div className="relative w-28 h-28 mx-auto">
                          <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:bg-secondary/40 transition-colors"></div>
                          <Avatar className="w-28 h-28 border-4 border-white shadow-xl relative z-10">
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${teacher.name}`} alt={teacher.name} />
                            <AvatarFallback className="bg-primary text-primary-foreground font-display font-bold text-3xl">
                              {getInitials(teacher.name)}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-xl text-foreground mb-1">{teacher.name}</h3>
                          <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">{teacher.role}</p>
                          <div className="pt-4 border-t border-border/50 text-sm text-muted-foreground space-y-2 font-light">
                            <p className="flex justify-between">
                              <span className="font-semibold text-foreground/70">Qualifications</span> 
                              <span className="text-right truncate ml-2">{teacher.qual}</span>
                            </p>
                            <p className="flex justify-between">
                              <span className="font-semibold text-foreground/70">Experience</span> 
                              <span>{teacher.exp}</span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}

        </div>
      </div>
    </Layout>
  );
}

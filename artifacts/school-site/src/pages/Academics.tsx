import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FlaskConical, Calculator, Landmark, Award } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionDivider } from "@/components/layout/SectionDivider";

export default function Academics() {
  useEffect(() => {
    document.title = "Academics - Anglo Sanskrit Sr. Sec. School, Pundri";
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Excellence in Education</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">Academics & Curriculum</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              A comprehensive, forward-thinking curriculum aligned with BSEH guidelines, designed to build future leaders.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#fdfbf7] relative py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-20 md:space-y-32">
          
          {/* Affiliation Info */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 bg-white shadow-xl text-accent rounded-2xl flex items-center justify-center mx-auto mb-8 border border-border">
              <BookOpen className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary">Affiliated to BSEH, Bhiwani</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Our institution rigorously follows the curriculum and guidelines prescribed by the Board of School Education Haryana (BSEH). We offer a structured, progressive academic framework from Class 1 up to Class 12, ensuring our students are impeccably prepared for board examinations and global competitive entrance tests.
            </p>
          </motion.section>

          <SectionDivider />

          {/* Curriculum Levels */}
          <section>
            <SectionHeader 
              eyebrow="Academic Stages"
              title="Curriculum Structure"
              icon={<Award className="w-5 h-5 text-secondary" />}
            />
            
            <Tabs defaultValue="primary" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-white p-2 rounded-2xl h-auto flex flex-wrap gap-2 border border-border/40 shadow-lg justify-center">
                  <TabsTrigger value="primary" className="rounded-xl px-6 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md transition-all">Primary</TabsTrigger>
                  <TabsTrigger value="middle" className="rounded-xl px-6 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md transition-all">Middle</TabsTrigger>
                  <TabsTrigger value="secondary" className="rounded-xl px-6 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md transition-all">Secondary</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="primary" className="mt-0">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <Card className="bg-white border-border/40 p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
                    <CardHeader className="px-0 pt-0 text-center md:text-left border-b border-border/50 pb-6 mb-6">
                      <CardTitle className="font-serif text-3xl text-primary">Primary (Classes 1 to 5)</CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0 space-y-6 text-muted-foreground text-lg font-light">
                      <p>Transitioning into formal schooling, the primary curriculum focuses on building strong foundational concepts across core subjects while encouraging curiosity and creative expression.</p>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> <strong>Core Subjects:</strong> English, Hindi, Mathematics, EVS (Environmental Studies)</li>
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> <strong>Co-Scholastic:</strong> Computer Science, General Knowledge, Moral Science</li>
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> <strong>Activities:</strong> Drawing, Music, Physical Training</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="middle" className="mt-0">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <Card className="bg-white border-border/40 p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
                    <CardHeader className="px-0 pt-0 text-center md:text-left border-b border-border/50 pb-6 mb-6">
                      <CardTitle className="font-serif text-3xl text-primary">Middle (Classes 6 to 8)</CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0 space-y-6 text-muted-foreground text-lg font-light">
                      <p>The middle school curriculum broadens to introduce specialized subjects. The focus shifts towards independent learning, analytical thinking, and project-based assignments.</p>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> <strong>Languages:</strong> English, Hindi, Sanskrit</li>
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> <strong>Core Subjects:</strong> Mathematics, Science, Social Science (History, Geography, Civics)</li>
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> <strong>Co-Scholastic:</strong> Computer Science, Art & Craft, Physical Education</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="secondary" className="mt-0">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <Card className="bg-white border-border/40 p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
                    <CardHeader className="px-0 pt-0 text-center md:text-left border-b border-border/50 pb-6 mb-6">
                      <CardTitle className="font-serif text-3xl text-primary">Secondary (Classes 9 & 10)</CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0 space-y-6 text-muted-foreground text-lg font-light">
                      <p>Preparation for the crucial board examinations begins here. The academic rigor increases exponentially, aligned strictly with BSEH syllabi and exam patterns, supplemented by advanced practical lab work.</p>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> <strong>Compulsory Subjects:</strong> English, Hindi, Mathematics, Science, Social Science</li>
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> <strong>Additional:</strong> Skill Subjects as per board provisions</li>
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> <strong>Focus:</strong> Board-pattern testing, continuous evaluation, and extensive practicals</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </section>

          <SectionDivider />

          {/* Senior Secondary Streams */}
          <section className="bg-[hsl(220_60%_12%)] rounded-3xl p-10 md:p-16 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <SectionHeader 
              eyebrow="Specialization"
              title="Senior Secondary (Classes 11 & 12)"
              subtitle="Comprehensive streams offering specialized knowledge for elite higher education."
              dark={true}
              icon={<Award className="w-5 h-5 text-secondary" />}
            />

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-3 gap-8 relative z-10"
            >
              <motion.div variants={fadeUp}>
                <Card className="bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 h-full rounded-2xl text-white shadow-xl hover:-translate-y-1">
                  <CardHeader className="pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-yellow-500 text-secondary-foreground rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <FlaskConical className="w-8 h-8" />
                    </div>
                    <CardTitle className="font-serif text-2xl">Science</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-white/80 font-light">
                      <li><span className="font-semibold text-white">Compulsory:</span> English</li>
                      <li><span className="font-semibold text-white">Non-Medical:</span> Physics, Chemistry, Mathematics</li>
                      <li><span className="font-semibold text-white">Medical:</span> Physics, Chemistry, Biology</li>
                      <li><span className="font-semibold text-white">Optional:</span> Physical Education, Computer Science</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 h-full rounded-2xl text-white shadow-xl hover:-translate-y-1">
                  <CardHeader className="pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-400 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Calculator className="w-8 h-8" />
                    </div>
                    <CardTitle className="font-serif text-2xl">Commerce</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-white/80 font-light">
                      <li><span className="font-semibold text-white">Compulsory:</span> English</li>
                      <li><span className="font-semibold text-white">Core Subjects:</span> Accountancy, Business Studies, Economics</li>
                      <li><span className="font-semibold text-white">Optional:</span> Mathematics, Physical Education</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 h-full rounded-2xl text-white shadow-xl hover:-translate-y-1">
                  <CardHeader className="pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-400 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Landmark className="w-8 h-8" />
                    </div>
                    <CardTitle className="font-serif text-2xl">Arts / Humanities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-white/80 font-light">
                      <li><span className="font-semibold text-white">Compulsory:</span> English, Hindi</li>
                      <li><span className="font-semibold text-white">Electives (3):</span> History, Pol. Science, Geography, Economics, Sanskrit</li>
                      <li><span className="font-semibold text-white">Optional:</span> Physical Education</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          <SectionDivider />

          {/* Assessment Approach */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="max-w-4xl mx-auto"
          >
            <SectionHeader 
              eyebrow="Evaluation"
              title="Assessment & Evaluation"
              align="center"
            />
            <div className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed">
              <p className="text-xl text-center mb-12">Our evaluation system is meticulously designed to assess the holistic development of the child, moving far beyond rote memorization into real-world application.</p>
              <ul className="mt-8 space-y-6 list-none pl-0">
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 border border-secondary/20">1</div>
                  <div><strong className="text-foreground text-xl block mb-1">Continuous Comprehensive Evaluation</strong> Regular unit tests, periodic assessments, and term exams to monitor progress continuously and scientifically.</div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 border border-secondary/20">2</div>
                  <div><strong className="text-foreground text-xl block mb-1">Practical Learning</strong> Extensive emphasis on high-tech laboratory work in Sciences, and rigorous project work in Humanities and Commerce.</div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 border border-secondary/20">3</div>
                  <div><strong className="text-foreground text-xl block mb-1">Co-Scholastic Assessment</strong> Advanced grading on life skills, leadership attitudes, core values, sports excellence, and co-curricular dominance.</div>
                </li>
              </ul>
            </div>
          </motion.section>

        </div>
      </div>
    </Layout>
  );
}
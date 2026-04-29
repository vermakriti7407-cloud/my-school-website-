import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FlaskConical, Calculator, Landmark } from "lucide-react";
import { motion } from "framer-motion";

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

      <div className="aurora-bg relative py-24">
        <div className="container mx-auto px-4 max-w-6xl space-y-32">
          
          {/* Affiliation Info */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 bg-white shadow-xl text-accent rounded-2xl flex items-center justify-center mx-auto mb-8 border border-border">
              <BookOpen className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary">Affiliated to BSEH, Bhiwani</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Our institution rigorously follows the curriculum and guidelines prescribed by the Board of School Education Haryana (BSEH). We offer a structured, progressive academic framework from Nursery up to Class 12, ensuring our students are impeccably prepared for board examinations and global competitive entrance tests.
            </p>
          </motion.section>

          {/* Curriculum Levels */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-serif font-bold text-primary">Curriculum Structure</h2>
              <div className="w-24 h-[3px] bg-secondary mx-auto mt-6"></div>
            </motion.div>
            
            <Tabs defaultValue="primary" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 glass p-2 rounded-2xl h-auto gap-2">
                <TabsTrigger value="pre" className="rounded-xl py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white">Pre-Primary</TabsTrigger>
                <TabsTrigger value="primary" className="rounded-xl py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white">Primary</TabsTrigger>
                <TabsTrigger value="middle" className="rounded-xl py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white">Middle</TabsTrigger>
                <TabsTrigger value="secondary" className="rounded-xl py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white">Secondary</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pre" className="mt-0">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <Card className="glass-card border-white/60 p-6 md:p-10 rounded-[2rem]">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="font-serif text-3xl text-primary">Pre-Primary (Nursery, LKG, UKG)</CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0 space-y-6 text-muted-foreground text-lg font-light">
                      <p>The foundation years focus on play-way methods, sensory-motor development, and basic cognitive skills. We emphasize a stress-free environment where learning happens through structured exploration.</p>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> Language & Phonics (English & Hindi)</li>
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> Number concepts & basic mathematics</li>
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> Rhymes, stories, and expressive art & craft</li>
                        <li className="flex items-start gap-3"><span className="text-secondary font-bold text-xl leading-none">•</span> Environmental awareness and social skills</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="primary" className="mt-0">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <Card className="glass-card border-white/60 p-6 md:p-10 rounded-[2rem]">
                    <CardHeader className="px-0 pt-0">
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
                  <Card className="glass-card border-white/60 p-6 md:p-10 rounded-[2rem]">
                    <CardHeader className="px-0 pt-0">
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
                  <Card className="glass-card border-white/60 p-6 md:p-10 rounded-[2rem]">
                    <CardHeader className="px-0 pt-0">
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

          {/* Senior Secondary Streams */}
          <section className="glass-dark rounded-[3rem] p-10 md:p-16 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl font-serif font-bold text-white">Senior Secondary (Classes 11 & 12)</h2>
              <p className="text-white/70 mt-4 text-xl font-light">Comprehensive streams offering specialized knowledge for elite higher education.</p>
              <div className="w-24 h-[3px] bg-secondary mx-auto mt-8"></div>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-3 gap-8 relative z-10"
            >
              <motion.div variants={fadeUp}>
                <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300 h-full rounded-[2rem] text-white">
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
                <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300 h-full rounded-[2rem] text-white">
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
                <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300 h-full rounded-[2rem] text-white">
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

          {/* Assessment Approach */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-8 max-w-4xl"
          >
            <h2 className="text-4xl font-serif font-bold text-primary">Assessment & Evaluation</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed">
              <p className="text-xl">Our evaluation system is meticulously designed to assess the holistic development of the child, moving far beyond rote memorization into real-world application.</p>
              <ul className="mt-8 space-y-6 list-none pl-0">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-1">1</div>
                  <div><strong className="text-foreground text-xl block mb-1">Continuous Comprehensive Evaluation</strong> Regular unit tests, periodic assessments, and term exams to monitor progress continuously and scientifically.</div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-1">2</div>
                  <div><strong className="text-foreground text-xl block mb-1">Practical Learning</strong> Extensive emphasis on high-tech laboratory work in Sciences, and rigorous project work in Humanities and Commerce.</div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-1">3</div>
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

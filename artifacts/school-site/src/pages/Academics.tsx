import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FlaskConical, Calculator, Landmark } from "lucide-react";

export default function Academics() {
  useEffect(() => {
    document.title = "Academics - Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mandala-bg pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Academics & Curriculum</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive education aligned with BSEH guidelines.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl space-y-20">
        
        {/* Affiliation Info */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-foreground">Affiliated to BSEH, Bhiwani</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our school strictly follows the curriculum and guidelines prescribed by the Board of School Education Haryana (BSEH). We offer a structured, progressive academic framework from Nursery up to Class 12, ensuring our students are well-prepared for board examinations and competitive entrance tests.
          </p>
        </section>

        {/* Curriculum Levels */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-center mb-10">Curriculum Structure</h2>
          
          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-muted/50 p-1">
              <TabsTrigger value="pre">Pre-Primary</TabsTrigger>
              <TabsTrigger value="primary">Primary</TabsTrigger>
              <TabsTrigger value="middle">Middle</TabsTrigger>
              <TabsTrigger value="secondary">Secondary</TabsTrigger>
            </TabsList>
            
            <TabsContent value="pre" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-primary">Pre-Primary (Nursery, LKG, UKG)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>The foundation years focus on play-way methods, sensory-motor development, and basic cognitive skills. We emphasize a stress-free environment where learning happens through exploration.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Language & Phonics (English & Hindi)</li>
                    <li>Number concepts & basic math</li>
                    <li>Rhymes, stories, and art & craft</li>
                    <li>Environmental awareness</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="primary" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-primary">Primary (Classes 1 to 5)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>Transitioning into formal schooling, the primary curriculum focuses on building strong foundational concepts across core subjects while encouraging curiosity and creative expression.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Core Subjects: English, Hindi, Mathematics, EVS (Environmental Studies)</li>
                    <li>Co-Scholastic: Computer Science, General Knowledge, Moral Science</li>
                    <li>Activities: Drawing, Music, Physical Training</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="middle" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-primary">Middle (Classes 6 to 8)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>The middle school curriculum broadens to introduce specialized subjects. The focus shifts towards independent learning, analytical thinking, and project-based assignments.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Languages: English, Hindi, Sanskrit</li>
                    <li>Core Subjects: Mathematics, Science, Social Science (History, Geography, Civics)</li>
                    <li>Co-Scholastic: Computer Science, Art & Craft, Physical Education</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="secondary" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-primary">Secondary (Classes 9 & 10)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>Preparation for the crucial board examinations begins here. The academic rigor increases, aligned strictly with BSEH syllabi and exam patterns, supplemented by practical lab work.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Compulsory Subjects: English, Hindi, Mathematics, Science, Social Science</li>
                    <li>Additional/Skill Subjects as per board provisions</li>
                    <li>Focus on board-pattern testing, continuous evaluation, and practicals</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Senior Secondary Streams */}
        <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-foreground">Senior Secondary (Classes 11 & 12)</h2>
            <p className="text-muted-foreground mt-2">Comprehensive streams offering specialized knowledge for higher education.</p>
            <div className="w-24 h-[3px] bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">Science</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><span className="font-semibold text-foreground">Compulsory:</span> English</li>
                  <li><span className="font-semibold text-foreground">Non-Medical:</span> Physics, Chemistry, Mathematics</li>
                  <li><span className="font-semibold text-foreground">Medical:</span> Physics, Chemistry, Biology</li>
                  <li><span className="font-semibold text-foreground">Optional (Any one):</span> Physical Education, Computer Science</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">Commerce</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><span className="font-semibold text-foreground">Compulsory:</span> English</li>
                  <li><span className="font-semibold text-foreground">Core Subjects:</span> Accountancy, Business Studies, Economics</li>
                  <li><span className="font-semibold text-foreground">Optional (Any one):</span> Mathematics, Physical Education</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <Landmark className="w-6 h-6" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">Arts/Humanities</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><span className="font-semibold text-foreground">Compulsory:</span> English, Hindi</li>
                  <li><span className="font-semibold text-foreground">Electives (Choose 3):</span> History, Political Science, Geography, Economics, Sanskrit</li>
                  <li><span className="font-semibold text-foreground">Optional (Any one):</span> Physical Education</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Assessment Approach */}
        <section className="space-y-6">
          <h2 className="text-3xl font-serif font-bold text-foreground">Assessment & Evaluation</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>Our evaluation system is designed to assess the holistic development of the child, rather than relying solely on rote memorization.</p>
            <ul>
              <li><strong>Continuous Comprehensive Evaluation:</strong> Regular unit tests, periodic assessments, and term exams to monitor progress continuously.</li>
              <li><strong>Practical Learning:</strong> Emphasis on laboratory work in Sciences, project work in Humanities and Commerce, ensuring theoretical knowledge is applied.</li>
              <li><strong>Co-Scholastic Assessment:</strong> Regular grading on life skills, attitudes, values, sports, and co-curricular activities.</li>
              <li><strong>Remedial Classes:</strong> Special attention and extra classes for students needing additional academic support to ensure no child is left behind.</li>
            </ul>
          </div>
        </section>

      </div>
    </Layout>
  );
}

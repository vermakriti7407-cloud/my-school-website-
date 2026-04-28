import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, CheckCircle2, CalendarDays, FileText } from "lucide-react";

export default function Admissions() {
  useEffect(() => {
    document.title = "Admissions - Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mandala-bg pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Admissions</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join the Anglo Sanskrit family. Information on process, dates, and requirements.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl space-y-20">
        
        {/* Important Dates Notice */}
        <div className="bg-secondary/20 border-l-4 border-secondary p-6 rounded-r-lg flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center shrink-0">
            <CalendarDays className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Admissions Open for 2024-25</h3>
            <p className="text-muted-foreground">Registration forms for Nursery to Class 11 are available at the school reception between 9:00 AM and 2:00 PM on all working days.</p>
          </div>
          <div className="shrink-0 md:ml-auto">
             <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
               <Download className="mr-2 w-4 h-4" /> Download Form
             </Button>
          </div>
        </div>

        {/* Admission Process Step-by-Step */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-center mb-12">The Admission Process</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-border z-0"></div>
            
            {[
              { step: "01", title: "Registration", desc: "Obtain the registration form from the school office or download it from the website." },
              { step: "02", title: "Submission", desc: "Submit the filled form along with necessary documents and registration fee." },
              { step: "03", title: "Interaction / Test", desc: "Informal interaction for pre-primary. Basic assessment test for higher classes." },
              { step: "04", title: "Enrollment", desc: "Upon selection, pay the admission fee to secure the seat and complete enrollment." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-background border-4 border-primary/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary mb-6 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Two Col Layout: Age Criteria & Documents */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Age Criteria */}
          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-foreground flex items-center gap-3">
              <span className="w-8 h-[2px] bg-secondary"></span>
              Age Criteria
            </h2>
            <Card>
              <CardContent className="p-0">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/50 border-b">
                      <th className="p-4 font-semibold text-foreground">Class</th>
                      <th className="p-4 font-semibold text-foreground">Age Requirement (as on 31st March)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-muted-foreground text-sm">
                    <tr><td className="p-4 font-medium">Nursery</td><td className="p-4">3+ Years</td></tr>
                    <tr><td className="p-4 font-medium">LKG</td><td className="p-4">4+ Years</td></tr>
                    <tr><td className="p-4 font-medium">UKG</td><td className="p-4">5+ Years</td></tr>
                    <tr><td className="p-4 font-medium">Class 1</td><td className="p-4">6+ Years</td></tr>
                    <tr><td className="p-4 font-medium">Class 2 onwards</td><td className="p-4">Based on previous class passing certificate</td></tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </section>

          {/* Documents Required */}
          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-foreground flex items-center gap-3">
              <span className="w-8 h-[2px] bg-secondary"></span>
              Required Documents
            </h2>
            <Card className="bg-primary/5 border-none h-full">
              <CardContent className="p-6 md:p-8 space-y-4">
                <p className="text-sm text-muted-foreground mb-4">Please bring self-attested photocopies along with original documents for verification at the time of admission.</p>
                <ul className="space-y-3">
                  {[
                    "Birth Certificate issued by Municipal Corporation (for Nursery - Class 1).",
                    "Aadhar Card of the student and parents.",
                    "4 recent passport-size photographs of the student.",
                    "School Leaving Certificate (SLC) / Transfer Certificate from the previous school (Class 2 onwards).",
                    "Report Card / Marksheet of the previous class.",
                    "Parivar Pehchan Patra (Family ID) - Haryana state requirement.",
                  ].map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

        </div>

        {/* Fee Structure Note */}
        <section className="bg-white border border-border/50 rounded-2xl p-8 shadow-sm text-center max-w-3xl mx-auto">
          <FileText className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Fee Structure Overview</h2>
          <p className="text-muted-foreground mb-6">
            Our fee structure is designed to be reasonable and affordable, reflecting our commitment to providing accessible quality education to the community. The detailed fee chart for the current academic session, including tuition fee, annual charges, and optional transport charges, is available at the school accounts office.
          </p>
          <Button variant="outline" className="border-primary text-primary">
            Contact Office for Details
          </Button>
        </section>

      </div>
    </Layout>
  );
}

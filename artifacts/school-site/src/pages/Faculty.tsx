import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mandala-bg pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Faculty</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Experienced educators dedicated to nurturing the next generation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The strength of Anglo Sanskrit School lies in its highly qualified, experienced, and dedicated teaching staff. Our educators are not just subject matter experts, but mentors who guide students through their academic and personal journey.
          </p>
        </div>

        {departments.map((dept, i) => (
          <section key={i} className="space-y-8">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b-2 border-secondary/30 pb-2 inline-block">
              {dept.name}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {dept.staff.map((teacher, j) => (
                <Card key={j} className="border-border hover:border-primary/30 transition-colors shadow-sm hover:shadow-md overflow-hidden group">
                  <div className="h-2 bg-secondary group-hover:bg-primary transition-colors"></div>
                  <CardContent className="p-6 text-center space-y-4">
                    <Avatar className="w-20 h-20 mx-auto border-2 border-muted">
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${teacher.name}`} alt={teacher.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">
                        {getInitials(teacher.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-foreground">{teacher.name}</h3>
                      <p className="text-sm font-medium text-primary my-1">{teacher.role}</p>
                      <div className="mt-3 pt-3 border-t border-border/50 text-xs text-muted-foreground space-y-1">
                        <p><span className="font-semibold text-foreground/70">Qual:</span> {teacher.qual}</p>
                        <p><span className="font-semibold text-foreground/70">Exp:</span> {teacher.exp}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

      </div>
    </Layout>
  );
}

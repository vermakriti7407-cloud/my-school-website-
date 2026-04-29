import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/layout/SectionHeader";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              We welcome your inquiries. Connect with our admissions office or schedule a premium campus tour.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-background relative py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <SectionHeader 
            eyebrow="Connect"
            title="Reach Out to Us"
            subtitle="Our dedicated team is ready to assist you with any questions about admissions, facilities, or academics."
            icon={<Phone className="w-5 h-5 text-secondary" />}
          />

          <div className="grid lg:grid-cols-5 gap-16 mt-16">
            
            {/* Contact Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2 space-y-8"
            >
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-secondary shrink-0 border border-border/40 group-hover:-translate-y-1 transition-transform duration-300">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">Campus Address</h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-light">
                    Anglo Sanskrit Sr. Sec. School,<br/>
                    Pundri, District Kaithal,<br/>
                    Haryana - 136026
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-secondary shrink-0 border border-border/40 group-hover:-translate-y-1 transition-transform duration-300">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">Telephone</h3>
                  <p className="text-muted-foreground text-base font-light mb-1"><span className="font-medium text-foreground">Reception:</span> +91-9876543210</p>
                  <p className="text-muted-foreground text-base font-light"><span className="font-medium text-foreground">Admissions:</span> +91-9876543211</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-secondary shrink-0 border border-border/40 group-hover:-translate-y-1 transition-transform duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">Email Directory</h3>
                  <p className="text-muted-foreground text-base font-light mb-1">info@anglosanskritschool.com</p>
                  <p className="text-muted-foreground text-base font-light">admissions@anglosanskritschool.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-secondary shrink-0 border border-border/40 group-hover:-translate-y-1 transition-transform duration-300">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">Visiting Hours</h3>
                  <p className="text-muted-foreground text-base font-light mb-1">Mon-Sat: 08:00 AM - 02:00 PM</p>
                  <p className="text-sm text-red-500 font-medium uppercase tracking-wider mt-2">Sundays & Public Holidays Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <Card className="bg-white border border-border/40 shadow-xl rounded-[2rem] overflow-hidden hover:shadow-2xl transition-shadow">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl font-serif font-bold text-primary mb-8">Send a Direct Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Parent/Guardian Name *</label>
                        <Input id="name" required placeholder="Enter your full name" className="bg-background border-border/50 h-14 rounded-xl text-base px-6 focus-visible:ring-secondary" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Phone Number *</label>
                        <Input id="phone" type="tel" required placeholder="10-digit mobile number" className="bg-background border-border/50 h-14 rounded-xl text-base px-6 focus-visible:ring-secondary" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Email Address</label>
                      <Input id="email" type="email" placeholder="Enter your email" className="bg-background border-border/50 h-14 rounded-xl text-base px-6 focus-visible:ring-secondary" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Subject</label>
                      <Input id="subject" required placeholder="Admission Inquiry / General Query" className="bg-background border-border/50 h-14 rounded-xl text-base px-6 focus-visible:ring-secondary" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Message *</label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="How can we assist you today?" 
                        className="min-h-[160px] bg-background border-border/50 rounded-xl text-base p-6 focus-visible:ring-secondary resize-none" 
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg h-16 rounded-full shadow-lg transition-transform hover:scale-[1.02]" disabled={isSubmitting}>
                      {isSubmitting ? "Transmitting..." : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 rounded-[2rem] overflow-hidden border border-border/40 shadow-xl h-[500px] w-full relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27606.314275098902!2d76.54146030310237!3d29.75704987413644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390df03ddc2c0199%3A0xcda8d7e0fb8f0e5!2sPundri%2C%20Haryana%20136026!5e0!3m2!1sen!2sin!4v1708451234567!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Pundri Google Map"
              className="absolute inset-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </Layout>
  );
}
import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - Anglo Sanskrit Sr. Sec. School, Pundri";
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We will get back to you shortly.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mandala-bg pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            We'd love to hear from you. Visit us or send us a message.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info & Map */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Campus Address</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Anglo Sanskrit Sr. Sec. School,<br/>
                      Pundri, District Kaithal,<br/>
                      Haryana - 136026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">Reception: +91-9876543210</p>
                    <p className="text-muted-foreground text-sm">Office: +91-9876543211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">info@anglosanskritschool.com</p>
                    <p className="text-muted-foreground text-sm">principal@anglosanskritschool.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Visiting Hours</h3>
                    <p className="text-muted-foreground text-sm">Mon-Sat: 08:00 AM - 02:00 PM</p>
                    <p className="text-muted-foreground text-sm text-red-600 font-medium mt-1">Sundays & Public Holidays Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-border shadow-lg">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Parent/Guardian Name *</label>
                      <Input id="name" required placeholder="Enter your full name" className="bg-muted/50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</label>
                      <Input id="phone" type="tel" required placeholder="10-digit mobile number" className="bg-muted/50" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                    <Input id="email" type="email" placeholder="Enter your email" className="bg-muted/50" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                    <Input id="subject" required placeholder="Admission Inquiry / General Query" className="bg-muted/50" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="How can we help you?" 
                      className="min-h-[120px] bg-muted/50" 
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Embed Placeholder */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-border shadow-md h-[400px] w-full bg-muted relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27606.314275098902!2d76.54146030310237!3d29.75704987413644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390df03ddc2c0199%3A0xcda8d7e0fb8f0e5!2sPundri%2C%20Haryana%20136026!5e0!3m2!1sen!2sin!4v1708451234567!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Pundri Google Map"
            className="absolute inset-0 grayscale"
          ></iframe>
        </div>

      </div>
    </Layout>
  );
}

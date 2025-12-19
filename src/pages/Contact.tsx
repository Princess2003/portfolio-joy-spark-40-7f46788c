import { Mail, MapPin, Phone, User, Linkedin, Github } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: Mail, label: "Email", value: "princess.malungana@capaciti.org.za", href: "mailto:princess.malungana@capaciti.org.za" },
  { icon: Phone, label: "Phone", value: "072 446 7192", href: "tel:0724467192" },
  { icon: MapPin, label: "Location", value: "Pretoria Central, Gauteng", href: null },
];

const Contact = () => {
  return (
    <PageLayout 
      prevPage={{ path: "/certificates", label: "Certificates" }}
      nextPage={{ path: "/cv", label: "CV" }}
    >
      <section className="py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Contact <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="font-medium text-primary hover:underline">
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-medium">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/princess-malungana-6737a6322/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://github.com/Princess2003" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Reference */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold">Reference</h3>
            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-lg">Kefiloe Mphye</h4>
                  <p className="text-sm text-muted-foreground">Talent Development Coach</p>
                  <div className="mt-3">
                    <a 
                      href="mailto:kefiloe.mphye@capaciti.org.za" 
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      kefiloe.mphye@capaciti.org.za
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;

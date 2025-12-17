import { Mail, MapPin, User } from "lucide-react";
import { Button } from "./ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Pretoria Central, Gauteng</p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:princess@email.com" className="text-primary hover:underline">
                princess@email.com
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-background border border-border">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Reference
            </h3>
            <div className="text-muted-foreground">
              <p className="font-medium text-foreground">Kefiloe Mphye</p>
              <p className="text-sm">Talent Development Coach</p>
              <a href="mailto:kefiloe.mphye@capaciti.org.za" className="text-primary text-sm hover:underline">
                kefiloe.mphye@capaciti.org.za
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:princess@email.com">
                <Mail className="w-5 h-5" />
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

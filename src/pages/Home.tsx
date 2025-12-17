import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import { PageLayout } from "@/components/PageLayout";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageLayout nextPage={{ path: "/about", label: "About Me" }}>
      <section className="min-h-[calc(100vh-200px)] flex items-center">
        <div className="py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Software Developer</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient block">PRINCESS JULIA</span>
                <span className="text-gradient">MALUNGANA</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Transforming data into intelligent solutions. Passionate about building applications that make a difference.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" onClick={() => navigate("/projects")}>
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="lg" onClick={() => navigate("/cv")}>
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
              </div>
              
              <div className="flex gap-12 pt-8">
                <div>
                  <div className="text-3xl font-display font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-foreground">Software Dev</div>
                  <div className="text-sm text-muted-foreground">Focus Area</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-foreground">2024</div>
                  <div className="text-sm text-muted-foreground">Graduate</div>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-effect animate-float">
                  <img
                    src={profileImage}
                    alt="Princess Julia Malungana"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute bottom-8 -left-4 px-4 py-2 rounded-lg bg-secondary/80 backdrop-blur-sm border border-border">
                  <span className="text-sm font-medium">Software Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;

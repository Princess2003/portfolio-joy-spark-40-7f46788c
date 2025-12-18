import { User, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <PageLayout 
      prevPage={{ path: "/", label: "Home" }}
      nextPage={{ path: "/projects", label: "Projects" }}
    >
      <section className="py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">About Me</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Get To Know <span className="text-gradient">Me Better</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Hello Section with Picture */}
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-xl bg-secondary/50 border border-border">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 flex-shrink-0">
              <img 
                src={profileImage} 
                alt="Princess Julia Malungana" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg text-muted-foreground mb-2">Hello, I'm</p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
                Princess Julia Malungana
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a Software Developer Graduate currently interning at CAPACITI, where I have gained 
                hands-on experience in AI Generators, API Implementation. I have also completed several 
                professional development courses on Coursera to strengthen my technical and problem-solving skills.
              </p>
            </div>
          </div>

          {/* Personal Branding Statement */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">Personal Branding Statement</h3>
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              I am a passionate Software Developer who transforms complex problems into elegant, 
              user-friendly solutions. With expertise in AI integration and API implementation, 
              I bridge the gap between innovative technology and practical applications. 
              My commitment to continuous learning and collaborative teamwork drives me to 
              deliver impactful results that exceed expectations.
            </p>
          </div>

          {/* About Me */}
          <div className="p-6 rounded-xl bg-secondary/50 border border-border space-y-4">
            <h3 className="font-display text-2xl font-semibold">About Me</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about building innovative solutions and continuously improving my craft. 
              My key strengths include teamwork and strong analytical thinking. I look forward to 
              advancing my career as a Software Engineer.
            </p>
          </div>

          {/* Career Objective */}
          <div className="p-6 rounded-xl bg-primary/10 border border-primary/30">
            <h4 className="font-display text-lg font-semibold mb-3 text-primary">Career Objective</h4>
            <p className="text-muted-foreground">
              To leverage my skills in software development and AI integration to contribute to 
              innovative projects that make a real difference. I aim to grow as a professional 
              while helping organizations achieve their technological goals.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;

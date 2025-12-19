import { FileText, Download, Mail, Phone, MapPin, Linkedin, Github, User, Calendar, Languages, Car } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const CV = () => {
  const handleDownload = () => {
    const cvUrl = 'https://github.com/Princess2003/Portfolio/raw/b7104b948a9da7f3d632c173e190d4d1781f4cef/2024%20Candidate%20CV%20V2%20(2)%20(1)%20(2).pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <PageLayout 
      prevPage={{ path: "/contact", label: "Contact" }}
    >
      <section className="py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">My Resume</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Curriculum <span className="text-gradient">Vitae</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-xl bg-secondary/50 border border-border">
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b border-border">
              <h3 className="font-display text-3xl font-bold mb-2">PRINCESS JULIA MALUNGANA</h3>
              <p className="text-primary text-lg font-medium">Software Developer</p>
              <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
                <a href="mailto:princess.malungana@capaciti.org.za" className="flex items-center gap-1 hover:text-primary">
                  <Mail className="w-4 h-4" /> princess.malungana@capaciti.org.za
                </a>
                <a href="tel:0724467192" className="flex items-center gap-1 hover:text-primary">
                  <Phone className="w-4 h-4" /> 072 446 7192
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Pretoria Central, Gauteng
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* About - Moved to top */}
                <div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                    About
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I am a Software Developer Graduate currently interning at CAPACITI, where I have gained hands-on 
                    experience in AI Generators, API Implementation. I have also completed several professional 
                    development courses on Coursera to strengthen my technical and problem-solving skills. I'm 
                    passionate about building innovative solutions and continuously improving my craft. My key 
                    strengths include teamwork, strong analytical thinking. I look forward to advancing my career 
                    as a Software Engineer.
                  </p>
                </div>

                {/* Personal Details */}
                <div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                    Personal Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Age:</span>
                      <span>22</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Location:</span>
                      <span>Pretoria Central, Gauteng</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Languages className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Languages:</span>
                      <span>English</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Driver's Licence:</span>
                      <span>Yes</span>
                    </div>
                  </div>
                </div>

                {/* Online Presence */}
                <div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                    Online Presence
                  </h4>
                  <div className="space-y-2">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary">
                      <Linkedin className="w-4 h-4 text-primary" /> LINKEDIN
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary">
                      <Github className="w-4 h-4 text-primary" /> GITHUB
                    </a>
                  </div>
                </div>

                {/* Technical Proficiencies */}
                <div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                    Technical Proficiencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["GIT", "AI GENERATOR", "API IMPLEMENTATION", "FIGMA PROTOTYPE"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                    Soft Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["TIME MANAGEMENT", "PROBLEM SOLVING", "COMMUNICATION", "TEAMWORK"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-foreground border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                    Interests
                  </h4>
                  <p className="text-sm text-muted-foreground">Baking, Sports</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Experience */}
                <div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                    Experience
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h5 className="font-semibold">Candidate</h5>
                        <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">October 2024 – Present</span>
                      </div>
                      <p className="text-sm text-primary font-medium">CAPACITI</p>
                      <p className="text-xs text-muted-foreground mb-2">Pretoria Central, Gauteng</p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Gained hands-on experience in AI Generators</li>
                        <li>Worked on API Implementation projects</li>
                        <li>Built multiple full-stack projects with AI integration</li>
                        <li>Collaborated on team projects using Agile methodologies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                    Education
                  </h4>
                  <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h5 className="font-semibold">Diploma Information Technology in Software Development</h5>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">2022 - 2024</span>
                    </div>
                    <p className="text-sm text-primary font-medium">ROSEBANK COLLEGE</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Comprehensive software development program covering modern technologies and best practices
                    </p>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                    Certifications
                  </h4>
                  <p className="text-sm text-muted-foreground">N/A</p>
                </div>

                {/* References */}
                <div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                    References
                  </h4>
                  <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                    <p className="font-semibold">Kefiloe Mphye</p>
                    <p className="text-sm text-muted-foreground">Talent Development Coach</p>
                    <a href="mailto:kefiloe.mphye@capaciti.org.za" className="text-sm text-primary hover:underline">
                      kefiloe.mphye@capaciti.org.za
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="hero" size="lg" onClick={handleDownload}>
                <Download className="w-5 h-5 mr-2" />
                Download Full CV
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CV;

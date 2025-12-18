import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const Experience = () => {
  return (
    <PageLayout 
      prevPage={{ path: "/skills", label: "Skills" }}
      nextPage={{ path: "/certificates", label: "Certificates" }}
    >
      <section className="py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">My Journey</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
              
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-center gap-2 text-sm text-primary mb-2">
                  <Calendar className="w-4 h-4" />
                  October 2024 – Present
                </div>
                <h4 className="font-display text-lg font-semibold mb-1">Candidate</h4>
                <p className="text-muted-foreground text-sm mb-2">CAPACITI</p>
                <p className="text-xs text-muted-foreground mb-4">Braamfontein</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Software Development internship gaining hands-on experience in AI technologies and API implementation.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Gained hands-on experience in AI Generators
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Worked on API Implementation projects
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Built multiple full-stack projects with AI integration
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Collaborated on team projects using Agile methodologies
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Education</h3>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
              
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-center gap-2 text-sm text-primary mb-2">
                  <Calendar className="w-4 h-4" />
                  2022 - 2024
                </div>
                <h4 className="font-display text-lg font-semibold mb-1">Diploma Information Technology in Software Development</h4>
                <p className="text-muted-foreground text-sm">ROSEBANK COLLEGE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Experience;

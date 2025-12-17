import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          My professional journey and academic background
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Work Experience
            </h3>
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-2 text-primary text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  October 2024 – Present
                </div>
                <h4 className="font-semibold text-lg">Software Developer Candidate</h4>
                <p className="text-muted-foreground">CAPACITI</p>
                <p className="text-sm text-muted-foreground mt-3">
                  Gaining hands-on experience in AI Generators, API Implementation, and software development best practices.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-2 text-primary text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  2022 - 2024
                </div>
                <h4 className="font-semibold text-lg">Software Development Graduate</h4>
                <p className="text-muted-foreground">Professional Development</p>
                <p className="text-sm text-muted-foreground mt-3">
                  Completed professional development courses on Coursera focusing on technical and problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

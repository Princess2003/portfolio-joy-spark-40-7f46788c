import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const experiences = [
  {
    title: "Application Development Learnership",
    company: "Aborishanga Pty Ltd",
    period: "January 2025 – Current",
    description: [
      "Currently in Learnership in Application Development",
      "Developing and maintaining software applications",
      "Collaborating with teams on project deliverables",
    ],
  },
  {
    title: "Data Science Learnership",
    company: "Explore AI Academy",
    period: "March 2024 – November 2024",
    description: [
      "Successfully completed Data Science program",
      "Worked on various data analysis and ML projects",
      "Developed skills in Python, SQL, and data visualization",
    ],
  },
];

const education = [
  {
    degree: "National Diploma in Information Technology",
    institution: "Tshwane University of Technology",
    period: "2022 - 2024",
    details: "Specialized in Software Development",
  },
  {
    degree: "Matric Certificate",
    institution: "Bopedi Bapedi Secondary",
    period: "2019",
    details: "Completed secondary education",
  },
];

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

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                  
                  <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <h4 className="font-display text-lg font-semibold mb-1">{exp.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                  
                  <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <h4 className="font-display text-lg font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Experience;

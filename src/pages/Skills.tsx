import { Code, Brain, Wrench, Heart, GitBranch, Cpu, Globe, Figma } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const programmingLanguages = [
  { name: "Python", level: 60 },
  { name: "JavaScript", level: 85 },
  { name: "SQL", level: 80 },
  { name: "HTML/CSS", level: 90 },
  { name: "C#", level: 75 },
  { name: "Kotlin", level: 70 },
];

const technicalSkills = [
  { name: "GIT", icon: GitBranch, level: 85 },
  { name: "AI Generator", icon: Cpu, level: 80 },
  { name: "API Implementation", icon: Globe, level: 85 },
  { name: "Figma Prototype", icon: Figma, level: 75 },
];

const softSkills = [
  "Time Management",
  "Problem Solving",
  "Communication",
  "Teamwork",
];

const tools = [
  "VS Code",
  "GitHub",
  "Figma",
  "Postman",
  "Vercel",
  "Lovable",
];

const interests = ["Baking", "Sports"];

const Skills = () => {
  return (
    <PageLayout 
      prevPage={{ path: "/projects", label: "Projects" }}
      nextPage={{ path: "/experience", label: "Experience" }}
    >
      <section className="py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">My Expertise</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Skills & <span className="text-gradient">Proficiencies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <div className="p-6 rounded-xl bg-secondary/50 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Programming Languages</h3>
            </div>
            <div className="space-y-4">
              {programmingLanguages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-primary">{lang.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="p-6 rounded-xl bg-secondary/50 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Technical Proficiencies</h3>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4 p-3 rounded-lg bg-background/50 border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="p-6 rounded-xl bg-secondary/50 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Interests */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full bg-secondary text-foreground border border-border text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full bg-primary/5 text-muted-foreground border border-primary/10 text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Skills;

import { Code, Brain, Wrench, Heart } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const technicalSkills = [
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 85 },
  { name: "SQL", level: 80 },
  { name: "Data Analysis", level: 85 },
  { name: "Machine Learning", level: 75 },
  { name: "Git/GitHub", level: 80 },
  { name: "HTML/CSS", level: 90 },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Time Management",
  "Critical Thinking",
  "Adaptability",
  "Attention to Detail",
  "Leadership",
];

const tools = [
  "VS Code",
  "Jupyter Notebook",
  "Git",
  "Docker",
  "Figma",
  "Postman",
  "MongoDB",
  "PostgreSQL",
];

const interests = [
  "Artificial Intelligence",
  "Web Development",
  "Data Science",
  "Open Source",
  "Technology Innovation",
  "Problem Solving",
];

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
            Skills & <span className="text-gradient">Abilities</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="p-6 rounded-xl bg-secondary/50 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
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
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
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
                  className="px-4 py-2 rounded-lg bg-secondary text-foreground border border-border text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
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
      </section>
    </PageLayout>
  );
};

export default Skills;

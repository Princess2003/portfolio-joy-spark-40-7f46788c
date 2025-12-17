import { Code, GitBranch, Sparkles, Layout, Clock, Brain, MessageCircle, Users } from "lucide-react";

export const SkillsSection = () => {
  const technicalSkills = [
    { name: "GIT", icon: GitBranch },
    { name: "AI Generator", icon: Sparkles },
    { name: "API Implementation", icon: Code },
    { name: "Figma Prototype", icon: Layout },
  ];

  const softSkills = [
    { name: "Time Management", icon: Clock },
    { name: "Problem Solving", icon: Brain },
    { name: "Communication", icon: MessageCircle },
    { name: "Teamwork", icon: Users },
  ];

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Technical proficiencies and soft skills I bring to the table
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <skill.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-medium">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <skill.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-medium">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-display font-semibold mb-6 text-center">Interests</h3>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary">
              🍰 Baking
            </div>
            <div className="px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary">
              ⚽ Sports
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

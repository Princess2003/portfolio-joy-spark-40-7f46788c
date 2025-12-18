import { Briefcase, ExternalLink } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Areyeng Website",
    description: "A modern web application showcasing creative design and development skills.",
    url: "https://areyeng.vercel.app/",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Resume Project",
    description: "An interactive resume builder application with modern UI/UX design.",
    url: "https://resumeproject-five.vercel.app/",
    tech: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Marketing Copy Generator",
    description: "An AI-powered tool for generating compelling marketing copy and content.",
    url: "https://marketingpostgenerate.vercel.app/",
    tech: ["AI/ML", "Python", "NLP"],
  },
  {
    title: "Analyze Dashboard",
    description: "A comprehensive analytics dashboard for data visualization and insights.",
    url: "https://analyzedashborad.vercel.app/",
    tech: ["React", "Charts", "Data Analytics"],
  },
  {
    title: "Voiceflow Chatbot",
    description: "An intelligent conversational AI assistant built with Voiceflow.",
    url: "https://creator.voiceflow.com/share/68e8ee76929ec0030f475bb3/production",
    tech: ["Voiceflow", "AI", "Chatbot"],
  },
];

const Projects = () => {
  return (
    <PageLayout 
      prevPage={{ path: "/about", label: "About Me" }}
      nextPage={{ path: "/skills", label: "Skills" }}
    >
      <section className="py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">My Work</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                {project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.url !== "#" && (
                <Button
                  variant="heroOutline"
                  size="sm"
                  className="w-full mt-4"
                  asChild
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;

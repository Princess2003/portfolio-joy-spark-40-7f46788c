import { FileText, Download } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const CV = () => {
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
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold mb-2">Princess Julia Malungana</h3>
              <p className="text-muted-foreground">Software Developer</p>
              <p className="text-sm text-muted-foreground mt-2">
                pjmalungana07@gmail.com | +27 67 138 6231 | Johannesburg, South Africa
              </p>
            </div>

            <div className="space-y-8">
              {/* Summary */}
              <div>
                <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                  Professional Summary
                </h4>
                <p className="text-muted-foreground">
                  A passionate and dedicated software developer with a strong foundation in data science 
                  and application development. Experienced in Python, JavaScript, React, and various 
                  data analysis tools. Currently expanding skills through an Application Development 
                  Learnership at Aborishanga Pty Ltd.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                  Work Experience
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold">Application Development Learnership</h5>
                      <span className="text-sm text-primary">Jan 2025 – Current</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Aborishanga Pty Ltd</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold">Data Science Learnership</h5>
                      <span className="text-sm text-primary">Mar 2024 – Nov 2024</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Explore AI Academy</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                  Education
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold">National Diploma in Information Technology</h5>
                      <span className="text-sm text-primary">2022 - 2024</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Tshwane University of Technology</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold">Matric Certificate</h5>
                      <span className="text-sm text-primary">2019</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Bopedi Bapedi Secondary</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-display text-lg font-semibold mb-3 text-primary border-b border-border pb-2">
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "JavaScript", "React", "SQL", "Git", "HTML/CSS", "Data Analysis", "Machine Learning"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="hero" size="lg">
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

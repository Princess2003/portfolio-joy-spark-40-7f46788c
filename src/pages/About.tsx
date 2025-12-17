import { User, MapPin, Calendar, Languages, Phone, Mail, Globe } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: "Date of Birth", value: "07 April 2001" },
    { icon: MapPin, label: "Location", value: "Johannesburg, South Africa" },
    { icon: Languages, label: "Languages", value: "English, Xitsonga, Zulu" },
    { icon: Phone, label: "Phone", value: "+27 67 138 6231" },
    { icon: Mail, label: "Email", value: "pjmalungana07@gmail.com" },
  ];

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

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold">Personal Information</h3>
            <div className="space-y-4">
              {personalInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold">About Me</h3>
            <div className="p-6 rounded-xl bg-secondary/50 border border-border space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate and dedicated software developer with a strong foundation in data science 
                and software development. My journey in technology has been driven by curiosity and a desire 
                to create meaningful solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise in Python, JavaScript, and various frameworks, I specialize in building 
                efficient applications and analyzing complex datasets. I am constantly learning and 
                adapting to new technologies to stay at the forefront of innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Outside of coding, I enjoy exploring new technologies, participating in hackathons, 
                and contributing to open-source projects. I believe in the power of technology to 
                transform lives and am committed to making a positive impact through my work.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-primary/10 border border-primary/30">
              <h4 className="font-display text-lg font-semibold mb-3 text-primary">Career Objective</h4>
              <p className="text-muted-foreground">
                To leverage my skills in software development and data science to contribute to 
                innovative projects that make a real difference. I aim to grow as a professional 
                while helping organizations achieve their technological goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;

import { MapPin, Calendar, Car, Globe } from "lucide-react";

export const AboutSection = () => {
  const details = [
    { icon: Calendar, label: "Age", value: "22" },
    { icon: MapPin, label: "Location", value: "Pretoria Central, Gauteng" },
    { icon: Globe, label: "Languages", value: "English" },
    { icon: Car, label: "Driver's License", value: "Yes" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Get to know more about who I am
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Software Developer Graduate currently interning at CAPACITI, where I have gained hands-on experience in AI Generators and API Implementation. I have also completed several professional development courses on Coursera to strengthen my technical and problem-solving skills.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about building innovative solutions and continuously improving my craft. My key strengths include teamwork and strong analytical thinking. I look forward to advancing my career as a Software Engineer.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <detail.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-muted-foreground">{detail.label}</div>
                <div className="font-semibold text-foreground">{detail.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

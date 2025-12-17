import { Award, ExternalLink } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const certificates = [
  {
    title: "Coursera Certificate 1",
    url: "https://www.coursera.org/account/accomplishments/records/6TUXG9ZOMTQN",
  },
  {
    title: "Coursera Certificate 2",
    url: "https://www.coursera.org/account/accomplishments/verify/Q0CI5G1CX7L2",
  },
  {
    title: "Coursera Certificate 3",
    url: "https://www.coursera.org/account/accomplishments/records/ZW97FN9ZTGPN",
  },
  {
    title: "Coursera Certificate 4",
    url: "https://www.coursera.org/account/accomplishments/records/P4VI10LV8PBZ",
  },
  {
    title: "Coursera Certificate 5",
    url: "https://www.coursera.org/account/accomplishments/records/7UCMSS2HF729",
  },
  {
    title: "Coursera Certificate 6",
    url: "https://www.coursera.org/account/accomplishments/records/0PHU293J6V7D",
  },
  {
    title: "Coursera Certificate 7",
    url: "https://www.coursera.org/account/accomplishments/verify/6NBV7FPJCYSM",
  },
  {
    title: "Coursera Certificate 8",
    url: "https://www.coursera.org/account/accomplishments/records/UYCD8VUXF4I2",
  },
];

const Certificates = () => {
  return (
    <PageLayout 
      prevPage={{ path: "/experience", label: "Experience" }}
      nextPage={{ path: "/contact", label: "Contact" }}
    >
      <section className="py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Achievements</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Certificates</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={cert.url}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mt-2">
                Click to view certificate
              </p>
            </a>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Certificates;

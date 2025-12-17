import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ButterflyBackground } from "./ButterflyBackground";
import { PageNavigation } from "./PageNavigation";

interface PageLayoutProps {
  children: ReactNode;
  prevPage?: { path: string; label: string };
  nextPage?: { path: string; label: string };
}

export const PageLayout = ({ children, prevPage, nextPage }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      <ButterflyBackground />
      <Navigation />
      <main className="relative z-10 pt-16">
        <div className="container mx-auto px-4">
          {children}
          <PageNavigation prevPage={prevPage} nextPage={nextPage} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

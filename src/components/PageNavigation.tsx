import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

interface PageNavigationProps {
  prevPage?: { path: string; label: string };
  nextPage?: { path: string; label: string };
}

export const PageNavigation = ({ prevPage, nextPage }: PageNavigationProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-8 mt-12 border-t border-border">
      {prevPage ? (
        <Button
          variant="heroOutline"
          onClick={() => navigate(prevPage.path)}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {prevPage.label}
        </Button>
      ) : (
        <div />
      )}
      
      {nextPage ? (
        <Button
          variant="hero"
          onClick={() => navigate(nextPage.path)}
          className="flex items-center gap-2"
        >
          {nextPage.label}
          <ArrowRight className="w-4 h-4" />
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
};

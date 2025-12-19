export const Footer = () => {
  return (
    <footer id="cv" className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          © 2024 Princess Julia Malungana. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/Princess2003" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/princess-malungana-6737a6322/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            LinkedIn
          </a>
          <a href="mailto:princess@email.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

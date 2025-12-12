import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SectionNavProps {
  prevSection?: {
    id: string;
    label: string;
  };
  nextSection?: {
    id: string;
    label: string;
  };
}

export function SectionNav({ prevSection, nextSection }: SectionNavProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!prevSection && !nextSection) return null;

  return (
    <div className="flex justify-between items-center pt-8 border-t border-border">
      {prevSection ? (
        <Button
          variant="ghost"
          onClick={() => scrollToSection(prevSection.id)}
          className="group hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Previous: {prevSection.label}
        </Button>
      ) : (
        <div />
      )}
      
      {nextSection && (
        <Button
          variant="ghost"
          onClick={() => scrollToSection(nextSection.id)}
          className="group hover:text-primary transition-colors"
        >
          Next: {nextSection.label}
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      )}
    </div>
  );
}
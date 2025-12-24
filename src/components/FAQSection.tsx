import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

const FAQSection = ({ 
  items, 
  title = "Häufig gestellte Fragen",
  subtitle 
}: FAQSectionProps) => {
  const { ref, isVisible, getDelay } = useStaggeredAnimation(items.length, 80);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </header>
          </ScrollReveal>
          
          <div ref={ref}>
            <Accordion type="single" collapsible className="space-y-4">
              {items.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className={`bg-card rounded-lg border border-border px-6 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${getDelay(index)}ms` }}
                >
                  <AccordionTrigger className="text-left font-medium hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

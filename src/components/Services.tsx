import { Building2, Sparkles, Home, Trees, Wrench, Shield } from "lucide-react";
import { ScrollReveal, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: Building2,
    title: "Büroreinigung",
    description:
      "Tägliche oder wöchentliche Reinigung Ihrer Büroräume mit höchsten Qualitätsstandards für ein produktives Arbeitsumfeld.",
  },
  {
    icon: Sparkles,
    title: "Unterhaltsreinigung",
    description:
      "Regelmäßige Pflege und Reinigung für dauerhaft saubere und hygienische Räumlichkeiten in Ihrem Unternehmen.",
  },
  {
    icon: Home,
    title: "Gebäudereinigung",
    description:
      "Umfassende Reinigungsdienstleistungen für Ihr gesamtes Gebäude, von Eingangsbereichen bis zu Gemeinschaftsflächen.",
  },
  {
    icon: Trees,
    title: "Garten- & Landschaftspflege",
    description:
      "Professionelle Pflege Ihrer Außenanlagen für einen gepflegten ersten Eindruck bei Kunden und Mitarbeitern.",
  },
  {
    icon: Wrench,
    title: "Hausmeisterdienste",
    description:
      "Zuverlässige Hausmeisterservices für Wartung, kleine Reparaturen und den reibungslosen Betrieb Ihrer Immobilie.",
  },
  {
    icon: Shield,
    title: "Glasreinigung",
    description:
      "Streifenfreie Fenster- und Glasflächenreinigung mit modernen Techniken für kristallklare Ergebnisse.",
  },
];

const Services = () => {
  const { ref, isVisible, getDelay } = useStaggeredAnimation(services.length, 100);

  return (
    <section id="leistungen" className="py-20 md:py-28 bg-gradient-surface">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Professionelle Reinigung für jeden Bedarf
          </h2>
          <p className="text-muted-foreground text-lg">
            Entdecken Sie unser umfassendes Angebot an Facility Services für
            Geschäftskunden in Berlin und Umgebung.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: `${getDelay(index)}ms`,
                transitionDuration: "700ms"
              }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

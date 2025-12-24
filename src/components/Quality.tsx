import { Shield, FileCheck, ThumbsUp, Eye, Leaf, Clock } from "lucide-react";
import { ScrollReveal, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const qualityPoints = [
  {
    icon: Shield,
    title: "Zertifizierte Qualität",
    description: "Wir arbeiten nach strengen Qualitätsstandards und sind zertifiziert nach DIN ISO 9001.",
  },
  {
    icon: Eye,
    title: "Regelmäßige Kontrollen",
    description: "Kontinuierliche Qualitätsprüfungen durch unsere Objektleiter garantieren gleichbleibend hohe Standards.",
  },
  {
    icon: FileCheck,
    title: "Dokumentation",
    description: "Transparente Dokumentation aller Reinigungsleistungen für volle Nachvollziehbarkeit.",
  },
  {
    icon: ThumbsUp,
    title: "Kundenfeedback",
    description: "Aktives Beschwerdemanagement und regelmäßige Kundenbefragungen zur stetigen Verbesserung.",
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    description: "Einsatz umweltschonender Reinigungsmittel und ressourcensparender Methoden.",
  },
  {
    icon: Clock,
    title: "Pünktlichkeit",
    description: "Zuverlässige Einhaltung vereinbarter Termine und flexibler Reinigungszeiten.",
  },
];

const Quality = () => {
  const { ref, isVisible, getDelay } = useStaggeredAnimation(qualityPoints.length, 100);

  return (
    <section id="qualitaet" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-6">
            Qualitätsversprechen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Höchste Standards für{" "}
            <span className="text-gradient-primary">Ihre Zufriedenheit</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Qualität ist kein Zufall – sie ist das Ergebnis konsequenter Arbeit
            und permanenter Verbesserung.
          </p>
        </ScrollReveal>

        {/* Quality Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {qualityPoints.map((point, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 hover:-translate-y-1 transition-all duration-500 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${getDelay(index)}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <point.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <ScrollReveal delay={200}>
          <div className="bg-gradient-dark rounded-3xl p-10 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
            
            <div className="relative text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Vertrauen Sie auf unsere Erfahrung
              </h3>
              <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg">
                Über 500 zufriedene Kunden in Berlin vertrauen auf Crystal Facility
                Services. Werden Sie Teil unserer Erfolgsstory.
              </p>
              
              <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                {[
                  { value: "15+", label: "Jahre Erfahrung" },
                  { value: "500+", label: "Kunden betreut" },
                  { value: "98%", label: "Zufriedenheitsrate" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <span className="block text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                      {stat.value}
                    </span>
                    <span className="text-white/60 text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Quality;
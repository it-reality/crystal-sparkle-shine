import { Shield, FileCheck, ThumbsUp, Eye, Leaf, Clock } from "lucide-react";

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
  return (
    <section id="qualitaet" className="py-20 md:py-28 bg-gradient-surface">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Qualitätsversprechen
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Höchste Standards für Ihre Zufriedenheit
          </h2>
          <p className="text-muted-foreground text-lg">
            Qualität ist kein Zufall – sie ist das Ergebnis konsequenter Arbeit
            und permanenter Verbesserung.
          </p>
        </div>

        {/* Quality Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityPoints.map((point, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <point.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
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
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
            Vertrauen Sie auf unsere Erfahrung
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
            Über 500 zufriedene Kunden in Berlin vertrauen auf Crystal Facility
            Services. Werden Sie Teil unserer Erfolgsstory.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/90">
            <div className="text-center">
              <span className="block text-3xl font-bold">15+</span>
              <span className="text-sm">Jahre Erfahrung</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold">500+</span>
              <span className="text-sm">Kunden betreut</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold">98%</span>
              <span className="text-sm">Zufriedenheitsrate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;

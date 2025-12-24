import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Info } from "lucide-react";

const pricingTiers = [
  {
    name: "Büroreinigung",
    description: "Für kleine bis mittlere Büros",
    priceFrom: "ab 15€",
    unit: "pro Stunde",
    features: [
      "Tägliche oder wöchentliche Reinigung",
      "Staubsaugen & Wischen",
      "Sanitärreinigung",
      "Müllentsorgung",
      "Flexibler Rhythmus",
    ],
  },
  {
    name: "Unterhaltsreinigung",
    description: "Für größere Objekte",
    priceFrom: "ab 0,50€",
    unit: "pro m²",
    features: [
      "Komplette Gebäudereinigung",
      "Festes Reinigungsteam",
      "Qualitätskontrollen",
      "Dokumentation",
      "Monatliche Abrechnung",
    ],
    highlighted: true,
  },
  {
    name: "Sonderreinigung",
    description: "Einmalige Aufträge",
    priceFrom: "Auf Anfrage",
    unit: "",
    features: [
      "Grundreinigung",
      "Baureinigung",
      "Fensterreinigung",
      "Teppichreinigung",
      "Individuelle Projekte",
    ],
  },
];

const Preise = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Preise" },
      ]),
    ],
  };

  return (
    <>
      <SEOHead
        title="Preise & Kosten: Büroreinigung Berlin"
        description="Faire Preise für professionelle Gebäudereinigung in Berlin. Transparente Kalkulation, keine versteckten Kosten. Jetzt kostenloses Angebot anfordern!"
        canonical="/preise"
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Preise & Kosten"
          subtitle="Transparente Preisgestaltung ohne versteckte Kosten. Wir erstellen Ihnen gerne ein individuelles Angebot."
          breadcrumbs={[{ label: "Preise" }]}
        />
        
        {/* Pricing Cards */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl p-8 ${
                    tier.highlighted 
                      ? "bg-primary text-primary-foreground ring-4 ring-primary/20" 
                      : "bg-card border border-border"
                  }`}
                >
                  <h3 className="text-xl font-heading font-semibold mb-2">{tier.name}</h3>
                  <p className={`text-sm mb-4 ${tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {tier.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{tier.priceFrom}</span>
                    {tier.unit && (
                      <span className={`text-sm ml-2 ${tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        {tier.unit}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className={`h-5 w-5 shrink-0 ${tier.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                        <span className={`text-sm ${tier.highlighted ? "text-primary-foreground/90" : "text-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className="w-full"
                    variant={tier.highlighted ? "secondary" : "default"}
                  >
                    <Link to="/kontakt">Angebot anfordern</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Info Box */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto bg-card p-6 rounded-xl border border-border flex gap-4">
              <Info className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold mb-2">Wie wir kalkulieren</h3>
                <p className="text-muted-foreground text-sm">
                  Die genauen Kosten hängen von verschiedenen Faktoren ab: Größe der Fläche, 
                  Reinigungsrhythmus, Art der Räumlichkeiten und gewünschte Leistungen. 
                  Nach einer kostenlosen Besichtigung erstellen wir ein detailliertes, 
                  transparentes Angebot – ohne versteckte Kosten.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Preise;

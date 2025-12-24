import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { CheckCircle, ClipboardCheck, Repeat, MessageCircle } from "lucide-react";

const Qualitaet = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Qualität & Prozesse" },
      ]),
    ],
  };

  return (
    <>
      <SEOHead
        title="Qualität & Prozesse"
        description="Unser Qualitätsmanagement garantiert gleichbleibend hohe Reinigungsstandards. Regelmäßige Kontrollen, geschultes Personal und dokumentierte Prozesse."
        canonical="/qualitaet-prozesse"
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Qualität & Prozesse"
          subtitle="Gleichbleibend hohe Qualität durch strukturierte Prozesse und regelmäßige Kontrollen."
          breadcrumbs={[{ label: "Qualität & Prozesse" }]}
        />
        
        <ContentSection
          title="Unser Qualitätsversprechen"
          subtitle="So stellen wir sicher, dass Sie immer zufrieden sind"
          items={[
            {
              icon: ClipboardCheck,
              title: "Regelmäßige Kontrollen",
              description: "Unsere Objektleiter führen regelmäßig Qualitätskontrollen durch und dokumentieren die Ergebnisse.",
            },
            {
              icon: CheckCircle,
              title: "Checklisten-System",
              description: "Jeder Reinigungsvorgang folgt einer definierten Checkliste. Nichts wird vergessen.",
            },
            {
              icon: Repeat,
              title: "Kontinuierliche Verbesserung",
              description: "Wir analysieren Feedback und optimieren unsere Prozesse laufend.",
            },
            {
              icon: MessageCircle,
              title: "Offene Kommunikation",
              description: "Direkter Draht zu Ihrem Ansprechpartner. Probleme werden sofort gelöst.",
            },
          ]}
          columns={2}
        />
        
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Unser Qualitätsprozess
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Bedarfsanalyse</h3>
                    <p className="text-muted-foreground">
                      Wir besichtigen Ihr Objekt und erstellen ein maßgeschneidertes Reinigungskonzept.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Team-Auswahl</h3>
                    <p className="text-muted-foreground">
                      Wir stellen ein festes Team zusammen, das speziell für Ihre Anforderungen geschult wird.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Einarbeitung</h3>
                    <p className="text-muted-foreground">
                      Unser Objektleiter begleitet die ersten Reinigungen und stellt sicher, dass alles läuft.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Laufende Kontrolle</h3>
                    <p className="text-muted-foreground">
                      Regelmäßige Qualitätschecks und Feedback-Gespräche sichern dauerhaft hohe Standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Qualitaet;

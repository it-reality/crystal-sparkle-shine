import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import FAQSection from "@/components/FAQSection";
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { Calendar, Repeat, FileCheck, Settings } from "lucide-react";

const faqs = [
  {
    question: "Was ist der Unterschied zwischen Büroreinigung und Unterhaltsreinigung?",
    answer: "Büroreinigung beschreibt den Objektbereich, Unterhaltsreinigung den Rhythmus. Unterhaltsreinigung bedeutet regelmäßige, wiederkehrende Reinigung – täglich, wöchentlich oder nach Plan.",
  },
  {
    question: "Welcher Reinigungsrhythmus ist für uns optimal?",
    answer: "Das hängt von der Nutzungsintensität ab. Hochfrequentierte Bereiche wie Eingänge und WCs empfehlen wir täglich, Büroflächen meist 3x wöchentlich. Wir beraten Sie gerne.",
  },
  {
    question: "Können wir den Rhythmus später anpassen?",
    answer: "Selbstverständlich. Unsere Verträge sind flexibel. Sie können den Reinigungsrhythmus jederzeit an geänderte Anforderungen anpassen.",
  },
];

const Unterhaltsreinigung = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Leistungen", item: `${siteConfig.url}/leistungen` },
        { name: "Unterhaltsreinigung Berlin" },
      ]),
      generateServiceSchema(
        "Unterhaltsreinigung",
        "Regelmäßige Unterhaltsreinigung für Gebäude und Büros in Berlin. Täglich, wöchentlich oder individuell.",
        "Berlin"
      ),
      generateFAQSchema(faqs),
    ],
  };

  return (
    <>
      <SEOHead
        title="Unterhaltsreinigung Berlin: Umfang, Rhythmus & Angebot"
        description="Unterhaltsreinigung Berlin: Regelmäßige professionelle Reinigung für Büros und Gewerbe. Flexible Rhythmen, feste Teams, faire Preise. Jetzt Angebot anfordern!"
        canonical="/unterhaltsreinigung-berlin"
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Unterhaltsreinigung Berlin"
          subtitle="Regelmäßige Reinigung für dauerhaft saubere Räumlichkeiten. Wir halten Ihr Gebäude in Schuss – zuverlässig und nach Plan."
          breadcrumbs={[
            { label: "Leistungen", href: "/leistungen" },
            { label: "Unterhaltsreinigung Berlin" },
          ]}
          ctaText="Kostenloses Angebot"
        />
        
        {/* Rhythmus Options */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">
              Flexible Reinigungsrhythmen
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Täglich</h3>
                <p className="text-sm text-muted-foreground">Für stark frequentierte Bereiche</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Repeat className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">3x Wöchentlich</h3>
                <p className="text-sm text-muted-foreground">Ideal für mittlere Büros</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <FileCheck className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Wöchentlich</h3>
                <p className="text-sm text-muted-foreground">Für kleinere Einheiten</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Settings className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Individuell</h3>
                <p className="text-sm text-muted-foreground">Nach Ihren Wünschen</p>
              </div>
            </div>
          </div>
        </section>
        
        <ContentSection
          title="Umfang der Unterhaltsreinigung"
          subtitle="Was bei jeder Reinigung erledigt wird"
          items={[
            {
              title: "Bodenreinigung",
              description: "Staubsaugen aller Teppiche, Wischen aller Hartböden. Saubere Böden bei jedem Besuch.",
            },
            {
              title: "Oberflächenreinigung",
              description: "Abstauben und Reinigen aller erreichbaren Oberflächen, Schreibtische und Regale.",
            },
            {
              title: "Sanitärreinigung",
              description: "Gründliche Reinigung und Desinfektion der Sanitäranlagen. Auffüllen von Verbrauchsmaterial.",
            },
            {
              title: "Küchenpflege",
              description: "Reinigung der Küchenflächen, Spüle und Geräte. Hygienische Pausenbereiche.",
            },
            {
              title: "Müllentsorgung",
              description: "Entleeren aller Abfallbehälter, Einsetzen neuer Beutel. Aufgeräumte Arbeitsplätze.",
            },
            {
              title: "Türen & Lichtschalter",
              description: "Reinigung von Türgriffen, Lichtschaltern und anderen Kontaktflächen.",
            },
          ]}
          columns={3}
        />
        
        <FAQSection
          items={faqs}
          title="Häufige Fragen zur Unterhaltsreinigung"
        />
      </article>
    </>
  );
};

export default Unterhaltsreinigung;

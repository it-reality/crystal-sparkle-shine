import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import FAQSection from "@/components/FAQSection";
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { CheckCircle, Clock, Users, Shield } from "lucide-react";

const faqs = [
  {
    question: "Wie oft sollte eine Büroreinigung stattfinden?",
    answer: "Die Häufigkeit hängt von der Nutzung ab. Für die meisten Büros empfehlen wir eine tägliche oder 3x wöchentliche Reinigung. Wir erstellen gerne einen individuellen Plan für Sie.",
  },
  {
    question: "Arbeiten Sie auch außerhalb der Geschäftszeiten?",
    answer: "Ja, wir reinigen bevorzugt außerhalb Ihrer Geschäftszeiten, um den Betriebsablauf nicht zu stören. Früh morgens oder abends – wir richten uns nach Ihnen.",
  },
  {
    question: "Wie schnell erhalten wir ein Angebot?",
    answer: "Innerhalb von 24 Stunden melden wir uns bei Ihnen. Nach einer Objektbesichtigung erhalten Sie ein detailliertes, kostenloses Angebot.",
  },
];

const Bueroreinigung = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Leistungen", item: `${siteConfig.url}/leistungen` },
        { name: "Büroreinigung Berlin" },
      ]),
      generateServiceSchema(
        "Büroreinigung",
        "Professionelle Büroreinigung für Unternehmen in Berlin. Sauber, diskret und zuverlässig.",
        "Berlin"
      ),
      generateFAQSchema(faqs),
    ],
  };

  return (
    <>
      <SEOHead
        title="Büroreinigung Berlin: Angebot & Ablauf"
        description="Professionelle Büroreinigung in Berlin. Tägliche, wöchentliche oder individuelle Reinigung für Ihr Büro. Kostenlose Besichtigung & Angebot anfordern!"
        canonical="/bueroreinigung-berlin"
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Büroreinigung Berlin"
          subtitle="Saubere Arbeitsplätze für produktive Mitarbeiter. Professionelle Büroreinigung nach Ihren Anforderungen – diskret und zuverlässig."
          breadcrumbs={[
            { label: "Leistungen", href: "/leistungen" },
            { label: "Büroreinigung Berlin" },
          ]}
          ctaText="Kostenloses Angebot"
        />
        
        {/* Quick Facts */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">Gründliche Reinigung</p>
                <p className="text-sm text-muted-foreground">Jeden Arbeitsplatz</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">Flexible Zeiten</p>
                <p className="text-sm text-muted-foreground">Nach Ihrem Plan</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">Festes Team</p>
                <p className="text-sm text-muted-foreground">Vertraute Gesichter</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">Versichert</p>
                <p className="text-sm text-muted-foreground">Vollkasko-Schutz</p>
              </div>
            </div>
          </div>
        </section>
        
        <ContentSection
          title="Was umfasst die Büroreinigung?"
          subtitle="Unsere Büroreinigung deckt alle wichtigen Bereiche ab"
          items={[
            {
              title: "Arbeitsplätze & Schreibtische",
              description: "Staubwischen, Reinigung von Oberflächen, Monitoren und Telefonen. Ordentliche Arbeitsumgebung.",
            },
            {
              title: "Böden & Teppiche",
              description: "Staubsaugen, Wischen und Pflege aller Bodenbeläge. Makellos saubere Böden.",
            },
            {
              title: "Sanitäranlagen",
              description: "Gründliche Reinigung und Desinfektion der WC-Anlagen. Hygiene auf höchstem Niveau.",
            },
            {
              title: "Küchen & Teeküchen",
              description: "Reinigung von Küchenzeilen, Geräten und Oberflächen. Sauberkeit im Pausenbereich.",
            },
            {
              title: "Müllentsorgung",
              description: "Entleerung aller Papierkörbe und Mülleimer. Frische Müllbeutel inklusive.",
            },
            {
              title: "Glasflächen",
              description: "Reinigung von Innenfenstern, Glastrennwänden und Türen. Klarer Durchblick.",
            },
          ]}
          columns={3}
        />
        
        <FAQSection
          items={faqs}
          title="Häufige Fragen zur Büroreinigung"
        />
      </article>
    </>
  );
};

export default Bueroreinigung;

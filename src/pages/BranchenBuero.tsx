import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Coffee, Users, Clock } from "lucide-react";

const BranchenBuero = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Branchen", item: `${siteConfig.url}/branchen` },
        { name: "Büroflächen" },
      ]),
    ],
  };

  return (
    <>
      <SEOHead
        title="Büroflächen: Unterhaltsreinigung"
        description="Spezialisierte Büroreinigung für moderne Arbeitswelten. Open Space, Einzelbüros, Konferenzräume – wir reinigen Ihr Büro professionell und diskret."
        canonical="/branchen/buero"
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Büroflächen reinigen"
          subtitle="Moderne Büros brauchen moderne Reinigungskonzepte. Wir verstehen die Anforderungen verschiedener Arbeitsumgebungen."
          breadcrumbs={[
            { label: "Branchen" },
            { label: "Büroflächen" },
          ]}
          ctaText="Angebot für Büros"
        />
        
        <ContentSection
          title="Reinigung für jede Büroform"
          subtitle="Von klassisch bis modern – wir passen uns an"
          items={[
            {
              icon: Monitor,
              title: "Open Space Offices",
              description: "Großraumbüros erfordern effiziente Abläufe. Wir reinigen systematisch und stören nicht.",
            },
            {
              icon: Users,
              title: "Coworking Spaces",
              description: "Flexible Arbeitswelten brauchen flexible Reinigung. Wir reagieren auf wechselnde Nutzung.",
            },
            {
              icon: Coffee,
              title: "Lounges & Küchen",
              description: "Pausenbereiche und Küchen erhalten besondere Aufmerksamkeit für maximale Hygiene.",
            },
            {
              icon: Clock,
              title: "24/7 Büros",
              description: "Auch bei Schichtbetrieb reinigen wir passend zu Ihren Arbeitszeiten.",
            },
          ]}
          columns={2}
        />
        
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Interessiert an Büroreinigung?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Fordern Sie jetzt ein kostenloses, unverbindliches Angebot an. 
              Wir besichtigen Ihre Räumlichkeiten und erstellen ein maßgeschneidertes Konzept.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/kontakt">Jetzt Angebot anfordern</Link>
            </Button>
          </div>
        </section>
      </article>
    </>
  );
};

export default BranchenBuero;

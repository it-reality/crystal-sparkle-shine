import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Stethoscope, Shield, Sparkles, FileCheck } from "lucide-react";

const BranchenPraxis = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Branchen", item: `${siteConfig.url}/branchen` },
        { name: "Praxen / Medizin" },
      ]),
    ],
  };

  return (
    <>
      <SEOHead
        title="Praxen / Medizin: Unterhaltsreinigung"
        description="Hygienische Reinigung für Arztpraxen, Zahnarztpraxen und medizinische Einrichtungen in Berlin. Nach RKI-Richtlinien, mit geschultem Personal."
        canonical="/branchen/praxis"
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Praxisreinigung & Medizin"
          subtitle="Höchste Hygienestandards für medizinische Einrichtungen. Wir kennen die besonderen Anforderungen im Gesundheitswesen."
          breadcrumbs={[
            { label: "Branchen" },
            { label: "Praxen / Medizin" },
          ]}
          ctaText="Angebot für Praxen"
        />
        
        <ContentSection
          title="Spezialisiert auf medizinische Hygiene"
          subtitle="Sicherheit und Sauberkeit für Ihre Patienten"
          items={[
            {
              icon: Shield,
              title: "RKI-konforme Reinigung",
              description: "Unsere Reinigung erfolgt nach den Richtlinien des Robert Koch-Instituts. Desinfektion inklusive.",
            },
            {
              icon: Stethoscope,
              title: "Geschultes Personal",
              description: "Unsere Mitarbeiter sind speziell für die Reinigung medizinischer Einrichtungen geschult.",
            },
            {
              icon: Sparkles,
              title: "Spezielle Reinigungsmittel",
              description: "Wir verwenden zugelassene Desinfektionsmittel und Reiniger für den medizinischen Bereich.",
            },
            {
              icon: FileCheck,
              title: "Dokumentation",
              description: "Lückenlose Dokumentation der Reinigungsleistungen für Ihre Qualitätssicherung.",
            },
          ]}
          columns={2}
        />
        
        <ContentSection
          title="Für diese Einrichtungen"
          background="muted"
          items={[
            {
              title: "Arztpraxen",
              description: "Allgemeinmedizin, Fachärzte, MVZ – wir reinigen nach Ihren Anforderungen.",
            },
            {
              title: "Zahnarztpraxen",
              description: "Besondere Hygieneanforderungen verstehen wir und setzen sie um.",
            },
            {
              title: "Therapiepraxen",
              description: "Physiotherapie, Ergotherapie und weitere therapeutische Einrichtungen.",
            },
            {
              title: "Pflegeeinrichtungen",
              description: "Ambulante Pflegedienste und Tagespflegen betreuen wir zuverlässig.",
            },
          ]}
          columns={4}
        />
        
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Hygiene ist keine Option
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              In medizinischen Einrichtungen ist professionelle Reinigung unverzichtbar. 
              Vertrauen Sie auf unsere Erfahrung im Gesundheitswesen.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/kontakt">Beratung anfordern</Link>
            </Button>
          </div>
        </section>
      </article>
    </>
  );
};

export default BranchenPraxis;

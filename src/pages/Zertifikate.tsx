import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { Shield, Award, FileCheck, Users } from "lucide-react";

const Zertifikate = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Zertifikate & Sicherheit" },
      ]),
    ],
  };

  return (
    <>
      <SEOHead
        title="Zertifikate & Sicherheit"
        description="Crystal Facility Services: Zertifiziert, versichert und geprüft. Alle unsere Mitarbeiter sind geschult und wir arbeiten nach höchsten Sicherheitsstandards."
        canonical="/zertifikate-sicherheit"
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Zertifikate & Sicherheit"
          subtitle="Geprüfte Qualität und umfassender Versicherungsschutz für Ihre Sicherheit."
          breadcrumbs={[{ label: "Zertifikate & Sicherheit" }]}
        />
        
        <ContentSection
          title="Unsere Zertifizierungen"
          subtitle="Geprüft und anerkannt"
          items={[
            {
              icon: Award,
              title: "Meisterbetrieb",
              description: "Geführt von einem geprüften Gebäudereiniger-Meister mit langjähriger Erfahrung.",
            },
            {
              icon: FileCheck,
              title: "Mitglied im Innungsverband",
              description: "Aktives Mitglied der Gebäudereiniger-Innung Berlin. Qualität nach Branchenstandard.",
            },
            {
              icon: Shield,
              title: "Betriebshaftpflicht",
              description: "Umfassender Versicherungsschutz bis 5 Mio. Euro. Sie sind rundum abgesichert.",
            },
            {
              icon: Users,
              title: "Geschultes Personal",
              description: "Alle Mitarbeiter durchlaufen eine intensive Einarbeitung und regelmäßige Schulungen.",
            },
          ]}
          columns={2}
        />
        
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Sicherheit im Fokus
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2">Schlüsselmanagement</h3>
                <p className="text-muted-foreground">
                  Sichere Aufbewahrung Ihrer Schlüssel in versicherten Tresoren. 
                  Dokumentierte Ausgabe und Rückgabe.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2">Mitarbeiter-Screening</h3>
                <p className="text-muted-foreground">
                  Sorgfältige Auswahl unserer Mitarbeiter. Auf Wunsch mit polizeilichem 
                  Führungszeugnis.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2">Datenschutz</h3>
                <p className="text-muted-foreground">
                  DSGVO-konforme Datenverarbeitung. Ihre Daten sind bei uns sicher.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2">Arbeitsschutz</h3>
                <p className="text-muted-foreground">
                  Regelmäßige Unterweisungen und moderne Schutzausrüstung für alle Mitarbeiter.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Zertifikate;

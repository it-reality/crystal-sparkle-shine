import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { Building, Layers, Users, Award } from "lucide-react";

const Gebaeudereinigung = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Leistungen", item: `${siteConfig.url}/leistungen` },
        { name: "Gebäudereinigung Berlin" },
      ]),
      generateServiceSchema(
        "Gebäudereinigung",
        "Umfassende Gebäudereinigung für B2B-Kunden in Berlin. Komplettlösungen für Gewerbeimmobilien.",
        "Berlin"
      ),
    ],
  };

  return (
    <>
      <SEOHead
        title="Gebäudereinigung Berlin (B2B)"
        description="Professionelle Gebäudereinigung in Berlin für Gewerbeimmobilien. Komplettlösungen für Bürogebäude, Praxen und öffentliche Einrichtungen. B2B-Spezialist."
        canonical="/gebaeudereinigung-berlin"
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Gebäudereinigung Berlin"
          subtitle="Komplettlösungen für Ihre Immobilie. Von der Eingangshalle bis zum Dach – wir kümmern uns um Ihr gesamtes Gebäude."
          breadcrumbs={[
            { label: "Leistungen", href: "/leistungen" },
            { label: "Gebäudereinigung Berlin" },
          ]}
          ctaText="Beratung anfordern"
        />
        
        {/* Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">150+</p>
                <p className="text-sm text-muted-foreground">Betreute Gebäude</p>
              </div>
              <div className="text-center">
                <Layers className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">50.000+</p>
                <p className="text-sm text-muted-foreground">m² täglich</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">80+</p>
                <p className="text-sm text-muted-foreground">Mitarbeiter</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Jahre Erfahrung</p>
              </div>
            </div>
          </div>
        </section>
        
        <ContentSection
          title="Unsere Gebäudereinigungs-Leistungen"
          subtitle="Alles aus einer Hand für Ihre Immobilie"
          items={[
            {
              title: "Treppenhausreinigung",
              description: "Regelmäßige Reinigung von Treppenhäusern, Aufzügen und Gemeinschaftsflächen.",
            },
            {
              title: "Fassadenreinigung",
              description: "Professionelle Reinigung von Fassaden und Außenbereichen.",
            },
            {
              title: "Tiefgaragenreinigung",
              description: "Gründliche Reinigung von Tiefgaragen und Parkdecks.",
            },
            {
              title: "Grundreinigung",
              description: "Intensive Reinigung als Basis für regelmäßige Unterhaltsreinigung.",
            },
            {
              title: "Sonderreinigung",
              description: "Baureinigung, Endreinigung und spezielle Reinigungsaufträge.",
            },
            {
              title: "Winterdienst",
              description: "Schneeräumung und Streudienst für sichere Zugänge.",
            },
          ]}
          columns={3}
        />
        
        <ContentSection
          title="Für diese Gebäudetypen"
          subtitle="Wir betreuen verschiedenste Immobilien in Berlin"
          background="muted"
          items={[
            {
              title: "Bürogebäude",
              description: "Moderne Bürokomplexe und Business Center.",
            },
            {
              title: "Praxen & Kliniken",
              description: "Hygienische Reinigung nach medizinischen Standards.",
            },
            {
              title: "Einzelhandel",
              description: "Geschäfte, Einkaufszentren und Showrooms.",
            },
            {
              title: "Bildungseinrichtungen",
              description: "Schulen, Universitäten und Kindergärten.",
            },
          ]}
          columns={4}
        />
      </article>
    </>
  );
};

export default Gebaeudereinigung;

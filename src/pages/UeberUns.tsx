import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { Target, Heart, Users, TrendingUp } from "lucide-react";

const UeberUns = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Über uns" },
      ]),
    ],
  };

  return (
    <>
      <SEOHead
        title="Über uns"
        description="Crystal Facility Services – Ihr Partner für Gebäudereinigung in Berlin seit über 15 Jahren. Lernen Sie unser Team und unsere Philosophie kennen."
        canonical="/ueber-uns"
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Über Crystal Facility Services"
          subtitle="Seit über 15 Jahren sind wir Ihr zuverlässiger Partner für professionelle Gebäudereinigung in Berlin."
          breadcrumbs={[{ label: "Über uns" }]}
        />
        
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Unsere Geschichte
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Crystal Facility Services wurde mit einer klaren Vision gegründet: 
                    Professionelle Gebäudereinigung auf höchstem Niveau, kombiniert mit 
                    persönlichem Service und fairen Preisen.
                  </p>
                  <p>
                    Was als kleines Familienunternehmen begann, ist heute ein 
                    etablierter Dienstleister mit über 80 Mitarbeitern und mehr als 
                    150 zufriedenen Kunden in Berlin.
                  </p>
                  <p>
                    Unser Erfolgsrezept: Wir behandeln jedes Objekt so, als wäre es 
                    unser eigenes. Diese Einstellung spüren unsere Kunden – und 
                    deshalb bleiben sie bei uns.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">15+</p>
                    <p className="text-sm text-muted-foreground">Jahre Erfahrung</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">150+</p>
                    <p className="text-sm text-muted-foreground">Zufriedene Kunden</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">80+</p>
                    <p className="text-sm text-muted-foreground">Mitarbeiter</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">98%</p>
                    <p className="text-sm text-muted-foreground">Kundenzufriedenheit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ContentSection
          title="Unsere Werte"
          subtitle="Was uns antreibt und auszeichnet"
          background="muted"
          items={[
            {
              icon: Target,
              title: "Zuverlässigkeit",
              description: "Wir halten unsere Versprechen. Pünktlich, gründlich und ohne Ausreden.",
            },
            {
              icon: Heart,
              title: "Leidenschaft",
              description: "Wir lieben, was wir tun. Das sieht man an unseren Ergebnissen.",
            },
            {
              icon: Users,
              title: "Partnerschaft",
              description: "Wir verstehen uns als Partner unserer Kunden, nicht als Dienstleister.",
            },
            {
              icon: TrendingUp,
              title: "Wachstum",
              description: "Wir entwickeln uns ständig weiter – für noch bessere Leistungen.",
            },
          ]}
          columns={4}
        />
      </article>
    </>
  );
};

export default UeberUns;

import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import heroImage from "@/assets/hero-kontakt.jpg";

const Kontakt = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Kontakt" },
      ]),
    ],
  };

  return (
    <>
      <SEOHead
        title="Kontakt & Angebot: Büroreinigung Berlin"
        description="Kontaktieren Sie Crystal Facility Services für ein kostenloses Angebot. Tel: 030 43202410, E-Mail: info@crystal-fs.de. Wir melden uns innerhalb 24 Stunden."
        canonical="/kontakt"
        includeGeoTags={true}
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Kontakt aufnehmen"
          subtitle="Fordern Sie jetzt ein kostenloses, unverbindliches Angebot an. Wir melden uns innerhalb von 24 Stunden bei Ihnen."
          breadcrumbs={[{ label: "Kontakt" }]}
          backgroundImage={heroImage}
        />
        
        <Contact />
      </article>
    </>
  );
};

export default Kontakt;

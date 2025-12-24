import SEOHead from "@/components/SEOHead";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Quality from "@/components/Quality";
import Contact from "@/components/Contact";
import { generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/seo";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateLocalBusinessSchema(),
      generateWebSiteSchema(),
      {
        "@type": "CleaningService",
        "@id": "https://crystal-fs.de/#cleaningservice",
        "name": "Crystal Facility Services",
        "description": "Professionelle Gebäudereinigung und Facility Services in Berlin",
        "telephone": "+49-30-43202410",
        "email": "info@crystal-fs.de",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hardenbergstr. 12",
          "addressLocality": "Berlin",
          "postalCode": "10623",
          "addressCountry": "DE"
        },
        "areaServed": {
          "@type": "City",
          "name": "Berlin"
        },
        "serviceType": [
          "Büroreinigung",
          "Unterhaltsreinigung",
          "Gebäudereinigung",
          "Glasreinigung"
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Büroreinigung & Unterhaltsreinigung Berlin"
        description="Professionelle Büroreinigung und Unterhaltsreinigung in Berlin für Geschäftskunden. Klare Abläufe, Qualitätskontrollen, Angebot per E-Mail anfordern."
        canonical="/"
        schema={schema}
        includeGeoTags
      />

      <main>
        <Hero />
        <Services />
        <About />
        <Quality />
        <Contact />
      </main>
    </>
  );
};

export default Index;

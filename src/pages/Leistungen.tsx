import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import ServicesGrid, { ServiceItem } from "@/components/ServicesGrid";
import ContentSection from "@/components/ContentSection";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { 
  Building2, 
  Sparkles, 
  Home, 
  GlassWater, 
  Wrench, 
  Leaf 
} from "lucide-react";

const services: ServiceItem[] = [
  {
    icon: Building2,
    title: "Büroreinigung",
    description: "Professionelle Reinigung für moderne Büroumgebungen. Sauber, effizient und diskret.",
    href: "/bueroreinigung-berlin",
  },
  {
    icon: Sparkles,
    title: "Unterhaltsreinigung",
    description: "Regelmäßige Reinigung nach Ihrem Rhythmus. Täglich, wöchentlich oder individuell.",
    href: "/unterhaltsreinigung-berlin",
  },
  {
    icon: Home,
    title: "Gebäudereinigung",
    description: "Umfassende Reinigungskonzepte für Gewerbeimmobilien und öffentliche Gebäude.",
    href: "/gebaeudereinigung-berlin",
  },
  {
    icon: GlassWater,
    title: "Glasreinigung",
    description: "Streifenfreie Fenster- und Glasflächenreinigung für klare Durchsicht.",
    href: "/leistungen",
  },
  {
    icon: Wrench,
    title: "Hausmeisterdienste",
    description: "Zuverlässige Hausmeisterdienste für Ihre Immobilie. Rund um die Uhr erreichbar.",
    href: "/leistungen",
  },
  {
    icon: Leaf,
    title: "Gartenpflege",
    description: "Professionelle Grünflächenpflege und Gartenarbeiten für Ihr Außengelände.",
    href: "/leistungen",
  },
];

const Leistungen = () => {
  const breadcrumbs = [{ name: "Leistungen" }];
  
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Leistungen" },
      ]),
      ...services.slice(0, 3).map((s) =>
        generateServiceSchema(s.title, s.description, "Berlin")
      ),
    ],
  };

  return (
    <>
      <SEOHead
        title="Leistungen: Büroreinigung & Unterhaltsreinigung"
        description="Entdecken Sie unser Leistungsspektrum: Büroreinigung, Unterhaltsreinigung, Gebäudereinigung, Glasreinigung und mehr. Professionelle Facility Services in Berlin."
        canonical="/leistungen"
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Unsere Leistungen"
          subtitle="Professionelle Reinigungsdienstleistungen für Ihr Unternehmen in Berlin. Von der täglichen Büroreinigung bis zur umfassenden Gebäudebetreuung."
          breadcrumbs={[{ label: "Leistungen" }]}
          ctaText="Angebot anfordern"
        />
        
        <ServicesGrid
          services={services}
          title="Alle Reinigungsleistungen"
          subtitle="Wir bieten maßgeschneiderte Lösungen für jede Anforderung"
        />
        
        <ContentSection
          title="Warum Crystal Facility Services?"
          subtitle="Über 15 Jahre Erfahrung in der professionellen Gebäudereinigung"
          background="muted"
          items={[
            {
              title: "Zuverlässigkeit",
              description: "Pünktliche und zuverlässige Reinigung nach Ihren Vorgaben. Wir halten, was wir versprechen.",
            },
            {
              title: "Qualität",
              description: "Geschultes Personal und moderne Reinigungstechnik für beste Ergebnisse.",
            },
            {
              title: "Flexibilität",
              description: "Individuelle Reinigungspläne, angepasst an Ihre Betriebszeiten und Anforderungen.",
            },
          ]}
          columns={3}
        />
      </article>
    </>
  );
};

export default Leistungen;

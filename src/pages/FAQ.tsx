import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Wie schnell erhalten wir ein Angebot?",
    answer: "Innerhalb von 24 Stunden melden wir uns bei Ihnen. Nach einer Objektbesichtigung erhalten Sie ein detailliertes, kostenloses Angebot – meist innerhalb von 2-3 Werktagen.",
  },
  {
    question: "Was kostet eine Büroreinigung?",
    answer: "Die Kosten hängen von Größe, Reinigungsrhythmus und Umfang ab. Als Richtwert: Büroreinigung beginnt ab ca. 15€/Stunde, Unterhaltsreinigung ab ca. 0,50€/m². Wir erstellen Ihnen gerne ein individuelles Angebot.",
  },
  {
    question: "Arbeiten Sie auch außerhalb der Geschäftszeiten?",
    answer: "Ja, wir reinigen bevorzugt außerhalb Ihrer Geschäftszeiten, um den Betriebsablauf nicht zu stören. Früh morgens, abends oder am Wochenende – wir richten uns nach Ihnen.",
  },
  {
    question: "Was ist der Unterschied zwischen Büroreinigung und Unterhaltsreinigung?",
    answer: "Büroreinigung beschreibt den Objektbereich (Büros), Unterhaltsreinigung den Rhythmus (regelmäßig, wiederkehrend). Eine Büroreinigung kann als Unterhaltsreinigung durchgeführt werden.",
  },
  {
    question: "Können wir den Reinigungsrhythmus später anpassen?",
    answer: "Selbstverständlich. Unsere Verträge sind flexibel. Sie können den Reinigungsrhythmus jederzeit an geänderte Anforderungen anpassen – mehr oder weniger Reinigungen, andere Zeiten.",
  },
  {
    question: "Stellen Sie die Reinigungsmittel?",
    answer: "Ja, wir bringen alle notwendigen Reinigungsmittel und Geräte mit. Sie müssen sich um nichts kümmern. Auf Wunsch verwenden wir auch spezielle Produkte.",
  },
  {
    question: "Wie erfolgt die Qualitätskontrolle?",
    answer: "Unsere Objektleiter führen regelmäßig Qualitätskontrollen durch. Zudem haben Sie jederzeit einen direkten Ansprechpartner für Feedback oder Anpassungswünsche.",
  },
  {
    question: "Sind Ihre Mitarbeiter versichert?",
    answer: "Ja, wir haben eine umfassende Betriebshaftpflichtversicherung bis 5 Mio. Euro. Alle unsere Mitarbeiter sind sozialversichert angestellt.",
  },
  {
    question: "In welchen Gebieten sind Sie tätig?",
    answer: "Wir sind in ganz Berlin und dem nahen Umland tätig. Von Spandau bis Köpenick, von Pankow bis Steglitz – wir kommen zu Ihnen.",
  },
  {
    question: "Wie schnell können Sie starten?",
    answer: "Bei Bedarf können wir bereits innerhalb weniger Tage nach Auftragserteilung mit der Reinigung beginnen. Für komplexere Objekte planen wir etwa 1-2 Wochen Vorlauf ein.",
  },
];

const FAQ = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "FAQ" },
      ]),
      generateFAQSchema(faqs),
    ],
  };

  return (
    <>
      <SEOHead
        title="FAQ: Büroreinigung & Unterhaltsreinigung Berlin"
        description="Häufig gestellte Fragen zur Büroreinigung und Unterhaltsreinigung. Preise, Ablauf, Qualität – hier finden Sie Antworten."
        canonical="/faq"
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Häufig gestellte Fragen"
          subtitle="Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Reinigungsleistungen."
          breadcrumbs={[{ label: "FAQ" }]}
        />
        
        <FAQSection
          items={faqs}
          title="Ihre Fragen – unsere Antworten"
          subtitle="Finden Sie nicht die Antwort, die Sie suchen? Kontaktieren Sie uns direkt."
        />
        
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Noch Fragen?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Wir beraten Sie gerne persönlich. Rufen Sie uns an oder schreiben Sie uns – 
              wir antworten innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/kontakt">Kontakt aufnehmen</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                  {siteConfig.contact.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default FAQ;

import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { Building2, Stethoscope, ShoppingBag, GraduationCap, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Seit 3 Jahren reinigt Crystal unsere Büros. Zuverlässig, gründlich und freundlich. Absolut empfehlenswert!",
    author: "Thomas M.",
    company: "IT-Unternehmen, Berlin-Mitte",
  },
  {
    quote: "Die Hygiene in unserer Praxis ist tadellos. Das Team von Crystal versteht die besonderen Anforderungen im medizinischen Bereich.",
    author: "Dr. Sarah K.",
    company: "Zahnarztpraxis, Charlottenburg",
  },
  {
    quote: "Flexibel, professionell und immer erreichbar. Die Zusammenarbeit läuft reibungslos.",
    author: "Michael B.",
    company: "Hausverwaltung, Kreuzberg",
  },
];

const Referenzen = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Referenzen" },
      ]),
    ],
  };

  return (
    <>
      <SEOHead
        title="Referenzen"
        description="Unsere Kunden sprechen für uns. Erfahren Sie, was Unternehmen in Berlin über Crystal Facility Services sagen."
        canonical="/referenzen"
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Unsere Referenzen"
          subtitle="Über 150 zufriedene Kunden in Berlin vertrauen auf Crystal Facility Services."
          breadcrumbs={[{ label: "Referenzen" }]}
        />
        
        {/* Branchen */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-heading font-bold text-center mb-4">
              Kunden aus allen Branchen
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Wir betreuen Unternehmen verschiedenster Größen und Branchen
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Building2 className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">Büro & Verwaltung</h3>
                <p className="text-sm text-muted-foreground mt-1">50+ Kunden</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Stethoscope className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">Gesundheit</h3>
                <p className="text-sm text-muted-foreground mt-1">30+ Kunden</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <ShoppingBag className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">Einzelhandel</h3>
                <p className="text-sm text-muted-foreground mt-1">40+ Kunden</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <GraduationCap className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">Bildung</h3>
                <p className="text-sm text-muted-foreground mt-1">25+ Kunden</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Das sagen unsere Kunden
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Referenzen;

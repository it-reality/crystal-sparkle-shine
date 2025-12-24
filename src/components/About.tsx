import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { ScrollReveal, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const stats = [
  { icon: Users, value: "500+", label: "Zufriedene Kunden" },
  { icon: Award, value: "15+", label: "Jahre Erfahrung" },
  { icon: Clock, value: "24/7", label: "Kundenservice" },
];

const benefits = [
  "Geschultes und zuverlässiges Reinigungspersonal",
  "Flexible Reinigungszeiten nach Ihren Wünschen",
  "Verwendung umweltfreundlicher Reinigungsmittel",
  "Transparente Preisgestaltung ohne versteckte Kosten",
  "Regelmäßige Qualitätskontrollen vor Ort",
  "Persönlicher Ansprechpartner für Ihr Objekt",
];

const About = () => {
  const { ref: statsRef, isVisible: statsVisible, getDelay } = useStaggeredAnimation(stats.length, 150);

  return (
    <section id="ueber-uns" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <ScrollReveal direction="right">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              Über Crystal
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ihr zuverlässiger Partner für{" "}
              <span className="text-primary">Sauberkeit</span> in Berlin
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Die Crystal Facility Service GmbH ist Ihr erfahrener Spezialist
              für professionelle Gebäudereinigung in Berlin. Seit über 15 Jahren
              unterstützen wir Unternehmen aller Branchen mit maßgeschneiderten
              Reinigungslösungen.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Unser engagiertes Team legt großen Wert auf Qualität,
              Zuverlässigkeit und Kundenzufriedenheit. Wir verstehen, dass jedes
              Objekt einzigartig ist und entwickeln individuelle Reinigungspläne,
              die perfekt auf Ihre Anforderungen zugeschnitten sind.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg">
              Mehr erfahren
            </Button>
          </ScrollReveal>

          {/* Stats & Visual */}
          <div className="relative">
            {/* Stats Cards */}
            <div ref={statsRef} className="grid gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-5 bg-secondary/50 rounded-xl p-5 border border-border/50 transition-all duration-700 ${
                    statsVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${getDelay(index)}ms` }}
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0">
                    <stat.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-3xl font-heading font-bold text-foreground">
                      {stat.value}
                    </span>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { ScrollReveal, useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";

const benefits = [
  "Geschultes und zuverlässiges Reinigungspersonal",
  "Flexible Reinigungszeiten nach Ihren Wünschen",
  "Umweltfreundliche Reinigungsmittel",
  "Transparente Preisgestaltung",
  "Regelmäßige Qualitätskontrollen",
  "Persönlicher Ansprechpartner",
];

const About = () => {
  const { ref: benefitsRef, isVisible: benefitsVisible, getDelay } = useStaggeredAnimation(benefits.length, 80);

  return (
    <section id="ueber-uns" className="py-24 md:py-32 bg-gradient-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <ScrollReveal direction="right">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-6">
              Über Crystal
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 leading-tight">
              Ihr zuverlässiger Partner für{" "}
              <span className="text-gradient-primary">Sauberkeit</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Die Crystal Facility Service GmbH ist Ihr erfahrener Spezialist
              für professionelle Gebäudereinigung in Berlin. Seit über 15 Jahren
              unterstützen wir Unternehmen aller Branchen mit maßgeschneiderten
              Reinigungslösungen.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Unser engagiertes Team legt großen Wert auf Qualität,
              Zuverlässigkeit und Kundenzufriedenheit. Wir verstehen, dass jedes
              Objekt einzigartig ist.
            </p>

            <Button asChild size="lg" className="group bg-gradient-hero hover:opacity-90 border-0">
              <Link to="/ueber-uns">
                Mehr erfahren
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>

          {/* Benefits Card */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border/50">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-8">
                Warum Crystal wählen?
              </h3>
              
              <div ref={benefitsRef} className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30 transition-all duration-500 ${
                      benefitsVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${getDelay(index)}ms` }}
                  >
                    <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-gradient-hero rounded-3xl opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
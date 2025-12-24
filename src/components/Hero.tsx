import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  const highlights = [
    "Zertifizierte Reinigungsteams",
    "Individuelle Reinigungspläne",
    "24/7 Kundenservice",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 md:pt-36 pb-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professionelle Büroreinigung in Berlin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/40" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent">
              Ihr Partner für Sauberkeit in Berlin
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Professionelle{" "}
            <span className="text-primary">Gebäudereinigung</span>{" "}
            für Ihr Unternehmen
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Crystal Facility Services bietet maßgeschneiderte Reinigungslösungen
            für Büros, Gewerbeflächen und Gebäude in Berlin. Zuverlässig,
            gründlich und termingerecht.
          </p>

          {/* Highlights */}
          <div
            className="flex flex-wrap gap-4 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-foreground/80"
              >
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl">
              Angebot anfordern
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;

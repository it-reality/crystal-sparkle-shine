import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with modern overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professionelle Büroreinigung in Berlin"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
        {/* Accent color overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container relative z-10 pt-32 md:pt-40 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-dark rounded-full mb-8 animate-fade-in border border-white/10">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white/90">
              Professionelle Gebäudereinigung seit 2009
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-8 animate-fade-in-up">
            Sauberkeit die{" "}
            <span className="text-gradient-primary bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              begeistert
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Crystal Facility Services bietet maßgeschneiderte Reinigungslösungen
            für Büros, Gewerbeflächen und Gebäude in Berlin. Zuverlässig,
            gründlich und termingerecht.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button asChild size="xl" className="group bg-gradient-hero hover:opacity-90 border-0 shadow-glow-primary">
              <Link to="/kontakt">
                Angebot anfordern
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
              <Link to="/leistungen">
                Leistungen entdecken
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div 
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {[
              { value: "500+", label: "Zufriedene Kunden" },
              { value: "15+", label: "Jahre Erfahrung" },
              { value: "24/7", label: "Service verfügbar" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <span className="text-3xl md:text-4xl font-heading font-bold text-white">{stat.value}</span>
                <p className="text-sm text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
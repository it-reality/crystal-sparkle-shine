import { Building2, Sparkles, Home, Trees, Wrench, Shield, ArrowUpRight } from "lucide-react";
import { ScrollReveal, useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "Büroreinigung",
    description:
      "Tägliche oder wöchentliche Reinigung Ihrer Büroräume mit höchsten Qualitätsstandards.",
    href: "/bueroreinigung",
  },
  {
    icon: Sparkles,
    title: "Unterhaltsreinigung",
    description:
      "Regelmäßige Pflege für dauerhaft saubere und hygienische Räumlichkeiten.",
    href: "/unterhaltsreinigung",
  },
  {
    icon: Home,
    title: "Gebäudereinigung",
    description:
      "Umfassende Reinigung für Ihr gesamtes Gebäude, von Eingängen bis Gemeinschaftsflächen.",
    href: "/gebaeudereinigung",
  },
  {
    icon: Trees,
    title: "Garten- & Landschaftspflege",
    description:
      "Professionelle Pflege Ihrer Außenanlagen für einen gepflegten ersten Eindruck.",
    href: "/leistungen",
  },
  {
    icon: Wrench,
    title: "Hausmeisterdienste",
    description:
      "Zuverlässige Services für Wartung, Reparaturen und reibungslosen Betrieb.",
    href: "/leistungen",
  },
  {
    icon: Shield,
    title: "Glasreinigung",
    description:
      "Streifenfreie Fensterreinigung mit modernen Techniken für kristallklare Ergebnisse.",
    href: "/leistungen",
  },
];

const Services = () => {
  const { ref, isVisible, getDelay } = useStaggeredAnimation(services.length, 100);

  return (
    <section id="leistungen" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
            Unsere Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Professionelle Reinigung{" "}
            <span className="text-gradient-primary">für jeden Bedarf</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Entdecken Sie unser umfassendes Angebot an Facility Services für
            Geschäftskunden in Berlin und Umgebung.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className={`group relative bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/30 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: `${getDelay(index)}ms`,
                transitionDuration: "600ms"
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-glow-primary">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Link indicator */}
              <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm">Mehr erfahren</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
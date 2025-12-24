import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface ServicesGridProps {
  services: ServiceItem[];
  title?: string;
  subtitle?: string;
}

const ServicesGrid = ({ 
  services, 
  title = "Unsere Leistungen",
  subtitle 
}: ServicesGridProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.href}
              className="group bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                Mehr erfahren
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const PageHero = ({
  title,
  subtitle,
  breadcrumbs,
  ctaText,
  ctaHref = "/kontakt",
  backgroundImage,
  overlay = true,
}: PageHeroProps) => {
  return (
    <section 
      className="relative py-16 md:py-24 overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : undefined}
    >
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      )}
      
      {/* Background pattern if no image */}
      {!backgroundImage && !overlay && (
        <div className="absolute inset-0 bg-gradient-surface" />
      )}
      
      <div className="container relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className={overlay ? "text-primary-foreground/80 [&_a]:text-primary-foreground/80 [&_a:hover]:text-primary-foreground [&_span]:text-primary-foreground" : ""}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        
        <div className="max-w-3xl">
          <h1 
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 hero-heading ${
              overlay ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {title}
          </h1>
          
          {subtitle && (
            <p 
              className={`text-lg md:text-xl mb-8 hero-subtext ${
                overlay ? "text-primary-foreground/90" : "text-muted-foreground"
              }`}
            >
              {subtitle}
            </p>
          )}
          
          {ctaText && (
            <Button 
              asChild 
              size="lg"
              variant={overlay ? "secondary" : "default"}
            >
              <Link to={ctaHref}>{ctaText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;

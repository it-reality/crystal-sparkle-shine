import { LucideIcon } from "lucide-react";

export interface ContentItem {
  icon?: LucideIcon;
  title: string;
  description: string;
}

interface ContentSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  items?: ContentItem[];
  children?: React.ReactNode;
  variant?: "default" | "cards" | "list";
  columns?: 2 | 3 | 4;
  background?: "default" | "muted" | "primary";
}

const ContentSection = ({
  id,
  title,
  subtitle,
  items,
  children,
  variant = "cards",
  columns = 3,
  background = "default",
}: ContentSectionProps) => {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    primary: "bg-primary text-primary-foreground",
  };
  
  const gridClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]}`}>
      <div className="container">
        <header className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${
            background === "primary" ? "text-primary-foreground" : "text-foreground"
          }`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg max-w-2xl mx-auto ${
              background === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"
            }`}>
              {subtitle}
            </p>
          )}
        </header>
        
        {items && items.length > 0 && (
          <div className={`grid gap-6 ${gridClasses[columns]}`}>
            {items.map((item, index) => (
              <article 
                key={index}
                className={`${
                  variant === "cards" 
                    ? "bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow" 
                    : "flex gap-4"
                }`}
              >
                {item.icon && (
                  <div className={`${
                    variant === "cards" 
                      ? "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                      : "flex-shrink-0"
                  }`}>
                    <item.icon className={`${
                      variant === "cards" ? "h-6 w-6" : "h-5 w-5"
                    } text-primary`} />
                  </div>
                )}
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default ContentSection;

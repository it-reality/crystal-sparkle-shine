import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Büroreinigung",
    "Unterhaltsreinigung",
    "Gebäudereinigung",
    "Glasreinigung",
    "Hausmeisterdienste",
    "Gartenpflege",
  ];

  const links = [
    { label: "Home", href: "#home" },
    { label: "Leistungen", href: "#leistungen" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Qualität", href: "#qualitaet" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <footer className="bg-foreground text-background/90">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">C</span>
              </div>
              <div>
                <span className="font-heading font-semibold text-lg text-background block">
                  Crystal
                </span>
                <span className="text-xs text-background/60">Facility Services</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Ihr professioneller Partner für Gebäudereinigung und Facility
              Management in Berlin. Qualität, Zuverlässigkeit und
              Kundenzufriedenheit sind unser Versprechen.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">
              Leistungen
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#leistungen"
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:03043202410"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  030 43202410
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@crystal-fs.de"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@crystal-fs.de
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                Berlin, Deutschland
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} Crystal Facility Services GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Impressum
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

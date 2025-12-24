import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig, navLinks } from "@/data/siteConfig";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/90">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">C</span>
              </div>
              <div>
                <span className="font-heading font-semibold text-lg text-background block">
                  Crystal
                </span>
                <span className="text-xs text-background/60">Facility Services</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              {siteConfig.description}. Qualität, Zuverlässigkeit und
              Kundenzufriedenheit sind unser Versprechen.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">
              Leistungen
            </h4>
            <ul className="space-y-2">
              {navLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/leistungen"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  Alle Leistungen
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">
              Unternehmen
            </h4>
            <ul className="space-y-2">
              {navLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/preise"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  Preise
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
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
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Mo - Fr: {siteConfig.openingHours.opens} - {siteConfig.openingHours.closes} Uhr
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} {siteConfig.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/impressum" className="text-background/60 hover:text-background transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-background/60 hover:text-background transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

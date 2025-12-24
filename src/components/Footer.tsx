import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig, navLinks } from "@/data/siteConfig";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />
      
      {/* Main Footer */}
      <div className="container relative py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logo} 
                alt="Crystal Facility Service GmbH" 
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {siteConfig.description}. Qualität, Zuverlässigkeit und
              Kundenzufriedenheit sind unser Versprechen.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Leistungen
            </h4>
            <ul className="space-y-3">
              {navLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/leistungen"
                  className="group text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2"
                >
                  Alle Leistungen
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Unternehmen
            </h4>
            <ul className="space-y-3">
              {navLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/preise"
                  className="group text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2"
                >
                  Preise
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="group text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2"
                >
                  FAQ
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-4 w-4" />
                </div>
                <span>
                  Mo - Fr: {siteConfig.openingHours.opens} - {siteConfig.openingHours.closes} Uhr
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} {siteConfig.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/impressum" className="text-white/40 hover:text-white transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-white/40 hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
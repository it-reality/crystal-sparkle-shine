import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#leistungen", label: "Leistungen" },
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#qualitaet", label: "Qualität" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:03043202410"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">030 43202410</span>
            </a>
            <a
              href="mailto:info@crystal-fs.de"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@crystal-fs.de</span>
            </a>
          </div>
          <span className="hidden md:block text-primary-foreground/80">
            Professionelle Gebäudereinigung in Berlin
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-heading font-bold text-lg md:text-xl">C</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-semibold text-lg text-foreground leading-tight block">
                Crystal
              </span>
              <span className="text-xs text-muted-foreground">Facility Services</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="default" size="default">
              Angebot anfordern
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" className="mt-2">
                Angebot anfordern
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

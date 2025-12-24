import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/data/siteConfig";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

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
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-heading font-bold text-lg md:text-xl">C</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-semibold text-lg text-foreground leading-tight block">
                Crystal
              </span>
              <span className="text-xs text-muted-foreground">Facility Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${
                isActive("/") ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Home
            </Link>
            
            {/* Leistungen Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${
                    isActive("/leistungen") || isActive("/bueroreinigung") || isActive("/unterhaltsreinigung") || isActive("/gebaeudereinigung")
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  Leistungen
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/leistungen" className="w-full">Alle Leistungen</Link>
                </DropdownMenuItem>
                {navLinks.services.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href} className="w-full">{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Branchen Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${
                    isActive("/branchen") ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  Branchen
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {navLinks.branchen.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href} className="w-full">{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/ueber-uns"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${
                isActive("/ueber-uns") ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Über uns
            </Link>
            
            <Link
              to="/qualitaet-prozesse"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${
                isActive("/qualitaet") ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Qualität
            </Link>
            
            <Link
              to="/preise"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${
                isActive("/preise") ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Preise
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link to="/kontakt">Angebot anfordern</Link>
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
            <div className="container py-4 flex flex-col gap-2">
              <Link
                to="/"
                className="py-2 px-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-muted font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Leistungen Section */}
              <div className="py-2 px-3">
                <Link 
                  to="/leistungen" 
                  className="font-semibold text-foreground block mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Leistungen
                </Link>
                <div className="pl-4 flex flex-col gap-1">
                  {navLinks.services.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="py-1.5 text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Branchen Section */}
              <div className="py-2 px-3">
                <span className="font-semibold text-foreground block mb-2">Branchen</span>
                <div className="pl-4 flex flex-col gap-1">
                  {navLinks.branchen.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="py-1.5 text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/ueber-uns"
                className="py-2 px-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-muted font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              
              <Link
                to="/qualitaet-prozesse"
                className="py-2 px-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-muted font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Qualität
              </Link>
              
              <Link
                to="/preise"
                className="py-2 px-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-muted font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Preise
              </Link>
              
              <Button asChild className="mt-2">
                <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
                  Angebot anfordern
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

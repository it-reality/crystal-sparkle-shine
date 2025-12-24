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
import logo from "@/assets/logo.png";

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
      <div className="bg-gradient-hero text-white py-2.5">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:03043202410"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline font-medium">030 43202410</span>
            </a>
            <a
              href="mailto:info@crystal-fs.de"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline font-medium">info@crystal-fs.de</span>
            </a>
          </div>
          <span className="hidden md:block text-white/80">
            Professionelle Gebäudereinigung in Berlin
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="glass border-b border-border/30 shadow-md">
        <div className="container flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center py-2">
            <img 
              src={logo} 
              alt="Crystal Facility Service GmbH" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2.5 text-sm font-medium transition-all rounded-xl hover:bg-primary/5 ${
                isActive("/") ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Home
            </Link>
            
            {/* Leistungen Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 px-4 py-2.5 text-sm font-medium transition-all rounded-xl hover:bg-primary/5 ${
                    isActive("/leistungen") || isActive("/bueroreinigung") || isActive("/unterhaltsreinigung") || isActive("/gebaeudereinigung")
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  Leistungen
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52 p-2">
                <DropdownMenuItem asChild>
                  <Link to="/leistungen" className="w-full rounded-lg">Alle Leistungen</Link>
                </DropdownMenuItem>
                {navLinks.services.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href} className="w-full rounded-lg">{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Branchen Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 px-4 py-2.5 text-sm font-medium transition-all rounded-xl hover:bg-primary/5 ${
                    isActive("/branchen") ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  Branchen
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52 p-2">
                {navLinks.branchen.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href} className="w-full rounded-lg">{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/ueber-uns"
              className={`px-4 py-2.5 text-sm font-medium transition-all rounded-xl hover:bg-primary/5 ${
                isActive("/ueber-uns") ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Über uns
            </Link>
            
            <Link
              to="/qualitaet-prozesse"
              className={`px-4 py-2.5 text-sm font-medium transition-all rounded-xl hover:bg-primary/5 ${
                isActive("/qualitaet") ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Qualität
            </Link>
            
            <Link
              to="/preise"
              className={`px-4 py-2.5 text-sm font-medium transition-all rounded-xl hover:bg-primary/5 ${
                isActive("/preise") ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Preise
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-gradient-hero hover:opacity-90 border-0 shadow-lg">
              <Link to="/kontakt">Angebot anfordern</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 text-foreground hover:text-primary transition-colors rounded-xl hover:bg-primary/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border/30 animate-fade-in">
            <div className="container py-6 flex flex-col gap-2">
              <Link
                to="/"
                className="py-3 px-4 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/5 font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Leistungen Section */}
              <div className="py-3 px-4">
                <Link 
                  to="/leistungen" 
                  className="font-semibold text-foreground block mb-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Leistungen
                </Link>
                <div className="pl-4 flex flex-col gap-2 border-l-2 border-primary/20">
                  {navLinks.services.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="py-2 text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Branchen Section */}
              <div className="py-3 px-4">
                <span className="font-semibold text-foreground block mb-3">Branchen</span>
                <div className="pl-4 flex flex-col gap-2 border-l-2 border-accent/20">
                  {navLinks.branchen.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="py-2 text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/ueber-uns"
                className="py-3 px-4 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/5 font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              
              <Link
                to="/qualitaet-prozesse"
                className="py-3 px-4 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/5 font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Qualität
              </Link>
              
              <Link
                to="/preise"
                className="py-3 px-4 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/5 font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Preise
              </Link>
              
              <Button asChild className="mt-4 bg-gradient-hero hover:opacity-90 border-0">
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
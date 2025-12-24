export const siteConfig = {
  name: "Crystal Facility Services",
  legalName: "Crystal Facility Services GmbH",
  url: "https://crystal-fs.de",
  description: "Professionelle Gebäudereinigung und Facility Management in Berlin",
  
  contact: {
    phone: "030 43202410",
    phoneFormatted: "+49 30 43202410",
    email: "info@crystal-fs.de",
    address: {
      street: "Hardenbergstr. 12",
      postalCode: "10623",
      city: "Berlin",
      country: "Deutschland",
      countryCode: "DE",
    },
  },
  
  geo: {
    latitude: 52.5069,
    longitude: 13.3351,
    region: "DE-BE",
  },
  
  social: {
    // Add social links when available
  },
  
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  
  priceRange: "€€",
};

export const navLinks = {
  main: [
    { href: "/", label: "Home" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/qualitaet-prozesse", label: "Qualität" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  
  services: [
    { href: "/bueroreinigung-berlin", label: "Büroreinigung" },
    { href: "/unterhaltsreinigung-berlin", label: "Unterhaltsreinigung" },
    { href: "/gebaeudereinigung-berlin", label: "Gebäudereinigung" },
  ],
  
  branchen: [
    { href: "/branchen/buero", label: "Büroflächen" },
    { href: "/branchen/praxis", label: "Praxen / Medizin" },
  ],
  
  company: [
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/qualitaet-prozesse", label: "Qualität & Prozesse" },
    { href: "/zertifikate-sicherheit", label: "Zertifikate & Sicherheit" },
    { href: "/referenzen", label: "Referenzen" },
  ],
  
  footer: [
    { href: "/preise", label: "Preise" },
    { href: "/faq", label: "FAQ" },
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ],
};

export const pages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/leistungen", priority: "0.9", changefreq: "weekly" },
  { path: "/bueroreinigung-berlin", priority: "0.9", changefreq: "weekly" },
  { path: "/unterhaltsreinigung-berlin", priority: "0.9", changefreq: "weekly" },
  { path: "/gebaeudereinigung-berlin", priority: "0.9", changefreq: "weekly" },
  { path: "/branchen/buero", priority: "0.8", changefreq: "monthly" },
  { path: "/branchen/praxis", priority: "0.8", changefreq: "monthly" },
  { path: "/ueber-uns", priority: "0.8", changefreq: "monthly" },
  { path: "/qualitaet-prozesse", priority: "0.7", changefreq: "monthly" },
  { path: "/zertifikate-sicherheit", priority: "0.7", changefreq: "monthly" },
  { path: "/referenzen", priority: "0.7", changefreq: "monthly" },
  { path: "/preise", priority: "0.8", changefreq: "weekly" },
  { path: "/faq", priority: "0.7", changefreq: "monthly" },
  { path: "/kontakt", priority: "0.8", changefreq: "monthly" },
  { path: "/impressum", priority: "0.3", changefreq: "yearly" },
  { path: "/datenschutz", priority: "0.3", changefreq: "yearly" },
];

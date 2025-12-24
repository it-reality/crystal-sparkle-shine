import { siteConfig } from "@/data/siteConfig";

export interface BreadcrumbItem {
  name: string;
  item?: string;
}

export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phoneFormatted,
    contactType: "customer service",
    areaServed: siteConfig.geo.region,
    availableLanguage: "German",
  },
});

export const generateLocalBusinessSchema = () => ({
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.legalName,
  image: `${siteConfig.url}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address.street,
    addressLocality: siteConfig.contact.address.city,
    postalCode: siteConfig.contact.address.postalCode,
    addressCountry: siteConfig.contact.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  telephone: siteConfig.contact.phoneFormatted,
  email: siteConfig.contact.email,
  priceRange: siteConfig.priceRange,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: siteConfig.openingHours.days,
    opens: siteConfig.openingHours.opens,
    closes: siteConfig.openingHours.closes,
  },
});

export const generateWebSiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  publisher: { "@id": `${siteConfig.url}/#organization` },
});

export const generateServiceSchema = (
  serviceType: string,
  description: string,
  areaServed = "Berlin"
) => ({
  "@type": "Service",
  serviceType,
  provider: { "@id": `${siteConfig.url}/#organization` },
  areaServed: { "@type": "City", name: areaServed },
  description,
});

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    ...(item.item && { item: item.item }),
  })),
});

export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const generateSpeakableSchema = (cssSelectors: string[]) => ({
  "@type": "WebPage",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  },
});

export const generateFullSchema = (
  pageSchemas: object[] = []
) => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateLocalBusinessSchema(),
      generateWebSiteSchema(),
      ...pageSchemas,
    ],
  };
};

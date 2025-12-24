import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/data/siteConfig";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  schema?: object;
  includeGeoTags?: boolean;
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "/og-default.jpg",
  ogType = "website",
  noIndex = false,
  schema,
  includeGeoTags = false,
}: SEOHeadProps) => {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonicalUrl = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url;
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${siteConfig.url}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta 
        name="robots" 
        content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} 
      />
      <meta 
        name="googlebot" 
        content={noIndex ? "noindex, nofollow" : "index, follow"} 
      />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image" content={ogImageUrl} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* Geo Tags for Local SEO */}
      {includeGeoTags && (
        <>
          <meta name="geo.region" content={siteConfig.geo.region} />
          <meta name="geo.placename" content={siteConfig.contact.address.city} />
          <meta name="geo.position" content={`${siteConfig.geo.latitude};${siteConfig.geo.longitude}`} />
          <meta name="ICBM" content={`${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`} />
        </>
      )}
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;

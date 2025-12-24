import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Quality from "@/components/Quality";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Crystal Facility Services | Professionelle Gebäudereinigung Berlin</title>
        <meta
          name="description"
          content="Professionelle Büroreinigung und Unterhaltsreinigung in Berlin für Geschäftskunden. Klare Abläufe, Qualitätskontrollen, Angebot per E-Mail anfordern."
        />
        <meta
          name="keywords"
          content="Gebäudereinigung Berlin, Büroreinigung, Unterhaltsreinigung, Facility Management, Glasreinigung, Hausmeisterdienst"
        />
        <link rel="canonical" href="https://crystal-fs.de" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CleaningService",
            name: "Crystal Facility Services",
            description:
              "Professionelle Gebäudereinigung und Facility Services in Berlin",
            telephone: "030 43202410",
            email: "info@crystal-fs.de",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Berlin",
              addressCountry: "DE",
            },
            areaServed: "Berlin",
            serviceType: [
              "Büroreinigung",
              "Unterhaltsreinigung",
              "Gebäudereinigung",
              "Glasreinigung",
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Quality />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

const Impressum = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Impressum" },
      ]),
    ],
  };

  return (
    <>
      <SEOHead
        title="Impressum"
        description="Impressum von Crystal Facility Services GmbH. Angaben gemäß § 5 TMG."
        canonical="/impressum"
        noIndex={false}
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Impressum"
          subtitle="Angaben gemäß § 5 TMG"
          breadcrumbs={[{ label: "Impressum" }]}
          overlay={false}
        />
        
        <section className="py-16 bg-background">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                <strong>{siteConfig.legalName}</strong><br />
                {siteConfig.contact.address.street}<br />
                {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
              </p>
              
              <h2>Kontakt</h2>
              <p>
                Telefon: {siteConfig.contact.phone}<br />
                E-Mail: {siteConfig.contact.email}
              </p>
              
              <h2>Vertreten durch</h2>
              <p>Geschäftsführer: [Name des Geschäftsführers]</p>
              
              <h2>Registereintrag</h2>
              <p>
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht Charlottenburg<br />
                Registernummer: HRB [Nummer]
              </p>
              
              <h2>Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                DE [Nummer]
              </p>
              
              <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Gebäudereiniger-Meisterbetrieb<br />
                Zuständige Kammer: Handwerkskammer Berlin<br />
                Verliehen in: Deutschland
              </p>
              
              <h2>Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              
              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach 
                den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter 
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              
              <h2>Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich.
              </p>
              
              <h2>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Impressum;

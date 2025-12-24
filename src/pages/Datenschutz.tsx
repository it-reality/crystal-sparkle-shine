import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

const Datenschutz = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: siteConfig.url },
        { name: "Datenschutz" },
      ]),
    ],
  };

  return (
    <>
      <SEOHead
        title="Datenschutzerklärung"
        description="Datenschutzerklärung von Crystal Facility Services GmbH. Informationen zur Verarbeitung Ihrer personenbezogenen Daten."
        canonical="/datenschutz"
        noIndex={false}
        schema={schema}
      />
      
      <article>
        <PageHero
          title="Datenschutzerklärung"
          subtitle="Informationen zur Verarbeitung Ihrer personenbezogenen Daten"
          breadcrumbs={[{ label: "Datenschutz" }]}
          overlay={false}
        />
        
        <section className="py-16 bg-background">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <h2>1. Datenschutz auf einen Blick</h2>
              
              <h3>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              
              <h3>Datenerfassung auf dieser Website</h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              
              <h2>2. Hosting</h2>
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <p>
                Die Server werden in Rechenzentren innerhalb der Europäischen Union betrieben.
              </p>
              
              <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3>Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              
              <h3>Hinweis zur verantwortlichen Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p>
                {siteConfig.legalName}<br />
                {siteConfig.contact.address.street}<br />
                {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}<br />
                <br />
                Telefon: {siteConfig.contact.phone}<br />
                E-Mail: {siteConfig.contact.email}
              </p>
              
              <h3>Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
                wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
                Datenverarbeitung entfällt.
              </p>
              
              <h2>4. Datenerfassung auf dieser Website</h2>
              
              <h3>Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              
              <h3>Anfrage per E-Mail oder Telefon</h3>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller 
                daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung 
                Ihres Anliegens bei uns gespeichert und verarbeitet.
              </p>
              
              <h2>5. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht:</p>
              <ul>
                <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
                <li>die Einschränkung der Verarbeitung zu verlangen</li>
                <li>der Verarbeitung zu widersprechen</li>
                <li>Ihre Daten in einem strukturierten Format zu erhalten (Datenportabilität)</li>
              </ul>
              <p>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              </p>
              
              <h2>6. Beschwerderecht</h2>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
                einer Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde ist:
              </p>
              <p>
                Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
                Alt-Moabit 59-61<br />
                10555 Berlin
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Datenschutz;

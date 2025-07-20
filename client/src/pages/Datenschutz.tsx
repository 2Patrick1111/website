import { Layout } from '@/components/layout/Layout';

export default function Datenschutz() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Datenschutzerklärung
            </h1>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="space-y-6 text-white/90">
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">1. Datenschutz auf einen Blick</h2>
                  <h3 className="text-lg font-medium mb-2 text-white/95">Allgemeine Hinweise</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                    passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                    persönlich identifiziert werden können.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">2. Datenerfassung auf dieser Website</h2>
                  <h3 className="text-lg font-medium mb-2 text-white/95">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                    können Sie dem Impressum dieser Website entnehmen.
                  </p>
                  
                  <h3 className="text-lg font-medium mb-2 text-white/95">Wie erfassen wir Ihre Daten?</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                    z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch 
                    oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                  <h3 className="text-lg font-medium mb-2 text-white/95">Datenschutz</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                    Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzbestimmungen 
                    sowie dieser Datenschutzerklärung.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">4. Datenerfassung auf dieser Website</h2>
                  <h3 className="text-lg font-medium mb-2 text-white/95">Cookies</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner 
                    keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, 
                    effektiver und sicherer zu machen.
                  </p>

                  <h3 className="text-lg font-medium mb-2 text-white/95">Server-Log-Dateien</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                    die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 mb-4 ml-4">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">5. Kontaktformular</h2>
                  <p className="text-sm leading-relaxed mb-4">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                    inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                    von Anschlussfragen bei uns gespeichert.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">6. Ihre Rechte</h2>
                  <p className="text-sm leading-relaxed mb-2">Sie haben jederzeit das Recht:</p>
                  <ul className="list-disc list-inside text-sm space-y-1 mb-4 ml-4">
                    <li>unentgeltlich Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu erhalten</li>
                    <li>die Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                    <li>die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                    <li>die Einschränkung der Datenverarbeitung zu verlangen</li>
                    <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
                    <li>die Datenübertragbarkeit zu verlangen</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">7. Kontakt</h2>
                  <p className="text-sm leading-relaxed">
                    Bei Fragen zum Datenschutz wenden Sie sich bitte an:
                  </p>
                  <div className="mt-2 space-y-1">
                    <p><strong>AI Allstars GmbH</strong></p>
                    <p>E-Mail: datenschutz@ai-allstars.de</p>
                    <p>Telefon: +49 (0) 123 456789</p>
                  </div>
                </section>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-xs text-white/60">
                    Stand dieser Datenschutzerklärung: Januar 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
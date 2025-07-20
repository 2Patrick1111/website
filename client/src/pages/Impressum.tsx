import { Layout } from '@/components/layout/Layout';

export default function Impressum() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Impressum
            </h1>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="space-y-6 text-white/90">
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Angaben gemäß § 5 TMG</h2>
                  <div className="space-y-2">
                    <p><strong>AI Allstars GmbH</strong></p>
                    <p>Musterstraße 123</p>
                    <p>12345 Musterstadt</p>
                    <p>Deutschland</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Kontakt</h2>
                  <div className="space-y-2">
                    <p><strong>Telefon:</strong> +49 (0) 123 456789</p>
                    <p><strong>E-Mail:</strong> info@ai-allstars.de</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Registereintrag</h2>
                  <div className="space-y-2">
                    <p><strong>Eintragung im Handelsregister:</strong></p>
                    <p>Registergericht: Amtsgericht Musterstadt</p>
                    <p>Registernummer: HRB 12345</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Umsatzsteuer-ID</h2>
                  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                  <p>DE123456789</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Geschäftsführung</h2>
                  <p>Max Mustermann, Maria Musterfrau</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                  <div className="space-y-2">
                    <p>Max Mustermann</p>
                    <p>Musterstraße 123</p>
                    <p>12345 Musterstadt</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Haftung für Inhalte</h2>
                  <p className="text-sm leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                    unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Haftung für Links</h2>
                  <p className="text-sm leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                    verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Urheberrecht</h2>
                  <p className="text-sm leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
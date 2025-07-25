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
                  <h2 className="text-xl font-semibold mb-3 text-white">Anbieter gemäß § 5 TMG</h2>
                  <div className="space-y-2">
                    <p><strong>AI Allstars UG (haftungsbeschränkt)</strong></p>
                    <p>Registergericht: Amtsgericht Dresden, HRB 45405</p>
                    <p>Geschäftsführer: Patrick Thomas, Antonio Eichler</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Anschrift</h2>
                  <div className="space-y-2">
                    <p>Schlüterstraße 46</p>
                    <p>01277 Dresden</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Kontakt</h2>
                  <div className="space-y-2">
                    <p><strong>E-Mail:</strong> kikurs@ai-allstars.com</p>
                    <p><strong>Telefon:</strong> +49 152 026 14470</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Finanzamt</h2>
                  <p>Finanzamt Dresden Süd</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">USt.-ID-Nr</h2>
                  <p>203/105/00381</p>
                </section>



                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Haftungsausschluss</h2>
                  <h3 className="text-lg font-medium mb-2 text-white/95">Haftung für Inhalte</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>

                  <h3 className="text-lg font-medium mb-2 text-white/95">Haftung für Links</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>

                  <h3 className="text-lg font-medium mb-2 text-white/95">Urheberrecht</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-white">Bildernachweis</h2>
                  <p className="text-sm leading-relaxed">
                    Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.
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
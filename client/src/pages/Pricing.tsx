import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";

export default function Pricing() {
  const packages = [
    {
      name: "AI‑PASS Gefördert",
      subtitle: "100% staatlich gefördert",
      price: "0€",
      priceNote: "+ 75% Lohnkostenerstattung",
      highlight: true,
      features: [
        "5‑Wochen AI‑Intensivprogramm",
        "Live‑Sessions mit KI‑Experten",
        "Persönliches Automations‑Set‑up",
        "Offizielle Zertifizierung",
        "Durchschnittlich 6h Zeitersparnis/Woche",
        "Förderung nach § 82 SGB III"
      ],
      buttonText: "Förderung beantragen",
      buttonLink: "/kontakt"
    },
    {
      name: "AI‑PASS Videokurs",
      subtitle: "Selbstständig lernen im eigenen Tempo",
      price: "996€",
      oldPrice: "1.245€",
      priceNote: "einmalig",
      discount: true,
      features: [
        "Vollständige Videokurs‑Bibliothek",
        "5‑Wochen strukturierte Inhalte",
        "Downloadbare Praxis‑Templates",
        "KI‑Tool Tutorials & Anleitungen",
        "Schritt‑für‑Schritt Automations‑Guides",
        "Lebenslange Updates zu neuen KI‑Tools",
        "Regelmäßige Tool‑Empfehlungen"
      ],
      buttonText: "Videokurs kaufen",
      buttonLink: "/kontakt"
    },
    {
      name: "AI‑PASS Premium",
      subtitle: "Mit 10 Stunden Live-Unterstützung durch unsere Dozenten",
      price: "3.495€",
      priceNote: "pro Teilnehmer",
      features: [
        "5‑Wochen AI‑Intensivprogramm",
        "Live‑Sessions mit KI‑Experten",
        "Persönliches Automations‑Set‑up",
        "Offizielle Zertifizierung",
        "Durchschnittlich 6h Zeitersparnis/Woche",
        "Sofort verfügbar ohne Förderantrag"
      ],
      buttonText: "Premium buchen",
      buttonLink: "/kontakt"
    },
    {
      name: "AI‑PASS Enterprise",
      subtitle: "Individuelle Unternehmenslösung",
      price: "Auf Anfrage",
      priceNote: "maßgeschneidert",
      features: [
        "Individuelle Beratung für Ihr Unternehmen",
        "Angepasste Lösungen nach Bedarf",
        "Flexible Teilnehmerzahl",
        "Spezielle Konditionen verfügbar",
        "Persönliches Beratungsgespräch",
        "Maßgeschneiderte Roadmap",
        "Langfristige Partnerschaft möglich"
      ],
      buttonText: "Kostenlose Beratung",
      buttonLink: "/kontakt",
      secondary: true
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="text-center">
            <h1 className="hero-title-special">
              <span className="title-white">Entfessle die </span>
              <span className="title-gradient">KI‑Superkräfte</span>
              <span className="title-white"> deines Teams</span>
            </h1>
            <p className="hero-subtitle">Wähle das perfekte Paket für euren Erfolg</p>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="content-section">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`glass-card relative p-8 ${
                  pkg.highlight 
                    ? 'ring-2 ring-primary border-primary' 
                    : pkg.discount 
                      ? 'border-orange-500 ring-1 ring-orange-500/30' 
                      : ''
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Beliebteste Wahl
                    </span>
                  </div>
                )}
                
                {pkg.discount && (
                  <div className="absolute -top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Rabatt
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="card-title text-xl mb-2">{pkg.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{pkg.subtitle}</p>
                  
                  <div className="mb-2">
                    {pkg.oldPrice && (
                      <div className="text-lg text-gray-500 line-through mb-1">
                        {pkg.oldPrice}
                      </div>
                    )}
                    <div className="text-3xl font-bold text-white">
                      {pkg.price}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{pkg.priceNote}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={pkg.buttonLink}>
                  <Button 
                    className={`w-full ${
                      pkg.secondary 
                        ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black' 
                        : 'header-cta hover:scale-105'
                    }`}
                  >
                    {pkg.buttonText}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Funding Information */}
        <section className="content-section">
          <Card className="glass-card p-8">
            <div className="text-center mb-6">
              <h3 className="card-title text-2xl mb-4">🚀 AI‑PASS zu 100% gefördert</h3>
              <p className="text-lg text-orange-400 font-semibold">Aber Achtung bei den Wartezeiten!</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Die gute Nachricht:</strong> Unser AI‑PASS ist durch § 82 SGB III zu 100% förderfähig und dein Unternehmen erhält zusätzlich bis zu 75% Lohnkostenerstattung.
              </p>
              <p>
                <strong className="text-white">Die weniger gute Nachricht:</strong> Die Bearbeitung von Förderanträgen kann bis zu 12 Wochen dauern. Das Amt ist überlastet und die Bewilligungsprozesse ziehen sich oft in die Länge.
              </p>
              <p>
                <strong className="text-white">Unsere Empfehlung:</strong> Falls du sofort starten möchtest, ohne auf die Förderung zu warten, ist unser AI‑PASS Premium die perfekte Alternative. Identische Inhalte, sofortiger Start – und du sparst dir den bürokratischen Aufwand.
              </p>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                <h4 className="text-xl font-semibold text-white mb-4">Warum AI‑PASS Premium die smarte Alternative ist</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">⏰</span>
                    <span>Sofortiger Start – keine 12 Wochen Wartezeit</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">📋</span>
                    <span>Kein Papierkram – direkte Buchung ohne Anträge</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">🎯</span>
                    <span>Identische Inhalte – das gleiche hochwertige Programm</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">💡</span>
                    <span>Planungssicherheit – fester Starttermin garantiert</span>
                  </li>
                </ul>
                <p className="mt-4 text-center font-semibold text-blue-400">
                  Entscheide selbst: Warten auf die Förderung oder sofort durchstarten mit AI‑PASS Premium!
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Funding Overview Table */}
        <section className="content-section">
          <h2 className="section-title mb-8">Fördermöglichkeiten im Überblick</h2>
          <p className="text-xl text-gray-300 mb-8 text-center">
            <strong>Beschäftigtenqualifizierung ab 1. April 2024</strong> im Überblick:
          </p>

          <div className="space-y-8">
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-6">
                Abschlussorientierte Weiterbildung bei fehlendem Berufsabschluss (nach § 81 (2) SGB III)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-semibold text-gray-300 mb-2">Betriebsgröße</div>
                  <div className="text-2xl">👥👥👥👥👥👥👥👥</div>
                  <div className="text-gray-400">Alle Betriebsgrößen</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-300 mb-2">Übernahme Lehrgangskosten</div>
                  <div className="text-3xl font-bold text-green-400">100%</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-300 mb-2">Arbeitsentgeltzuschuss</div>
                  <div className="text-3xl font-bold text-green-400">bis zu 100%</div>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-6">
                Sonstige berufliche Weiterbildung nach § 82 SGB III
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm bg-transparent">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left p-3 text-gray-300">Kriterium</th>
                      <th className="text-center p-3 text-gray-300">
                        <div>👥👥👥</div>
                        <div>unter 50 Beschäftigte</div>
                      </th>
                      <th className="text-center p-3 text-gray-300">
                        <div>👥👥👥👥👥</div>
                        <div>50–499 Beschäftigte</div>
                      </th>
                      <th className="text-center p-3 text-gray-300">
                        <div>👥👥👥👥👥👥👥</div>
                        <div>Ab 500 Beschäftigte</div>
                      </th>
                      <th className="text-center p-3 text-blue-400">
                        <div className="font-bold">Neu!</div>
                        <div>👥👥👥👥👥👥👥</div>
                        <div>Alle Betriebsgrößen</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="p-3 font-semibold text-gray-200">Übernahme Lehrgangskosten</td>
                      <td className="text-center p-3 text-green-400 font-semibold">100% (soll)</td>
                      <td className="text-center p-3 text-gray-300">
                        <div>50%</div>
                        <div className="text-green-400">100% (soll)*</div>
                        <div className="text-xs">*bei Vollendung des 45. Lebensjahres oder Schwerbehinderung</div>
                      </td>
                      <td className="text-center p-3 text-gray-300">25%</td>
                      <td className="text-center p-3 text-gray-300">durch den Arbeitgeber zu tragen</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="p-3 font-semibold text-gray-200">Arbeitsentgeltzuschuss</td>
                      <td className="text-center p-3 text-green-400 font-semibold">75%</td>
                      <td className="text-center p-3 text-gray-300">50%</td>
                      <td className="text-center p-3 text-gray-300">25%</td>
                      <td className="text-center p-3 text-gray-300">keine Übernahme</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="p-3 font-semibold text-gray-200">Entgeltersatzleistung</td>
                      <td className="text-center p-3 text-gray-300">keine Übernahme</td>
                      <td className="text-center p-3 text-gray-300">keine Übernahme</td>
                      <td className="text-center p-3 text-gray-300">keine Übernahme</td>
                      <td className="text-center p-3 text-blue-400 font-semibold">60/67%</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="p-3 font-semibold text-gray-200">Zulassungserfordernis</td>
                      <td className="text-center p-3 text-gray-300">Maßnahme und Träger</td>
                      <td className="text-center p-3 text-gray-300">Maßnahme und Träger</td>
                      <td className="text-center p-3 text-gray-300">Maßnahme und Träger</td>
                      <td className="text-center p-3 text-gray-300">nur Träger</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-gray-200">Behinderungsbedingt erforderliche Mehraufwendungen</td>
                      <td className="text-center p-3 text-green-400">werden übernommen</td>
                      <td className="text-center p-3 text-green-400">werden übernommen</td>
                      <td className="text-center p-3 text-green-400">werden übernommen</td>
                      <td className="text-center p-3 text-green-400">werden übernommen</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="glass-card p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Qualifizierungsgeld nach § 82a SGB III
              </h3>
              <p className="text-gray-300 text-lg">
                Die neue Förderungsmöglichkeit für alle Betriebsgrößen
              </p>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="content-section text-center">
          <h2 className="section-title mb-8">Bereit für den nächsten Schritt?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lass uns gemeinsam herausfinden, welches Paket am besten zu deinem Unternehmen passt.
          </p>
          <Link href="/kontakt">
            <Button className="header-cta text-lg px-8 py-4">
              Kostenlose Beratung vereinbaren
            </Button>
          </Link>
        </section>
      </div>
    </Layout>
  );
}
import { Link } from 'wouter';
import { Layout } from '@/components/layout/Layout';

export default function Home() {
  const features = [
    {
      icon: "🎯",
      title: "Praxis statt Theorie",
      description: "Keine langweilige Theorie – sofort anwendbare KI-Tools und echte Use Cases aus der Praxis für maximalen Lernerfolg."
    },
    {
      icon: "📈",
      title: "Kontinuierliches KI-Wissen",
      description: "Bleiben Sie am Puls der Zeit mit regelmäßigen Updates zu den neuesten KI-Trends und Technologien."
    },
    {
      icon: "⚡",
      title: "Alltag automatisieren",
      description: "Verwandeln Sie repetitive Aufgaben in automatisierte Prozesse und gewinnen Sie wertvolle Zeit für strategische Arbeit."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title-special">
            <span className="title-white">Hol dir den AI Pass von </span>
            <span className="title-gradient">AI Allstars</span>
          </h1>
          <p className="hero-subtitle">Entfessle die KI‑Superkräfte deines Teams – 100% gefördert</p>
          <p className="hero-description">
            Unser 5‑Wochen-AI‑PASS macht Mitarbeitende in Rekordzeit zu souveränen KI‑Anwendern – 
            komplett bezahlt durch den deutschen Staat und mit 75% Lohnkostenerstattung.
          </p>
          <div className="hero-actions">
            <Link href="/kontakt" className="cta-button primary">
              Kostenlose Förderprüfung
            </Link>
            <Link href="/appointment" className="cta-button secondary">
              Strategie Meeting
            </Link>
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="content-section">
        <h2 className="text-[35px] text-white font-bold text-center mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>
          Warum der <span className="title-gradient">AI Pass</span> die beste KI-Weiterbildung ist
        </h2>
        
        <div className="card-grid">
          {features.map((feature, index) => (
            <div key={index} className="glass-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3-Stufen Plan Section */}
      <section className="plan-section">
        <h2 className="text-[35px] text-white font-bold text-center mb-12" style={{ fontFamily: 'Sora, sans-serif' }}>
          Dein 3-Stufen-Plan
        </h2>
        
        <div className="plan-steps">
          <div className="plan-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Hands‑on KI‑Toolkit</h3>
              <p className="step-description">Jeder Teilnehmende richtet sein persönliches Automations‑Set‑up ein.</p>
            </div>
          </div>
          
          <div className="plan-arrow">↓</div>
          
          <div className="plan-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">Branchenspezifische Use‑Cases</h3>
              <p className="step-description">Sofort im Arbeitsalltag anwendbar.</p>
            </div>
          </div>
          
          <div className="plan-arrow">↓</div>
          
          <div className="plan-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Messbarer ROI</h3>
              <p className="step-description">Durchschnittlich 6 h Zeitersparnis pro Woche & Mitarbeiter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          Bereit für Ihre KI-Transformation?
        </h2>
        <p className="hero-description" style={{ marginBottom: '2rem' }}>
          Nutzen Sie unsere AI Pass Beratung und entdecken Sie das volle Potenzial künstlicher Intelligenz für Ihr Unternehmen.
        </p>
        <Link href="/kontakt" className="cta-button">
          Beratungstermin vereinbaren
        </Link>
      </section>
    </Layout>
  );
}

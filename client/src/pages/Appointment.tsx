import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';

export default function Appointment() {
  return (
    <Layout>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Strategie Meeting</h1>
          <p className="hero-subtitle">Sprechen Sie mit unseren KI-Experten</p>
          <p className="hero-description">
            Buchen Sie ein kostenloses Strategiegespräch und erhalten Sie eine individuelle Roadmap für Ihr Unternehmen.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Was Sie erwartet</h2>
        
        <div className="card-grid">
          <div className="glass-card">
            <div className="feature-icon">
              ✓
            </div>
            <h3 className="card-title">Kostenlose KI-Potenzialanalyse</h3>
            <p className="card-description">
              Analyse Ihrer aktuellen Prozesse und Identifikation der größten KI-Potenziale in Ihrem Unternehmen.
            </p>
          </div>

          <div className="glass-card">
            <div className="feature-icon">
              📊
            </div>
            <h3 className="card-title">Individuelle Strategie-Roadmap</h3>
            <p className="card-description">
              Maßgeschneiderte Empfehlungen für die schrittweise Implementation von KI in Ihrem Unternehmen.
            </p>
          </div>

          <div className="glass-card">
            <div className="feature-icon">
              💰
            </div>
            <h3 className="card-title">ROI-Kalkulation für Ihr Team</h3>
            <p className="card-description">
              Konkrete Berechnung der Kosteneinsparungen und Effizienzsteigerungen durch KI-Implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          Bereit für den nächsten Schritt?
        </h2>
        <p className="hero-description" style={{ marginBottom: '2rem' }}>
          Buchen Sie jetzt Ihr kostenloses Strategiegespräch und starten Sie Ihre KI-Transformation.
        </p>
        <Link href="/kontakt" className="cta-button primary">
          Termin vereinbaren
        </Link>
      </section>
    </Layout>
  );
}
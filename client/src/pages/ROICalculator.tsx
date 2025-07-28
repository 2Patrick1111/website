import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { trackEvent } from '@/lib/analytics';

export default function ROICalculator() {
  return (
    <Layout>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">ROI-Rechner</h1>
          <p className="hero-subtitle">Entdecken Sie das KI-Potenzial Ihres Unternehmens</p>
          <p className="hero-description">
            Ermitteln Sie mit unserer intelligenten Potenzialanalyse das Einsparpotenzial und die Effizienzsteigerung durch KI-Implementation in Ihrem Unternehmen.
          </p>
          <div className="hero-actions">
            <Link 
              href="/assessment" 
              className="cta-button primary"
              onClick={() => trackEvent('click', 'roi_calculator', 'start_analysis')}
            >
              Potenzialanalyse starten
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">KI-Potenzialanalyse</h2>
        
        <div className="card-grid">
          <div className="glass-card">
            <div className="feature-icon">
              📊
            </div>
            <h3 className="card-title">ROI Calculator</h3>
            <p className="card-description">
              Hier würde der interaktive ROI-Rechner implementiert werden, mit dem Unternehmen ihr KI-Potenzial berechnen können.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          Detaillierte Analyse gewünscht?
        </h2>
        <p className="hero-description" style={{ marginBottom: '2rem' }}>
          Lassen Sie sich eine individuelle KI-Potenzialanalyse erstellen.
        </p>
        <Link 
          href="/kontakt" 
          className="cta-button"
          onClick={() => trackEvent('click', 'roi_calculator', 'request_analysis')}
        >
          Kostenlose Analyse anfordern
        </Link>
      </section>
    </Layout>
  );
}

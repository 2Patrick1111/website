import { Layout } from '@/components/layout/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Kontakt</h1>
          <p className="hero-subtitle">Starten Sie Ihre KI-Reise noch heute</p>
          <p className="hero-description">
            Nehmen Sie Kontakt mit unseren KI-Experten auf und lassen Sie sich zu Ihren individuellen Möglichkeiten beraten.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">AI Pass Beratung</h2>
        
        <div className="card-grid">
          <div className="glass-card">
            <div className="feature-icon">
              📞
            </div>
            <h3 className="card-title">Kontaktformular</h3>
            <p className="card-description">
              Hier würde ein Kontaktformular implementiert werden, über das Interessenten direkt Kontakt aufnehmen können.
            </p>
          </div>

          <div className="glass-card">
            <div className="feature-icon">
              📧
            </div>
            <h3 className="card-title">Direkte Anfrage</h3>
            <p className="card-description">
              Oder kontaktieren Sie uns direkt für eine unverbindliche Erstberatung zu Ihren KI-Anforderungen.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          Bereit für den nächsten Schritt?
        </h2>
        <p className="hero-description" style={{ marginBottom: '2rem' }}>
          Buchen Sie jetzt Ihr kostenloses AI Pass Beratungsgespräch.
        </p>
        <div className="cta-button">
          Jetzt Termin buchen
        </div>
      </section>
    </Layout>
  );
}

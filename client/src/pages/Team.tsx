import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';

export default function Team() {
  return (
    <Layout>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Über uns</h1>
          <p className="hero-subtitle">Die AI Allstars hinter Ihrer KI-Transformation</p>
          <p className="hero-description">
            Lernen Sie das erfahrene Team kennen, das Ihr Unternehmen bei der erfolgreichen KI-Implementation und digitalen Transformation begleitet.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Team Members</h2>
        
        <div className="card-grid">
          <div className="glass-card">
            <div className="feature-icon">
              👨‍💼
            </div>
            <h3 className="card-title">Team Mitglieder</h3>
            <p className="card-description">
              Hier würden die Team-Mitglieder mit ihren Profilen, Erfahrungen und Spezialisierungen dargestellt werden.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          Lernen Sie unser Team kennen
        </h2>
        <p className="hero-description" style={{ marginBottom: '2rem' }}>
          Vereinbaren Sie ein persönliches Gespräch mit unseren KI-Experten.
        </p>
        <Link href="/kontakt" className="cta-button">
          Termin vereinbaren
        </Link>
      </section>
    </Layout>
  );
}

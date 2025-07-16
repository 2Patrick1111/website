import { Link } from 'wouter';
import { Layout } from '@/components/layout/Layout';

export default function Home() {
  const features = [
    {
      icon: "🔧",
      title: "Glass Morphism Header",
      description: "Einheitlicher Header mit Backdrop-Filter Effekten und responsiver Navigation für alle Unterseiten."
    },
    {
      icon: "⭐",
      title: "Mobile Star Menu",
      description: "Charakteristisches Stern-Menü für mobile Geräte mit sanften Animationen und Dropdown-Navigation."
    },
    {
      icon: "🎨",
      title: "Gradient Design System",
      description: "Konsistente Farbpalette mit Blau-Rot Gradienten und futuristischer Typografie für alle Seiten."
    },
    {
      icon: "📱",
      title: "Responsive Layout",
      description: "Optimiert für Desktop, Tablet und Mobile mit flexiblen Grid-Systemen und angepassten Komponenten."
    },
    {
      icon: "🔗",
      title: "Footer Navigation",
      description: "Strukturierter Footer mit allen relevanten Links, Kategorien und rechtlichen Hinweisen."
    },
    {
      icon: "⚙️",
      title: "Modulare Struktur",
      description: "Template-System für einfache Erstellung neuer Unterseiten mit konsistentem Design und Funktionalität."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Unterseiten Template</h1>
          <p className="hero-subtitle">Modulare Struktur für AI Allstars Subpages</p>
          <p className="hero-description">
            Dieses Template demonstriert das einheitliche Design-System für alle Unterseiten der AI Allstars Website. 
            Mit Glass Morphism Effekten, responsivem Design und der charakteristischen Gradient-Ästhetik.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <h2 className="section-title">Template Features</h2>
        
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

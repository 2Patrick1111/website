import { Link } from 'wouter';
import { Layout } from '@/components/layout/Layout';
import { useEffect } from 'react';

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

  useEffect(() => {
    // Timeline Animation Controller
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineProgress = document.getElementById('timelineProgress');
    const timelineDots = document.querySelectorAll('.timeline-dot');

    if (timelineItems.length === 0) return;

    // Setup Intersection Observer for timeline items
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const item = entry.target;
        const index = Array.from(timelineItems).indexOf(item);
        
        if (entry.isIntersecting) {
          item.classList.add('active');
          if (timelineDots[index]) {
            timelineDots[index].classList.add('active');
          }
          
          // Update progress line
          const totalItems = timelineItems.length;
          const progressPercent = ((index + 1) / totalItems) * 100;
          if (timelineProgress) {
            timelineProgress.style.height = `${Math.min(progressPercent, 100)}%`;
          }
        } else {
          item.classList.remove('active');
          if (timelineDots[index]) {
            timelineDots[index].classList.remove('active');
          }
        }
      });
    }, observerOptions);

    timelineItems.forEach(item => {
      observer.observe(item);
    });

    // Show first item by default
    if (timelineItems[0]) {
      timelineItems[0].classList.add('visible');
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
      <section className="footsteps-section">
        <h2 className="text-[35px] text-white font-bold text-center mb-16" style={{ fontFamily: 'Sora, sans-serif' }}>
          Dein 3-Stufen-Plan
        </h2>
        
        <div className="ladder-container">
          <div className="ladder-path">
            <div className="ladder-step step-1" data-step="01">
              <div className="step-card">
                <h3 className="ladder-title">Hands‑on KI‑Toolkit</h3>
                <p className="ladder-desc">Jeder Teilnehmende richtet sein persönliches Automations‑Set‑up ein.</p>
              </div>
            </div>
            
            <div className="ladder-step step-2" data-step="02">
              <div className="step-card">
                <h3 className="ladder-title">Branchenspezifische Use‑Cases</h3>
                <p className="ladder-desc">Sofort im Arbeitsalltag anwendbar.</p>
              </div>
            </div>
            
            <div className="ladder-step step-3" data-step="03">
              <div className="step-card">
                <h3 className="ladder-title">Messbarer ROI</h3>
                <p className="ladder-desc">Durchschnittlich 6 h Zeitersparnis pro Woche & Mitarbeiter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section" id="timeline">
        <div className="timeline-container-main">
          <div className="timeline-header">
            <h2 className="section-title">
              <span className="gradient-text">5-Wochen</span> Transformation
            </h2>
            <p className="section-subtitle">Ihr strukturierter Weg zum KI-Champion – Woche für Woche messbare Fortschritte</p>
          </div>
          
          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            <div className="timeline-progress" id="timelineProgress"></div>
            
            {/* Week 1 */}
            <div className="timeline-item" data-week="1">
              <div className="timeline-dot"></div>
              <div className="timeline-content left glass-card-small">
                <div className="week-number">01</div>
                <h3 className="timeline-title">KI-Grundlagen & Assessment</h3>
                <p className="timeline-description">
                  Verstehen Sie die KI-Landschaft und identifizieren Sie Potenziale in Ihrem Unternehmen.
                </p>
                <ul className="timeline-list">
                  <li>• KI-Technologien Überblick</li>
                  <li>• Individuelle Potenzialanalyse</li>
                  <li>• Erste praktische Übungen</li>
                  <li>• Team-Assessment</li>
                </ul>
              </div>
            </div>
            
            {/* Week 2 */}
            <div className="timeline-item" data-week="2">
              <div className="timeline-dot"></div>
              <div className="timeline-content right glass-card-small">
                <div className="week-number">02</div>
                <h3 className="timeline-title">Prompt Engineering Mastery</h3>
                <p className="timeline-description">
                  Lernen Sie die Kunst der optimalen KI-Kommunikation für maximale Ergebnisse.
                </p>
                <ul className="timeline-list">
                  <li>• Advanced Prompt Techniken</li>
                  <li>• Tool-spezifische Strategien</li>
                  <li>• Praxis-Workshops</li>
                  <li>• Qualitätskontrolle</li>
                </ul>
              </div>
            </div>
            
            {/* Week 3 */}
            <div className="timeline-item" data-week="3">
              <div className="timeline-dot"></div>
              <div className="timeline-content left glass-card-small">
                <div className="week-number">03</div>
                <h3 className="timeline-title">Tool-Integration & Workflows</h3>
                <p className="timeline-description">
                  Integrieren Sie KI nahtlos in Ihre bestehenden Arbeitsprozesse.
                </p>
                <ul className="timeline-list">
                  <li>• Workflow-Optimierung</li>
                  <li>• Tool-Kombinationen</li>
                  <li>• Automatisierungsstrategien</li>
                  <li>• Effizienz-Messungen</li>
                </ul>
              </div>
            </div>
            
            {/* Week 4 */}
            <div className="timeline-item" data-week="4">
              <div className="timeline-dot"></div>
              <div className="timeline-content right glass-card-small">
                <div className="week-number">04</div>
                <h3 className="timeline-title">Advanced AI-Strategien</h3>
                <p className="timeline-description">
                  Entwickeln Sie fortgeschrittene KI-Strategien für komplexe Herausforderungen.
                </p>
                <ul className="timeline-list">
                  <li>• Custom AI-Lösungen</li>
                  <li>• Skalierungsstrategien</li>
                  <li>• ROI-Optimierung</li>
                  <li>• Zukunftsplanung</li>
                </ul>
              </div>
            </div>
            
            {/* Week 5 */}
            <div className="timeline-item" data-week="5">
              <div className="timeline-dot"></div>
              <div className="timeline-content left glass-card-small">
                <div className="week-number">05</div>
                <h3 className="timeline-title">Implementation & Zertifizierung</h3>
                <p className="timeline-description">
                  Setzen Sie das Gelernte um und erhalten Sie Ihre offizielle KI-Zertifizierung.
                </p>
                <ul className="timeline-list">
                  <li>• Projekt-Implementation</li>
                  <li>• Abschlussprüfung</li>
                  <li>• Zertifizierung</li>
                  <li>• Nachhaltigkeit-Plan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Grid Section */}
      <section className="cta-grid-section">
        <div className="cta-grid">
          {/* CTA 1: Broschüre */}
          <div className="cta-card">
            <div className="cta-icon">📄</div>
            <h3 className="cta-title">Kostenlose Broschüre</h3>
            <p className="cta-description">Erhalten Sie alle Details zum 5-Wochen AI-PASS Programm als PDF</p>
            <Link href="/brochure" className="cta-button-card">
              Broschüre herunterladen
            </Link>
          </div>

          {/* CTA 2: Kurseinblick */}
          <div className="cta-card">
            <div className="cta-icon">🎓</div>
            <h3 className="cta-title">Kurseinblick</h3>
            <p className="cta-description">Erfahre mehr über unseren Kurs</p>
            <Link href="/roi-rechner" className="cta-button-card">
              Kurs entdecken
            </Link>
          </div>

          {/* CTA 3: Teameinblick */}
          <div className="cta-card">
            <div className="cta-icon">👥</div>
            <h3 className="cta-title">Teameinblick</h3>
            <p className="cta-description">Lerne die Allstars kennen</p>
            <Link href="/team" className="cta-button-card">
              Team entdecken
            </Link>
          </div>

          {/* CTA 4: Kontakt */}
          <div className="cta-card">
            <div className="cta-icon">💬</div>
            <h3 className="cta-title">Kontaktieren</h3>
            <p className="cta-description">Kontaktiere uns direkt</p>
            <Link href="/kontakt" className="cta-button-card">
              Kontakt
            </Link>
          </div>
        </div>
      </section>


    </Layout>
  );
}

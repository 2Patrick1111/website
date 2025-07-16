import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img 
              src="/assets/allstars-logo-white.png" 
              alt="AI Allstars" 
              className="logo-image"
            />
          </div>
          <p className="footer-brand-text">
            Ihr Partner für erfolgreiche KI-Transformation
          </p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-column-title">AI Pass</h4>
            <Link href="/roi-calculator" className="footer-link">
              KI-Potenzialanalyse
            </Link>
            <Link href="/assessment" className="footer-link">
              Potenzialanalyse starten
            </Link>
            <Link href="/appointment" className="footer-link">
              Strategie Meeting
            </Link>
            <Link href="/broschure" className="footer-link">
              Broschüre herunterladen
            </Link>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-column-title">Unternehmen</h4>
            <Link href="/team" className="footer-link">
              Über uns
            </Link>
            <Link href="/kontakt" className="footer-link">
              Kontakt
            </Link>
            <Link href="/faq" className="footer-link">
              FAQ
            </Link>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-column-title">Rechtliches</h4>
            <Link href="/datenschutz" className="footer-link">
              Datenschutz
            </Link>
            <Link href="/impressum" className="footer-link">
              Impressum
            </Link>
            <Link href="/agb" className="footer-link">
              AGB
            </Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 AI Allstars. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

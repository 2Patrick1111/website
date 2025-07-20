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
            <h4 className="footer-column-title">Services</h4>
            <a href="https://www.kurs.ai-allstars.com" className="footer-link">
              Kurs-Einblick
            </a>
            <a href="https://www.preise.ai-allstars.com" className="footer-link">
              Preise
            </a>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-column-title">Unternehmen</h4>
            <a href="https://www.team.ai-allstars.com" className="footer-link">
              Team
            </a>
            <a href="https://www.kontakt.ai-allstars.com" className="footer-link">
              Kontakt
            </a>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-column-title">Rechtliches</h4>
            <Link href="/datenschutz" className="footer-link">
              Datenschutz
            </Link>
            <Link href="/impressum" className="footer-link">
              Impressum
            </Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 AI Allstars. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

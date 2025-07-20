import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useHeaderScroll } from '@/hooks/use-header-scroll';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useHeaderScroll();
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    return location === href;
  };

  return (
    <header className={`liquid-header ${isScrolled ? 'shrunk' : ''}`}>
      <Link href="/" className="header-logo">
        <img 
          src="/assets/allstars-logo-white.png" 
          alt="AI Allstars" 
          className="logo-image"
          title="Zur Startseite"
        />
      </Link>
      
      <nav className="header-nav">
        <Link 
          href="/" 
          className={`header-nav-link ${isActiveLink('/') ? 'active' : ''}`}
        >
          Home
        </Link>
        <a 
          href="https://www.preise.ai-allstars.com" 
          className="header-nav-link"
        >
          Preise
        </a>
        <a 
          href="https://www.team.ai-allstars.com" 
          className="header-nav-link"
        >
          Team
        </a>
        <a 
          href="https://www.kurs.ai-allstars.com" 
          className="header-nav-link"
        >
          Kurs
        </a>
        <a 
          href="https://www.kontakt.ai-allstars.com" 
          className="header-nav-link"
        >
          Kontakt
        </a>
      </nav>
      
      <a href="https://www.kontakt.ai-allstars.com" className="header-cta">
        AI Pass Beratung
      </a>
      
      {/* Mobile Star Menu Button */}
      <button 
        className={`star-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Menü öffnen"
        aria-expanded={isMobileMenuOpen}
      >
        <img 
          src="/assets/star-white.png" 
          alt="Menu" 
          className="star-icon"
        />
      </button>
      
      {/* Mobile Dropdown Menu */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link 
          href="/" 
          className={`mobile-nav-item ${isActiveLink('/') ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Home
        </Link>
        <a 
          href="https://www.preise.ai-allstars.com" 
          className="mobile-nav-item"
          onClick={closeMobileMenu}
        >
          Preise
        </a>
        <a 
          href="https://www.team.ai-allstars.com" 
          className="mobile-nav-item"
          onClick={closeMobileMenu}
        >
          Team
        </a>
        <a 
          href="https://www.kurs.ai-allstars.com" 
          className="mobile-nav-item"
          onClick={closeMobileMenu}
        >
          Kurs
        </a>
        <a 
          href="https://www.kontakt.ai-allstars.com" 
          className="mobile-nav-item"
          onClick={closeMobileMenu}
        >
          Kontakt
        </a>
        <a href="https://www.kontakt.ai-allstars.com" className="mobile-cta" onClick={closeMobileMenu}>
          AI Pass Beratung
        </a>
      </nav>
    </header>
  );
}

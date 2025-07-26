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
        <Link 
          href="/preise" 
          className={`header-nav-link ${isActiveLink('/preise') ? 'active' : ''}`}
        >
          Preise
        </Link>
        <Link 
          href="/team" 
          className={`header-nav-link ${isActiveLink('/team') ? 'active' : ''}`}
        >
          Team
        </Link>
        <Link 
          href="/kurs" 
          className={`header-nav-link ${isActiveLink('/kurs') ? 'active' : ''}`}
        >
          Kurs
        </Link>
        <Link 
          href="/kontakt" 
          className={`header-nav-link ${isActiveLink('/kontakt') ? 'active' : ''}`}
        >
          Kontakt
        </Link>
      </nav>
      
      <Link href="/kontakt" className="header-cta">
        AI Pass Beratung
      </Link>
      
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
        <Link 
          href="/preise" 
          className={`mobile-nav-item ${isActiveLink('/preise') ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Preise
        </Link>
        <Link 
          href="/team" 
          className={`mobile-nav-item ${isActiveLink('/team') ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Team
        </Link>
        <Link 
          href="/kurs" 
          className={`mobile-nav-item ${isActiveLink('/kurs') ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Kurs
        </Link>
        <Link 
          href="/kontakt" 
          className={`mobile-nav-item ${isActiveLink('/kontakt') ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Kontakt
        </Link>
        <Link href="/kontakt" className="mobile-cta" onClick={closeMobileMenu}>
          AI Pass Beratung
        </Link>
      </nav>
    </header>
  );
}

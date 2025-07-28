import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

interface CookieCategories {
  necessary: { required: boolean; enabled: boolean };
  functional: { required: boolean; enabled: boolean };
  analytics: { required: boolean; enabled: boolean };
  marketing: { required: boolean; enabled: boolean };
}

class CookieManager {
  private consentKey = 'cookie_consent';
  private gtmId = 'GTM-MQDBKTTT';
  private categories: CookieCategories = {
    necessary: { required: true, enabled: true },
    functional: { required: false, enabled: false },
    analytics: { required: false, enabled: false },
    marketing: { required: false, enabled: false }
  };

  init() {
    const consent = this.getConsent();
    if (consent) {
      this.categories = { ...this.categories, ...consent.categories };
      this.applyCookieSettings();
      return true; // Already consented
    }
    return false; // No consent yet
  }

  saveConsent(categories: CookieCategories = this.categories) {
    const consent = {
      categories: categories,
      timestamp: new Date().toISOString(),
      version: '1.0',
      userAgent: navigator.userAgent
    };
    
    localStorage.setItem(this.consentKey, JSON.stringify(consent));
    this.categories = categories;
    this.applyCookieSettings();
  }

  getConsent() {
    const stored = localStorage.getItem(this.consentKey);
    return stored ? JSON.parse(stored) : null;
  }

  acceptAll() {
    const categories: CookieCategories = {
      necessary: { required: true, enabled: true },
      functional: { required: false, enabled: true },
      analytics: { required: false, enabled: true },
      marketing: { required: false, enabled: true }
    };
    this.saveConsent(categories);
    trackEvent('cookie_consent', 'accept_all', 'cookie_banner');
    return categories;
  }

  rejectAll() {
    const categories: CookieCategories = {
      necessary: { required: true, enabled: true },
      functional: { required: false, enabled: false },
      analytics: { required: false, enabled: false },
      marketing: { required: false, enabled: false }
    };
    this.saveConsent(categories);
    trackEvent('cookie_consent', 'reject_all', 'cookie_banner');
    return categories;
  }

  updateCategories(updates: Partial<Record<keyof CookieCategories, boolean>>) {
    Object.keys(updates).forEach(key => {
      const categoryKey = key as keyof CookieCategories;
      if (this.categories[categoryKey] && !this.categories[categoryKey].required) {
        this.categories[categoryKey].enabled = updates[categoryKey] || false;
      }
    });
  }

  applyCookieSettings() {
    // DataLayer für GTM vorbereiten
    window.dataLayer = window.dataLayer || [];
    
    // Consent-Status an GTM weitergeben
    window.dataLayer.push({
      'event': 'cookie_consent_update',
      'consent_necessary': this.categories.necessary.enabled,
      'consent_functional': this.categories.functional.enabled,
      'consent_analytics': this.categories.analytics.enabled,
      'consent_marketing': this.categories.marketing.enabled
    });

    // Google Tag Manager laden/deaktivieren basierend auf Analytics-Consent
    if (this.categories.analytics.enabled && !(window as any).gtmLoaded) {
      this.loadGTM();
    } else if (!this.categories.analytics.enabled && (window as any).gtmLoaded) {
      this.disableGTM();
    }

    // Consent Mode für Google Analytics (falls bereits geladen)
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': this.categories.analytics.enabled ? 'granted' : 'denied',
        'ad_storage': this.categories.marketing.enabled ? 'granted' : 'denied',
        'functionality_storage': this.categories.functional.enabled ? 'granted' : 'denied',
        'personalization_storage': this.categories.marketing.enabled ? 'granted' : 'denied'
      });
    }

    // Cookie-Management
    if (!this.categories.functional.enabled) {
      this.deleteCookies(['language_pref', 'theme_setting', 'user_preferences']);
    } else {
      this.setCookie('user_preferences', 'functional_enabled', 30);
    }

    if (!this.categories.analytics.enabled) {
      this.deleteCookies(['_ga', '_gid', '_gat']);
    }

    if (!this.categories.marketing.enabled) {
      this.deleteCookies(['_fbp', '_gcl_au', 'ads_preferences']);
    }

    // Notwendige Cookies immer setzen
    this.setCookie('session_id', 'session_' + Date.now(), 1);
  }

  loadGTM() {
    if ((window as any).gtmLoaded) return;
    
    console.log('Loading Google Tag Manager...');
    
    // GTM Script laden
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${this.gtmId}`;
    
    // DataLayer initialisieren
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      'event': 'gtm.js'
    });
    
    // Script in Head einfügen
    document.head.appendChild(gtmScript);
    
    // NoScript-Version für GTM hinzufügen
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${this.gtmId}`;
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
    
    (window as any).gtmLoaded = true;
    
    // Initial Consent Mode setzen
    window.dataLayer.push({
      'event': 'gtm_loaded',
      'consent_mode': {
        'analytics_storage': this.categories.analytics.enabled ? 'granted' : 'denied',
        'ad_storage': this.categories.marketing.enabled ? 'granted' : 'denied',
        'functionality_storage': this.categories.functional.enabled ? 'granted' : 'denied',
        'personalization_storage': this.categories.marketing.enabled ? 'granted' : 'denied'
      }
    });
  }

  disableGTM() {
    console.log('Disabling Google Tag Manager tracking...');
    
    // DataLayer Event für Deaktivierung
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'gtm_disabled'
    });
    
    // Google Analytics deaktivieren (falls vorhanden)
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
  }

  setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
  }

  deleteCookies(names: string[]) {
    names.forEach(name => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    });
  }

  reset() {
    localStorage.removeItem(this.consentKey);
    this.deleteCookies(['user_preferences', '_ga', '_gid', '_gat', '_fbp', '_gcl_au', 'ads_preferences']);
    location.reload();
  }

  getCategories() {
    return this.categories;
  }
}

// Globale Instanz
const cookieManager = new CookieManager();

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSettingsBtn, setShowSettingsBtn] = useState(false);
  const [categories, setCategories] = useState<CookieCategories>({
    necessary: { required: true, enabled: true },
    functional: { required: false, enabled: false },
    analytics: { required: false, enabled: false },
    marketing: { required: false, enabled: false }
  });

  useEffect(() => {
    const hasConsent = cookieManager.init();
    if (hasConsent) {
      setShowSettingsBtn(true);
      setCategories(cookieManager.getCategories());
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newCategories = cookieManager.acceptAll();
    setCategories(newCategories);
    setShowBanner(false);
    setShowSettingsBtn(true);
  };

  const handleRejectAll = () => {
    const newCategories = cookieManager.rejectAll();
    setCategories(newCategories);
    setShowBanner(false);
    setShowSettingsBtn(true);
  };

  const handleOpenSettings = () => {
    setShowModal(true);
    trackEvent('cookie_consent', 'open_settings', 'cookie_banner');
  };

  const handleCloseSettings = () => {
    setShowModal(false);
  };

  const handleSaveSettings = () => {
    cookieManager.updateCategories({
      functional: categories.functional.enabled,
      analytics: categories.analytics.enabled,
      marketing: categories.marketing.enabled
    });
    cookieManager.saveConsent();
    setShowBanner(false);
    setShowSettingsBtn(true);
    setShowModal(false);
    trackEvent('cookie_consent', 'save_custom', 'cookie_banner');
  };

  const handleCategoryChange = (category: keyof CookieCategories, enabled: boolean) => {
    setCategories(prev => ({
      ...prev,
      [category]: { ...prev[category], enabled }
    }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseSettings();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="cookie-banner show">
          <div className="banner-content">
            <div className="banner-text">
              <h3>🍪 Cookie-Einstellungen verwalten</h3>
              <p>Diese Website verwendet Cookies und ähnliche Technologien, um Ihnen das bestmögliche Online-Erlebnis zu bieten. Während technisch notwendige Cookies automatisch gesetzt werden, benötigen wir Ihre Einwilligung für optionale Cookies zur Analyse und Verbesserung unserer Website.</p>
            </div>
            <div className="banner-actions">
              <button className="btn btn-secondary" onClick={handleOpenSettings}>
                Einstellungen verwalten
              </button>
              <button className="btn btn-secondary" onClick={handleRejectAll}>
                Nur notwendige
              </button>
              <button className="btn btn-success" onClick={handleAcceptAll}>
                Alle Cookies akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showModal && (
        <div className="cookie-modal show" onClick={(e) => e.target === e.currentTarget && handleCloseSettings()}>
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseSettings}>&times;</button>
            <div className="modal-header">
              <h2>Ihre Cookie-Präferenzen</h2>
              <p>Hier können Sie detailliert einstellen, welche Cookies Sie zulassen möchten. Ihre Einstellungen werden gespeichert und können jederzeit geändert werden. Weitere Informationen finden Sie in unserer <a href="/datenschutz" target="_blank" style={{color: '#007bff', textDecoration: 'underline'}}>Datenschutzerklärung</a>.</p>
            </div>
            <div className="modal-body">
              {/* Notwendige Cookies */}
              <div className="cookie-category">
                <div className="category-header">
                  <div className="category-title">🔒 Technisch notwendige Cookies</div>
                  <label className="toggle-switch">
                    <input type="checkbox" checked disabled />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="category-description">
                  Diese Cookies sind für die ordnungsgemäße Funktion der Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Website. Die Website kann ohne diese Cookies nicht ordnungsgemäß funktionieren.
                </div>
                <div className="cookie-list">
                  <strong>Verwendet für:</strong> Session-Management, Sicherheit, Cookie-Einverständnis<br />
                  <strong>Beispiele:</strong> PHPSESSID, csrf_token, cookie_consent_status
                </div>
              </div>

              {/* Funktionale Cookies */}
              <div className="cookie-category">
                <div className="category-header">
                  <div className="category-title">⚙️ Funktionale Cookies</div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={categories.functional.enabled}
                      onChange={(e) => handleCategoryChange('functional', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="category-description">
                  Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierungsoptionen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden. Ohne diese Cookies funktionieren einige oder alle dieser Dienste möglicherweise nicht ordnungsgemäß.
                </div>
                <div className="cookie-list">
                  <strong>Verwendet für:</strong> Spracheinstellungen, Benutzerpräferenzen, erweiterte Funktionen<br />
                  <strong>Beispiele:</strong> language_preference, user_settings, feature_toggles
                </div>
              </div>

              {/* Analytische Cookies */}
              <div className="cookie-category">
                <div className="category-header">
                  <div className="category-title">📊 Analytische Cookies</div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={categories.analytics.enabled}
                      onChange={(e) => handleCategoryChange('analytics', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="category-description">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden. Diese Informationen helfen uns, die Funktionsweise unserer Website zu verbessern und das Benutzererlebnis zu optimieren.
                </div>
                <div className="cookie-list">
                  <strong>Anbieter:</strong> Google Analytics 4<br />
                  <strong>Verwendet für:</strong> Besucherstatistiken, Seitenaufrufe, Verweildauer<br />
                  <strong>Beispiele:</strong> _ga, _ga_*, _gid (Speicherdauer: 2 Jahre / 24 Stunden)
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="cookie-category">
                <div className="category-header">
                  <div className="category-title">🎯 Marketing Cookies</div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={categories.marketing.enabled}
                      onChange={(e) => handleCategoryChange('marketing', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="category-description">
                  Diese Cookies werden verwendet, um Ihnen personalisierte Werbung zu zeigen, die für Sie und Ihre Interessen relevanter ist. Sie werden auch verwendet, um die Anzahl der Anzeigen zu begrenzen und die Effektivität von Werbekampagnen zu messen.
                </div>
                <div className="cookie-list">
                  <strong>Anbieter:</strong> Google Ads, Facebook, weitere Werbepartner<br />
                  <strong>Verwendet für:</strong> Personalisierte Werbung, Conversion-Tracking, Remarketing<br />
                  <strong>Beispiele:</strong> _fbp, _gcl_au, IDE, test_cookie (Speicherdauer: 90 Tage - 2 Jahre)
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={handleCloseSettings}>
                Abbrechen
              </button>
              <button className="btn btn-secondary" onClick={() => { handleRejectAll(); handleCloseSettings(); }}>
                Nur notwendige Cookies
              </button>
              <button className="btn btn-primary" onClick={handleSaveSettings}>
                Auswahl bestätigen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Button */}
      {showSettingsBtn && (
        <button className="cookie-settings-btn show" onClick={handleOpenSettings}>
          🍪 Cookie-Einstellungen
        </button>
      )}
    </>
  );
};

export default CookieBanner;
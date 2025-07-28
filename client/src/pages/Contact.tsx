import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_submit', 'contact', 'contact_form');
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="text-center">
          <h1 className="hero-title-special">
            <span className="title-white">Sprechen Sie mit unseren </span>
            <span className="title-gradient">KI-Experten</span>
          </h1>
          <p className="hero-subtitle">Lassen Sie uns gemeinsam Ihr KI-Potenzial entdecken</p>
          <p className="hero-description">
            Erhalten Sie eine individuelle Beratung von unseren KI-Experten und entdecken Sie, 
            wie Künstliche Intelligenz Ihr Unternehmen transformieren kann.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="content-section">
        <div className="contact-method glass-container">
          <div className="contact-details">
            <h3 className="contact-main-heading">
              <span className="gradient-icon-square" style={{ marginRight: '10px' }}>
                <i className="fas fa-envelope"></i>
              </span>
              Kontakt
              <span className="gradient-icon-square" style={{ marginLeft: '10px' }}>
                <i className="fas fa-phone"></i>
              </span>
            </h3>
            
            <div className="contact-layout-with-image">
              <div className="contact-person-left">
                <p className="contact-name">
                  <strong>Antonio Eichler</strong>
                </p>
                <p className="contact-info-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="contact-email-inline">
                    <a href="mailto:ki-kurs@ai-allstars.com">ki-kurs@ai-allstars.com</a>
                  </span>
                </p>
                <p className="contact-info-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.21649 3.36162C2.3051 3.09849 2.44748 2.85669 2.63519 2.65162C2.82290 2.44655 3.05056 2.28271 3.30507 2.17052C3.55958 2.05833 3.83430 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.11 3.72C9.23662 4.68007 9.47144 5.62273 9.81 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="contact-number">
                    <a href="tel:+491624024929">+49 162 4024929</a>
                    <span className="contact-method-hint">(Telefon & WhatsApp)</span>
                  </span>
                </p>
              </div>
              <div className="contact-image-right">
                <img 
                  src="/antonio-portrait-new.png" 
                  alt="Antonio Eichler" 
                  className="antonio-portrait"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container glass-container">
          <h2 className="contact-form-title">
            <i className="fas fa-paper-plane gradient-text"></i>
            Nachricht senden
          </h2>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <i className="fas fa-user"></i>
                Name *
              </label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <i className="fas fa-envelope"></i>
                E-Mail *
              </label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company" className="form-label">
                <i className="fas fa-building"></i>
                Unternehmen
              </label>
              <Input 
                type="text" 
                id="company" 
                name="company" 
                className="form-input" 
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                <i className="fas fa-phone"></i>
                Telefon *
              </label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="form-input" 
                value={formData.phone}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <i className="fas fa-comment"></i>
                Nachricht *
              </label>
              <Textarea 
                id="message" 
                name="message" 
                className="form-input form-textarea" 
                rows={6} 
                placeholder="Erzählen Sie uns von Ihrem Projekt oder Ihren KI-Zielen..."
                value={formData.message}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <Button 
              type="submit" 
              className="form-submit-btn"
            >
              <i className="fas fa-rocket"></i>
              Nachricht senden
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
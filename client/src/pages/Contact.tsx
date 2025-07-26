import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";

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
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      {/* Contact Hero Section */}
      <section className="contact-hero hero" style={{ marginTop: '120px' }}>
        <div className="contact-hero-content">
          <h1 className="hero-title-animate">
            Sprechen Sie mit unseren <span className="hero-gradient-text">KI-Experten</span>
          </h1>
          <p className="hero-subtitle subtitle-animate">Lassen Sie uns gemeinsam Ihr KI-Potenzial entdecken</p>
          <p className="hero-description description-animate">
            Erhalten Sie eine individuelle Beratung von unseren KI-Experten und entdecken Sie, 
            wie Künstliche Intelligenz Ihr Unternehmen transformieren kann.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="contact-method glass-container">
          <div className="contact-details">
            <h3 className="contact-main-heading">
              <span className="gradient-icon-square" style={{ marginRight: '10px' }}>
                <i className="fas fa-phone"></i>
              </span>
              Telefon / WhatsApp
              <span className="gradient-icon-square" style={{ marginLeft: '10px' }}>
                <i className="fab fa-whatsapp"></i>
              </span>
            </h3>
            
            <div className="contact-persons-grid">
              <div className="contact-person">
                <img 
                  src="/attached_assets/Antonio_1753006608860.png" 
                  alt="Antonio Eichler" 
                  className="contact-person-image"
                />
                <p className="contact-name"><strong>Antonio Eichler</strong></p>
                <p className="contact-title">KI-Strategieberater & Kundenbetreuung</p>
                <p className="contact-number">
                  <a href="tel:+491624024929">+49 162 4024929</a>
                  <span className="contact-method-hint">(Telefon & WhatsApp)</span>
                </p>
              </div>
              
              <div className="contact-person">
                <img 
                  src="/attached_assets/Marko_1753006653736.png" 
                  alt="Dr. Marko Müller" 
                  className="contact-person-image"
                />
                <p className="contact-name"><strong>Dr. Marko Müller</strong></p>
                <p className="contact-title">Partnerschaften & Geschäftsentwicklung</p>
                <p className="contact-number">
                  <a href="tel:+491796842814">+49 179 6842814</a>
                  <span className="contact-method-hint">(Telefon & WhatsApp)</span>
                </p>
              </div>
            </div>
            
            <hr className="contact-divider" />
            
            <div className="contact-email-section">
              <h3>
                <span className="gradient-icon-square" style={{ marginRight: '12px' }}>
                  <i className="fas fa-envelope"></i>
                </span>
                E-Mail
              </h3>
              <p className="contact-number">
                <a href="mailto:ki-kurs@ai-allstars.com">ki-kurs@ai-allstars.com</a>
              </p>
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
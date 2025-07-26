import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Phone, MessageSquare, Mail, Send, User, Building, MessageCircle } from "lucide-react";

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
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Contact Hero Section */}
      <section className="contact-hero hero" style={{ marginTop: '120px' }}>
        <div className="contact-hero-content text-center max-w-4xl mx-auto px-6">
          <h1 className="hero-title-animate text-6xl md:text-7xl font-bold text-white mb-6">
            Sprechen Sie mit unseren <span className="hero-gradient-text bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">KI-Experten</span>
          </h1>
          <p className="hero-subtitle subtitle-animate text-2xl text-gray-300 mb-6 font-semibold">
            Lassen Sie uns gemeinsam Ihr KI-Potenzial entdecken
          </p>
          <p className="hero-description description-animate text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Erhalten Sie eine individuelle Beratung von unseren KI-Experten und entdecken Sie, 
            wie Künstliche Intelligenz Ihr Unternehmen transformieren kann.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section py-16 px-6">
        <Card className="contact-method glass-card max-w-6xl mx-auto p-8">
          <div className="contact-details">
            <h3 className="contact-main-heading text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-4">
              <span className="gradient-icon-square bg-gradient-to-r from-blue-500 to-red-500 p-2 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </span>
              Telefon / WhatsApp
              <span className="gradient-icon-square bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </span>
            </h3>
            
            <div className="contact-persons-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="contact-person text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <img 
                  src="/attached_assets/Antonio_1753006608860.png" 
                  alt="Antonio Eichler" 
                  className="contact-person-image w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500/50"
                />
                <p className="contact-name text-xl font-bold text-white mb-2">Antonio Eichler</p>
                <p className="contact-title text-gray-300 mb-4 font-medium">KI-Strategieberater & Kundenbetreuung</p>
                <p className="contact-number">
                  <a 
                    href="tel:+491624024929" 
                    className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-semibold"
                  >
                    +49 162 4024929
                  </a>
                  <span className="contact-method-hint block text-gray-400 text-sm mt-1">
                    (Telefon & WhatsApp)
                  </span>
                </p>
              </div>
              
              <div className="contact-person text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <img 
                  src="/attached_assets/Marko_1753006653736.png" 
                  alt="Dr. Marko Müller" 
                  className="contact-person-image w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-red-500/50"
                />
                <p className="contact-name text-xl font-bold text-white mb-2">Dr. Marko Müller</p>
                <p className="contact-title text-gray-300 mb-4 font-medium">Partnerschaften & Geschäftsentwicklung</p>
                <p className="contact-number">
                  <a 
                    href="tel:+491796842814" 
                    className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-semibold"
                  >
                    +49 179 6842814
                  </a>
                  <span className="contact-method-hint block text-gray-400 text-sm mt-1">
                    (Telefon & WhatsApp)
                  </span>
                </p>
              </div>
            </div>
            
            <hr className="contact-divider border-gray-600 mb-8" />
            
            <div className="contact-email-section text-center">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="gradient-icon-square bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </span>
                E-Mail
              </h3>
              <p className="contact-number">
                <a 
                  href="mailto:ki-kurs@ai-allstars.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-semibold"
                >
                  ki-kurs@ai-allstars.com
                </a>
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-16 px-6">
        <Card className="contact-form-container glass-card max-w-4xl mx-auto p-8">
          <h2 className="contact-form-title text-3xl font-bold text-center mb-8 text-white flex items-center justify-center gap-3">
            <Send className="w-8 h-8 text-blue-400" />
            Nachricht senden
          </h2>
          
          <form onSubmit={handleSubmit} className="contact-form space-y-6">
            <div className="form-group">
              <Label htmlFor="name" className="form-label text-white font-medium mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                Name *
              </Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input bg-white/5 border-white/20 text-white focus:border-blue-500 focus:ring-blue-500/20" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <Label htmlFor="email" className="form-label text-white font-medium mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                E-Mail *
              </Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input bg-white/5 border-white/20 text-white focus:border-blue-500 focus:ring-blue-500/20" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <Label htmlFor="company" className="form-label text-white font-medium mb-2 flex items-center gap-2">
                <Building className="w-4 h-4" />
                Unternehmen
              </Label>
              <Input 
                type="text" 
                id="company" 
                name="company" 
                className="form-input bg-white/5 border-white/20 text-white focus:border-blue-500 focus:ring-blue-500/20" 
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <Label htmlFor="phone" className="form-label text-white font-medium mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Telefon *
              </Label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="form-input bg-white/5 border-white/20 text-white focus:border-blue-500 focus:ring-blue-500/20" 
                value={formData.phone}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <Label htmlFor="message" className="form-label text-white font-medium mb-2 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Nachricht *
              </Label>
              <Textarea 
                id="message" 
                name="message" 
                className="form-input form-textarea bg-white/5 border-white/20 text-white focus:border-blue-500 focus:ring-blue-500/20 min-h-[120px]" 
                rows={6} 
                placeholder="Erzählen Sie uns von Ihrem Projekt oder Ihren KI-Zielen..."
                value={formData.message}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <Button 
              type="submit" 
              className="form-submit-btn w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Nachricht senden
            </Button>
          </form>
        </Card>
      </section>
    </div>
  );
}
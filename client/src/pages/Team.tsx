import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import TeamMemberCard from "@/components/TeamMemberCard";
// Team member images - using available assets
const antonioImage = "/attached_assets/Antonio_1753006608860.png";
const markoImage = "/attached_assets/Marko_1753006653736.png";
const broschuerePDF = "/attached_assets/AI_Pass_Broschuere_1753051794218.pdf";

const teamMembers = [
  {
    name: "Antonio Eichler",
    role: "CEO & KI-Strategieexperte",
    description: "Antonio verbindet fundierte KI-Kenntnisse mit exzellenter Kommunikationsstärke und unterstützt Unternehmen dabei, strategisch und strukturell das volle Potenzial künstlicher Intelligenz auszuschöpfen.",
    image: antonioImage,
    social: {
      linkedin: "https://www.linkedin.com/in/antonio-eichler-841296300/",
      email: "antonio.eichler@ai-allstars.com"
    }
  },
  {
    name: "Dr. Marko Müller",
    role: "Partnerschaften & Geschäftsentwicklung",
    description: "Marko ist verantwortlich für die Schulung und Beratung unserer Kunden. Er vermittelt komplexe KI-Konzepte verständlich und hilft Teams dabei, KI erfolgreich in ihren Arbeitsalltag zu integrieren.",
    image: markoImage,
    social: {
      linkedin: "https://www.linkedin.com/in/marko-mueller-partnerships/",
      email: "marko.mueller@ai-allstars.com"
    }
  },
  {
    name: "Patrick Thomas",
    role: "CTO & KI-Architekt",
    description: "Mit umfassender KI-Expertise und langjähriger Erfahrung in Automatisierung entwickelt Patrick innovative KI-Lösungen, um Unternehmen nachhaltig zu transformieren und interne Prozesse zu optimieren.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://www.linkedin.com/in/patrick-thomas-ai/",
      email: "patrick.thomas@ai-allstars.com"
    }
  },
  {
    name: "Jenny Schmidt",
    role: "Controlling & Finanzen",
    description: "Jenny leitet das Controlling und ist Expertin für das komplexe Antragswesen. Sie sorgt dafür, dass alle finanziellen Aspekte und Fördermöglichkeiten optimal genutzt werden.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://www.linkedin.com/in/jenny-schmidt-finance/",
      email: "jenny.schmidt@ai-allstars.com"
    }
  },
  {
    name: "Max Weber",
    role: "Senior KI-Entwickler",
    description: "Max ist unser technischer Spezialist für die Implementierung von KI-Lösungen. Mit seiner Expertise in Machine Learning und Deep Learning entwickelt er maßgeschneiderte Automatisierungslösungen.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://www.linkedin.com/in/max-weber-ai-dev/",
      email: "max.weber@ai-allstars.com"
    }
  },
  {
    name: "Sarah König",
    role: "KI-Trainerin & Consultant",
    description: "Sarah ist verantwortlich für die Schulung und Beratung unserer Kunden. Sie vermittelt komplexe KI-Konzepte verständlich und hilft Teams dabei, KI erfolgreich in ihren Arbeitsalltag zu integrieren.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://www.linkedin.com/in/sarah-koenig-ai-trainer/",
      email: "sarah.koenig@ai-allstars.com"
    }
  }
];

export default function Team() {
  useEffect(() => {
    document.title = "Team - AI Allstars";
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="text-center">
          <h1 className="hero-title-special">
            <span className="title-white">Unser </span>
            <span className="title-gradient">Allstars Team</span>
          </h1>
          <p className="hero-subtitle">Die AI Allstars für KI-Transformation</p>
          <p className="hero-description">
            Lernen Sie die Köpfe hinter AI Allstars kennen - ein Team aus erfahrenen KI-Spezialisten, Strategieberatern und Technologie-Experten, die Ihr Unternehmen erfolgreich in die Zukunft führen.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
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
            <a href={broschuerePDF} download="AI_Pass_Broschuere.pdf" className="cta-button-card">
              Broschüre herunterladen
            </a>
          </div>

          {/* CTA 2: Kurseinblick */}
          <div className="cta-card">
            <div className="cta-icon">🎓</div>
            <h3 className="cta-title">Kurseinblick</h3>
            <p className="cta-description">Erfahre mehr über unseren Kurs</p>
            <button onClick={() => window.location.href = '/kurs'} className="cta-button-card">
              Kurs entdecken
            </button>
          </div>

          {/* CTA 3: Preise */}
          <div className="cta-card">
            <div className="cta-icon">💰</div>
            <h3 className="cta-title">Preise</h3>
            <p className="cta-description">Entdecke unsere AI-PASS Pakete und finde das passende für dein Team</p>
            <button onClick={() => window.location.href = '/preise'} className="cta-button-card">
              Preise entdecken
            </button>
          </div>

          {/* CTA 4: Kontakt */}
          <div className="cta-card">
            <div className="cta-icon">💬</div>
            <h3 className="cta-title">Kontaktieren</h3>
            <p className="cta-description">Kontaktiere uns direkt</p>
            <button onClick={() => window.location.href = '/kontakt'} className="cta-button-card">
              Kontakt
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

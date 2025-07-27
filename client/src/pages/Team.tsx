import { useEffect } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import TeamMemberCard from "@/components/TeamMemberCard";
// Team member images - using available assets
import patrickImage from "@assets/profilbild_1753643702033.png";
import antonioImage from "@assets/Antonio_1753643947463.png";
import jennyImage from "@assets/Jenny_1753643966006.png";
import antonImage from "@assets/anton_1753644074965.png";
const markoImage = "/attached_assets/Marko_1753006653736.png";
const broschuerePDF = "/attached_assets/AI_Pass_Broschuere_1753051794218.pdf";

const teamMembers = [
  {
    name: "Patrick Thomas",
    role: "CEO & KI-Experte",
    description: "Mit umfassender KI-Expertise und langjähriger Erfahrung in Automatisierung entwickelt Patrick innovative KI-Lösungen, um Unternehmen nachhaltig zu transformieren und interne Prozesse zu optimieren.",
    image: patrickImage,
    social: {
      linkedin: "https://www.linkedin.com/in/patrick-thomas-38ab512ba/",
      email: "patrick.thomas@ai-allstars.com"
    }
  },
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
    name: "Jenny Thomas",
    role: "Controlling und Antragswesen",
    description: "Jenny leitet das Controlling und ist Expertin für das komplexe Antragswesen. Sie sorgt dafür, dass alle finanziellen Aspekte und Fördermöglichkeiten optimal genutzt werden.",
    image: jennyImage,
    social: {
      linkedin: "https://www.linkedin.com/in/jenny-thomas-98765432/",
      email: "jenny.thomas@ai-allstars.com"
    }
  },
  {
    name: "Anton Trommer",
    role: "Senior KI-Entwickler",
    description: "Anton bringt seine Stärken in der KI- und Systementwicklung sowie der Automatisierung ein, um Unternehmen bei der Effizienzsteigerung wirkungsvoll zu unterstützen.",
    image: antonImage,
    social: {
      linkedin: "https://www.linkedin.com/in/anton-trommer-tech/",
      email: "anton.trommer@ai-allstars.com"
    }
  },
  {
    name: "Dr. Marko Müller",
    role: "KI-Trainer & Consultant",
    description: "Als Kommunikationsspezialist stärkt Marko sowohl interne Prozesse als auch die externe Kommunikation und ist damit ein zentraler Bestandteil unseres Teams.",
    image: markoImage,
    social: {
      linkedin: "https://www.linkedin.com/in/marko-schmidt-ai/",
      email: "marko.schmidt@ai-allstars.com"
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

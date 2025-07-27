import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ArrowLeft, Check } from 'lucide-react';
const teamGroupImage = "/team-group.png";

export default function Kurs() {
  const [currentView, setCurrentView] = useState('main');
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const departments = [
    {
      id: 'marketing',
      title: 'Marketing',
      icon: '🎬',
      description: 'KI für Content-Erstellung, Social Media und Kampagnen-Optimierung',
      tools: ['ChatGPT', 'Jasper.ai', 'Canva AI', 'Copy.ai'],
      toolDescription: 'Erstelle überzeugende Werbetexte, Social Media Posts und Kampagnen-Konzepte in Rekordzeit.'
    },
    {
      id: 'hr',
      title: 'HR',
      icon: '👥',
      description: 'Automatisierung von Bewerbungsprozessen und Mitarbeiter-Kommunikation',
      tools: ['HireVue', 'Textio', 'Workday AI', 'Pymetrics'],
      toolDescription: 'Optimiere Recruiting-Prozesse und verbessere die Mitarbeitererfahrung.'
    },
    {
      id: 'support',
      title: 'Support',
      icon: '🎧',
      description: 'Chatbots, Ticket-Automatisierung und Kundenkommunikation',
      tools: ['Zendesk AI', 'Intercom', 'Dialogflow', 'Watson Assistant'],
      toolDescription: 'Automatisiere Kundenanfragen und verbessere die Support-Qualität.'
    },
    {
      id: 'finance',
      title: 'Finance',
      icon: '💰',
      description: 'Automatisierte Rechnungsverarbeitung und Datenanalyse',
      tools: ['QuickBooks AI', 'Xero', 'DataSnipper', 'MindBridge AI'],
      toolDescription: 'Automatisiere Buchhaltung und verbessere Finanzanalysen.'
    },
    {
      id: 'it',
      title: 'IT',
      icon: '💻',
      description: 'Code-Generierung, Dokumentation und System-Automatisierung',
      tools: ['GitHub Copilot', 'Tabnine', 'DeepCode', 'Codacy'],
      toolDescription: 'Beschleunige Entwicklungsprozesse und verbessere Code-Qualität.'
    },
    {
      id: 'recht',
      title: 'Recht',
      icon: '⚖️',
      description: 'Vertragsprüfung, Compliance-Checks und Rechtsrecherche',
      tools: ['LawGeex', 'Kira Systems', 'ROSS Intelligence', 'Legal Robot'],
      toolDescription: 'Automatisiere Rechtsdokumente und verbessere Compliance.'
    }
  ];

  const theorieContent = [
    {
      title: '🎥 Lernvideo',
      type: 'video',
      description: 'Grundlagen der KI und praktische Anwendungen in deinem Arbeitsbereich'
    },
    {
      title: '📋 Aufgabenbeschreibung',
      type: 'task',
      description: 'Analysiere deine täglichen Arbeitsabläufe und identifiziere 3 Bereiche, in denen KI-Tools dir helfen können.',
      duration: '45 Minuten'
    },
    {
      title: '📄 Handout',
      type: 'document',
      description: 'Kompakte Übersicht aller wichtigen KI-Tools für deinen Arbeitsbereich',
      tools: ['ChatGPT & Claude für Textarbeit', 'Midjourney für Bildgenerierung', 'Notion AI für Projektmanagement', 'Grammarly für Korrekturlesen']
    },
    {
      title: '🎁 Bonusmaterial',
      type: 'bonus',
      description: 'Zusätzliche Videos und Quick-Quiz',
      videos: ['Video 1: Prompt Engineering', 'Video 2: KI-Ethik'],
      quiz: 'Quick-Quiz: Was ist Machine Learning?'
    }
  ];

  const renderMainMenu = () => (
    <div id="mainMenu">
      <div className="main-buttons">
        <div className="main-btn" onClick={() => setCurrentView('theorie')}>
          <span className="icon">📚</span>
          <div>Theorie</div>
        </div>
        <div className="main-btn" onClick={() => setCurrentView('praxis')}>
          <span className="icon">⚡</span>
          <div>Praxis</div>
        </div>
      </div>
    </div>
  );

  const renderTheorie = () => (
    <div id="theorieContent" className="content-area">
      <div className="back-btn" onClick={() => setCurrentView('main')}>← Zurück zur Übersicht</div>
      <h2 style={{color: 'white', marginBottom: '20px', fontSize: '1.8rem', fontWeight: '600'}}>📚 Theorie-Bereich</h2>
      
      <div className="content-grid">
        {theorieContent.map((item, index) => (
          <div key={index} className="content-item">
            <h3>{item.title}</h3>
            
            {item.type === 'video' && (
              <div className="video-player" style={{background: '#000', borderRadius: '8px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px'}}>
                <div style={{color: 'white', fontSize: '2rem'}}>▶</div>
              </div>
            )}
            
            {item.type === 'task' && (
              <div>
                <p><strong>Deine Mission:</strong><br />
                {item.description}</p>
                <div className="tip-box" style={{background: 'rgba(59, 130, 246, 0.2)', padding: '10px', borderRadius: '6px', marginTop: '10px', border: '1px solid rgba(59, 130, 246, 0.3)'}}>
                  ⏱️ Geschätzte Bearbeitungszeit: {item.duration}
                </div>
              </div>
            )}
            
            {item.type === 'document' && (
              <div>
                <div className="document-preview" style={{background: 'rgba(0, 0, 0, 0.3)', padding: '15px', borderRadius: '8px', marginBottom: '15px'}}>
                  <div className="document-header" style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px'}}>
                    <span>📋</span>
                    <span style={{color: 'white', fontWeight: '600'}}>AI‑PASS Handout</span>
                  </div>
                  <div className="document-body">
                    <div className="document-title" style={{color: 'white', fontWeight: '600', marginBottom: '10px'}}>KI-Tools Übersicht 2025</div>
                    {item.tools?.map((tool, i) => (
                      <div key={i} className="document-item" style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                        <span className="document-checkmark" style={{color: '#10b981'}}>✓</span>
                        <span style={{color: '#e0e0e0', fontSize: '0.9rem'}}>{tool}</span>
                      </div>
                    ))}
                    <div className="document-footer" style={{color: '#9ca3af', fontSize: '0.8rem', marginTop: '10px'}}>
                      + 15 weitere Tools mit detaillierten Anwendungsbeispielen
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {item.type === 'bonus' && (
              <div>
                <div className="bonus-videos" style={{marginBottom: '15px'}}>
                  {item.videos?.map((video, i) => (
                    <div key={i} className="bonus-video" style={{background: 'rgba(147, 51, 234, 0.2)', padding: '8px 12px', borderRadius: '6px', marginBottom: '5px', fontSize: '0.8rem', color: '#c084fc'}}>
                      🎥 {video}
                    </div>
                  ))}
                </div>
                <div className="quiz-container" style={{background: 'rgba(0, 0, 0, 0.3)', padding: '12px', borderRadius: '8px'}}>
                  <div className="quiz-question" style={{color: 'white', fontSize: '0.9rem', marginBottom: '8px'}}>{item.quiz}</div>
                  <div className="quiz-options">
                    <div className="quiz-option" style={{color: '#9ca3af', fontSize: '0.8rem', marginBottom: '4px'}}>A) Ein Kochrezept für Maschinen</div>
                    <div className="quiz-option" style={{color: '#9ca3af', fontSize: '0.8rem', marginBottom: '4px'}}>B) Algorithmen, die aus Daten lernen</div>
                    <div className="quiz-option" style={{color: '#9ca3af', fontSize: '0.8rem'}}>C) Wartung von Computern</div>
                  </div>
                </div>
              </div>
            )}
            
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPraxis = () => (
    <div id="praxisContent" className="content-area">
      <div className="back-btn" onClick={() => setCurrentView('main')}>← Zurück zur Übersicht</div>
      <h2 style={{color: 'white', marginBottom: '20px', fontSize: '1.8rem', fontWeight: '600'}}>⚡ Praxis-Bereich</h2>
      
      <div className="department-grid">
        {departments.map((dept) => (
          <div 
            key={dept.id} 
            className="department-card"
            onClick={() => {
              setSelectedDepartment(dept.id);
              setCurrentView('department');
            }}
          >
            <div className="thumbnail-placeholder">
              <span>{dept.icon}</span>
              <small>Video-Vorschau</small>
            </div>
            <p>{dept.description}</p>
            <div className="department-btn">{dept.title}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDepartment = () => {
    const dept = departments.find(d => d.id === selectedDepartment);
    if (!dept) return null;

    return (
      <div id={`${dept.id}Detail`} className="content-area">
        <div className="back-btn" onClick={() => setCurrentView('praxis')}>← Zurück zu Praxis-Bereichen</div>
        <h2 style={{color: 'white', marginBottom: '20px', fontSize: '1.8rem', fontWeight: '600'}}>{dept.icon} {dept.title} mit KI</h2>
        
        <div className="detail-content" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px'}}>
          <div className="detail-video" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '25px'}}>
            <div className="video-player" style={{background: '#000', borderRadius: '8px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
              <div style={{color: 'white', fontSize: '3rem'}}>▶</div>
            </div>
            
            <div className="tool-info">
              <h3 style={{color: 'white', fontSize: '1.2rem', marginBottom: '15px'}}>🛠️ Empfohlene Tools:</h3>
              <div className="tool-list" style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '15px'}}>
                {dept.tools.map((tool, i) => (
                  <span key={i} className="tool-tag" style={{background: 'rgba(0, 128, 255, 0.6)', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem'}}>
                    {tool}
                  </span>
                ))}
              </div>
              <p style={{color: '#e0e0e0', fontSize: '0.9rem'}}>{dept.toolDescription}</p>
            </div>
          </div>

          <div className="assignment-section" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '0', overflow: 'hidden'}}>
            <div className="assignment-card">
              <div className="assignment-header" style={{background: 'rgba(0, 128, 255, 0.6)', padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span className="assignment-icon" style={{fontSize: '1.2rem'}}>🎯</span>
                <strong style={{color: 'white', fontSize: '1rem'}}>Praxis-Challenge</strong>
              </div>
              
              <div className="assignment-body" style={{padding: '20px'}}>
                <p style={{color: '#e0e0e0', fontSize: '0.9rem', marginBottom: '15px'}}>
                  Implementiere ein KI-Tool in deinem {dept.title}-Bereich und dokumentiere die Zeitersparnis.
                </p>
                
                <div className="assignment-steps" style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px'}}>
                  <div className="step" style={{display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(0, 0, 0, 0.2)', padding: '10px 12px', borderRadius: '8px'}}>
                    <div className="step-number" style={{background: '#0080FF', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold'}}>1</div>
                    <span style={{color: '#e0e0e0', fontSize: '0.85rem'}}>Tool auswählen und einrichten</span>
                  </div>
                  <div className="step" style={{display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(0, 0, 0, 0.2)', padding: '10px 12px', borderRadius: '8px'}}>
                    <div className="step-number" style={{background: '#0080FF', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold'}}>2</div>
                    <span style={{color: '#e0e0e0', fontSize: '0.85rem'}}>Testlauf mit realen Daten durchführen</span>
                  </div>
                  <div className="step" style={{display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(0, 0, 0, 0.2)', padding: '10px 12px', borderRadius: '8px'}}>
                    <div className="step-number" style={{background: '#0080FF', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold'}}>3</div>
                    <span style={{color: '#e0e0e0', fontSize: '0.85rem'}}>Ergebnisse dokumentieren und bewerten</span>
                  </div>
                </div>
                
                <div className="goal-box" style={{background: 'rgba(59, 130, 246, 0.2)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.3)'}}>
                  <div style={{color: '#93c5fd', fontSize: '0.8rem'}}>
                    <div><strong>Geschätzte Zeit:</strong> 2 Stunden</div>
                    <div><strong>Ziel:</strong> Mindestens 30% Zeitersparnis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="text-center">
            <h1 className="hero-title-special mb-6">
              <span className="title-white">Die erste </span>
              <span className="title-gradient text-8xl">6 in 1</span>
              <span className="title-white"> KI Weiterbildung</span>
            </h1>
            <p className="hero-subtitle mb-8">Interaktiver Kurseinblick: So funktioniert unser 5‑Wochen AI‑PASS</p>
          </div>
        </section>

        {/* Macbook Browser Container */}
        <section className="content-section">
          <div className="kurs-einblick-container">
            <div className="browser-window">
              {/* macOS Browser Header */}
              <div className="browser-header">
                <div className="traffic-lights">
                  <div className="traffic-light close"></div>
                  <div className="traffic-light minimize"></div>
                  <div className="traffic-light maximize"></div>
                </div>
                <div className="address-bar">🔒 ai-allstars.com/kurs-einblick</div>
              </div>
              
              {/* Browser Content */}
              <div className="browser-content">
                <div className="logo-placeholder">
                  <div className="logo-box">
                    <img 
                      src="/assets/allstars-logo-white.png" 
                      alt="AI Allstars" 
                      className="max-w-[200px] h-auto brightness-0 invert"
                    />
                  </div>
                </div>
                
                <div className="hero-image-placeholder relative mb-8">
                  <div className="w-full max-w-[350px] h-auto mx-auto">
                    <img 
                      src={teamGroupImage} 
                      alt="AI Allstars Team" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <h1 className="text-white text-3xl font-bold text-center bg-black bg-opacity-20 px-4 py-2 rounded-lg backdrop-blur-sm">🚀 AI‑PASS Kurseinblick</h1>
                  </div>
                </div>
                
                <div className="header">
                  <p className="text-gray-300 mb-8 text-center">Entdecke, wie unser Programm dich zum KI‑Champion macht</p>
                </div>
                
                {/* Interactive Content */}
                <div className="interactive-content">
                  {currentView === 'main' && renderMainMenu()}
                  {currentView === 'theorie' && renderTheorie()}
                  {currentView === 'praxis' && renderPraxis()}
                  {currentView === 'department' && renderDepartment()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
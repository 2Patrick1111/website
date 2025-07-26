import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ArrowLeft, Check } from 'lucide-react';

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
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">🚀 AI‑PASS Kurseinblick</h2>
        <p className="text-xl text-gray-300">Entdecke, wie unser Programm dich zum KI‑Champion macht</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card 
          className="glass-card p-8 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setCurrentView('theorie')}
        >
          <div className="text-center">
            <span className="text-6xl mb-4 block">📚</span>
            <h3 className="text-2xl font-bold text-white mb-4">Theorie</h3>
            <p className="text-gray-300">Lerne die Grundlagen der KI und wie sie dein Arbeitsfeld revolutioniert</p>
          </div>
        </Card>
        
        <Card 
          className="glass-card p-8 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setCurrentView('praxis')}
        >
          <div className="text-center">
            <span className="text-6xl mb-4 block">⚡</span>
            <h3 className="text-2xl font-bold text-white mb-4">Praxis</h3>
            <p className="text-gray-300">Entdecke praxisnahe Anwendungen für verschiedene Abteilungen</p>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderTheorie = () => (
    <div className="space-y-8">
      <Button 
        variant="ghost" 
        className="text-white hover:text-blue-400 mb-6"
        onClick={() => setCurrentView('main')}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Zurück zur Übersicht
      </Button>
      
      <h2 className="text-3xl font-bold text-white mb-8">📚 Theorie-Bereich</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {theorieContent.map((item, index) => (
          <Card key={index} className="glass-card p-6">
            <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
            
            {item.type === 'video' && (
              <div className="relative bg-black rounded-lg h-48 mb-4 flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
            )}
            
            {item.type === 'task' && (
              <div className="mb-4">
                <p className="text-gray-300 mb-3">
                  <strong className="text-white">Deine Mission:</strong><br />
                  {item.description}
                </p>
                <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30">
                  <span className="text-blue-300">⏱️ Geschätzte Bearbeitungszeit: {item.duration}</span>
                </div>
              </div>
            )}
            
            {item.type === 'document' && (
              <div className="mb-4">
                <div className="bg-gray-800/50 p-4 rounded-lg mb-3">
                  <div className="text-white font-semibold mb-3">KI-Tools Übersicht 2025</div>
                  {item.tools?.map((tool, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{tool}</span>
                    </div>
                  ))}
                  <div className="text-gray-400 text-sm mt-3">
                    + 15 weitere Tools mit detaillierten Anwendungsbeispielen
                  </div>
                </div>
              </div>
            )}
            
            {item.type === 'bonus' && (
              <div className="mb-4">
                <div className="space-y-2 mb-4">
                  {item.videos?.map((video, i) => (
                    <div key={i} className="bg-purple-500/20 p-2 rounded text-purple-300 text-sm">
                      🎥 {video}
                    </div>
                  ))}
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <div className="text-white text-sm mb-2">{item.quiz}</div>
                  <div className="space-y-1">
                    <div className="text-gray-400 text-xs">A) Ein Kochrezept für Maschinen</div>
                    <div className="text-gray-400 text-xs">B) Algorithmen, die aus Daten lernen</div>
                    <div className="text-gray-400 text-xs">C) Wartung von Computern</div>
                  </div>
                </div>
              </div>
            )}
            
            <p className="text-gray-300 text-sm">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPraxis = () => (
    <div className="space-y-8">
      <Button 
        variant="ghost" 
        className="text-white hover:text-blue-400 mb-6"
        onClick={() => setCurrentView('main')}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Zurück zur Übersicht
      </Button>
      
      <h2 className="text-3xl font-bold text-white mb-8">⚡ Praxis-Bereich</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <Card 
            key={dept.id} 
            className="glass-card p-6 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => {
              setSelectedDepartment(dept.id);
              setCurrentView('department');
            }}
          >
            <div className="text-center mb-4">
              <span className="text-4xl mb-3 block">{dept.icon}</span>
              <div className="text-gray-400 text-sm mb-2">Video-Vorschau</div>
            </div>
            <p className="text-gray-300 text-sm mb-4">{dept.description}</p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              {dept.title}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderDepartment = () => {
    const dept = departments.find(d => d.id === selectedDepartment);
    if (!dept) return null;

    return (
      <div className="space-y-8">
        <Button 
          variant="ghost" 
          className="text-white hover:text-blue-400 mb-6"
          onClick={() => setCurrentView('praxis')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zu Praxis-Bereichen
        </Button>
        
        <h2 className="text-3xl font-bold text-white mb-8">{dept.icon} {dept.title} mit KI</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="glass-card p-6">
            <div className="relative bg-black rounded-lg h-48 mb-6 flex items-center justify-center">
              <Play className="w-12 h-12 text-white" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">🛠️ Empfohlene Tools:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {dept.tools.map((tool, i) => (
                  <span key={i} className="bg-blue-600/60 text-white px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm">{dept.toolDescription}</p>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">🎯 Praxis-Aufgabe</h3>
            
            <div className="bg-gray-800/50 rounded-lg overflow-hidden">
              <div className="bg-blue-600/60 p-4 flex items-center gap-3">
                <span className="text-xl">🎯</span>
                <span className="text-white font-semibold">Praxis-Challenge</span>
              </div>
              
              <div className="p-4 space-y-4">
                <p className="text-gray-300">
                  Implementiere ein KI-Tool in deinem {dept.title}-Bereich und dokumentiere die Zeitersparnis.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="text-gray-300">Tool auswählen und einrichten</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="text-gray-300">Testlauf mit realen Daten durchführen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="text-gray-300">Ergebnisse dokumentieren und bewerten</span>
                  </div>
                </div>
                
                <div className="bg-blue-500/20 p-3 rounded border border-blue-500/30 mt-4">
                  <div className="text-blue-300 text-sm">
                    <div><strong>Geschätzte Zeit:</strong> 2 Stunden</div>
                    <div><strong>Ziel:</strong> Mindestens 30% Zeitersparnis</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
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
            
            {/* Animated Arrow */}
            <div className="flex justify-center mb-12">
              <svg 
                className="w-96 h-96 opacity-90" 
                viewBox="0 0 400 450" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <marker 
                    id="arrowhead" 
                    markerWidth="10" 
                    markerHeight="7" 
                    refX="9" 
                    refY="3.5" 
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ff0000" />
                  </marker>
                </defs>
                <path 
                  d="M 200 10 Q 250 100 300 420" 
                  stroke="#ff0000" 
                  strokeWidth="4" 
                  fill="none" 
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Browser Mockup */}
        <section className="content-section">
          <Card className="glass-card max-w-6xl mx-auto overflow-hidden">
            {/* Browser Header */}
            <div className="bg-gray-100 px-6 py-3 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-white rounded px-4 py-1 flex-1 text-gray-600 text-sm">
                🔒 ai-allstars.com/kurs-einblick
              </div>
            </div>
            
            {/* Browser Content */}
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8 min-h-[600px]">
              {currentView === 'main' && renderMainMenu()}
              {currentView === 'theorie' && renderTheorie()}
              {currentView === 'praxis' && renderPraxis()}
              {currentView === 'department' && renderDepartment()}
            </div>
          </Card>
        </section>
      </div>
    </Layout>
  );
}
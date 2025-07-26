import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gallery } from "@/components/gallery";
import { CreativeTools } from "@/components/creative-tools";
import { apiRequest } from "@/lib/queryClient";
import { getRandomFallbackPrompt } from "@/lib/prompts";
import type { Prompt } from "@shared/schema";

export default function Home() {
  const queryClient = useQueryClient();

  // Daily prompt query
  const { data: dailyPrompt, isLoading: promptLoading } = useQuery<Prompt>({
    queryKey: ["/api/prompts/random"],
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  });

  const generatePromptMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("GET", "/api/prompts/random");
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["/api/prompts/random"], data);
    },
    onError: () => {
      // Fallback to local prompt if API fails
      const fallbackPrompt = getRandomFallbackPrompt();
      queryClient.setQueryData(["/api/prompts/random"], fallbackPrompt);
    }
  });

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const displayPrompt = dailyPrompt || getRandomFallbackPrompt();

  return (
    <div className="overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-playfair font-bold gradient-bg bg-clip-text text-transparent">
              Kreativ Studio
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('#prompts')} className="text-gray-700 hover:text-primary-500 transition-colors duration-300">Tägliche Prompts</button>
              <button onClick={() => scrollToSection('#gallery')} className="text-gray-700 hover:text-primary-500 transition-colors duration-300">Galerie</button>
              <button onClick={() => scrollToSection('#tools')} className="text-gray-700 hover:text-primary-500 transition-colors duration-300">Kreativ-Tools</button>
              <button onClick={() => scrollToSection('#inspiration')} className="text-gray-700 hover:text-primary-500 transition-colors duration-300">Inspiration</button>
            </div>
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float" style={{animationDelay: "0s"}}></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-lg rotate-45 animate-float" style={{animationDelay: "2s"}}></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white rounded-full animate-float" style={{animationDelay: "4s"}}></div>
        </div>
        
        <div className="text-center text-white z-10 max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 animate-pulse-slow">
            Entdecke deine
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-300">
              Kreativität
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Entdecke, erschaffe und teile erstaunliche visuelle Erlebnisse mit unserer Sammlung kreativer Tools und Inspiration.
          </p>
          <Button
            onClick={() => scrollToSection('#prompts')}
            className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift"
          >
            Jetzt Starten
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Button>
        </div>
      </section>

      {/* Daily Creative Prompt */}
      <section id="prompts" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-playfair font-bold mb-8 text-gray-800">Täglicher Kreativ-Prompt</h2>
            <Card className="creative-card rounded-2xl p-8 mb-8">
              <div className="text-6xl mb-6">🎨</div>
              {promptLoading ? (
                <div className="animate-pulse">
                  <div className="h-6 bg-gray-200 rounded mb-4 mx-auto w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mx-auto w-full"></div>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {displayPrompt.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {displayPrompt.description}
                  </p>
                </>
              )}
            </Card>
            <Button
              onClick={() => generatePromptMutation.mutate()}
              disabled={generatePromptMutation.isPending}
              className="bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors duration-300"
            >
              {generatePromptMutation.isPending ? "Lädt..." : "Neuer Prompt"}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Photo Gallery */}
      <Gallery />

      {/* Creative Tools Section */}
      <CreativeTools />

      {/* Inspiration Section */}
      <section id="inspiration" className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center text-white mb-12">
            <h2 className="text-5xl font-playfair font-bold mb-6">Lass dich inspirieren</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Trete unserer Gemeinschaft von Kreativen bei und teile deine künstlerische Reise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-effect rounded-2xl p-8 text-white hover-lift">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-3">Tägliche Herausforderungen</h3>
              <p className="opacity-90">Nimm an täglichen kreativen Herausforderungen teil, um deine Grenzen zu erweitern</p>
            </Card>
            
            <Card className="glass-effect rounded-2xl p-8 text-white hover-lift">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Gemeinschaft</h3>
              <p className="opacity-90">Vernetze dich mit anderen Künstlern und teile deine Kreationen</p>
            </Card>
            
            <Card className="glass-effect rounded-2xl p-8 text-white hover-lift">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">Lernen & Wachsen</h3>
              <p className="opacity-90">Greife auf Tutorials und Ressourcen zu, um deine Fähigkeiten zu verbessern</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-playfair font-bold gradient-bg bg-clip-text text-transparent mb-4">
                Kreativ Studio
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Wir geben Kreativen Tools, Inspiration und Gemeinschaft. Begleite uns auf der Reise der endlosen Kreativität.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.54.099.120.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Entdecken</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('#gallery')} className="hover:text-white transition-colors duration-300">Galerie</button></li>
                <li><button onClick={() => scrollToSection('#tools')} className="hover:text-white transition-colors duration-300">Tools</button></li>
                <li><button onClick={() => scrollToSection('#inspiration')} className="hover:text-white transition-colors duration-300">Inspiration</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors duration-300">Hilfe-Center</button></li>
                <li><button className="hover:text-white transition-colors duration-300">Kontakt</button></li>
                <li><button className="hover:text-white transition-colors duration-300">Datenschutz</button></li>
                <li><button className="hover:text-white transition-colors duration-300">Nutzungsbedingungen</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kreativ Studio. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

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

  const scrollToGallery = () => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const displayPrompt = dailyPrompt || getRandomFallbackPrompt();

  return (
    <div className="overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-playfair font-bold gradient-bg bg-clip-text text-transparent">
              Creative Studio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#gallery" className="text-gray-700 hover:text-primary-500 transition-colors duration-300">Gallery</a>
              <a href="#tools" className="text-gray-700 hover:text-primary-500 transition-colors duration-300">Tools</a>
              <a href="#inspiration" className="text-gray-700 hover:text-primary-500 transition-colors duration-300">Inspiration</a>
            </div>
            <button className="md:hidden text-gray-700">
              <i className="fas fa-bars text-xl"></i>
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
            Unleash Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-300">
              Creativity
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Discover, create, and share amazing visual experiences with our collection of creative tools and inspiration.
          </p>
          <Button
            onClick={scrollToGallery}
            className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift"
          >
            Start Exploring
            <i className="fas fa-arrow-down ml-2"></i>
          </Button>
        </div>
      </section>

      {/* Daily Creative Prompt */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-playfair font-bold mb-8 text-gray-800">Today's Creative Prompt</h2>
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
              {generatePromptMutation.isPending ? "Loading..." : "Get New Prompt"}
              <i className="fas fa-refresh ml-2"></i>
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
            <h2 className="text-5xl font-playfair font-bold mb-6">Get Inspired</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Join our community of creators and share your artistic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-effect rounded-2xl p-8 text-white hover-lift">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-3">Daily Challenges</h3>
              <p className="opacity-90">Participate in daily creative challenges to push your boundaries</p>
            </Card>
            
            <Card className="glass-effect rounded-2xl p-8 text-white hover-lift">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="opacity-90">Connect with fellow artists and share your creations</p>
            </Card>
            
            <Card className="glass-effect rounded-2xl p-8 text-white hover-lift">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">Learn & Grow</h3>
              <p className="opacity-90">Access tutorials and resources to improve your skills</p>
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
                Creative Studio
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering creators with tools, inspiration, and community. Join us in the journey of endless creativity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <i className="fab fa-behance text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <i className="fab fa-dribbble text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#gallery" className="hover:text-white transition-colors duration-300">Gallery</a></li>
                <li><a href="#tools" className="hover:text-white transition-colors duration-300">Tools</a></li>
                <li><a href="#inspiration" className="hover:text-white transition-colors duration-300">Inspiration</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Creative Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DrawingCanvas } from "./drawing-canvas";
import { apiRequest } from "@/lib/queryClient";
import { getRandomFallbackQuote } from "@/lib/quotes";
import type { Quote } from "@shared/schema";

export function CreativeTools() {
  const queryClient = useQueryClient();
  const [currentPalette, setCurrentPalette] = useState([
    "#6366F1", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981"
  ]);

  // Quote query
  const { data: currentQuote, isLoading: quoteLoading } = useQuery<Quote>({
    queryKey: ["/api/quotes/random"],
    staleTime: 0,
  });

  const generateQuoteMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("GET", "/api/quotes/random");
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["/api/quotes/random"], data);
    },
    onError: () => {
      // Fallback to local quote if API fails
      const fallbackQuote = getRandomFallbackQuote();
      queryClient.setQueryData(["/api/quotes/random"], fallbackQuote);
    }
  });

  const generateColorPalette = () => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
      '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D2B4DE'
    ];
    
    const newPalette = [];
    for (let i = 0; i < 5; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      newPalette.push(randomColor);
    }
    setCurrentPalette(newPalette);
  };

  const displayQuote = currentQuote || getRandomFallbackQuote();

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-playfair font-bold mb-6 text-gray-800">Creative Tools</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interactive tools to spark your creativity and enhance your artistic journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Color Palette Generator */}
          <Card className="creative-card rounded-2xl p-8 hover-lift">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Color Palette Generator</h3>
            <p className="text-gray-600 mb-6">Generate beautiful color combinations for your next project</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex space-x-2">
                {currentPalette.map((color, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-lg transition-all duration-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="flex space-x-2 text-xs text-gray-500">
                {currentPalette.map((color, index) => (
                  <span key={index} className="transition-all duration-300">{color}</span>
                ))}
              </div>
            </div>
            
            <Button
              onClick={generateColorPalette}
              className="w-full bg-primary-500 text-white hover:bg-primary-600"
            >
              Generate New Palette
            </Button>
          </Card>

          {/* Random Quote Generator */}
          <Card className="creative-card rounded-2xl p-8 hover-lift">
            <div className="text-4xl mb-4">💭</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Creative Inspiration</h3>
            <p className="text-gray-600 mb-6">Get inspired with quotes from famous artists and creators</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              {quoteLoading ? (
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ) : (
                <>
                  <blockquote className="text-lg italic text-gray-700 mb-3">
                    "{displayQuote.text}"
                  </blockquote>
                  <cite className="text-sm text-gray-500">— {displayQuote.author}</cite>
                </>
              )}
            </div>
            
            <Button
              onClick={() => generateQuoteMutation.mutate()}
              disabled={generateQuoteMutation.isPending}
              className="w-full bg-purple-500 text-white hover:bg-purple-600"
            >
              {generateQuoteMutation.isPending ? "Loading..." : "New Quote"}
            </Button>
          </Card>

          {/* Simple Drawing Canvas */}
          <Card className="creative-card rounded-2xl p-8 hover-lift lg:col-span-2 xl:col-span-1">
            <div className="text-4xl mb-4">🖌️</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Quick Sketch</h3>
            <p className="text-gray-600 mb-6">Let your ideas flow with our simple drawing tool</p>
            
            <DrawingCanvas />
          </Card>
        </div>
      </div>
    </section>
  );
}

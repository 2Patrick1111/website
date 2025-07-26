export interface Prompt {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
}

export function getRandomFallbackPrompt(): Prompt {
  const fallbackPrompts: Prompt[] = [
    { id: 1, title: "Farben-Meditation", description: "Wähle eine Farbe und erstelle 10 Minuten lang nur mit dieser Farbe.", category: "color", difficulty: "easy" },
    { id: 2, title: "Schatten-Spiel", description: "Zeichne nur mit Schatten - keine Umrisse, nur Licht und Dunkelheit.", category: "light", difficulty: "medium" },
    { id: 3, title: "Abstrakte Emotionen", description: "Stelle eine Emotion dar, ohne erkennbare Objekte zu verwenden.", category: "abstract", difficulty: "medium" },
    { id: 4, title: "Erinnerungs-Collage", description: "Erstelle eine Collage aus deinen schönsten Kindheitserinnerungen.", category: "memory", difficulty: "easy" },
    { id: 5, title: "Zeitreise-Porträt", description: "Zeichne dich selbst in einer anderen Zeitepoche.", category: "portrait", difficulty: "hard" },
  ];

  const randomIndex = Math.floor(Math.random() * fallbackPrompts.length);
  return fallbackPrompts[randomIndex];
}
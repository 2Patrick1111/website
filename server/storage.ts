import { 
  quotes, 
  prompts, 
  galleryItems,
  type Quote, 
  type Prompt, 
  type GalleryItem,
  type InsertQuote,
  type InsertPrompt,
  type InsertGalleryItem
} from "@shared/schema";

export interface IStorage {
  // Quotes
  getRandomQuote(): Promise<Quote>;
  getAllQuotes(): Promise<Quote[]>;
  createQuote(quote: InsertQuote): Promise<Quote>;

  // Prompts
  getRandomPrompt(): Promise<Prompt>;
  getAllPrompts(): Promise<Prompt[]>;
  createPrompt(prompt: InsertPrompt): Promise<Prompt>;

  // Gallery Items
  getAllGalleryItems(): Promise<GalleryItem[]>;
  getGalleryItemsByCategory(category: string): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
}

export class MemStorage implements IStorage {
  private quotes: Map<number, Quote>;
  private prompts: Map<number, Prompt>;
  private galleryItems: Map<number, GalleryItem>;
  private currentQuoteId: number;
  private currentPromptId: number;
  private currentGalleryId: number;

  constructor() {
    this.quotes = new Map();
    this.prompts = new Map();
    this.galleryItems = new Map();
    this.currentQuoteId = 1;
    this.currentPromptId = 1;
    this.currentGalleryId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed quotes
    const sampleQuotes: InsertQuote[] = [
      { text: "Kreativität ist die Intelligenz beim Spielen.", author: "Albert Einstein", category: "creativity" },
      { text: "Jeder Künstler war zunächst ein Amateur.", author: "Ralph Waldo Emerson", category: "art" },
      { text: "Die Vorstellungskraft ist wichtiger als das Wissen.", author: "Albert Einstein", category: "imagination" },
      { text: "Kunst ist die Lüge, die uns die Wahrheit erkennen lässt.", author: "Pablo Picasso", category: "art" },
      { text: "Das Geheimnis der Kreativität liegt darin zu wissen, wie man seine Quellen verbirgt.", author: "Einstein (zugeschrieben)", category: "creativity" },
    ];

    sampleQuotes.forEach(quote => {
      const id = this.currentQuoteId++;
      this.quotes.set(id, { ...quote, id });
    });

    // Seed prompts
    const samplePrompts: InsertPrompt[] = [
      { title: "Farben-Meditation", description: "Wähle eine Farbe und erstelle 10 Minuten lang nur mit dieser Farbe.", category: "color", difficulty: "easy" },
      { title: "Schatten-Spiel", description: "Zeichne nur mit Schatten - keine Umrisse, nur Licht und Dunkelheit.", category: "light", difficulty: "medium" },
      { title: "Abstrakte Emotionen", description: "Stelle eine Emotion dar, ohne erkennbare Objekte zu verwenden.", category: "abstract", difficulty: "medium" },
      { title: "Erinnerungs-Collage", description: "Erstelle eine Collage aus deinen schönsten Kindheitserinnerungen.", category: "memory", difficulty: "easy" },
      { title: "Zeitreise-Porträt", description: "Zeichne dich selbst in einer anderen Zeitepoche.", category: "portrait", difficulty: "hard" },
    ];

    samplePrompts.forEach(prompt => {
      const id = this.currentPromptId++;
      this.prompts.set(id, { ...prompt, id });
    });

    // Seed gallery items
    const sampleGallery: InsertGalleryItem[] = [
      { title: "Sonnenuntergang am Meer", description: "Warme Farbtöne treffen auf das ruhige Wasser", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", category: "nature" },
      { title: "Kreativer Arbeitsplatz", description: "Ein inspirierender Ort für künstlerische Arbeit", imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500", category: "workspace" },
      { title: "Abstrakte Formen", description: "Spielerische Geometrie in lebendigen Farben", imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500", category: "artistic" },
      { title: "Berglandschaft", description: "Majestätische Gipfel im Morgenlicht", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", category: "nature" },
      { title: "Künstleratelier", description: "Pinsel, Farben und endlose Möglichkeiten", imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500", category: "workspace" },
      { title: "Farbexplosion", description: "Lebendige Farben in harmonischer Komposition", imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500", category: "artistic" },
    ];

    sampleGallery.forEach(item => {
      const id = this.currentGalleryId++;
      this.galleryItems.set(id, { ...item, id });
    });
  }

  // Quote methods
  async getRandomQuote(): Promise<Quote> {
    const quotesArray = Array.from(this.quotes.values());
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
  }

  async getAllQuotes(): Promise<Quote[]> {
    return Array.from(this.quotes.values());
  }

  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const id = this.currentQuoteId++;
    const quote: Quote = { ...insertQuote, id };
    this.quotes.set(id, quote);
    return quote;
  }

  // Prompt methods
  async getRandomPrompt(): Promise<Prompt> {
    const promptsArray = Array.from(this.prompts.values());
    const randomIndex = Math.floor(Math.random() * promptsArray.length);
    return promptsArray[randomIndex];
  }

  async getAllPrompts(): Promise<Prompt[]> {
    return Array.from(this.prompts.values());
  }

  async createPrompt(insertPrompt: InsertPrompt): Promise<Prompt> {
    const id = this.currentPromptId++;
    const prompt: Prompt = { ...insertPrompt, id };
    this.prompts.set(id, prompt);
    return prompt;
  }

  // Gallery methods
  async getAllGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values());
  }

  async getGalleryItemsByCategory(category: string): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values()).filter(
      item => item.category === category
    );
  }

  async createGalleryItem(insertItem: InsertGalleryItem): Promise<GalleryItem> {
    const id = this.currentGalleryId++;
    const item: GalleryItem = { ...insertItem, id };
    this.galleryItems.set(id, item);
    return item;
  }
}

export const storage = new MemStorage();

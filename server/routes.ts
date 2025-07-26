import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Random quote endpoint
  app.get("/api/quotes/random", async (req, res) => {
    try {
      const quote = await storage.getRandomQuote();
      res.json(quote);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch quote" });
    }
  });

  // All quotes endpoint
  app.get("/api/quotes", async (req, res) => {
    try {
      const quotes = await storage.getAllQuotes();
      res.json(quotes);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch quotes" });
    }
  });

  // Random prompt endpoint
  app.get("/api/prompts/random", async (req, res) => {
    try {
      const prompt = await storage.getRandomPrompt();
      res.json(prompt);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch prompt" });
    }
  });

  // All prompts endpoint
  app.get("/api/prompts", async (req, res) => {
    try {
      const prompts = await storage.getAllPrompts();
      res.json(prompts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch prompts" });
    }
  });

  // Gallery items endpoint
  app.get("/api/gallery", async (req, res) => {
    try {
      const { category } = req.query;
      let items;
      
      if (category && typeof category === 'string') {
        items = await storage.getGalleryItemsByCategory(category);
      } else {
        items = await storage.getAllGalleryItems();
      }
      
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch gallery items" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

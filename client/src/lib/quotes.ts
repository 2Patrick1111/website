export interface Quote {
  id: number;
  text: string;
  author: string;
  category: string;
}

export function getRandomFallbackQuote(): Quote {
  const fallbackQuotes: Quote[] = [
    { id: 1, text: "Kreativität ist die Intelligenz beim Spielen.", author: "Albert Einstein", category: "creativity" },
    { id: 2, text: "Jeder Künstler war zunächst ein Amateur.", author: "Ralph Waldo Emerson", category: "art" },
    { id: 3, text: "Die Vorstellungskraft ist wichtiger als das Wissen.", author: "Albert Einstein", category: "imagination" },
    { id: 4, text: "Kunst ist die Lüge, die uns die Wahrheit erkennen lässt.", author: "Pablo Picasso", category: "art" },
    { id: 5, text: "Das Geheimnis der Kreativität liegt darin zu wissen, wie man seine Quellen verbirgt.", author: "Einstein (zugeschrieben)", category: "creativity" },
  ];

  const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
  return fallbackQuotes[randomIndex];
}
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { GalleryItem } from "@shared/schema";

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const { data: galleryItems = [], isLoading } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
  });

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const filters = [
    { key: "all", label: "All" },
    { key: "nature", label: "Nature" },
    { key: "workspace", label: "Workspace" },
    { key: "artistic", label: "Artistic" }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-playfair font-bold mb-6 text-gray-800">Kreative Galerie</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecke unsere kuratierte Sammlung inspirierender Fotografie und künstlerischer Elemente
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-primary-500 to-purple-500 text-white"
                  : "border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className="rounded-2xl overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="hover-lift rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

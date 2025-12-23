import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Mobile Repairing Work",
    category: "Repairs",
  },
  {
    id: 2,
    title: "Tools & Equipment",
    category: "Equipment",
  },
  {
    id: 3,
    title: "Spare Parts Collection",
    category: "Parts",
  },
  {
    id: 4,
    title: "Customer Solutions",
    category: "Repairs",
  },
  {
    id: 5,
    title: "Accessories Display",
    category: "Accessories",
  },
  {
    id: 6,
    title: "Quality Testing",
    category: "Equipment",
  },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Work & Workspace
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at our mobile repairing work, tools, equipment, and spare parts collection.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-card"
              onClick={() => setSelectedImage(index)}
            >
              {/* Placeholder gradient background */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20"
                style={{
                  background: `linear-gradient(${135 + index * 30}deg, 
                    hsl(var(--primary) / 0.3) 0%, 
                    hsl(var(--primary) / 0.1) 50%, 
                    hsl(var(--accent) / 0.2) 100%)`
                }}
              />
              
              {/* Icon placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ZoomIn className="w-8 h-8 text-card mx-auto mb-2" />
                  <p className="text-card font-semibold">{image.title}</p>
                  <span className="text-card/70 text-sm">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-card text-foreground hover:bg-card/80 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="max-w-4xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <div 
                className="aspect-video"
                style={{
                  background: `linear-gradient(${135 + selectedImage * 30}deg, 
                    hsl(var(--primary) / 0.3) 0%, 
                    hsl(var(--primary) / 0.1) 50%, 
                    hsl(var(--accent) / 0.2) 100%)`
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl">📱</span>
                    <p className="text-foreground mt-4 font-display text-xl font-bold">
                      {galleryImages[selectedImage].title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-muted-foreground mt-1">
                  Category: {galleryImages[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

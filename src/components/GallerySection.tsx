import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Mobile Repairing Work",
    category: "Repairs",
    image: "https://res.cloudinary.com/daiev9gkn/image/upload/v1766501492/image_search_1766501381343_y2gtdo.jpg",
  },
  {
    id: 2,
    title: "Tools & Equipment",
    category: "Equipment",
    image: "https://res.cloudinary.com/daiev9gkn/image/upload/v1766501492/image_search_1766501318178_f03tha.jpg",
  },
  {
    id: 3,
    title: "Spare Parts Collection",
    category: "Parts",
    image: "https://res.cloudinary.com/daiev9gkn/image/upload/v1766501493/image_search_1766501270302_pmqhqb.png",
  },
  {
    id: 4,
    title: "Customer Solutions",
    category: "Repairs",
    image: "https://res.cloudinary.com/daiev9gkn/image/upload/v1766501493/image_search_1766501344913_j6ne1c.jpg",
  },
  {
    id: 5,
    title: "Accessories Display",
    category: "Accessories",
    image: "https://res.cloudinary.com/daiev9gkn/image/upload/v1766501494/image_search_1766501247518_al5bbe.png",
  },
  {
    id: 6,
    title: "Quality Testing",
    category: "Equipment",
    image: "https://res.cloudinary.com/daiev9gkn/image/upload/v1766501494/image_search_1766501460707_n2sfbz.jpg",
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
              {/* Gallery Image */}
              <img 
                src={image.image} 
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

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
              <div className="aspect-video">
                <img 
                  src={galleryImages[selectedImage].image} 
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-full object-cover"
                />
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

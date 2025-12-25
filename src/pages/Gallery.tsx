import { useState } from "react";
import { X, ZoomIn, Monitor, Battery, Plug, Cpu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    title: "Display Replacement",
    category: "Display Repair",
    description: "Samsung, Redmi & Vivo display replacements",
    image: "https://res.cloudinary.com/daiev9gkn/image/upload/v1766501492/image_search_1766501381343_y2gtdo.jpg",
  },
  {
    id: 2,
    title: "Battery Replacement",
    category: "Battery Work",
    description: "Original & compatible battery replacements",
    image: "https://res.cloudinary.com/daiev9gkn/image/upload/v1766501492/image_search_1766501318178_f03tha.jpg",
  },
  {
    id: 3,
    title: "Charging Port Repair",
    category: "Port Repair",
    description: "Fast & reliable charging port fixes",
    image: "https://res.cloudinary.com/daiev9gkn/image/upload/v1766501493/image_search_1766501270302_pmqhqb.png",
  },
  {
    id: 4,
    title: "IC & Motherboard Work",
    category: "IC Repair",
    description: "Advanced IC-level repairs",
    image: "https://res.cloudinary.com/daiev9gkn/image/upload/v1766501493/image_search_1766501344913_j6ne1c.jpg",
  },
  {
    id: 5,
    title: "Spare Parts Collection",
    category: "Parts",
    description: "Quality spare parts for all brands",
    image: "https://res.cloudinary.com/daiev9gkn/image/upload/v1766501494/image_search_1766501247518_al5bbe.png",
  },
  {
    id: 6,
    title: "Quality Testing",
    category: "Testing",
    description: "Thorough testing after every repair",
    image: "https://res.cloudinary.com/daiev9gkn/image/upload/v1766501494/image_search_1766501460707_n2sfbz.jpg",
  },
];

const workCategories = [
  { icon: Monitor, title: "Display Replacement", count: "500+" },
  { icon: Battery, title: "Battery Replacement", count: "300+" },
  { icon: Plug, title: "Charging Port Repair", count: "400+" },
  { icon: Cpu, title: "IC Work", count: "100+" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Repair Work
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-sm md:text-lg">
            Quality repairs done with precision and care
          </p>
        </div>
      </section>

      {/* Work Stats */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {workCategories.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-4 md:p-6 shadow-card text-center border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-accent mb-1">{item.count}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Before & After Repairs
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Take a look at our mobile repairing work
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-xl md:rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-lg transition-all"
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-3">
                    <ZoomIn className="w-6 h-6 md:w-8 md:h-8 text-card mx-auto mb-2" />
                    <p className="text-card font-semibold text-sm md:text-base">{image.title}</p>
                    <span className="text-card/80 text-xs md:text-sm">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            Want Similar Quality Repair?
          </h2>
          <p className="text-primary-foreground/80 mb-6 text-sm md:text-base max-w-lg mx-auto">
            Bring your phone to us for expert repair service
          </p>
          <a href="tel:7033067221">
            <Button variant="accent" size="lg">
              <Phone className="w-5 h-5" />
              Call Now - 7033067221
            </Button>
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-3 md:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-3 right-3 md:top-4 md:right-4 p-2 rounded-full bg-card text-foreground hover:bg-card/80 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <div className="max-w-4xl w-full bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-2xl animate-scale-in max-h-[90vh] flex flex-col">
            <div className="aspect-video flex-shrink-0">
              <img 
                src={galleryImages[selectedImage].image} 
                alt={galleryImages[selectedImage].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-accent text-sm mt-1">
                {galleryImages[selectedImage].category}
              </p>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">
                {galleryImages[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

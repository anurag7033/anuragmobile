import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rohit Kumar",
    review: "Fast service and genuine battery replacement. Very satisfied! My phone works like new again.",
    rating: 5,
  },
  {
    name: "Neha Sharma",
    review: "My phone display was fixed in just 30 minutes. Highly recommended. Great quality work!",
    rating: 5,
  },
  {
    name: "Amit Verma",
    review: "Best mobile repairing shop in the area. Honest pricing and excellent service.",
    rating: 4,
  },
  {
    name: "Priya Singh",
    review: "Got my charging port fixed quickly. No issues since then. Thank you!",
    rating: 5,
  },
  {
    name: "Suresh Patel",
    review: "Very professional service. They explained the issue clearly before fixing it.",
    rating: 5,
  },
  {
    name: "Anita Gupta",
    review: "Affordable prices and quality spare parts. Will definitely come back again.",
    rating: 4,
  },
];

export const ReviewsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-14">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold mb-3 md:mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real reviews from our satisfied customers
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/10 absolute top-4 right-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 md:w-5 md:h-5 ${
                      i < review.rating
                        ? "fill-accent text-accent"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
                "{review.review}"
              </p>

              {/* Customer Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-sm md:text-base">
                    {review.name}
                  </h4>
                  <p className="text-muted-foreground text-xs">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Phone, Mail, ArrowRight, Wrench, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/daiev9gkn/image/upload/v1766501492/image_search_1766501381343_y2gtdo.jpg")'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/85" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
              <Zap className="w-4 h-4" />
              Fast • Reliable • Affordable
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Anurag Mobile
              <span className="block text-accent mt-2">Repairing Centre</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Your trusted destination for professional mobile phone repair. 
              Quick diagnostics, genuine spare parts, and reliable solutions for all smartphone brands.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a href="tel:7033067221">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  7033067221
                </Button>
              </a>
              <a href="#services">
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                  Our Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: Shield, text: "Quality Parts" },
                { icon: Wrench, text: "Expert Technicians" },
                { icon: Zap, text: "Fast Service" },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/70">
                  <badge.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-card/95 backdrop-blur-xl rounded-3xl p-8 shadow-card animate-float">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <a
                  href="tel:7033067221"
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Primary</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      7033067221
                    </p>
                  </div>
                </a>

                <a
                  href="tel:9304490107"
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Secondary</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      9304490107
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:anurag.sharma7033@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm">
                      anurag.sharma7033@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

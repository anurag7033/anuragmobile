import { Phone, Mail, ArrowRight, Wrench, Zap, Shield, Smartphone, Battery, Cog, Headphones, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceOverview = [
  { icon: Smartphone, title: "Folder Replacement", desc: "Broken/damaged folder repair" },
  { icon: Battery, title: "Battery Replacement", desc: "Original & compatible batteries" },
  { icon: Cog, title: "Spare Parts", desc: "Quality spare parts available" },
  { icon: Headphones, title: "Accessories", desc: "Wide range of accessories" },
];

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] min-h-[100dvh] flex items-center pt-16 pb-8 md:pt-20 md:pb-0 overflow-hidden">
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
        <div className="absolute top-20 right-10 w-48 md:w-72 h-48 md:h-72 bg-accent/20 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-primary-foreground/10 rounded-full blur-3xl hidden sm:block" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 hidden sm:block">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs md:text-sm font-medium mb-4 md:mb-6 animate-fade-up">
                <Zap className="w-3 h-3 md:w-4 md:h-4" />
                Fast • Reliable • Affordable
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Professional Mobile
                <span className="block text-accent mt-1 md:mt-2">Repairing Solutions</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up px-2 sm:px-0" style={{ animationDelay: '0.2s' }}>
                Your trusted destination for professional mobile phone repair. 
                Quick diagnostics, genuine spare parts, and reliable solutions for all smartphone brands.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-fade-up px-4 sm:px-0" style={{ animationDelay: '0.3s' }}>
                <a href="tel:7033067221" className="w-full sm:w-auto">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    Call Now
                  </Button>
                </a>
                <Link to="/services" className="w-full sm:w-auto">
                  <Button variant="hero-outline" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                    Our Services
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start mt-6 md:mt-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                {[
                  { icon: Shield, text: "Quality Parts" },
                  { icon: Wrench, text: "Expert Technicians" },
                  { icon: Zap, text: "Fast Service" },
                ].map((badge, index) => (
                  <div key={index} className="flex items-center gap-1.5 md:gap-2 text-primary-foreground/70">
                    <badge.icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="animate-fade-up mt-4 lg:mt-0" style={{ animationDelay: '0.5s' }}>
              <div className="bg-card/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-card lg:animate-float">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-3 md:space-y-4">
                  <a
                    href="tel:7033067221"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm text-muted-foreground">Primary</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                        7033067221
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:9304490107"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm text-muted-foreground">Secondary</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                        9304490107
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:anurag.sharma7033@gmail.com"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground group-hover:text-accent transition-colors text-xs md:text-sm truncate">
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

      {/* Service Overview Cards */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              What We Offer
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Quick overview of our mobile repair and accessory services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {serviceOverview.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl md:rounded-2xl p-4 md:p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="default" size="lg">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-10 md:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Fast Mobile Repair?
          </h2>
          <p className="text-primary-foreground/80 mb-6 text-sm md:text-base max-w-lg mx-auto">
            Get your phone fixed quickly by our expert technicians. Quality parts, affordable prices!
          </p>
          <a href="tel:7033067221">
            <Button variant="accent" size="lg" className="text-base md:text-lg px-8">
              <Phone className="w-5 h-5" />
              Call Now - 7033067221
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { Check, Award, Clock, Heart, ThumbsUp, Users, Shield, Wrench, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Users,
    title: "Experienced Technicians",
    description: "Our skilled team has years of experience in mobile repair across all major brands.",
  },
  {
    icon: Shield,
    title: "Quality Spare Parts",
    description: "We use only genuine and high-quality compatible parts for all repairs.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most repairs completed the same day so you stay connected.",
  },
  {
    icon: ThumbsUp,
    title: "Affordable Pricing",
    description: "Quality service at reasonable prices without compromising on parts quality.",
  },
];

const stats = [
  { value: "500+", label: "Repairs Done" },
  { value: "100%", label: "Satisfaction" },
  { value: "Same Day", label: "Service" },
];

export const About = () => {
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
            About Us
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-sm md:text-lg">
            Your trusted mobile repair partner
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4">
                Anurag Mobile Repairing Centre
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Your Trusted Mobile
                <span className="text-gradient"> Repair Partner</span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                Anurag Mobile Repairing Centre is a customer-focused mobile repair shop 
                dedicated to providing honest service and dependable repairs. We understand 
                how important your mobile phone is in today's connected world.
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                With hands-on experience and technical expertise, we handle mobile issues 
                with precision and care. Our goal is simple: to restore your mobile phone 
                to perfect working condition in minimum time with maximum quality.
              </p>

              {/* What We Believe */}
              <div className="space-y-3 mb-6">
                {["Honest and transparent pricing", "Quality parts for lasting repairs", "Customer satisfaction is our priority", "Fast turnaround time"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 p-4 md:p-6 bg-gradient-hero rounded-xl md:rounded-2xl">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-primary-foreground">
                      {stat.value}
                    </div>
                    <div className="text-primary-foreground/70 text-xs md:text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src="https://res.cloudinary.com/daiev9gkn/image/upload/v1766501038/1000085881-Picsart-AiImageEnhancer.jpg_estzdn.png"
                  alt="Anurag Mobile Repairing Centre"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-gradient-accent rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg hidden sm:flex">
                <div className="text-center">
                  <Wrench className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground mx-auto mb-1" />
                  <span className="text-accent-foreground text-xs md:text-sm font-bold">Expert<br/>Repairs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Here's what makes us the preferred choice for mobile repair
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Get Your Phone Fixed?
          </h2>
          <p className="text-primary-foreground/80 mb-6 text-sm md:text-base max-w-lg mx-auto">
            Visit us or call now for expert mobile repair service
          </p>
          <a href="tel:7033067221">
            <Button variant="accent" size="lg">
              <Phone className="w-5 h-5" />
              Call Now - 7033067221
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

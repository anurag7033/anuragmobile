import { Check, Award, Clock, Heart, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: ThumbsUp,
    title: "Affordable Pricing",
    description: "Quality service at reasonable prices without compromising on parts quality.",
  },
  {
    icon: Heart,
    title: "Trusted Local Service",
    description: "Building trust with our community through honest and reliable repairs.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Most repairs completed the same day so you stay connected.",
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with quality assurance on all repairs.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-3xl hidden sm:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-3 md:mb-4">
              About Us
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Your Trusted Mobile
              <span className="text-gradient"> Repair Partner</span>
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Anurag Mobile Repairing Centre is a customer-focused mobile repair shop 
              dedicated to providing honest service and dependable repairs.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              With hands-on experience and technical expertise, we handle mobile issues 
              with precision and care. Our goal is simple: to restore your mobile phone 
              to perfect working condition in minimum time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 p-4 md:p-6 bg-gradient-hero rounded-xl md:rounded-2xl">
              {[
                { value: "100%", label: "Satisfaction" },
                { value: "Fast", label: "Service" },
                { value: "Quality", label: "Parts" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70 text-xs md:text-sm mt-0.5 md:mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Why Choose Us */}
          <div className="space-y-3 md:space-y-6 mt-6 lg:mt-0">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-8">
              Why Choose Us?
            </h3>
            
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group flex gap-3 md:gap-5 p-3 md:p-5 rounded-lg md:rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-card transition-all duration-300 md:hover:-translate-y-1"
              >
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-5 h-5 md:w-6 md:h-6 text-accent-foreground" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-base md:text-lg font-bold text-foreground mb-0.5 md:mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

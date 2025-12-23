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
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Mobile
              <span className="text-gradient"> Repair Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Anurag Mobile Repairing Centre is a customer-focused mobile repair shop 
              dedicated to providing honest service and dependable repairs.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With hands-on experience and technical expertise, we handle mobile issues 
              with precision and care. Our goal is simple: to restore your mobile phone 
              to perfect working condition in minimum time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-gradient-hero rounded-2xl">
              {[
                { value: "100%", label: "Satisfaction" },
                { value: "Fast", label: "Service" },
                { value: "Quality", label: "Parts" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Why Choose Us */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Why Choose Us?
            </h3>
            
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group flex gap-5 p-5 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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

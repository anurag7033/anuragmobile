import { Smartphone, Battery, Cog, Headphones, Check } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Folder Replacement",
    description: "Broken or damaged folder repair with smooth fitting and proper finishing. Compatible with all major mobile brands.",
    features: ["Broken/damaged folder repair", "Smooth fitting finish", "All major brands"],
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    description: "Original & high-quality compatible batteries with battery health testing for improved backup and performance.",
    features: ["Original batteries", "Health testing", "Improved performance"],
  },
  {
    icon: Cog,
    title: "Spare Parts",
    description: "Quality spare parts including display screens, charging ports, speakers, microphones, buttons, and IC-related parts.",
    features: ["Display screens", "Charging ports", "Speakers & mics"],
  },
  {
    icon: Headphones,
    title: "Accessories",
    description: "Wide range of mobile accessories including chargers, earphones, mobile covers, screen guards, and power banks.",
    features: ["Chargers & cables", "Covers & guards", "Power banks"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-12 md:py-20 lg:py-32 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 hidden sm:block">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-3 md:mb-4">
            Our Services
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Professional Mobile Solutions
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            We offer a wide range of mobile repair and accessory services with quality parts and skilled technicians.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl md:rounded-2xl p-4 md:p-6 shadow-card hover:shadow-lg transition-all duration-300 md:hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-hero flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 md:space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-foreground/80">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 md:mt-16 bg-gradient-hero rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-12 text-center">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-4 md:gap-8 lg:gap-16">
            {[
              { label: "Quality Parts", value: "✓" },
              { label: "Skilled Technicians", value: "✓" },
              { label: "Fast Service", value: "✓" },
              { label: "Affordable Prices", value: "✓" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-3xl font-bold text-accent mb-0.5 md:mb-1">{item.value}</div>
                <div className="text-primary-foreground/80 text-xs md:text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

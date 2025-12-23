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
    <section id="services" className="py-20 md:py-32 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Mobile Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of mobile repair and accessory services with quality parts and skilled technicians.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { label: "Quality Parts", value: "✓" },
              { label: "Skilled Technicians", value: "✓" },
              { label: "Fast Service", value: "✓" },
              { label: "Affordable Prices", value: "✓" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">{item.value}</div>
                <div className="text-primary-foreground/80 text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

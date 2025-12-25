import { Smartphone, Battery, Cog, Headphones, Check, Monitor, Plug, Cpu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Smartphone,
    title: "Folder Replacement",
    description: "Broken or damaged folder repair with smooth fitting and proper finishing. Compatible with all major mobile brands.",
    features: ["Broken/damaged folder repair", "Smooth fitting finish", "All major brands supported"],
    brands: "Samsung • Redmi • Vivo • Oppo • Realme"
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    description: "Original & high-quality compatible batteries with battery health testing for improved backup and performance.",
    features: ["Original & compatible batteries", "Battery health testing", "Extended backup guarantee"],
    brands: "All Brands Supported"
  },
  {
    icon: Monitor,
    title: "Display Replacement",
    description: "High-quality display screens for all smartphone models. Crystal clear visuals with touch sensitivity guaranteed.",
    features: ["Original quality displays", "Touch sensitivity tested", "Same-day replacement"],
    brands: "Samsung • Redmi • Vivo • iPhone"
  },
  {
    icon: Plug,
    title: "Charging Port Repair",
    description: "Fast and reliable charging port repairs. Fix slow charging, loose connections, and port damage issues.",
    features: ["Fast & reliable repair", "Loose connection fix", "Port damage restoration"],
    brands: "Type-C • Micro USB • Lightning"
  },
  {
    icon: Cog,
    title: "Spare Parts",
    description: "Quality spare parts including display screens, charging ports, speakers, microphones, buttons, and IC-related parts.",
    features: ["Display screens", "Speakers & microphones", "Buttons & IC parts"],
    brands: "All Parts Available"
  },
  {
    icon: Headphones,
    title: "Accessories",
    description: "Wide range of mobile accessories including chargers, earphones, mobile covers, screen guards, and power banks.",
    features: ["Chargers & cables", "Covers & screen guards", "Power banks & earphones"],
    brands: "Premium Quality Products"
  },
];

const repairProcess = [
  { step: "1", title: "Diagnosis", desc: "Free phone inspection to identify the issue" },
  { step: "2", title: "Repair", desc: "Expert technicians fix your device" },
  { step: "3", title: "Quality Check", desc: "Thorough testing before handover" },
];

export const Services = () => {
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
            Our Services
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-sm md:text-lg">
            Professional mobile repair and accessory services with quality parts and skilled technicians
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>

                {/* Brands Tag */}
                <span className="inline-block px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                  {service.brands}
                </span>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
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
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our Repair Process
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">Simple 3-step process to get your phone fixed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {repairProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            Need a Repair?
          </h2>
          <p className="text-primary-foreground/80 mb-6 text-sm md:text-base max-w-lg mx-auto">
            Contact us now for fast and reliable mobile repair service
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

export default Services;

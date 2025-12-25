import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Primary Phone",
    value: "7033067221",
    href: "tel:7033067221",
    description: "Main contact number",
  },
  {
    icon: Phone,
    title: "Secondary Phone",
    value: "9304490107",
    href: "tel:9304490107",
    description: "Alternative number",
  },
  {
    icon: Mail,
    title: "Email",
    value: "anurag.sharma7033@gmail.com",
    href: "mailto:anurag.sharma7033@gmail.com",
    description: "Send us an email",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "9 AM - 9 PM",
    href: null,
    description: "Open all days",
  },
];

export const Contact = () => {
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
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-sm md:text-lg">
            Get in touch with us for fast and reliable mobile repair service
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-card hover:shadow-lg transition-all hover:-translate-y-1 border border-border/50"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs mb-2">{item.description}</p>
                {item.href ? (
                  <a 
                    href={item.href}
                    className="text-primary hover:text-accent transition-colors font-semibold text-sm md:text-base break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-foreground font-semibold text-sm md:text-base">{item.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Quick Contact Section */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
            {/* Call Now Card */}
            <div className="bg-gradient-hero rounded-2xl p-6 md:p-10 text-center">
              <Phone className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Call Us Now
              </h2>
              <p className="text-primary-foreground/80 mb-6 text-sm md:text-base">
                Speak directly with our technicians for quick assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:7033067221">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    7033067221
                  </Button>
                </a>
                <a href="tel:9304490107">
                  <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    9304490107
                  </Button>
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-card rounded-2xl p-6 md:p-10 text-center border border-border/50 shadow-card">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                WhatsApp Us
              </h2>
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                Send photos of your phone issue for quick diagnosis
              </p>
              <a 
                href="https://wa.me/918189067221?text=Hi%2C%20I%20need%20mobile%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Email Section */}
          <div className="mt-6 md:mt-10 bg-card rounded-2xl p-6 md:p-10 text-center border border-border/50 shadow-card">
            <Mail className="w-12 h-12 md:w-16 md:h-16 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Email Us
            </h2>
            <p className="text-muted-foreground mb-4 text-sm md:text-base max-w-lg mx-auto">
              Send us your queries via email and we'll get back to you
            </p>
            <a 
              href="mailto:anurag.sharma7033@gmail.com"
              className="text-primary hover:text-accent transition-colors font-bold text-lg md:text-xl break-all"
            >
              anurag.sharma7033@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-10 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Visit Our Shop
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Anurag Mobile Repairing Centre - Your Local Mobile Repair Expert
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-primary-foreground/80 mb-6 text-sm md:text-base">
            Our team is ready to help you with any mobile repair needs
          </p>
          <a href="tel:7033067221">
            <Button variant="accent" size="lg">
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

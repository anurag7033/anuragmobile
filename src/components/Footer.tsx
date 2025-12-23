import { Phone, Mail, Smartphone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-background">
                  Anurag Mobile
                </h3>
                <p className="text-background/60 text-sm">Repairing Centre</p>
              </div>
            </div>
            <p className="text-background/70 max-w-md leading-relaxed mb-6">
              Your trusted destination for professional mobile phone repair and accessories. 
              Quick diagnostics, genuine spare parts, and reliable repair solutions for all major smartphone brands.
            </p>
            <p className="text-background/50 text-sm">
              Fast • Reliable • Affordable Mobile Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-background mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "Gallery", "About"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-background/70 hover:text-accent transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold text-background mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9304490107"
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors group"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span>9304490107</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:7033067221"
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors group"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span>7033067221</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:anurag.sharma7033@gmail.com"
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors group"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="break-all text-sm">anurag.sharma7033@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Anurag Mobile Repairing Centre. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-background/50 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Your Local Mobile Repair Expert</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

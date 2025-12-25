import { Phone, Mail, Smartphone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent" />
      <div className="absolute top-20 right-10 w-48 md:w-64 h-48 md:h-64 bg-primary/10 rounded-full blur-3xl hidden sm:block" />

      <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-hero flex items-center justify-center">
                <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-bold text-background">
                  Anurag Mobile
                </h3>
                <p className="text-background/60 text-xs md:text-sm">Repairing Centre</p>
              </div>
            </div>
            <p className="text-background/70 max-w-md leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Your trusted destination for professional mobile phone repair and accessories. 
              Quick diagnostics, genuine spare parts, and reliable repair solutions for all major smartphone brands.
            </p>
            <p className="text-background/50 text-xs md:text-sm">
              Fast • Reliable • Affordable Mobile Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base md:text-lg font-bold text-background mb-4 md:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-accent transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-base md:text-lg font-bold text-background mb-4 md:mb-6">
              Contact Us
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a
                  href="tel:7033067221"
                  className="flex items-center gap-2 md:gap-3 text-background/70 hover:text-accent transition-colors group text-sm md:text-base"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  <span>7033067221 (Primary)</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:9304490107"
                  className="flex items-center gap-2 md:gap-3 text-background/70 hover:text-accent transition-colors group text-sm md:text-base"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  <span>9304490107</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:anurag.sharma7033@gmail.com"
                  className="flex items-center gap-2 md:gap-3 text-background/70 hover:text-accent transition-colors group"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  <span className="break-all text-xs md:text-sm">anurag.sharma7033@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-background/50 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Anurag Mobile Repairing Centre. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-background/50 text-xs md:text-sm">
              <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>Your Local Mobile Repair Expert</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

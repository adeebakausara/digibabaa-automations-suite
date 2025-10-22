import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="mb-4">
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                DigiBabaa
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses with cutting-edge AI automation solutions. 
              Transform your operations with intelligent chatbots, voice agents, 
              and custom automation workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/akbar-fitness-marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/dgbabaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/digbabaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Services", path: "/services" },
                { name: "How It Works", path: "/how-it-works" },
                { name: "Pricing", path: "/pricing" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "About Us", path: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5" />
                <div>
                  <span className="block">akbar@digibabaa.com</span>
                  <span className="block">akbar@digibabaa.co</span>
                </div>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a 
                  href="https://wa.link/6u8z8o" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: +971 50 167 0273
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a 
                  href="tel:+971562578722"
                  className="hover:text-primary transition-colors"
                >
                  Phone: +971 56 257 8722
                </a>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1" />
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-sm">Dubai Office</p>
                    <a 
                      href="https://www.google.com/maps/place/Splendor+Home+Technical+Services+LLC/@25.277637,55.3084101,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f42d8aee6ddc7:0x52cfd4e898b9cf9f!8m2!3d25.277637!4d55.3084101!16s%2Fg%2F11gh2tx2qh?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors text-sm block"
                    >
                      401, Building 44, Al Murar – Deira, Dubai, UAE
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Lahore Office</p>
                    <a 
                      href="https://www.google.com/maps/place/31%C2%B027'34.6%22N+74%C2%B017'15.9%22E/@31.459614,74.2851751,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.459614!4d74.28775?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors text-sm block"
                    >
                      Johar Town, Lahore, Pakistan
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 DigiBabaa. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
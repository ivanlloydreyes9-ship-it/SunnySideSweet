import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl mb-4 text-foreground font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              Sunny Side Sweet
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Bringing sunshine to your day with delicious pastries and sweet treats,
              baked fresh daily with love and care.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-foreground/70 hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-foreground/70 hover:text-foreground transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/cart" className="text-foreground/70 hover:text-foreground transition-colors">
                  Shopping Cart
                </a>
              </li>
              <li>
                <a href="/login" className="text-foreground/70 hover:text-foreground transition-colors">
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect With Us</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Phone className="w-4 h-4 text-foreground" />
                <span>(555) 789-0123</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Mail className="w-4 h-4 text-foreground" />
                <span>hello@sunnysidesweet.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 text-foreground" />
                <span>456 Sunshine Ave, Sweet Town</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-foreground hover:bg-primary/80 transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-foreground hover:bg-primary/80 transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-foreground hover:bg-primary/80 transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-8 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} Sunny Side Sweet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

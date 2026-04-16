import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu as MenuIcon, X, ShoppingCart, User, Sun } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-md">
              <Sun className="w-7 h-7 text-foreground" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Sunny Side Sweet
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-base font-medium transition-colors hover:text-foreground group ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.path ? "w-full" : ""
                  }`}
                />
              </Link>
            ))}

            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="font-medium">Login</span>
            </Link>

            <Link
              to="/cart"
              className="relative flex items-center gap-2 px-5 py-2 bg-primary text-foreground rounded-full font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-in slide-in-from-top-5 duration-300">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-lg font-medium transition-colors hover:text-foreground ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="flex items-center gap-2 text-lg font-medium text-foreground/60 hover:text-foreground"
            >
              <User className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2 text-lg font-medium text-foreground/60 hover:text-foreground"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart ({cartCount})</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore } from "../store/useCartStore";
import { cn } from "../utils/cn";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Belanja", path: "/shop" },
    { name: "Kontak", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent ? "bg-transparent py-6" : "bg-primary shadow-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className={cn("md:hidden p-2 -ml-2", isTransparent ? "text-white" : "text-dark")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className={cn(
            "font-serif text-2xl font-bold tracking-wider absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0",
            isTransparent ? "text-white" : "text-dark"
          )}
        >
          AYANA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors",
                isTransparent ? "text-white/80 hover:text-white" : "text-dark/80 hover:text-dark"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center">
          <Link 
            to="/cart" 
            className={cn(
              "relative p-2 -mr-2 transition-colors",
              isTransparent ? "text-white hover:text-white/80" : "text-dark hover:text-dark/70"
            )}
          >
            <ShoppingBag size={24} strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-secondary/30 shadow-lg">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-serif text-dark"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

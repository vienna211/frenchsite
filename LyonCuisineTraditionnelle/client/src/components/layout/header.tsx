import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { NAV_LINKS, RESTAURANT_INFO } from "@/lib/constants";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full bg-white ${isScrolled ? 'bg-opacity-95 shadow-md' : 'bg-opacity-90'} z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-burgundy cursor-pointer">
              {RESTAURANT_INFO.name}
            </h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link, index) => (
            <Link key={index} href={link.href}>
              <a className={`font-serif text-lg hover:text-burgundy transition-colors relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-gold after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full ${location === link.href ? 'text-burgundy after:w-full' : 'text-charcoal'}`}>
                {link.name}
              </a>
            </Link>
          ))}
        </nav>
        
        <button 
          className="md:hidden text-burgundy focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu}
        links={NAV_LINKS}
        currentPath={location}
      />
    </header>
  );
}

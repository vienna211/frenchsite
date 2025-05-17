import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { RESTAURANT_INFO } from "@/lib/constants";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
  const handleScrollDown = () => {
    scrollToElement('introduction');
  };
  
  return (
    <section 
      id="accueil" 
      className="hero-image relative flex items-center justify-center" 
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&h=1200')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh"
      }}
    >
      <div className="text-center px-4 animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
          {RESTAURANT_INFO.name}
        </h2>
        <p className="text-xl md:text-2xl font-serif italic text-white mb-8">
          "{RESTAURANT_INFO.tagline}"
        </p>
        <p className="text-lg text-white mb-12 max-w-2xl mx-auto">
          {RESTAURANT_INFO.description}
        </p>
        <Link href="/contact#reservation-form">
          <Button className="bg-burgundy text-white px-8 py-3 rounded-sm hover:bg-opacity-90 transition-colors">
            Réserver une table
          </Button>
        </Link>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <button 
          onClick={handleScrollDown}
          className="text-white animate-bounce inline-block"
          aria-label="Scroll down"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  );
}

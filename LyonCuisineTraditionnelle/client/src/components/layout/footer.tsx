import { Link } from "wouter";
import { RESTAURANT_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { getCurrentYear } from "@/lib/utils";

export default function Footer() {
  const currentYear = getCurrentYear();
  
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-serif text-xl mb-4">{RESTAURANT_INFO.name}</h5>
            <p className="mb-4 opacity-80">Restaurant de cuisine française traditionnelle au cœur de Lyon.</p>
            <p className="italic font-serif">"{RESTAURANT_INFO.tagline}"</p>
          </div>
          
          <div>
            <h5 className="font-serif text-xl mb-4">Contact</h5>
            <p className="mb-2">
              <i className="fas fa-phone mr-2"></i> {RESTAURANT_INFO.phone}
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope mr-2"></i> {RESTAURANT_INFO.email}
            </p>
            <p>
              <i className="fas fa-map-marker-alt mr-2"></i> {RESTAURANT_INFO.address}
            </p>
          </div>
          
          <div>
            <h5 className="font-serif text-xl mb-4">Horaires</h5>
            <p className="mb-1">Déjeuner</p>
            <p className="mb-3 opacity-80">{RESTAURANT_INFO.hours.lunch.days}: {RESTAURANT_INFO.hours.lunch.hours}</p>
            <p className="mb-1">Dîner</p>
            <p className="opacity-80">{RESTAURANT_INFO.hours.dinner.days}: {RESTAURANT_INFO.hours.dinner.hours}</p>
          </div>
          
          <div>
            <h5 className="font-serif text-xl mb-4">Suivez-nous</h5>
            <div className="flex space-x-4 mb-6">
              {SOCIAL_LINKS.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="text-white hover:text-gold transition-colors"
                  aria-label={social.name}
                >
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
            <Link href="/contact#reservation-form">
              <a className="bg-burgundy text-white px-4 py-2 rounded-sm hover:bg-opacity-90 transition-colors inline-block">
                Réserver
              </a>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-70 mb-4 md:mb-0">
            &copy; {currentYear} {RESTAURANT_INFO.name}. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Mentions Légales</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Politique de Confidentialité</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Plan du Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

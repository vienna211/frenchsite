import { Helmet } from 'react-helmet';
import Hero from '@/components/home/hero';
import Introduction from '@/components/home/introduction';
import ChefSection from '@/components/home/chef-section';
import Testimonials from '@/components/home/testimonials';
import { RESTAURANT_INFO } from '@/lib/constants';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { GALLERY_IMAGES } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>La Petite Pastèque - Restaurant Français Traditionnel à Lyon</title>
        <meta name="description" content="Découvrez La Petite Pastèque, restaurant de cuisine française traditionnelle à Lyon. Menus dégustation régionaux, plats faits maison et desserts artisanaux." />
        <meta property="og:title" content="La Petite Pastèque - Restaurant Français Traditionnel" />
        <meta property="og:description" content="Restaurant de cuisine française traditionnelle au cœur de Lyon. Menus dégustation régionaux, plats faits maison et desserts artisanaux." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lapetitepasteque.fr" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" />
      </Helmet>

      <Hero />
      <Introduction />

      {/* About Section */}
      <section id="a-propos" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Intérieur du restaurant La Petite Pastèque" 
                className="rounded-sm shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="font-serif text-3xl text-burgundy mb-6 relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-0">
                Notre Histoire
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Fondée en 2005 par le chef Marcel Dupont, La Petite Pastèque est née d'une passion pour la cuisine française traditionnelle et d'un désir de créer un espace où les convives peuvent redécouvrir l'essence de notre patrimoine culinaire.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Situé dans un bâtiment historique au cœur du Vieux Lyon, notre restaurant allie l'atmosphère chaleureuse des bistrots traditionnels avec une touche d'élégance contemporaine, créant un cadre parfait pour savourer une cuisine authentique.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="font-serif text-burgundy text-xl mb-2">15+</p>
                  <p className="text-charcoal">Années d'excellence</p>
                </div>
                <div>
                  <p className="font-serif text-burgundy text-xl mb-2">100%</p>
                  <p className="text-charcoal">Ingrédients locaux</p>
                </div>
                <div>
                  <p className="font-serif text-burgundy text-xl mb-2">3</p>
                  <p className="text-charcoal">Chefs renommés</p>
                </div>
                <div>
                  <p className="font-serif text-burgundy text-xl mb-2">1000+</p>
                  <p className="text-charcoal">Clients satisfaits</p>
                </div>
              </div>
              <Link href="/menu">
                <Button variant="outline" className="border-2 border-burgundy text-burgundy bg-cream hover:bg-burgundy hover:text-white transition-colors">
                  Découvrir notre menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ChefSection />

      {/* Menu Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-3xl md:text-4xl text-burgundy mb-2">Notre Menu</h3>
          <p className="font-serif text-xl italic text-gold mb-12">Des saveurs authentiques qui racontent notre terroir</p>
          
          <div className="max-w-5xl mx-auto mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cream p-6 rounded-sm shadow-md transition-all duration-300 text-left hover:translate-y-[-5px] hover:shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-serif text-xl text-burgundy">Tartare de Saumon</h4>
                  <p className="font-serif text-burgundy">18€</p>
                </div>
                <p className="text-charcoal mb-4">Saumon frais, avocat, échalotes, aneth, huile d'olive citronnée</p>
                <div className="flex items-center text-gold">
                  <i className="fa-solid fa-leaf mr-2"></i>
                  <span className="text-sm">Option sans gluten disponible</span>
                </div>
              </div>
              
              <div className="bg-cream p-6 rounded-sm shadow-md transition-all duration-300 text-left hover:translate-y-[-5px] hover:shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-serif text-xl text-burgundy">Filet de Bœuf Rossini</h4>
                  <p className="font-serif text-burgundy">34€</p>
                </div>
                <p className="text-charcoal mb-4">Filet de bœuf, escalope de foie gras poêlée, sauce au truffe, pommes Anna</p>
                <div className="flex items-center text-gold">
                  <i className="fa-solid fa-star mr-2"></i>
                  <span className="text-sm">Spécialité du chef</span>
                </div>
              </div>
            </div>
          </div>
          
          <Link href="/menu">
            <Button className="bg-burgundy text-white hover:bg-opacity-90">
              Voir le menu complet
            </Button>
          </Link>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="galerie" className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">Nos Créations</h3>
          <p className="font-serif text-xl italic text-gold mb-12">L'art culinaire français dans votre assiette</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {GALLERY_IMAGES.slice(0, 3).map((image, index) => (
              <img 
                key={index}
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover rounded-sm shadow-lg hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
          
          <Link href="/gallery">
            <Button className="bg-gold text-white hover:bg-opacity-90">
              Voir toutes les photos
            </Button>
          </Link>
        </div>
      </section>

      <Testimonials />

      {/* Reservation Section */}
      <section id="reservation" className="py-16 md:py-24 bg-burgundy text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-3xl mb-6 relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-auto">Réservez Votre Table</h3>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Pour garantir la meilleure expérience possible, nous vous recommandons de réserver votre table à l'avance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 border border-gold/30 rounded-sm">
              <i className="fa-solid fa-clock text-gold text-3xl mb-4"></i>
              <h4 className="font-serif text-xl mb-4">Nos Horaires</h4>
              <p className="font-medium mb-1">Déjeuner</p>
              <p className="mb-3">{RESTAURANT_INFO.hours.lunch.days}<br />{RESTAURANT_INFO.hours.lunch.hours}</p>
              <p className="font-medium mb-1">Dîner</p>
              <p>{RESTAURANT_INFO.hours.dinner.days}<br />{RESTAURANT_INFO.hours.dinner.hours}</p>
            </div>
            
            <div className="p-6 border border-gold/30 rounded-sm">
              <i className="fa-solid fa-phone text-gold text-3xl mb-4"></i>
              <h4 className="font-serif text-xl mb-4">Par Téléphone</h4>
              <p className="mb-4">Appelez-nous directement pour réserver votre table</p>
              <p className="text-xl font-medium">{RESTAURANT_INFO.phone}</p>
            </div>
            
            <div className="p-6 border border-gold/30 rounded-sm">
              <i className="fa-solid fa-calendar-alt text-gold text-3xl mb-4"></i>
              <h4 className="font-serif text-xl mb-4">En Ligne</h4>
              <p className="mb-4">Réservez rapidement en quelques clics</p>
              <Link href="/contact#reservation-form">
                <Button className="bg-gold text-white hover:bg-opacity-90">
                  Réserver maintenant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

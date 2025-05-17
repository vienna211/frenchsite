import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ABOUT_STATS, RESTAURANT_INFO } from '@/lib/constants';

export default function About() {
  return (
    <>
      <Helmet>
        <title>À Propos - La Petite Pastèque | Restaurant Français à Lyon</title>
        <meta name="description" content="Découvrez l'histoire de La Petite Pastèque, restaurant de cuisine française traditionnelle à Lyon. Notre chef, notre philosophie et notre passion pour la gastronomie française." />
        <meta property="og:title" content="À Propos - La Petite Pastèque" />
        <meta property="og:description" content="Découvrez l'histoire de La Petite Pastèque, restaurant de cuisine française traditionnelle à Lyon." />
        <meta property="og:url" content="https://lapetitepasteque.fr/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" 
        style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&h=1200')"}}>
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">À Propos</h1>
          <p className="text-xl md:text-2xl font-serif italic text-white mb-8">{RESTAURANT_INFO.tagline}</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
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
              <h2 className="font-serif text-3xl text-burgundy mb-6 relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-0">
                Notre Histoire
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Fondée en 2005 par le chef Marcel Dupont, La Petite Pastèque est née d'une passion pour la cuisine française traditionnelle et d'un désir de créer un espace où les convives peuvent redécouvrir l'essence de notre patrimoine culinaire.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Situé dans un bâtiment historique au cœur du Vieux Lyon, notre restaurant allie l'atmosphère chaleureuse des bistrots traditionnels avec une touche d'élégance contemporaine, créant un cadre parfait pour savourer une cuisine authentique.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Au fil des années, La Petite Pastèque s'est forgée une réputation d'excellence culinaire et de service attentionné. Notre équipe partage la vision du Chef Dupont : offrir une expérience gastronomique mémorable qui célèbre le riche héritage culinaire français tout en y apportant une sensibilité contemporaine.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index}>
                    <p className="font-serif text-burgundy text-xl mb-2">{stat.value}</p>
                    <p className="text-charcoal">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Chef */}
      <section className="py-16 md:py-24 bg-burgundy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 order-2 md:order-1">
              <h2 className="font-serif text-3xl mb-6 relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-0">
                Notre Chef
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Le Chef Marcel Dupont combine sa formation classique acquise dans les plus grandes maisons françaises avec une sensibilité contemporaine qui lui permet de réinterpréter subtilement les classiques de notre gastronomie.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Après avoir travaillé dans plusieurs restaurants étoilés en France et à l'étranger, Marcel est revenu à Lyon, sa ville natale, pour ouvrir La Petite Pastèque et partager sa vision de la cuisine française.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                "Ma philosophie est simple : respecter le produit, maîtriser les techniques traditionnelles, et ajouter une touche de créativité qui surprend sans dénaturer l'essence du plat."
              </p>
              <p className="italic font-serif text-xl">— Chef Marcel Dupont</p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Chef Marcel Dupont en cuisine" 
                className="rounded-sm shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-burgundy mb-6 relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-auto">
              Notre Philosophie
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              À La Petite Pastèque, nous croyons que la cuisine est bien plus qu'une simple nécessité — c'est un art, une tradition et une célébration de notre patrimoine culturel.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-sm shadow-md">
                <i className="fa-solid fa-leaf text-gold text-3xl mb-4"></i>
                <h3 className="font-serif text-xl text-burgundy mb-3">Des Produits Locaux</h3>
                <p>Nous nous engageons à sélectionner des ingrédients de qualité supérieure, locaux et de saison, pour garantir fraîcheur et authenticité à chaque plat.</p>
              </div>
              <div className="bg-white p-6 rounded-sm shadow-md">
                <i className="fa-solid fa-utensils text-gold text-3xl mb-4"></i>
                <h3 className="font-serif text-xl text-burgundy mb-3">Techniques Traditionnelles</h3>
                <p>Nous respectons les méthodes de préparation traditionnelles françaises tout en apportant une touche de modernité qui enrichit l'expérience culinaire.</p>
              </div>
              <div className="bg-white p-6 rounded-sm shadow-md">
                <i className="fa-solid fa-heart text-gold text-3xl mb-4"></i>
                <h3 className="font-serif text-xl text-burgundy mb-3">Passion et Dévouement</h3>
                <p>Chaque plat qui sort de notre cuisine témoigne de notre passion pour la gastronomie et de notre dévouement à offrir une expérience mémorable.</p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link href="/menu">
                <Button className="bg-burgundy text-white hover:bg-opacity-90 mx-2">
                  Découvrir notre menu
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-burgundy text-burgundy bg-cream hover:bg-burgundy hover:text-white mx-2 mt-4 md:mt-0">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-burgundy mb-6 text-center relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-auto">
            Notre Équipe
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-12">
            Notre équipe passionnée travaille ensemble pour vous offrir une expérience gastronomique inoubliable. Du chef aux serveurs, chacun apporte son expertise et son dévouement pour faire de votre visite un moment d'exception.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&crop=faces&facepad=3" 
                  alt="Chef Marcel Dupont" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-burgundy mb-1">Marcel Dupont</h3>
              <p className="text-gold italic mb-3">Chef Fondateur</p>
              <p>Maître des saveurs traditionnelles françaises avec plus de 20 ans d'expérience dans des restaurants étoilés.</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&crop=faces&facepad=3" 
                  alt="Sophie Moreau" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-burgundy mb-1">Sophie Moreau</h3>
              <p className="text-gold italic mb-3">Chef Pâtissière</p>
              <p>Créatrice des desserts qui ravissent nos clients, Sophie apporte finesse et créativité à notre carte des desserts.</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&crop=faces&facepad=3" 
                  alt="Antoine Laurent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-burgundy mb-1">Antoine Laurent</h3>
              <p className="text-gold italic mb-3">Sommelier</p>
              <p>Expert en vins français et internationaux, Antoine crée des accords parfaits entre nos plats et notre sélection de vins.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '@/lib/constants';
import MenuTabs from '@/components/menu/menu-tabs';
import MenuCard from '@/components/menu/menu-card';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Menu() {
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0].id);

  return (
    <>
      <Helmet>
        <title>Menu - La Petite Pastèque | Restaurant Français à Lyon</title>
        <meta name="description" content="Découvrez notre menu de cuisine française traditionnelle. Entrées, plats, desserts et menus dégustation préparés avec des produits frais et locaux." />
        <meta property="og:title" content="Menu - La Petite Pastèque" />
        <meta property="og:description" content="Découvrez notre menu de cuisine française traditionnelle. Entrées, plats, desserts et menus dégustation préparés avec des produits frais et locaux." />
        <meta property="og:url" content="https://lapetitepasteque.fr/menu" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" 
        style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&h=1200')"}}>
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Notre Menu</h1>
          <p className="text-xl md:text-2xl font-serif italic text-white mb-8">Des saveurs authentiques qui racontent notre terroir</p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-6 relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-auto">
            Notre Carte
          </h2>
          <p className="text-lg max-w-4xl mx-auto mb-12">
            Notre menu évolue au fil des saisons pour vous offrir les meilleurs produits à leur apogée. Tous nos plats sont préparés sur place à partir d'ingrédients frais sélectionnés avec soin auprès de producteurs locaux.
          </p>
          
          {/* Menu Navigation */}
          <MenuTabs 
            categories={MENU_CATEGORIES} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />
          
          {/* Menu Content */}
          <div className="mt-12">
            {activeTab === 'entrees' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {MENU_ITEMS.entrees.map((item, index) => (
                  <MenuCard key={index} item={item} />
                ))}
              </div>
            )}
            
            {activeTab === 'plats' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {MENU_ITEMS.plats.map((item, index) => (
                  <MenuCard key={index} item={item} />
                ))}
              </div>
            )}
            
            {activeTab === 'desserts' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {MENU_ITEMS.desserts.map((item, index) => (
                  <MenuCard key={index} item={item} />
                ))}
              </div>
            )}
            
            {activeTab === 'degustation' && (
              <div className="max-w-4xl mx-auto">
                {MENU_ITEMS.degustation.map((menu, index) => (
                  <Card key={index} className={`p-8 rounded-sm shadow-lg mb-8 ${index === 0 ? 'bg-burgundy text-white' : 'bg-cream'}`}>
                    <h3 className={`font-serif text-2xl mb-4 ${index === 0 ? 'text-white' : 'text-burgundy'}`}>{menu.name}</h3>
                    <p className={`italic font-serif text-lg mb-6 ${index === 0 ? 'text-white' : 'text-gold'}`}>{menu.description}</p>
                    <ul className="space-y-4 text-left mb-6">
                      {menu.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex">
                          <span className={`mr-3 ${index === 0 ? 'text-gold' : 'text-burgundy'}`}>•</span>
                          <div>
                            <p className="font-medium">{item}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className={`flex justify-between items-center pt-4 border-t ${index === 0 ? 'border-gold' : 'border-burgundy'}`}>
                      <div>
                        <p className="font-medium">{menu.price} par personne</p>
                        <p className="text-sm">{menu.supplement}</p>
                      </div>
                      <Link href="/contact#reservation-form">
                        <Button className={index === 0 ? 'bg-gold text-white hover:bg-opacity-90' : 'bg-burgundy text-white hover:bg-opacity-90'}>
                          Réserver
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Chef's Recommendation */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <img 
                src="https://img.cuisineaz.com/660x495/2015/10/13/i8598-tournedos-rossini.webp" 
                alt="Plat recommandé par le Chef" 
                className="rounded-sm shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="font-serif text-3xl text-burgundy mb-6 relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-0">
                Recommandation du Chef
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                "Cette saison, je vous recommande particulièrement notre Filet de Bœuf Rossini, un classique de la cuisine française que nous préparons avec le plus grand soin. La combinaison du filet tendre et du foie gras poêlé, accompagnée de notre sauce aux truffes, crée une harmonie de saveurs incomparable."
              </p>
              <p className="italic font-serif text-xl mb-8">— Chef Marcel Dupont</p>
              <Link href="/contact#reservation-form">
                <Button className="bg-burgundy text-white hover:bg-opacity-90">
                  Réserver une table
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Food Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-3xl text-burgundy mb-6 relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-auto">
            Notre Philosophie Culinaire
          </h3>
          <p className="text-lg max-w-4xl mx-auto mb-12">
            À La Petite Pastèque, nous croyons que la grande cuisine commence par de grands ingrédients. C'est pourquoi nous travaillons étroitement avec des producteurs locaux pour vous offrir des plats qui célèbrent le meilleur de chaque saison.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-cream p-6 rounded-sm shadow-md">
              <i className="fa-solid fa-seedling text-gold text-3xl mb-4"></i>
              <h4 className="font-serif text-xl text-burgundy mb-3">Ingrédients Locaux</h4>
              <p>Nous sélectionnons des produits frais auprès d'agriculteurs et d'artisans de la région lyonnaise.</p>
            </div>
            <div className="bg-cream p-6 rounded-sm shadow-md">
              <i className="fa-solid fa-utensils text-gold text-3xl mb-4"></i>
              <h4 className="font-serif text-xl text-burgundy mb-3">Fait Maison</h4>
              <p>Tous nos plats sont préparés sur place, des sauces aux desserts, pour garantir authenticité et qualité.</p>
            </div>
            <div className="bg-cream p-6 rounded-sm shadow-md">
              <i className="fa-solid fa-calendar-alt text-gold text-3xl mb-4"></i>
              <h4 className="font-serif text-xl text-burgundy mb-3">Menu Saisonnier</h4>
              <p>Notre carte évolue régulièrement pour refléter les meilleures saveurs de chaque saison.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Call-to-Action */}
      <section className="py-16 md:py-24 bg-burgundy text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="font-serif text-3xl mb-6">Prêt à Vivre l'Expérience La Petite Pastèque?</h3>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Réservez votre table dès maintenant et venez découvrir notre cuisine française traditionnelle dans un cadre élégant et chaleureux.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href={`tel:${RESTAURANT_INFO.phone}`} className="inline-flex items-center justify-center bg-gold text-white px-8 py-3 rounded-sm hover:bg-opacity-90 transition-colors">
              <i className="fa-solid fa-phone mr-2"></i> {RESTAURANT_INFO.phone}
            </a>
            <Link href="/contact#reservation-form">
              <Button className="bg-white text-burgundy hover:bg-opacity-90">
                Réserver en ligne
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

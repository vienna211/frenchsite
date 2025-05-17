import { Helmet } from 'react-helmet';
import { RESTAURANT_INFO } from '@/lib/constants';
import ContactForm from '@/components/contact/contact-form';
import ReservationForm from '@/components/contact/reservation-form';
import LocationInfo from '@/components/contact/location-info';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - La Petite Pastèque | Restaurant Français à Lyon</title>
        <meta name="description" content="Contactez La Petite Pastèque ou réservez une table. Restaurant de cuisine française traditionnelle situé au cœur de Lyon. Téléphone: +33 4 72 00 00 00" />
        <meta property="og:title" content="Contact - La Petite Pastèque" />
        <meta property="og:description" content="Contactez La Petite Pastèque ou réservez une table. Restaurant de cuisine française traditionnelle situé au cœur de Lyon." />
        <meta property="og:url" content="https://lapetitepasteque.fr/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" 
        style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&h=1200')"}}>
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Contact</h1>
          <p className="text-xl md:text-2xl font-serif italic text-white mb-8">Nous sommes à votre écoute</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-serif text-3xl text-burgundy mb-6 relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-auto">
              Contactez-Nous
            </h2>
            <p className="text-lg mb-12">
              Pour toute question, commentaire ou pour réserver une table, n'hésitez pas à nous contacter. Notre équipe sera ravie de vous répondre dans les plus brefs délais.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-cream rounded-sm shadow-md">
                <i className="fa-solid fa-phone text-gold text-3xl mb-4"></i>
                <h3 className="font-serif text-xl text-burgundy mb-3">Téléphone</h3>
                <p className="mb-2">{RESTAURANT_INFO.phone}</p>
                <p className="text-sm text-gray-600">
                  Du Mardi au Dimanche<br />
                  10h00 - 22h30
                </p>
              </div>
              
              <div className="p-6 border border-cream rounded-sm shadow-md">
                <i className="fa-solid fa-envelope text-gold text-3xl mb-4"></i>
                <h3 className="font-serif text-xl text-burgundy mb-3">Email</h3>
                <p className="mb-2">{RESTAURANT_INFO.email}</p>
                <p className="text-sm text-gray-600">
                  Nous vous répondrons<br />
                  dans les 24 heures
                </p>
              </div>
              
              <div className="p-6 border border-cream rounded-sm shadow-md">
                <i className="fa-solid fa-map-marker-alt text-gold text-3xl mb-4"></i>
                <h3 className="font-serif text-xl text-burgundy mb-3">Adresse</h3>
                <p className="mb-2">{RESTAURANT_INFO.address}</p>
                <p className="text-sm text-gray-600">
                  Métro: Ligne D, arrêt "Vieux Lyon"<br />
                  Parking: Saint Jean à 200m
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <div>
              <h3 className="font-serif text-2xl text-burgundy mb-6">Horaires d'Ouverture</h3>
              <div className="mb-8">
                <h4 className="font-medium mb-3">Déjeuner</h4>
                <p className="flex justify-between py-2 border-b border-cream">
                  <span>Mardi - Vendredi</span>
                  <span>12h00 - 14h30</span>
                </p>
                <p className="flex justify-between py-2 border-b border-cream">
                  <span>Samedi - Dimanche</span>
                  <span>12h00 - 15h00</span>
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="font-medium mb-3">Dîner</h4>
                <p className="flex justify-between py-2 border-b border-cream">
                  <span>Mardi - Jeudi</span>
                  <span>19h00 - 22h00</span>
                </p>
                <p className="flex justify-between py-2 border-b border-cream">
                  <span>Vendredi - Samedi</span>
                  <span>19h00 - 22h30</span>
                </p>
                <p className="flex justify-between py-2 border-b border-cream">
                  <span>Dimanche - Lundi</span>
                  <span>Fermé</span>
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-2xl text-burgundy mb-6">Suivez-Nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
                    <i className="fab fa-tripadvisor text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation-form" className="py-16 md:py-24 bg-burgundy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h2 className="font-serif text-3xl mb-6 relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-0">
                Réservez Votre Table
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Pour garantir la meilleure expérience possible, nous vous recommandons de réserver votre table à l'avance. Notre équipe sera ravie de vous accueillir et de vous faire découvrir notre cuisine française traditionnelle.
              </p>
              <div className="mb-8">
                <p className="text-xl mb-4 font-serif">Nos Horaires</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Déjeuner</p>
                    <p>{RESTAURANT_INFO.hours.lunch.days}</p>
                    <p>{RESTAURANT_INFO.hours.lunch.hours}</p>
                  </div>
                  <div>
                    <p className="font-medium">Dîner</p>
                    <p>{RESTAURANT_INFO.hours.dinner.days}</p>
                    <p>{RESTAURANT_INFO.hours.dinner.hours}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xl mb-4 font-serif">Contact</p>
                <p className="mb-2"><i className="fas fa-phone mr-2"></i> {RESTAURANT_INFO.phone}</p>
                <p className="mb-2"><i className="fas fa-envelope mr-2"></i> {RESTAURANT_INFO.email}</p>
                <p><i className="fas fa-map-marker-alt mr-2"></i> {RESTAURANT_INFO.address}</p>
              </div>
            </div>
            <div className="md:w-1/2 bg-white text-charcoal p-8 rounded-sm shadow-lg">
              <h4 className="font-serif text-2xl text-burgundy mb-6">Formulaire de Réservation</h4>
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <LocationInfo />
    </>
  );
}

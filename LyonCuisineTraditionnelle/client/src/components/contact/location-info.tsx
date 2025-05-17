import { Button } from "@/components/ui/button";
import { RESTAURANT_INFO } from "@/lib/constants";

export default function LocationInfo() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl text-burgundy mb-2">Notre Emplacement</h3>
          <p className="font-serif text-xl italic text-gold mb-8">Au cœur du Vieux Lyon</p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Vue du Vieux Lyon" 
              className="rounded-sm shadow-lg w-full md:w-auto"
            />
            
            <img 
              src="https://pixabay.com/get/g1de080265156e3c2f3b21fb57eccaf6eaa043e295d1c11831404da52a90b080373e8ee66906bc369180029b4c41dbc2f732a7781320458c970e3bf1731722ab6_1280.jpg" 
              alt="Lyon et la Saône" 
              className="rounded-sm shadow-lg w-full md:w-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-sm shadow-md">
            <h4 className="font-serif text-2xl text-burgundy mb-6">Comment nous trouver</h4>
            <p className="mb-4">
              Situé dans le quartier historique du Vieux Lyon, La Petite Pastèque vous accueille dans un cadre élégant et chaleureux.
            </p>
            <div className="mb-6">
              <p className="font-medium mb-2">Adresse</p>
              <p>{RESTAURANT_INFO.address}</p>
            </div>
            <div className="mb-6">
              <p className="font-medium mb-2">Transports</p>
              <p>Métro: Ligne D, arrêt "Vieux Lyon"</p>
              <p>Bus: Lignes C3, C14, arrêt "Saint Paul"</p>
              <p>Parking: Parking Saint Jean à 200m</p>
            </div>
            <a 
              href={`https://maps.google.com/maps?q=${encodeURIComponent(RESTAURANT_INFO.address)}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-burgundy text-white hover:bg-opacity-90">
                <i className="fas fa-directions mr-2"></i> Itinéraire
              </Button>
            </a>
          </div>
          
          <div className="h-96 rounded-sm shadow-lg overflow-hidden">
            <iframe 
              src={`https://maps.google.com/maps?q=${encodeURIComponent(RESTAURANT_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Google Maps de La Petite Pastèque"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

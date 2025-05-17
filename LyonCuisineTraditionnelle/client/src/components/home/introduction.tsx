import { RESTAURANT_INFO } from "@/lib/constants";

export default function Introduction() {
  return (
    <section id="introduction" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h3 className="font-serif text-3xl md:text-4xl text-burgundy mb-4">
          Bienvenue à {RESTAURANT_INFO.name}
        </h3>
        <p className="font-serif text-xl md:text-2xl italic text-gold mb-8">
          "{RESTAURANT_INFO.tagline}"
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Nichée au cœur de Lyon, La Petite Pastèque vous invite à découvrir une expérience culinaire authentique qui célèbre le riche patrimoine gastronomique français.
        </p>
        <p className="text-lg leading-relaxed mb-10">
          Notre chef allie techniques traditionnelles et créativité contemporaine pour proposer des plats qui honorent les classiques tout en surprenant vos papilles.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-cream p-6 rounded-sm shadow-md">
            <i className="fas fa-utensils text-gold text-3xl mb-4"></i>
            <h4 className="font-serif text-xl text-burgundy mb-3">Cuisine Traditionnelle</h4>
            <p>Des recettes françaises authentiques préparées avec respect et savoir-faire.</p>
          </div>
          
          <div className="bg-cream p-6 rounded-sm shadow-md">
            <i className="fas fa-carrot text-gold text-3xl mb-4"></i>
            <h4 className="font-serif text-xl text-burgundy mb-3">Produits Frais</h4>
            <p>Nous sélectionnons les meilleurs produits locaux et de saison pour nos créations.</p>
          </div>
          
          <div className="bg-cream p-6 rounded-sm shadow-md">
            <i className="fas fa-wine-glass-alt text-gold text-3xl mb-4"></i>
            <h4 className="font-serif text-xl text-burgundy mb-3">Expérience Unique</h4>
            <p>Une ambiance chaleureuse et un service attentionné pour des moments inoubliables.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

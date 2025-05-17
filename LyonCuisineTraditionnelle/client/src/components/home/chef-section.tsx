export default function ChefSection() {
  return (
    <section className="py-16 md:py-24 bg-burgundy text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 order-2 md:order-1">
            <h3 className="font-serif text-3xl mb-6 relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-0">
              Notre Chef
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Le Chef Marcel Dupont combine sa formation classique acquise dans les plus grandes maisons françaises avec une sensibilité contemporaine qui lui permet de réinterpréter subtilement les classiques de notre gastronomie.
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
  );
}

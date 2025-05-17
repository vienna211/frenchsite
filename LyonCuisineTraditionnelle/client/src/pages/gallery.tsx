import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { GALLERY_IMAGES } from '@/lib/constants';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <>
      <Helmet>
        <title>Galerie - La Petite Pastèque | Restaurant Français à Lyon</title>
        <meta name="description" content="Découvrez les créations culinaires de La Petite Pastèque en images. Notre galerie de plats traditionnels français préparés avec passion à Lyon." />
        <meta property="og:title" content="Galerie - La Petite Pastèque" />
        <meta property="og:description" content="Découvrez les créations culinaires de La Petite Pastèque en images." />
        <meta property="og:url" content="https://lapetitepasteque.fr/gallery" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" 
        style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&h=1200')"}}>
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Galerie</h1>
          <p className="text-xl md:text-2xl font-serif italic text-white mb-8">L'art culinaire français dans votre assiette</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-burgundy mb-12 text-center relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-auto">
            Nos Créations Culinaires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((image, index) => (
              <div 
                key={index}
                className="w-full h-64 md:h-80 overflow-hidden rounded-sm shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Interior Gallery */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-burgundy mb-12 text-center relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-auto">
            Notre Établissement
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="w-full h-80 overflow-hidden rounded-sm shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Intérieur du restaurant La Petite Pastèque" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-80 overflow-hidden rounded-sm shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Salle à manger du restaurant" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-80 overflow-hidden rounded-sm shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Bar du restaurant" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-80 overflow-hidden rounded-sm shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Terrasse du restaurant" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Images */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-burgundy mb-12 text-center relative after:content-[''] after:block after:w-20 after:h-0.5 after:bg-gold after:my-5 after:mx-auto">
            Notre Ville, Lyon
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <div className="w-full h-80 overflow-hidden rounded-sm shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Vue du Vieux Lyon" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-80 overflow-hidden rounded-sm shadow-lg">
              <img 
                src="https://pixabay.com/get/g1de080265156e3c2f3b21fb57eccaf6eaa043e295d1c11831404da52a90b080373e8ee66906bc369180029b4c41dbc2f732a7781320458c970e3bf1731722ab6_1280.jpg" 
                alt="Lyon et la Saône" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-burgundy text-white hover:bg-opacity-90">
                Nous trouver
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl bg-transparent border-none shadow-none">
          {selectedImage !== null && (
            <div className="relative">
              <img 
                src={GALLERY_IMAGES[selectedImage].src} 
                alt={GALLERY_IMAGES[selectedImage].alt} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-sm"
              />
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white rounded-full p-2 hover:bg-black/90"
              >
                <i className="fa-solid fa-chevron-left text-xl"></i>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white rounded-full p-2 hover:bg-black/90"
              >
                <i className="fa-solid fa-chevron-right text-xl"></i>
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

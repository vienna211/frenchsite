import { TESTIMONIALS } from "@/lib/constants";
import { generateStars } from "@/lib/utils";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-serif text-3xl md:text-4xl text-burgundy mb-2">Ce Que Disent Nos Clients</h3>
        <p className="font-serif text-xl italic text-gold mb-12">Des expériences inoubliables à La Petite Pastèque</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => {
            const stars = generateStars(testimonial.rating);
            
            return (
              <div 
                key={index} 
                className="testimonial-card bg-cream p-6 rounded-sm shadow-md transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="text-gold mb-3 flex">
                  {[...Array(stars.full)].map((_, i) => (
                    <i key={`full-${i}`} className="fas fa-star"></i>
                  ))}
                  {[...Array(stars.half)].map((_, i) => (
                    <i key={`half-${i}`} className="fas fa-star-half-alt"></i>
                  ))}
                  {[...Array(stars.empty)].map((_, i) => (
                    <i key={`empty-${i}`} className="far fa-star"></i>
                  ))}
                </div>
                <p className="italic mb-4">"{testimonial.text}"</p>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-charcoal opacity-70">{testimonial.location}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

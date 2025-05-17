interface MenuTag {
  icon: string;
  text: string;
}

interface MenuItem {
  name: string;
  price: string;
  description: string;
  tags: MenuTag[];
}

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="dish-card bg-cream p-6 rounded-sm shadow-md transition-all duration-300 text-left hover:translate-y-[-5px] hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-serif text-xl text-burgundy">{item.name}</h4>
        <p className="font-serif text-burgundy">{item.price}</p>
      </div>
      <p className="text-charcoal mb-4">{item.description}</p>
      
      {item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, index) => (
            <div key={index} className="flex items-center text-gold">
              <i className={`fas fa-${tag.icon} mr-2`}></i>
              <span className="text-sm">{tag.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

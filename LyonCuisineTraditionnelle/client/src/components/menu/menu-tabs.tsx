import { type MENU_CATEGORIES } from "@/lib/constants";

interface MenuTabsProps {
  categories: typeof MENU_CATEGORIES;
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export default function MenuTabs({ categories, activeTab, setActiveTab }: MenuTabsProps) {
  return (
    <div className="flex flex-wrap justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`menu-tab px-4 py-2 mx-2 border-b-2 font-medium transition-colors ${
            activeTab === category.id
              ? 'border-burgundy text-burgundy'
              : 'border-transparent hover:text-burgundy'
          }`}
          onClick={() => setActiveTab(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

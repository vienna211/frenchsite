import { Link } from "wouter";
import { type NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: typeof NAV_LINKS;
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, links, currentPath }: MobileMenuProps) {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} bg-white w-full py-4 px-6 shadow-lg`}>
      <nav className="flex flex-col space-y-4">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <a 
              className={`font-serif text-lg transition-colors ${currentPath === link.href ? 'text-burgundy' : 'text-charcoal hover:text-burgundy'}`}
              onClick={onClose}
            >
              {link.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}

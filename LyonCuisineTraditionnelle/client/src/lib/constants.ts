// Restaurant Information
export const RESTAURANT_INFO = {
  name: "La Petite Pastèque",
  tagline: "Le goût de la tradition, la fraîcheur de la modernité.",
  description: "Cuisine française traditionnelle au cœur de Lyon",
  email: "contact@lapetitepasteque.fr",
  phone: "+33 4 72 00 00 00",
  address: "15 Rue du Bœuf, 69005 Lyon, France",
  hours: {
    lunch: {
      days: "Du Mardi au Dimanche",
      hours: "12h00 - 14h30"
    },
    dinner: {
      days: "Du Mardi au Samedi",
      hours: "19h00 - 22h30"
    }
  }
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Galerie", href: "/gallery" },
  { name: "Contact", href: "/contact" }
];

// Social Links
export const SOCIAL_LINKS = [
  { name: "Facebook", icon: "facebook-f", url: "#" },
  { name: "Instagram", icon: "instagram", url: "#" },
  { name: "Twitter", icon: "twitter", url: "#" },
  { name: "TripAdvisor", icon: "tripadvisor", url: "#" }
];

// Menu Categories
export const MENU_CATEGORIES = [
  { id: "entrees", name: "Entrées" },
  { id: "plats", name: "Plats" },
  { id: "desserts", name: "Desserts" },
  { id: "degustation", name: "Menu Dégustation" }
];

// Menu Items
export const MENU_ITEMS = {
  entrees: [
    {
      name: "Tartare de Saumon",
      price: "18€",
      description: "Saumon frais, avocat, échalotes, aneth, huile d'olive citronnée",
      tags: [{ icon: "leaf", text: "Option sans gluten disponible" }]
    },
    {
      name: "Terrine de Foie Gras Maison",
      price: "22€",
      description: "Foie gras de canard, pain d'épices, chutney de figues et compote d'oignons rouges",
      tags: [{ icon: "star", text: "Spécialité du chef" }]
    },
    {
      name: "Soupe à l'Oignon Gratinée",
      price: "14€",
      description: "Oignons caramélisés, bouillon de boeuf, croûtons, gratinée au Gruyère",
      tags: []
    },
    {
      name: "Escargots de Bourgogne",
      price: "16€",
      description: "Escargots, beurre à l'ail et aux herbes, persil frais",
      tags: [{ icon: "history", text: "Recette traditionnelle" }]
    }
  ],
  plats: [
    {
      name: "Coq au Vin",
      price: "28€",
      description: "Poulet fermier mijoté au vin rouge, lardons, champignons et petits oignons, purée de pommes de terre",
      tags: [{ icon: "history", text: "Recette traditionnelle" }]
    },
    {
      name: "Filet de Bœuf Rossini",
      price: "34€",
      description: "Filet de bœuf, escalope de foie gras poêlée, sauce au truffe, pommes Anna",
      tags: [{ icon: "star", text: "Spécialité du chef" }]
    },
    {
      name: "Quenelles de Brochet",
      price: "26€",
      description: "Quenelles artisanales, sauce Nantua aux écrevisses, riz pilaf",
      tags: [{ icon: "map-marker-alt", text: "Spécialité lyonnaise" }]
    },
    {
      name: "Filet de Sole Meunière",
      price: "32€",
      description: "Sole fraîche, beurre noisette, amandes effilées, pommes vapeur et légumes de saison",
      tags: []
    }
  ],
  desserts: [
    {
      name: "Crème Brûlée à la Vanille",
      price: "12€",
      description: "Crème onctueuse à la vanille Bourbon de Madagascar, caramélisée au sucre roux",
      tags: [{ icon: "history", text: "Recette traditionnelle" }]
    },
    {
      name: "Tarte Tatin",
      price: "14€",
      description: "Pommes caramélisées, pâte feuilletée maison, glace à la vanille et caramel au beurre salé",
      tags: [{ icon: "star", text: "Spécialité du chef" }]
    },
    {
      name: "Mousse au Chocolat",
      price: "10€",
      description: "Chocolat noir 70%, servie avec tuile aux amandes et coulis de framboises",
      tags: []
    },
    {
      name: "Assortiment de Fromages",
      price: "16€",
      description: "Sélection de fromages affinés de nos régions, servis avec pain aux noix et confiture de figues",
      tags: [{ icon: "map-marker-alt", text: "Produits locaux" }]
    }
  ],
  degustation: [
    {
      name: "Menu Découverte",
      price: "72€",
      supplement: "Accord mets et vins: supplément 35€",
      description: "Un voyage à travers les saveurs classiques de notre cuisine française",
      items: [
        "Mise en bouche du chef",
        "Terrine de foie gras maison",
        "Filet de sole meunière",
        "Granité au champagne",
        "Filet de bœuf, sauce au poivre",
        "Assiette de fromages affinés",
        "Crème brûlée à la vanille",
        "Mignardises"
      ]
    },
    {
      name: "Menu Dégustation Régional",
      price: "68€",
      supplement: "Accord mets et vins: supplément 32€",
      description: "Une célébration des spécialités lyonnaises et des saveurs de notre région",
      items: [
        "Gougères au comté",
        "Salade lyonnaise",
        "Quenelles de brochet",
        "Granité au cassis",
        "Poulet de Bresse à la crème",
        "Plateau de fromages régionaux",
        "Tarte aux pralines roses",
        "Mignardises"
      ]
    }
  ]
};

// Testimonials
export const TESTIMONIALS = [
  {
    text: "Une expérience gastronomique exceptionnelle ! Les quenelles de brochet étaient divines, et le service attentionné. Un vrai moment de bonheur culinaire.",
    name: "Marie Durand",
    location: "Lyon",
    rating: 5
  },
  {
    text: "Le menu dégustation régional est une véritable découverte des saveurs lyonnaises. Chaque plat était parfaitement exécuté et les accords mets-vins remarquables.",
    name: "Pierre Martin",
    location: "Paris",
    rating: 5
  },
  {
    text: "Un cadre élégant et une cuisine authentique qui respecte les traditions. La tarte tatin était tout simplement la meilleure que j'ai jamais goûtée.",
    name: "Sophie Leroy",
    location: "Genève",
    rating: 4.5
  }
];

// Gallery Images
export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Croissant au beurre"
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Magret de canard sauce à l'orange"
  },
  {
    src: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Bœuf bourguignon traditionnel"
  },
  {
    src: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Crème brûlée à la vanille"
  },
  {
    src: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Saint-Jacques poêlées et purée de panais"
  },
  {
    src: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Plateau de fromages français affinés"
  }
];

// About Stats
export const ABOUT_STATS = [
  { value: "15+", label: "Années d'excellence" },
  { value: "100%", label: "Ingrédients locaux" },
  { value: "3", label: "Chefs renommés" },
  { value: "1000+", label: "Clients satisfaits" }
];

// Time slots for reservation
export const TIME_SLOTS = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
];

// Guest options
export const GUEST_OPTIONS = [
  { value: "1", label: "1 personne" },
  { value: "2", label: "2 personnes" },
  { value: "3", label: "3 personnes" },
  { value: "4", label: "4 personnes" },
  { value: "5", label: "5 personnes" },
  { value: "6", label: "6 personnes" },
  { value: "7", label: "7 personnes" },
  { value: "8", label: "8 personnes" },
  { value: "9+", label: "9 personnes ou plus" }
];

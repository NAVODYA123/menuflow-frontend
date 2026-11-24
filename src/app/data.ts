export interface MenuItem {
  id: number;
  name: string;
  description: string;
  availability: "yes" | "no";
  image: string;
  type: "veg" | "non-veg";
  price: number;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
    availability: "yes",
    image: "https://picsum.photos/seed/pizza/400/300",
    type: "veg",
    price: 2500,
  },
  {
    id: 2,
    name: "Grilled Chicken Burger",
    description: "Juicy grilled chicken patty with lettuce and mayo.",
    availability: "yes",
    image: "https://picsum.photos/seed/burger/400/300",
    type: "non-veg",
    price: 2500,
  },
  {
    id: 3,
    name: "Vegetable Fried Rice",
    description: "Stir-fried rice with mixed vegetables and soy sauce.",
    availability: "no",
    image: "https://picsum.photos/seed/friedrice/400/300",
    type: "veg",
    price: 2500,
  },
  {
    id: 4,
    name: "Spaghetti Bolognese",
    description: "Pasta with rich beef tomato sauce.",
    availability: "yes",
    image: "https://picsum.photos/seed/spaghetti/400/300",
    type: "non-veg",
    price: 2500,
  },
  {
    id: 5,
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes in creamy tomato gravy.",
    availability: "yes",
    image: "https://picsum.photos/seed/paneer/400/300",
    type: "veg",
    price: 2500,
  },
  {
    id: 6,
    name: "Fish and Chips",
    description: "Crispy battered fish served with fries.",
    availability: "no",
    image: "https://picsum.photos/seed/fishchips/400/300",
    type: "non-veg",
    price: 2500,
  },
  {
    id: 7,
    name: "Caesar Salad",
    description: "Fresh lettuce with Caesar dressing and croutons.",
    availability: "yes",
    image: "https://picsum.photos/seed/salad/400/300",
    type: "veg",
    price: 2500,
  },
  {
    id: 8,
    name: "Chicken Kottu",
    description: "Sri Lankan street food with chopped roti and chicken.",
    availability: "yes",
    image: "https://picsum.photos/seed/kottu/400/300",
    type: "non-veg",
    price: 2500,
  },
];

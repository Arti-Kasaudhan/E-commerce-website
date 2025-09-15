import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Modern Leather Sofa',
    price: 899.99,
    description: 'A sleek and comfortable genuine leather sofa, perfect for modern living rooms. Features a sturdy wooden frame and high-density foam cushions.',
    category: 'Living Room',
    imageUrl: 'https://m.media-amazon.com/images/I/61JtHzqCcGL._UF894,1000_QL80_.jpg',
    rating: { rate: 4.7, count: 120 }
  },
  {
    id: 2,
    name: 'Minimalist Oak Coffee Table',
    price: 249.50,
    description: 'Crafted from solid oak, this coffee table boasts a minimalist design with clean lines and a natural finish. Includes a lower shelf for extra storage.',
    category: 'Living Room',
    imageUrl: 'https://www.woodensure.com/assets/images/galleries/1745322433H0zRxgKCdi51.jpg',
    rating: { rate: 4.5, count: 88 }
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    price: 350.00,
    description: 'Improve your posture and comfort with this fully adjustable ergonomic office chair. Features lumbar support, adjustable armrests, and a breathable mesh back.',
    category: 'Office',
    imageUrl: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8',
    rating: { rate: 4.8, count: 250 }
  },
  {
    id: 4,
    name: 'Queen Size Upholstered Bed Frame',
    price: 599.00,
    description: 'A stylish and elegant upholstered bed frame with a tufted headboard. The soft fabric and padded frame add a touch of luxury to any bedroom.',
    category: 'Bedroom',
    imageUrl: 'https://m.media-amazon.com/images/I/91hViD9ZWBL.jpg',
    rating: { rate: 4.6, count: 150 }
  },
  {
    id: 5,
    name: 'Industrial Style Bookshelf',
    price: 180.75,
    description: 'Combine style and functionality with this industrial bookshelf. The metal frame and rustic wood shelves provide ample space for books and decor.',
    category: 'Office',
    imageUrl: 'https://tribesigns.com/cdn/shop/files/6391ace427ade714b70fb966024ae804_f4a466eb-9f5a-4b75-88e6-8354d954127c.jpg?v=1751524280&width=1800',
    rating: { rate: 4.4, count: 75 }
  },
  {
    id: 6,
    name: 'Round Marble Dining Table',
    price: 750.00,
    description: 'This chic dining table features a genuine marble top and a sturdy metal base, comfortably seating four people. A stunning centerpiece for your dining area.',
    category: 'Dining',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200',
    rating: { rate: 4.9, count: 95 }
  },
  {
    id: 7,
    name: 'Velvet Accent Chair',
    price: 299.99,
    description: 'Add a pop of color and sophistication with this plush velvet accent chair. Features gold-finished metal legs and a comfortable, deep seat.',
    category: 'Living Room',
    imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267',
    rating: { rate: 4.7, count: 110 }
  },
  {
    id: 8,
    name: 'Extendable Wooden Dining Set',
    price: 1200.00,
    description: 'A versatile dining set for the whole family. Made from solid acacia wood, the table extends to seat up to eight guests. Includes six matching chairs.',
    category: 'Dining',
    imageUrl: 'https://images-cdn.ubuy.co.in/65b3df6369817b5ff239af69-pvillez-118-5-wood-expandable-dining.jpg',
    rating: { rate: 4.8, count: 65 }
  }
];
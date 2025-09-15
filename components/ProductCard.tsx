
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon, StarIcon } from './icons/Icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-gray-800 flex items-center">
            <StarIcon className="w-4 h-4 text-yellow-500 mr-1"/>
            {product.rating.rate}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-indigo-600 transition-colors">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
          <button 
            onClick={handleAddToCart}
            className="flex items-center justify-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

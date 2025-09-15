
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { StarIcon, ShoppingCartIcon, PlusIcon, MinusIcon } from '../components/icons/Icons';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <Link to="/" className="mt-4 inline-block px-6 py-2 text-sm font-medium leading-6 text-center text-white uppercase transition bg-indigo-600 rounded-md shadow ripple hover:shadow-lg hover:bg-indigo-800 focus:outline-none">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-md" />
        </div>
        <div>
          <p className="text-sm font-semibold text-indigo-600 uppercase">{product.category}</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">{product.name}</h1>
          <div className="flex items-center mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.round(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <p className="ml-2 text-sm text-gray-500">({product.rating.count} reviews)</p>
          </div>
          <p className="text-4xl font-extrabold text-gray-900 my-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          
          <div className="mt-8 flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-md">
                <button onClick={decrementQuantity} className="p-3 text-gray-600 hover:bg-gray-100 rounded-l-md focus:outline-none">
                    <MinusIcon className="w-5 h-5"/>
                </button>
                <span className="px-4 py-2 text-lg font-semibold">{quantity}</span>
                <button onClick={incrementQuantity} className="p-3 text-gray-600 hover:bg-gray-100 rounded-r-md focus:outline-none">
                    <PlusIcon className="w-5 h-5"/>
                </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-grow flex items-center justify-center px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-105"
            >
              <ShoppingCartIcon className="h-6 w-6 mr-3" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

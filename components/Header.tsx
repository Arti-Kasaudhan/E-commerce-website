
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon, StoreIcon } from './icons/Icons';

const Header: React.FC = () => {
  const { cartCount } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
              <StoreIcon className="h-8 w-8 text-indigo-500" />
              <span>Furnish.</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
             <Link to="/orders" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              My Orders
            </Link>
            <Link to="/cart" className="relative text-gray-500 hover:text-gray-800 transition-colors">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 bg-indigo-500 text-white text-xs rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
             <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const ProductList: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Discover Our</span>
          <span className="block text-indigo-600">Exclusive Collection</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Hand-picked furniture to match your style. Quality craftsmanship, modern designs, and unbeatable prices.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

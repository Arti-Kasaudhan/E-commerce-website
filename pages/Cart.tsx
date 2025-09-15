
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { TrashIcon, PlusIcon, MinusIcon, ShoppingCartIcon } from '../components/icons/Icons';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-lg shadow-md">
        <ShoppingCartIcon className="mx-auto h-16 w-16 text-gray-400" />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="mt-2 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 text-sm font-medium leading-6 text-center text-white uppercase transition bg-indigo-600 rounded-md shadow ripple hover:shadow-lg hover:bg-indigo-700 focus:outline-none">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ul role="list" className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover object-center" />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3><Link to={`/product/${item.id}`}>{item.name}</Link></h3>
                      <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-md focus:outline-none"><MinusIcon className="w-4 h-4" /></button>
                      <span className="px-3 text-base">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-r-md focus:outline-none"><PlusIcon className="w-4 h-4" /></button>
                    </div>
                    <div className="flex">
                      <button onClick={() => removeFromCart(item.id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center">
                        <TrashIcon className="w-4 h-4 mr-1"/> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">${cartTotal.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">${cartTotal.toFixed(2)}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <button onClick={handleCheckout} className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

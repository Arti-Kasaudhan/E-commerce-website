
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Order, ShippingAddress } from '../types';

const Checkout: React.FC = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [shippingDetails, setShippingDetails] = useState<ShippingAddress>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const newOrder: Order = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      items: cartItems,
      total: cartTotal,
      shippingAddress: shippingDetails,
    };

    // Save order to localStorage
    const existingOrders: Order[] = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));

    clearCart();
    navigate(`/success/${newOrder.id}`);
  };
  
  const InputField: React.FC<{ name: keyof ShippingAddress, label: string, type?: string, required?: boolean }> = ({ name, label, type = 'text', required = true }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type={type}
            id={name}
            name={name}
            value={shippingDetails[name]}
            onChange={handleInputChange}
            required={required}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Shipping Information</h2>
          <div className="space-y-4">
            <InputField name="fullName" label="Full Name" />
            <InputField name="email" label="Email Address" type="email" />
            <InputField name="address" label="Street Address" />
            <InputField name="city" label="City" />
            <InputField name="postalCode" label="Postal Code" />
            <InputField name="country" label="Country" />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
            <ul className="space-y-4 mb-6">
                {cartItems.map(item => (
                    <li key={item.id} className="flex justify-between items-start">
                        <div className="flex-grow">
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-800 ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                    </li>
                ))}
            </ul>
            <dl className="space-y-2 border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between text-lg font-bold text-gray-900">
                <dt>Order Total</dt>
                <dd>${cartTotal.toFixed(2)}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <button type="submit" className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

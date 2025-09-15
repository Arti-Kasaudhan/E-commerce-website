
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Order } from '../types';
import { StoreIcon } from '../components/icons/Icons';

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders: Order[] = JSON.parse(localStorage.getItem('orders') || '[]');
    // Sort orders from newest to oldest
    storedOrders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setOrders(storedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-lg shadow-md">
        <StoreIcon className="mx-auto h-16 w-16 text-gray-400" />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">No Order History</h2>
        <p className="mt-2 text-gray-500">You haven't placed any orders yet.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 text-sm font-medium leading-6 text-center text-white uppercase transition bg-indigo-600 rounded-md shadow ripple hover:shadow-lg hover:bg-indigo-700 focus:outline-none">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Your Orders</h1>
      <div className="space-y-8">
        {orders.map((order) => (
          <div key={order.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-4 sm:px-6 sm:py-4 border-b border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-medium text-gray-600">
              <div>
                <p className="uppercase text-xs text-gray-500">Order Placed</p>
                <p>{new Date(order.date).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="uppercase text-xs text-gray-500">Total</p>
                <p>${order.total.toFixed(2)}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="uppercase text-xs text-gray-500">Ship To</p>
                <p className="truncate">{order.shippingAddress.fullName}</p>
              </div>
              <div className="col-span-2 sm:col-span-1 text-left sm:text-right">
                <p className="uppercase text-xs text-gray-500">Order #</p>
                <p className="font-mono text-xs">{order.id}</p>
              </div>
            </div>
            <ul className="divide-y divide-gray-200">
              {order.items.map((item) => (
                <li key={item.id} className="p-4 sm:p-6 flex space-x-6">
                  <img src={item.imageUrl} alt={item.name} className="h-20 w-20 rounded-md object-cover" />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800">
                      <Link to={`/product/${item.id}`} className="hover:text-indigo-600">{item.name}</Link>
                    </h3>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    <p className="text-sm font-medium text-gray-900 mt-2">${item.price.toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;

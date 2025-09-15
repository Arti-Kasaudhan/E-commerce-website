
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircleIcon } from '../components/icons/Icons';

const CheckoutSuccess: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-lg shadow-md">
      <CheckCircleIcon className="h-20 w-20 text-green-500" />
      <h1 className="mt-6 text-4xl font-extrabold text-gray-900">Order Successful!</h1>
      <p className="mt-4 max-w-md text-lg text-gray-600">
        Thank you for your purchase. Your Order ID is <span className="font-bold text-indigo-600">#{orderId}</span>.
        A confirmation email has been sent to your address.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link 
          to="/" 
          className="inline-block px-8 py-3 text-base font-medium leading-6 text-center text-white uppercase transition bg-indigo-600 rounded-md shadow ripple hover:shadow-lg hover:bg-indigo-700 focus:outline-none"
        >
          Continue Shopping
        </Link>
        <Link 
          to="/orders" 
          className="inline-block px-8 py-3 text-base font-medium leading-6 text-center text-indigo-600 uppercase transition bg-white border-2 border-indigo-600 rounded-md shadow ripple hover:shadow-lg hover:bg-indigo-50 focus:outline-none"
        >
          View Order History
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;

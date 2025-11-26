import React from 'react';
import { Header } from '../components/Header';
import { CreditCard } from '../components/CreditCard';
import { CreditCard as CardIcon, Snowflake, MoreHorizontal } from 'lucide-react';
import { InstallmentRow } from '../components/InstallmentRow';
import { INSTALLMENTS } from '../constants';

export const HomeScreen: React.FC = () => {
  return (
    <div className="pb-32">
      <Header />
      
      <div className="px-6 pt-2 pb-6">
        <CreditCard />
      </div>

      {/* Action Buttons */}
      <div className="px-6 flex gap-4 mb-8">
        <button className="flex-1 bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <CardIcon className="text-gray-900" size={24} />
          <span className="text-xs font-semibold text-gray-600">Card Details</span>
        </button>
        <button className="flex-1 bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <Snowflake className="text-gray-900" size={24} />
          <span className="text-xs font-semibold text-gray-600">Freeze Card</span>
        </button>
        <button className="flex-1 bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <MoreHorizontal className="text-gray-900" size={24} />
          <span className="text-xs font-semibold text-gray-600">More</span>
        </button>
      </div>

      {/* Payment Next Section */}
      <div className="px-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Next</h2>
        <div className="flex flex-col gap-2">
          {INSTALLMENTS.slice(0, 2).map((item) => (
            <InstallmentRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Clock } from 'lucide-react';
import { InstallmentItem } from '../types';

interface InstallmentRowProps {
  item: InstallmentItem;
}

export const InstallmentRow: React.FC<InstallmentRowProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-4">
          <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center p-2">
            <img 
              src={item.productImage} 
              alt={item.productName} 
              className="h-full w-full object-contain mix-blend-multiply"
            />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{item.productName}</h3>
            <p className="text-sm text-gray-500">{item.merchant}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="font-bold text-gray-900 text-lg">${item.price.toFixed(2)}</div>
          <div className="text-xs text-gray-500">Due date {item.dueDate}</div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Clock size={16} className="text-gray-400" />
          <span>{item.currentInstallment} of {item.totalInstallments} Installment</span>
        </div>
        <button className="text-sm font-semibold text-blue-500 hover:text-blue-600">
          Pay Now
        </button>
      </div>
    </div>
  );
};

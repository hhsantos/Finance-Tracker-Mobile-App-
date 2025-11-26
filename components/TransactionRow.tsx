import React from 'react';
import { Transaction } from '../types';

interface TransactionRowProps {
  transaction: Transaction;
}

export const TransactionRow: React.FC<TransactionRowProps> = ({ transaction }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden border border-gray-100">
            {transaction.merchant.includes("Temu") ? (
               <div className="bg-[#fb7701] w-full h-full flex items-center justify-center text-white font-bold text-xs">TEMU</div>
            ) : transaction.merchant.includes("Apple") ? (
                 <div className="bg-black w-full h-full flex items-center justify-center text-white">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.23-3.14-2.43-1.7-2.46-3-6.25-1.26-9.28 1.5-2.61 4.19-2.85 5.28-2.85 1.28 0 2.5.87 3.29.87.94 0 2.75-1.12 4.54-.92.77.03 2.94.31 4.31 2.34-.11.07-2.57 1.5-2.54 4.52.03 3.6 3.16 4.81 3.21 4.84-.03.09-.5 1.72-1.07 2.55zm-5.22-15.5c.67-.81 1.13-1.94 1-3.07-1 .04-2.2 0.67-2.91 1.5-.6.69-1.14 1.83-1 2.98 1.12.08 2.27-.6 2.91-1.41z"></path></svg>
                 </div>
            ) : (
                <div className="bg-black w-full h-full flex items-center justify-center text-white font-serif italic text-xl">a</div>
            )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{transaction.merchant}</h4>
          <p className="text-sm text-gray-500">{transaction.date}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-gray-900">${transaction.amount.toFixed(2)}</div>
        {/* Mock time if needed, already in date string */}
      </div>
    </div>
  );
};

import React from 'react';
import { Header } from '../components/Header';
import { EyeOff, ArrowRight } from 'lucide-react';
import { TransactionRow } from '../components/TransactionRow';
import { RECENT_TRANSACTIONS } from '../constants';

export const WalletScreen: React.FC = () => {
  return (
    <div className="pb-32">
      <Header />
      
      {/* Balance Section */}
      <div className="bg-white mx-4 rounded-3xl p-6 shadow-sm mb-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="text-gray-500 font-medium mb-1">Total Balance</div>
            <div className="text-4xl font-extrabold text-gray-900 tracking-tight">$248,967.83</div>
          </div>
          <button className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
             <EyeOff size={18} className="text-gray-900" />
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 border border-gray-100 rounded-2xl p-4">
             <div className="text-xs text-gray-500 font-semibold mb-1">Payment Next</div>
             <div className="text-lg font-bold text-gray-900">$43,093.00</div>
          </div>
          <div className="flex-1 border border-gray-100 rounded-2xl p-4">
             <div className="text-xs text-gray-500 font-semibold mb-1">Payment Completed</div>
             <div className="text-lg font-bold text-gray-900">$274,825.01</div>
          </div>
        </div>
      </div>

      {/* Card Limits */}
      <div className="bg-white mx-4 rounded-3xl p-6 shadow-sm mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Card Limits</h2>
        
        <div className="relative h-4 bg-blue-50 rounded-full mb-3 overflow-hidden">
          {/* Striped pattern background for the empty part */}
          <div className="absolute inset-0 opacity-30" 
               style={{backgroundImage: 'repeating-linear-gradient(45deg, #3b82f6 0, #3b82f6 1px, transparent 0, transparent 50%)', backgroundSize: '8px 8px'}}>
          </div>
          
          {/* Filled progress */}
          <div className="absolute top-0 left-0 h-full w-[35%] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
          
          {/* Handle/Indicator */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[35%] h-6 w-6 bg-white border-4 border-blue-500 rounded-full shadow-md z-10"></div>
        </div>

        <div className="flex justify-between items-end mb-4">
          <span className="text-gray-500 text-sm font-medium">Today Limits</span>
          <div className="text-sm">
             <span className="font-bold text-gray-900">$614.93</span>
             <span className="text-gray-400">/$43,093.00</span>
          </div>
        </div>

        <button className="w-full flex items-center justify-between text-gray-900 font-semibold text-sm pt-4 border-t border-gray-100 hover:opacity-70">
          <span>Set card limits</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Transactions */}
      <div className="bg-white mx-4 rounded-3xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Transaction</h2>
        
        <div className="mb-6">
          <div className="h-[1px] bg-gray-100 w-full relative mb-4">
            <span className="absolute -top-3 left-0 bg-white pr-2 text-sm text-gray-500 font-medium">Today</span>
            <div className="absolute top-0 left-16 right-0 h-full bg-blue-500"></div>
          </div>
          
          <div className="flex flex-col">
            {RECENT_TRANSACTIONS.slice(0, 2).map(t => (
               <TransactionRow key={t.id} transaction={t} />
            ))}
          </div>
        </div>

        <div>
           <div className="h-[1px] bg-gray-100 w-full relative mb-4">
             <span className="absolute -top-3 left-0 bg-white pr-2 text-sm text-gray-400 font-medium">Yesterday</span>
           </div>
           
           <div className="flex flex-col">
              {/* Reuse one transaction for visual */}
               <TransactionRow transaction={RECENT_TRANSACTIONS[2]} />
               <TransactionRow transaction={{...RECENT_TRANSACTIONS[0], id: '4', merchant: 'Netflix', amount: 15.99}} />
           </div>
        </div>

      </div>
    </div>
  );
};

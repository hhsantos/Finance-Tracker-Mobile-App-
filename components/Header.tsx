import React from 'react';
import { Bell, Headset } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, showBack }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-10">
      <div className="flex items-center gap-4">
        {showBack ? (
          <div className="flex items-center gap-3">
            <button className="p-2 -ml-2 rounded-full hover:bg-gray-100">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <h1 className="text-xl font-bold text-gray-900">{title}</h1>
          </div>
        ) : (
          <div className="h-10 w-10 rounded-full bg-pink-200 overflow-hidden border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        {!showBack && (
          <button className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50">
            <Headset size={20} />
          </button>
        )}
        
        {showBack ? (
           <button className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50">
             <span className="text-xl font-bold pb-2">...</span>
           </button>
        ) : (
          <button className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center border-2 border-white">
              4
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

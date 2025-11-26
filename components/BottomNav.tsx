import React from 'react';
import { Home, Wallet, PieChart, Globe } from 'lucide-react';
import { Tab } from '../types';

interface BottomNavProps {
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange }) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-[360px] px-6 z-50">
      <div className="bg-[#1C1C1E] rounded-full h-[64px] flex items-center justify-between px-2 shadow-2xl">
        
        <button 
          onClick={() => onTabChange(Tab.HOME)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            currentTab === Tab.HOME 
              ? 'bg-gray-700 text-white' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Home size={20} strokeWidth={currentTab === Tab.HOME ? 2.5 : 2} fill={currentTab === Tab.HOME ? "currentColor" : "none"} />
          {currentTab === Tab.HOME && <span className="text-sm font-medium">Home</span>}
        </button>

        <button 
          onClick={() => onTabChange(Tab.WALLET)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            currentTab === Tab.WALLET 
              ? 'bg-gray-700 text-white' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Wallet size={20} strokeWidth={currentTab === Tab.WALLET ? 2.5 : 2} fill={currentTab === Tab.WALLET ? "currentColor" : "none"} />
          {currentTab === Tab.WALLET && <span className="text-sm font-medium">Wallet</span>}
        </button>

        <button 
          onClick={() => onTabChange(Tab.ANALYTICS)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            currentTab === Tab.ANALYTICS 
              ? 'bg-gray-700 text-white' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <PieChart size={20} strokeWidth={currentTab === Tab.ANALYTICS ? 2.5 : 2} fill={currentTab === Tab.ANALYTICS ? "currentColor" : "none"} />
          {currentTab === Tab.ANALYTICS && <span className="text-sm font-medium">Progress</span>}
        </button>

        <div className="w-[1px] h-6 bg-gray-700 mx-1"></div>

        <button className="p-3 text-gray-400 hover:text-white rounded-full">
            <Globe size={20} />
        </button>

      </div>
    </div>
  );
};

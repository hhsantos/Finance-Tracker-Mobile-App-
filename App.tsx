import React, { useState } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { WalletScreen } from './screens/WalletScreen';
import { AnalyticsScreen } from './screens/AnalyticsScreen';
import { BottomNav } from './components/BottomNav';
import { Tab } from './types';

function App() {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.HOME);

  const renderScreen = () => {
    switch (currentTab) {
      case Tab.HOME:
        return <HomeScreen />;
      case Tab.WALLET:
        return <WalletScreen />;
      case Tab.ANALYTICS:
        return <AnalyticsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f2f6] flex justify-center items-start pt-0 md:pt-10">
      {/* Mobile Frame Container */}
      <div className="w-full max-w-[400px] h-[100vh] md:h-[850px] bg-[#f5f6fa] md:rounded-[40px] shadow-2xl overflow-hidden relative border-[8px] border-black md:border-gray-900 overflow-y-auto no-scrollbar">
        
        {/* Dynamic Notch for Desktop View aesthetic */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-50"></div>
        
        {/* Status Bar Area (Mock) */}
        <div className="h-12 w-full bg-white/0 flex justify-between items-end px-8 pb-2 text-sm font-semibold text-black z-40 relative">
           <span className="ml-2">9:41</span>
           <div className="flex gap-1.5 items-center">
             <div className="w-4 h-4 bg-black rounded-sm opacity-0"></div> {/* Spacer */}
             <div className="flex gap-1">
               <div className="w-[3px] h-2.5 bg-black rounded-full"></div>
               <div className="w-[3px] h-3 bg-black rounded-full"></div>
               <div className="w-[3px] h-3.5 bg-black rounded-full"></div>
               <div className="w-[3px] h-2.5 bg-gray-400 rounded-full"></div>
             </div>
             <div className="w-6 h-3 rounded-[4px] border border-gray-400 relative ml-1">
                <div className="absolute inset-0.5 bg-black rounded-[1px] w-[80%]"></div>
             </div>
           </div>
        </div>

        {/* Content Area */}
        <main className="relative z-0">
          {renderScreen()}
        </main>

        {/* Navigation */}
        <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
      </div>
    </div>
  );
}

export default App;

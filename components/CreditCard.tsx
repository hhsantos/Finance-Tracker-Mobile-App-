import React from 'react';
import { EyeOff } from 'lucide-react';

export const CreditCard: React.FC = () => {
  return (
    <div className="relative w-full aspect-[1.58] rounded-[24px] overflow-hidden shadow-2xl bg-[#1c1c1e]">
      
      {/* Back Card (MasterCard) Layer */}
      {/* Simulating a metallic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d1d3d4] via-[#e2e4e6] to-[#a7a9ac]">
        
        {/* Subtle noise/texture for realism */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        <div className="p-6 relative z-10 h-full">
          {/* Top Row: Logo & Number */}
          <div className="flex justify-between items-start pt-1">
            
            {/* MasterCard Logo */}
            <div className="flex flex-col gap-1">
               <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#EB001B] opacity-90 mix-blend-multiply shadow-sm"></div>
                  <div className="w-9 h-9 rounded-full bg-[#F79E1B] opacity-90 mix-blend-multiply shadow-sm"></div>
               </div>
               <span className="font-semibold text-xs text-gray-600 tracking-wider pl-1 mt-1 uppercase">Master Card</span>
            </div>
            
            {/* Card Number */}
            <div className="font-mono text-white font-bold text-lg tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              828749-2847-03
            </div>
          </div>
        </div>
      </div>

      {/* Front Card (Limit Card) Layer - The "Pocket" */}
      <div className="absolute bottom-0 left-0 right-0 h-[68%] z-20">
         
         {/* Drop shadow for the curved pocket edge */}
         <div className="absolute w-full h-full -top-4 left-0 z-[-1] opacity-40 blur-sm scale-95 origin-bottom bg-black/50"></div>

         <div className="relative w-full h-full">
             {/* SVG providing the curved shape and stitched border */}
             <svg className="w-full h-full drop-shadow-[0_-4px_6px_rgba(0,0,0,0.3)]" viewBox="0 0 360 200" preserveAspectRatio="none">
                 <defs>
                   <filter id="inset-shadow">
                     <feOffset dx="0" dy="2" />
                     <feGaussianBlur stdDeviation="2" result="offset-blur" />
                     <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                     <feFlood floodColor="black" floodOpacity="0.5" result="color" />
                     <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                     <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                   </filter>
                 </defs>
                 
                 {/* Main Dark Shape with Curve */}
                 {/* Starts top-left (0,40), Curves down to (180, 80), up to (360, 40) */}
                 <path d="M0,40 Q180,85 360,40 V220 H0 Z" fill="#2C2F36" />
                 
                 {/* Stitched Border - dashed line following the curve */}
                 <path 
                    d="M12,48 Q180,92 348,48 V190 H12 Z" 
                    fill="none" 
                    stroke="#6C6C6C" 
                    strokeWidth="1.5" 
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                    className="opacity-60"
                 />
             </svg>

             {/* Content Overlay */}
             <div className="absolute inset-0 pt-[15%] px-7 pb-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-1">
                   {/* Status Dot */}
                   <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                   <span className="text-[#C3C3C3] text-sm font-medium tracking-wide">Limit Card</span>
                </div>
                
                <div className="flex justify-between items-end">
                   <div className="text-[30px] md:text-[34px] font-bold text-white tracking-tight drop-shadow-sm">
                      $43,093.00
                   </div>
                   <div className="mb-2 text-[#8E8E93] hover:text-white transition-colors cursor-pointer">
                      <EyeOff size={22} />
                   </div>
                </div>
             </div>
         </div>
      </div>
    </div>
  );
};
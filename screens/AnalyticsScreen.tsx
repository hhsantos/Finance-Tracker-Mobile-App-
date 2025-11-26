import React from 'react';
import { Header } from '../components/Header';
import { MoreHorizontal } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { CHART_DATA, INSTALLMENTS } from '../constants';
import { InstallmentRow } from '../components/InstallmentRow';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100 text-center">
        <p className="font-bold text-gray-900">${payload[0].value.toLocaleString()}.00</p>
        <p className="text-xs text-gray-500">Nov 25, 2025</p>
      </div>
    );
  }
  return null;
};

export const AnalyticsScreen: React.FC = () => {
  return (
    <div className="pb-32">
      <Header title="Analytics" showBack />
      
      <div className="bg-white rounded-b-3xl px-6 pb-8 pt-2 shadow-sm mb-6">
         <div className="mb-6">
           <div className="text-gray-500 font-medium mb-1">Total Spending</div>
           <div className="text-3xl font-extrabold text-gray-900">$248,967.83</div>
         </div>

         {/* Chart */}
         <div className="h-[220px] w-full -ml-4">
           <ResponsiveContainer width="100%" height="100%">
             <AreaChart data={CHART_DATA}>
               <defs>
                 <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                   <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                 </linearGradient>
               </defs>
               <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#9ca3af', fontSize: 12}}
                  dy={10}
               />
               <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '4 4' }} />
               <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  activeDot={{ r: 6, fill: "#3b82f6", stroke: "#fff", strokeWidth: 3 }}
                />
               {/* Vertical Line Mock for "Today" */}
                <ReferenceLine x="Nov 25" stroke="#3b82f6" strokeDasharray="3 3" />
             </AreaChart>
           </ResponsiveContainer>
         </div>
         
         {/* Stats Row */}
         <div className="flex gap-3 mt-6">
           <div className="flex-1 bg-gray-50 rounded-2xl p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">On Progress</div>
              <div className="text-sm font-bold text-gray-900">$61,523.00</div>
           </div>
           <div className="flex-1 bg-gray-50 rounded-2xl p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Overdue</div>
              <div className="text-sm font-bold text-gray-900">$4,825.43</div>
           </div>
           <div className="flex-1 bg-gray-50 rounded-2xl p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Total</div>
              <div className="text-sm font-bold text-gray-900">$89,271.92</div>
           </div>
         </div>
      </div>

      {/* Installments */}
      <div className="px-6">
        <div className="bg-white p-1 rounded-full flex mb-6 shadow-sm">
           <button className="flex-1 py-2.5 rounded-full bg-white shadow text-sm font-bold text-gray-900">4 Installment</button>
           <button className="flex-1 py-2.5 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50">6 Installment</button>
        </div>

        <div className="flex flex-col gap-2">
          {INSTALLMENTS.map((item) => (
            <InstallmentRow key={item.id} item={item} />
          ))}
        </div>
      </div>

    </div>
  );
};

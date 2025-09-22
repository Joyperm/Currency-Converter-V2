import React from "react";
import currencies from "../data/currency.js"

export default function CurrencySelect({currency, onCurrencyChange}) {

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <img 
        src={currencies[currency].flag} 
        alt={`${currencies[currency].name} flag`} 
        className="w-8 h-5 rounded-sm "/>        
        </div>

        <select
        className="w-full truncate pl-14 pr-4 py-2 bg-slate-900 border border-purple-500 rounded-md shadow-neon-md text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 cursor-pointer"
        onChange={onCurrencyChange}
        value={currency}>
            {Object.entries(currencies).map(([code, {name}]) => (
                <option 
                key={code}
                value={code}>
                    {code.toUpperCase()} - {name}
                </option>
            ))}
        </select>
    </div>
  );
}

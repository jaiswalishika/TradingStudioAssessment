import React, { useState } from 'react';
import { PiGlobeHemisphereWestFill } from "react-icons/pi";

interface Market {
  id: string;
  name: string;
}

interface GlobalMarketsProps {
  markets?: Market[];
  defaultSelected?: string;
}

const GlobalMarkets: React.FC<GlobalMarketsProps> = ({ 
  markets = [
    { id: 'nyse', name: 'NYSE' },
    { id: 'nasdaq', name: 'NASDAQ' },
    { id: 'mse', name: 'MSE' },
    { id: 'jpx', name: 'JPX' },
    { id: 'hkse', name: 'HKSE' },
    { id: 'euronext', name: 'EURONEXT' },
    { id: 'six', name: 'SIX' },
    { id: 'tsx', name: 'TSX' },
    { id: 'lse', name: 'LSE' }
  ],
  defaultSelected = 'nyse'
}) => {
  const [selectedMarket, setSelectedMarket] = useState<string>(defaultSelected);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6 gap-2">
        <PiGlobeHemisphereWestFill />
        <h2 className="text-lg font-semibold">Global Markets</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {markets.map((market) => (
          <button
            key={market.id}
            className={`py-3 px-4 rounded text-center transition-colors duration-200 
              ${selectedMarket === market.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-50 text-gray-800 hover:bg-gray-100'}`}
            onClick={() => setSelectedMarket(market.id)}
          >
            {market.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GlobalMarkets;
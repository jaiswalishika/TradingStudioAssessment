import React, { useState } from 'react';
import { BsCurrencyDollar } from "react-icons/bs";

interface StrategyOption {
  id: string;
  label: string;
  checked: boolean;
}

interface BuildStrategyProps {
  initialBuyOptions?: StrategyOption[];
  initialSellOptions?: StrategyOption[];
}

const BuildStrategy: React.FC<BuildStrategyProps> = ({ 
  initialBuyOptions,
  initialSellOptions
}) => {
  // Default options if none provided
  const defaultBuyOptions: StrategyOption[] = [
    { id: 'n-day-moving-avg', label: 'N-DAY Moving Avg > Last Open', checked: false },
    { id: 'top-gainers', label: 'Top X, N-DAY Top Gainers', checked: false },
    { id: 'last-close', label: 'Last-Close > N-DAY High', checked: false }
  ];
  
  const defaultSellOptions: StrategyOption[] = [
    { id: 'target-profit', label: 'Target Profit: X%', checked: false },
    { id: 'stop-loss', label: 'Stop Loss: Y%', checked: false }
  ];

  // State for buy and sell criteria
  const [buyOptions, setBuyOptions] = useState<StrategyOption[]>(
    initialBuyOptions || defaultBuyOptions
  );
  
  const [sellOptions, setSellOptions] = useState<StrategyOption[]>(
    initialSellOptions || defaultSellOptions
  );

  // Handler for checkbox changes
  const handleBuyOptionChange = (id: string) => {
    setBuyOptions(buyOptions.map(option => 
      option.id === id ? { ...option, checked: !option.checked } : option
    ));
  };

  const handleSellOptionChange = (id: string) => {
    setSellOptions(sellOptions.map(option => 
      option.id === id ? { ...option, checked: !option.checked } : option
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6 gap-1">
        <BsCurrencyDollar color='blue'/>
        <h2 className="text-lg font-semibold">Build Your Strategy</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Buy Criteria */}
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Buy Criteria</h3>
          <div className="space-y-3">
            {buyOptions.map(option => (
              <div key={option.id} className="flex items-start">
                <input
                  type="checkbox"
                  id={`buy-${option.id}`}
                  checked={option.checked}
                  onChange={() => handleBuyOptionChange(option.id)}
                  className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor={`buy-${option.id}`} className="ml-2 text-sm text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Sell Criteria */}
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Sell Criteria</h3>
          <div className="space-y-3">
            {sellOptions.map(option => (
              <div key={option.id} className="flex items-start">
                <input
                  type="checkbox"
                  id={`sell-${option.id}`}
                  checked={option.checked}
                  onChange={() => handleSellOptionChange(option.id)}
                  className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor={`sell-${option.id}`} className="ml-2 text-sm text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildStrategy
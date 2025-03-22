import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { TbArrowZigZag } from "react-icons/tb";
import { CiPlay1 } from "react-icons/ci";
import { FaClockRotateLeft } from "react-icons/fa6";



const TradingSimulator: React.FC = () => {
  const [buyTrigger, setBuyTrigger] = useState<string>('');
  const [sellTrigger, setSellTrigger] = useState<string>('');
  const [portfolioRules, setPortfolioRules] = useState<string>('');
  const [simulationStarted, setSimulationStarted] = useState<boolean>(false);

  const handleSimulate = () => {
    setSimulationStarted(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center mb-6 gap-2">
          <TbArrowZigZag color='aqua' className='h-5 w-5' />
          <h1 className="text-2xl font-bold text-white">Trading Simulator</h1>
        </header>

        <p className="mb-8 text-gray-400">Test your trading strategies with our advanced simulation engine</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Buy Trigger */}
          <div className="bg-slate-800 p-4 rounded-lg">
            <div className="flex items-center mb-4 gap-2">
              <h2 className="text-lg font-medium">Buy Trigger</h2>
              <FaArrowRight color='green' className='h-5 w-5' />
            </div>
            <textarea
              className="w-full h-32 bg-slate-700 rounded p-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter buy trigger conditions..."
              value={buyTrigger}
              onChange={(e) => setBuyTrigger(e.target.value)}
            />
          </div>

          {/* Sell Trigger */}
          <div className="bg-slate-800 p-4 rounded-lg">
            <div className="flex items-center mb-4 gap-2">
              <h2 className="text-lg font-medium">Sell Trigger</h2>
              <FaArrowLeft color='red' className='h-5 w-5' />
            </div>
            <textarea
              className="w-full h-32 bg-slate-700 rounded p-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter sell trigger conditions..."
              value={sellTrigger}
              onChange={(e) => setSellTrigger(e.target.value)}
            />
          </div>

          {/* Portfolio Management */}
          <div className="bg-slate-800 p-4 rounded-lg">
            <div className="flex items-center mb-4 gap-2">
              <h2 className="text-lg font-medium">Portfolio Management</h2>
              <FaArrowRight color='blue' className='h-4 w-4' />
            </div>
            <textarea
              className="w-full h-32 bg-slate-700 rounded p-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter portfolio management rules..."
              value={portfolioRules}
              onChange={(e) => setPortfolioRules(e.target.value)}
            />
          </div>
        </div>

        {/* Simulation Settings */}
        <div className="bg-slate-800 p-4 rounded-lg mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-medium">Simulation Settings</h2>
              <p className="text-sm text-gray-400">Configure your simulation parameters</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-center">
                <span className="mr-2">Tokens:</span>
                <input
                  type="number"
                  className="w-full md:w-20 bg-slate-700 rounded px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="100"
                />
              </div>
              <button
                onClick={handleSimulate}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <CiPlay1 className='m-1' />
                Simulate
              </button>
            </div>
          </div>
        </div>

        {/* Simulation Summary */}
        <div className="mb-8">
          <div className="flex items-center mb-4 gap-2">
            <FaClockRotateLeft color='purple'/>
            <h2 className="text-lg font-medium">Simulation Summary</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Performance Metrics */}
            <div className="bg-slate-800 p-4 rounded-lg h-60 flex items-center justify-center">
              <p className="text-gray-500">Stats and graphs will appear here after simulation</p>
            </div>

            {/* Simulation Orders */}
            <div className="bg-slate-800 p-4 rounded-lg h-60 flex items-center justify-center">
              <p className="text-gray-500">Trading orders will appear here after simulation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingSimulator;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { saveStrategy } from "../store/slices/strategySlice";

const StrategyBuilder = () => {
  const dispatch = useDispatch();
  const strategies = useSelector((state: RootState) => state.strategy.strategies);

  const [strategyName, setStrategyName] = useState("");
  
  const handleSave = () => {
    if (strategyName.trim() !== "") {
      dispatch(saveStrategy({ name: strategyName }));
      setStrategyName("");
    }
  };

  return (
    <div className="flex h-[calc(100vh-10rem)] bg-gray-100">
      <div className="w-1/5 bg-white m-4 p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">My Strategies</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          {strategies.map((strat, index) => (
            <li key={index}>{strat.name}</li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex flex-col items-center p-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-xl font-semibold text-gray-800 text-left">Strategy Builder</h2>
          
          <input
            type="text"
            value={strategyName}
            onChange={(e) => setStrategyName(e.target.value)}
            placeholder="New Strategy"
            className="w-full p-2 border rounded mb-4 mt-4"
          />

          <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
            <h3 className="text-md font-medium text-gray-700">Buy Trigger Conditions</h3>
            <p className="text-blue-600 cursor-pointer">+ Add Buy Condition</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
            <h3 className="text-md font-medium text-gray-700">Sell Trigger Conditions</h3>
            <p className="text-blue-600 cursor-pointer">+ Add Sell Condition</p>
          </div>

          <div className="text-right">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
            >
              <span>💾</span> Save Strategy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyBuilder;

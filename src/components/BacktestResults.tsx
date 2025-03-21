
const BacktestResults = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">📈 Backtest Results</h2>
        <div className="h-32 bg-gray-100 flex items-center justify-center rounded-md">
          <p className="text-gray-500">Performance Chart</p>
        </div>
        <div className="mt-4 text-sm text-gray-700">
          <p>Overall Returns: <span className="text-green-600">+24.5%</span></p>
          <p>Weekly Win Rate: <span className="text-green-600">68%</span></p>
          <p>Max Drawdown: <span className="text-red-600">-12.3%</span></p>
        </div>
      </div>
    );
  };
  
  export default BacktestResults;
  
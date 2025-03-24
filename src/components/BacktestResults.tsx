import { GoGraph } from "react-icons/go";

interface BacktestResultsProps {
  overallReturns: number;
  weeklyWinRate: number;
  maxDrawdown: number;
}

const BacktestResults: React.FC<BacktestResultsProps> = ({
  overallReturns = 24.6,
  weeklyWinRate = 68,
  maxDrawdown = -12.3
}) => {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6 gap-1">
        <GoGraph color="blue"/>
        <h2 className="text-lg font-semibold">Backtest Results</h2>
      </div>

      <div className="mb-6">
        <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center">
          <span className="text-gray-500">Performance Chart</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Overall Returns:</span>
          <span className={`font-semibold ${overallReturns >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {overallReturns >= 0 ? '+' : ''}{overallReturns}%
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Weekly Win Rate:</span>
          <span className="font-semibold">{weeklyWinRate}%</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Max Drawdown:</span>
          <span className="font-semibold text-red-600">{maxDrawdown}%</span>
        </div>
      </div>
    </div>
    );
  };
 
  export default BacktestResults;
  
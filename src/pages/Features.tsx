import FeatureList from "../components/FeatureList";
import BuildStrategy from "../components/BuildStrategy";
import BacktestResults from "../components/BacktestResults";
import GlobalMarkets from "../components/GlobalMarkets";

const Features = () => {
  return (
    <div className="p-10 min-h-screen bg-gray-100">

      <div className="max-w-6xl mb-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        <BuildStrategy />
        <BacktestResults 
        overallReturns={24.6} 
        weeklyWinRate={68} 
        maxDrawdown={-12.3} />
      </div>

      <GlobalMarkets />

      <FeatureList />
    </div>
  );
};

export default Features;

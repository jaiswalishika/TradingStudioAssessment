// src/pages/Features.tsx
import StrategyBuilder from "../components/StrategyBuilder";
import BacktestResults from "../components/BacktestResults";
import GlobalMarkets from "../components/GlobalMarkets";
import FeatureList from "../components/FeatureList";

const Features = () => {
  return (
    <div className="p-6 mt-6 min-h-screen bg-gray-100">

      <div className="max-w-6xl mb-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        <StrategyBuilder />
        <BacktestResults />
      </div>

      <GlobalMarkets />

      <FeatureList />
    </div>
  );
};

export default Features;

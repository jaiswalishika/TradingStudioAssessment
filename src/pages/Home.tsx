import FeaturesSection from "../components/FeaturesSection";
import ReturnsCalculator from "../components/ReturnsCalculator";

const Home = () => {
  return (
    <div className="p-4 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Dynamic Returns Calculator</h1>
          <p className="text-gray-600 mt-3 text-base md:text-lg">
            Calculate your potential returns with our advanced trading analytics platform. 
            Make informed decisions with real-time data and comprehensive analysis tools.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <ReturnsCalculator />
        </div>
      </div>
      <div className="w-full px-4 md:px-8">
        <FeaturesSection />
      </div>
    </div>
  );
};

export default Home;

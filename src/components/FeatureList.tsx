import { features } from "../data/featuresData";
  
  const FeatureList = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
            <span className="font-medium text-gray-700">{feature}</span>
            <span className="text-blue-500 font-semibold">{index + 1}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default FeatureList;
  
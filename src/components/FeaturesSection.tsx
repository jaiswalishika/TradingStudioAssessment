import { featuresData } from "../data/featuresData";

const FeaturesSection = () => {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Features</h2>
      <p className="text-gray-600 mt-2">Everything you need to succeed in trading</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
        {featuresData.map((feature, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center">
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

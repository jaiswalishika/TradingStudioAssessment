import { plans } from "../data/featuresData";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
      <p className="text-gray-600 mt-2 mb-12">Choose the perfect plan for your needs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg shadow-sm bg-white relative flex flex-col h-full ${
              plan.popular ? 'border-2 border-indigo-600' : 'border border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                Most Popular
              </div>
            )}
            
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="ml-1 text-gray-500">/month</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
            </div>
            
            <ul className="space-y-3 grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <TiTick color="indigo-600"/>
                  <span className="ml-2 text-sm text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button
              className={`w-full rounded-md px-4 py-2 mt-6 text-sm font-medium ${
                plan.popular
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-gray-50'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
      
      <p className="mt-10 text-sm text-center">
        <a href="/faq" className="text-indigo-600 hover:text-indigo-500">
          Have questions? Check our FAQ
        </a>
      </p>
    </div>
  );
};

export default Pricing;
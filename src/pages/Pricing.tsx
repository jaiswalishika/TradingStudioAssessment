import { plans } from "../data/featuresData"

const Pricing = () => {

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] mt-6 bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-2">Simple, transparent pricing</h2>
      <p className="text-gray-600 mb-6">Choose the perfect plan for your needs</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <div key={index} className={`p-6 border rounded-lg shadow-md bg-white ${plan.popular ? 'border-blue-500' : ''}`}>
            {plan.popular && <span className="px-3 py-1 text-xs bg-blue-500 text-white rounded-full">Most Popular</span>}
            <h3 className="text-xl font-semibold text-gray-800 mt-2">{plan.name}</h3>
            <p className="text-2xl font-bold text-gray-900">{plan.price}<span className="text-sm font-normal">/month</span></p>
            <p className="text-gray-500 mb-4">{plan.description}</p>
            <ul className="text-gray-700 text-sm mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">✔ {feature}</li>
              ))}
            </ul>
            <button className="w-full px-4 py-2 mt-2 border rounded-md text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
      
      <p className="mt-6 text-sm text-gray-600">Have questions? <a href="/faq" className="text-blue-600">Check our FAQ</a></p>
    </div>
  );
};

export default Pricing;

const Simulator = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] mt-4 bg-gray-100 p-6">
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Trading Simulator</h2>
        <p className="text-gray-600 mb-6">Test your trading strategies with our advanced simulation engine</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold text-gray-700">Buy Trigger →</h3>
            <p className="text-gray-500">Enter buy trigger conditions...</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold text-gray-700">Sell Trigger →</h3>
            <p className="text-gray-500">Enter sell trigger conditions...</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold text-gray-700">Portfolio Management →</h3>
            <p className="text-gray-500">Enter portfolio management rules...</p>
          </div>
        </div>

        <div className="p-4 border rounded mb-6 flex justify-between">
            <div>
                <h3 className="text-lg font-semibold text-gray-700">Simulation Settings</h3>
                <p className="text-gray-500">Configure your simulation parameters</p>
            </div>
          
            <div className="flex items-center mt-2">
                <span className="text-gray-700">Tokens:</span>
                <input type="text" className="ml-2 p-2 border rounded w-16 text-center" defaultValue="100" />
                <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Simulate
                </button>
            </div>
        </div>

        <div className="p-4 border rounded">
          <h3 className="text-lg font-semibold text-gray-700">Simulation Summary</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-4 border rounded">
              <h4 className="text-md font-semibold text-gray-600">Performance Metrics</h4>
              <p className="text-gray-500">Stats and graphs will appear here after simulation</p>
            </div>
            <div className="p-4 border rounded">
              <h4 className="text-md font-semibold text-gray-600">Simulation Orders</h4>
              <p className="text-gray-500">Trading orders will appear here after simulation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;

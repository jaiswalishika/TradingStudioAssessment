
const Portfolio = () => {
  return (
    <div className="flex h-[calc(100vh-10rem)] bg-gray-100">
     
      <div className="w-1/5 bg-white m-4 p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Portfolio Configurations</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
          <li className="cursor-pointer p-2 rounded bg-blue-200">config-001</li>
          <li className="cursor-pointer p-2 rounded">config-002</li>
        </ul>
      </div>

     
      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Portfolio Management Configuration</h2>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              + Add Group
            </button>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Groups</h3>
          
        
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">config-001</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-600 text-sm">Start Margin</label>
                <input type="text" className="w-full p-2 border rounded" defaultValue="0" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm">Per Order Value (Rule-001)</label>
                <input type="text" className="w-full p-2 border rounded" defaultValue="1000" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm">Max Holding Count (Rule-002)</label>
                <input type="text" className="w-full p-2 border rounded" defaultValue="10" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">config-002</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-600 text-sm">Start Margin</label>
                <input type="text" className="w-full p-2 border rounded" defaultValue="0" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm">Per Order Value (Rule-001)</label>
                <input type="text" className="w-full p-2 border rounded" defaultValue="2000" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm">Max Holding Count (Rule-002)</label>
                <input type="text" className="w-full p-2 border rounded" defaultValue="5" />
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-right">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

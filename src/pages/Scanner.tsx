
const Scanner = () => {
  return (
    <div className="flex h-[calc(100vh-10rem)] bg-gray-100">
     
      <div className="w-1/5 bg-white p-4 shadow-md rounded-lg m-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">My Scanners</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>scanner-001</li>
          <li>scanner-002</li>
          <li>scanner-003</li>
        </ul>
      </div>

     
      <div className="flex-1 p-4 pr-6 overflow-auto">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Build Scanner</h2>

          <div className="w-full bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
            <h3 className="text-md font-medium text-gray-700 mb-2 text-center">Group 1</h3>
            <div className="text-center text-gray-600 text-sm">Condition A</div>
            <div className="text-center text-gray-600 text-sm">Condition B</div>
          </div>

          <div className="w-full bg-gray-50 p-4 rounded-md border border-gray-200">
            <h3 className="text-md font-medium text-gray-700 mb-2 text-center">Group 2</h3>
            <div className="text-center text-gray-600 text-sm">Condition C</div>
            <div className="text-center text-gray-600 text-sm">Condition D</div>
          </div>

          <div className="mt-4 text-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save Scanner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanner;

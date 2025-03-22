const ReturnsCalculator = () => {
  return (
    <div className="mt-4 bg-white shadow-lg p-4 rounded-lg max-w-sm w-full mx-auto">
      <form className="space-y-2 ">
        <div className="flex flex-col items-start">
          <label className="block text-gray-600 text-sm font-medium m-1">Start Date</label>
          <input type="date" className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="flex flex-col items-start">
          <label className="block text-gray-600 text-sm font-medium m-1">End Date</label>
          <input type="date" className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="flex flex-col items-start">
          <label className="block text-gray-600 text-sm font-medium m-1">Initial Investment</label>
          <input type="number" className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="$ 10000" required />
        </div>
        <div className="flex flex-col items-start">
          <label className="block text-gray-600 text-sm font-medium m-1">Monthly Growth (%)</label>
          <input type="number" className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="5" required />
        </div>
      </form>
      <div className="flex flex-col-2 justify-between mt-4 p-4 bg-gray-100 rounded-md text-center text-md font-semibold text-gray-800">
        <div>Projected Value:</div> 
        <div className="text-blue-600">$11,025</div>
      </div>
    </div>
  );
};

export default ReturnsCalculator;
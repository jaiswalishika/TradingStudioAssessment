const ReturnsCalculator = () => {
  return (
    <div className="mt-4 bg-white shadow-lg p-4 rounded-lg max-w-sm w-full mx-auto">
      <form className="space-y-3">
        <div>
          <label className="block text-gray-600 text-sm font-medium">Start Date</label>
          <input type="date" className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label className="block text-gray-600 text-sm font-medium">End Date</label>
          <input type="date" className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label className="block text-gray-600 text-sm font-medium">Initial Investment</label>
          <input type="number" className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="$ 10000" required />
        </div>
        <div>
          <label className="block text-gray-600 text-sm font-medium">Monthly Growth (%)</label>
          <input type="number" className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="5" required />
        </div>
      </form>
      <div className="mt-4 p-4 bg-gray-100 rounded-md text-center text-md font-semibold text-gray-800">
        Projected Value: <span className="text-blue-600">$11,025</span>
      </div>
    </div>
  );
};

export default ReturnsCalculator;
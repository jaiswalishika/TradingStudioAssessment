import { useNavigate } from "react-router-dom";

const Strategy = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] bg-gray-100 p-6 overflow-hidden">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-center">
        <h2 className="text-xl font-semibold text-gray-800">Create a Strategy</h2>
        <p className="text-gray-600 text-sm mb-4">to Simulate Returns</p>
        
        <button
          onClick={() => navigate("/strategy-builder")}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-4"
        >
          BEGIN
        </button>
        
        <p className="text-gray-500 text-sm">Or test with built-in strategies...</p>
      </div>
    </div>
  );
};

export default Strategy;

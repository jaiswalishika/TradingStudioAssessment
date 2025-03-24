import { IoSettingsOutline } from "react-icons/io5";
import { FaSave } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="bg-gray-100 h-screen p-0">

      <div className="py-6 flex flex-col items-center">
        <div className="py-2 w-full max-w-3xl">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <IoSettingsOutline color="blue" className="h-5 w-5"/>
              <h2 className="text-2xl font-bold text-gray-800">
                Portfolio Management Configuration</h2>
            </div>
            
            <button className="flex items-center gap-2 px-2 py-2 bg-blue-600 text-white items-center justify-center rounded-md hover:bg-blue-700">
            <FaSave /> Save Changes
            </button>
          </div>
        </div>
      </div>


      <div className="px-6 flex flex-col items-center">


        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Groups</h2>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              + Add Group
            </button>
          </div>


          <div className="mb-4 border border-gray-300 p-2 rounded-sm">
            <div className="text-sm flex font-semibold text-gray-500 mb-2">config-001</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-start ">
                <label className="block text-gray-600 text-sm pb-1">Start Margin</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" defaultValue="0" />
              </div>
              <div className="flex flex-col items-start">
                <label className="block text-gray-600 text-sm pb-1">Per Order Value (Rule-001)</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" defaultValue="1000" />
              </div>
              <div className="flex flex-col items-start">
                <label className="block text-gray-600 text-sm pb-1">Max Holding Count (Rule-002)</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" defaultValue="10" />
              </div>
            </div>
          </div>

          <div className="mb-4 border border-gray-300 p-2 rounded-sm">
            <div className="text-sm flex font-semibold text-gray-500 mb-2">config-002</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-start ">
                <label className="block text-gray-600 text-sm pb-1">Start Margin</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" defaultValue="0" />
              </div>
              <div className="flex flex-col items-start">
                <label className="block text-gray-600 text-sm pb-1">Per Order Value (Rule-001)</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" defaultValue="2000" />
              </div>
              <div className="flex flex-col items-start">
                <label className="block text-gray-600 text-sm pb-1">Max Holding Count (Rule-002)</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" defaultValue="5" />
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

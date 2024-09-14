import React from "react";
import { useRouter } from "next/router";
import NavigationBar from "../../../utils/Navigation/NavigationBar";

function index() {
    const router = useRouter();
    const currentId = router.query.id;
    return (
        <div>
            
            <div className="flex w-full h-full overflow-x-hidden overflow-y-hidden">
                <div className="float-left w-[25%] h-screen flex border-r-2 dark:border-[#222222] border-[#777]">
                    <div className="w-full py-2 px-2 bg-[#111111] max-h-12">Chat Assistant</div>
                </div>
                <div className="float-right w-[75%] h-screen">
                <div className="h-screen flex flex-col bg-gray-900 text-white">
      {/* Header with smaller buttons */}
      <div className="flex justify-between p-2 border-b border-gray-700">
        <h1 className="text-lg font-semibold">Thread</h1>
        <div className="flex space-x-2">
          <button className="bg-gray-800 py-1 px-2 text-sm rounded hover:bg-gray-700">Create new session</button>
          <button className="bg-gray-800 py-1 px-2 text-sm rounded hover:bg-gray-700">Clear</button>
        </div>
      </div>

      {/* Center Icon Section with smaller dimensions */}
      <div className="flex-grow flex justify-center items-center">
        
      </div>

      {/* Footer with more compact layout */}
      <div className="border-t border-gray-700 p-2 flex flex-col items-center">
        <div className="flex space-x-2 mb-2">
          <button className="bg-gray-800 py-1 px-2 text-sm rounded hover:bg-gray-700">Prompt Examples</button>
          <button className="bg-gray-800 py-1 px-2 text-sm rounded hover:bg-gray-700">
            Can I get information about this document?
          </button>
          <button className="bg-gray-800 py-1 px-2 text-sm rounded hover:bg-gray-700">
            Answer this question from my videos
          </button>
        </div>
        
        {/* Smaller input area with buttons */}
        <div className="w-full flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type or paste a link here..."
            className="w-full bg-gray-800 text-white p-2 text-sm rounded-lg outline-none"
          />
          <button className="bg-gray-600 py-1 px-2 text-sm rounded hover:bg-gray-500">Get Code</button>
          <button className="bg-blue-600 py-1 px-2 text-sm rounded hover:bg-blue-500">Run</button>
        </div>
      </div>
    </div>
                </div>
            </div>
        </div>
    );
}

export default index;

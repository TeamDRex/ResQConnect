import React from 'react';

import CoastGaurd from '../assets/CoastGaurd.png'
import Ndrf from '../assets/Ndrf.png'
import IMD from '../assets/IMD.png'
import Firefighters from '../assets/pngwing.com.png'
import PoliceLogo from '../assets/police.png'
import Navy from '../assets/navy.png'
function App() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

      {/* Card 1 */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Ndrf} alt="NDRF" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">NDRF</div>
          <p className="text-gray-700 text-base">
          The NDRF is a specialized federal agency under the Ministry of Home Affairs that focuses on disaster response and rescue operations. It has multiple battalions stationed across India, each equipped to respond to various types of disasters, including earthquakes, floods, cyclones, and more.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Natural_Climaties</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Flood</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Help</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-64" src={CoastGaurd} alt="River" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Indian Coast Gaurd</div>
          <p className="text-gray-700 text-base">
          The Indian Coast Guard plays a crucial role in coastal disaster management, particularly during cyclones and tsunamis. They are responsible for search and rescue operations along the coastlines.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Natural_Climaties</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Flood</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Help</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-72" src={IMD} alt="Forest" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Indian Meteorological Department</div>
          <p className="text-gray-700 text-base">
          The IMD is responsible for monitoring and forecasting weather-related disasters such as cyclones, hurricanes, and monsoon rainfall. Timely warnings from the IMD help in disaster preparedness and evacuation efforts.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Natural_Climaties</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Flood</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Help</span>
        </div>
      </div>



      {/* section 2 */}


      {/* Card 1 */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Firefighters} alt="NDRF" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Fire Fighters</div>
          <p className="text-gray-700 text-base">
          Fire departments in various states also play a significant role in rescue and relief operations during natural disasters, including firefighting, flood rescue, and building collapses.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Natural_Climaties</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fire</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Help</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-64" src={PoliceLogo} alt="River" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Indian Police</div>
          <p className="text-gray-700 text-base">
          The Indian police force is responsible for maintaining law and order, preventing and investigating crimes, and ensuring the safety and security of citizens through its diligent and dedicated efforts.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Natural_Climaties</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Alert</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Help</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-64 h-64" src={Navy} alt="Forest" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Indian Navy</div>
          <p className="text-gray-700 text-base">
          The Indian Navy is a maritime defense force safeguarding India's interests at sea. It defends territorial waters, conducts humanitarian missions, and upholds national security with a strong fleet and professionalism.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Natural_Climaties</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Flood</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Help</span>
        </div>
      </div>
    </div>
  );
}

export default App;

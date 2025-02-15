// 'use client';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';

// const FleetStatus = () => {
//   const user = useSelector((state) => state.auth.user);

//   // Dummy Fleet Data (Can be replaced with Redux state)
//   const fleetData = [
//     { id: 'VH001', status: 'Available', vendor: 'Regional Vendor A', location: 'New York' },
//     { id: 'VH002', status: 'In Service', vendor: 'City Vendor B', location: 'San Francisco' },
//     { id: 'VH003', status: 'Under Maintenance', vendor: 'Super Vendor', location: 'Chicago' },
//     { id: 'VH004', status: 'Available', vendor: 'Regional Vendor C', location: 'Boston' },
//   ];

//   const [selectedStatus, setSelectedStatus] = useState('');

//   // Filter logic
//   const filteredFleet = selectedStatus
//     ? fleetData.filter((fleet) => fleet.status === selectedStatus)
//     : fleetData;

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6">Fleet Status</h1>

//       {/* Filter */}
//       <div className="mb-4">
//         <label className="mr-2 font-semibold">Filter by Status:</label>
//         <select
//           className="p-2 border rounded"
//           value={selectedStatus}
//           onChange={(e) => setSelectedStatus(e.target.value)}
//         >
//           <option value="">All</option>
//           <option value="Available">Available</option>
//           <option value="In Service">In Service</option>
//           <option value="Under Maintenance">Under Maintenance</option>
//         </select>
//       </div>

//       {/* Fleet Table */}
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Vehicle ID</th>
//             <th className="border p-2">Status</th>
//             <th className="border p-2">Vendor</th>
//             <th className="border p-2">Location</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredFleet.map((fleet) => (
//             <tr key={fleet.id} className="text-center">
//               <td className="border p-2">{fleet.id}</td>
//               <td
//                 className={`border p-2 ${
//                   fleet.status === 'Available' ? 'text-green-500' :
//                   fleet.status === 'In Service' ? 'text-yellow-500' :
//                   'text-red-500'
//                 }`}
//               >
//                 {fleet.status}
//               </td>
//               <td className="border p-2">{fleet.vendor}</td>
//               <td className="border p-2">{fleet.location}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FleetStatus;

'use client'

import { useSelector, useDispatch } from "react-redux";
import { updateVehicleStatus } from "@/redux/fleetSlice";

const FleetStatus = () => {
  const fleet = useSelector((state) => state.fleet.fleet);
  const vendors = useSelector((state) => state.fleet.vendors);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Fleet Status</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Vehicle ID</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Vendor</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {fleet.map((vehicle) => (
            <tr key={vehicle.id} className="text-center">
              <td className="border p-2">{vehicle.id}</td>
              <td className="border p-2">{vehicle.status}</td>
              <td className="border p-2">{vendors.find((v) => v?.id === vehicle?.vendorId)?.name || "Unknown"}</td>
              <td className="border p-2">{vehicle.location}</td>
              <td className="border p-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => dispatch(updateVehicleStatus({ vehicleId: vehicle.id, status: "Available" }))}
                >
                  Set Available
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FleetStatus;

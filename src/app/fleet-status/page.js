
// 'use client';

// import { useSelector, useDispatch } from 'react-redux';
// import React, { useState } from 'react';
// import { updateVehicleStatus, assignVehicleToDriver } from '@/redux/fleetSlice';

// const FleetStatus = () => {
//   const fleet = useSelector((state) => state.fleet.fleet);
//   const drivers = useSelector((state) => state.vendors.vendors.filter(v => v.level === 'DeployAssociate'));
//   const dispatch = useDispatch();
  
//   const [expandedVehicle, setExpandedVehicle] = useState(null);

//   const getStatusStyle = (status) => {
//     switch (status) {
//       case 'Available':
//         return 'text-green-600 bg-green-100';
//       case 'In Service':
//         return 'text-blue-600 bg-blue-100';
//       case 'Under Maintenance':
//         return 'text-orange-600 bg-orange-100';
//       case 'Deployed':
//         return 'text-red-600 bg-red-100';
//       default:
//         return 'text-gray-600 bg-gray-100';
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Fleet Status</h2>

//       <div className="flex justify-between mb-4 p-4 bg-gray-100 rounded-md">
//         <span className="text-lg">🚗 Total Vehicles: {fleet.length}</span>
//         <span className="text-green-600">🟢 Available: {fleet.filter(v => v.status === 'Available').length}</span>
//         <span className="text-blue-600">🔵 In Service: {fleet.filter(v => v.status === 'In Service').length}</span>
//         <span className="text-orange-600">🟠 Maintenance: {fleet.filter(v => v.status === 'Under Maintenance').length}</span>
//         <span className="text-red-600">🔴 Deployed: {fleet.filter(v => v.status === 'Deployed').length}</span>
//       </div>

//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Vehicle ID</th>
//             <th className="border p-2">Status</th>
//             <th className="border p-2">Location</th>
//             <th className="border p-2">Assigned Driver</th>
//             <th className="border p-2">Actions</th>
//             <th className="border p-2">Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fleet.map((vehicle) => (
//             <React.Fragment key={vehicle.id}>
//               <tr className="text-center">
//                 <td className="border p-2">{vehicle.id}</td>
//                 <td className={`border p-2 px-4 py-1 rounded-md font-semibold ${getStatusStyle(vehicle.status)}`}>
//                   {vehicle.status}
//                 </td>
//                 <td className="border p-2">{vehicle.location}</td>
//                 <td className="border p-2">{drivers.find(d => d.id === vehicle.assignedTo)?.name || '-'}</td>
//                 <td className="border p-2">
//                   {vehicle.status === 'Available' && (
//                     <select
//                       className="border p-2 rounded"
//                       onChange={(e) =>{
//                         const selectedDriver = drivers.find(d => d.id === parseInt(e.target.value));
//                         if (selectedDriver) {
//                           dispatch(assignVehicleToDriver({
//                             vehicleId: vehicle.id,
//                             driverId: selectedDriver.id,
//                             driverName: selectedDriver.name, // Send name
//                           }));
//                         }
//                       }
//                       }
//                     >
//                       <option value="">Assign to Driver</option>
//                       {drivers.filter(d => !fleet.some(v => v.assignedTo === d.id)).map((driver) => (
//                         <option key={driver.id} value={driver.id}>
//                           {driver.name}
//                         </option>
//                       ))}
//                     </select>
//                   )}
//                 </td>
//                 <td className="border p-2">
//                   <button
//                     className="bg-gray-300 text-black px-2 py-1 rounded"
//                     onClick={() => setExpandedVehicle(expandedVehicle === vehicle.id ? null : vehicle.id)}
//                   >
//                     {expandedVehicle === vehicle.id ? 'Hide Details' : 'View Details'}
//                   </button>
//                 </td>
//               </tr>
//               {expandedVehicle === vehicle.id && (
//                 <tr className="bg-gray-100">
//                   <td colSpan="6" className="p-4">
//                     <div className="flex flex-col">
//                       <strong>📌 Past Bookings:</strong>
//                       <ul className="list-disc pl-5">
//                         {vehicle.history?.map((record, index) => (
//                           <li key={index}>{record}</li>
//                         )) || <li>No history available</li>}
//                       </ul>
//                       <strong>🛠 Maintenance Status:</strong>
//                       <p>{vehicle.maintenance || 'No pending maintenance'}</p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>

//       <h3 className="text-xl font-semibold mt-6">Drivers Status </h3>
      
//       <div className="flex justify-between mb-4 p-4 bg-gray-100 rounded-md">
//   <span className="text-lg">👨‍✈️ Total Drivers: {drivers.length}</span>
//   <span>📌 Unassigned: {drivers.filter(d => !fleet.some(v => v.assignedTo === d.id)).length}</span>
//   <span>🚗 Assigned: {drivers.filter(d => fleet.some(v => v.assignedTo === d.id)).length}</span>
// </div>

//       <table className="w-full border-collapse border border-gray-300 mt-2">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Driver ID</th>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Assigned Vehicle</th>
//           </tr>
//         </thead>
//         <tbody>
//           {drivers.map((driver) => (
//             <tr key={driver.id} className="text-center">
//               <td className="border p-2">{driver.id}</td>
//               <td className="border p-2">{driver.name}</td>
//               <td className="border p-2">{fleet.find(v => v.assignedTo === driver.id)?.id || 'NA'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FleetStatus;

'use client';

import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { assignVehicleToRegionalVendor } from '@/redux/fleetSlice';

const FleetStatus = () => {
  const fleet = useSelector((state) => state.fleet?.fleet || []);
  const regionalVendors = useSelector((state) => state.fleet?.regionalVendors || []);
  const dispatch = useDispatch();
  
  const [expandedVehicle, setExpandedVehicle] = useState(null);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Available': return 'text-green-600 bg-green-100';
      case 'In Service': return 'text-blue-600 bg-blue-100';
      case 'Under Maintenance': return 'text-orange-600 bg-orange-100';
      case 'Deployed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Fleet Status</h2>

      <div className="flex justify-between mb-4 p-4 bg-gray-100 rounded-md">
        <span className="text-lg">🚗 Total Vehicles: {fleet.length}</span>
        <span className="text-green-600">🟢 Available: {fleet?.filter(v => v.status === 'Available').length}</span>
        <span className="text-blue-600">🔵 In Service: {fleet?.filter(v => v.status === 'In Service').length}</span>
        <span className="text-orange-600">🟠 Maintenance: {fleet?.filter(v => v.status === 'Under Maintenance').length}</span>
        <span className="text-red-600">🔴 Deployed: {fleet?.filter(v => v.status === 'Deployed').length}</span>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Vehicle ID</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Assigned Regional Vendor</th>
            <th className="border p-2">Actions</th>
            <th className="border p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {fleet?.map((vehicle) => (
            <React.Fragment key={vehicle.id}>
              <tr className="text-center">
                <td className="border p-2">{vehicle.id}</td>
                <td className={`border p-2 px-4 py-1 rounded-md font-semibold ${getStatusStyle(vehicle.status)}`}>
                  {vehicle.status}
                </td>
                <td className="border p-2">{vehicle.location}</td>
                <td className="border p-2">
                  {regionalVendors?.find(v => v.id === vehicle.assignedTo)?.name || 'Unassigned'}
                </td>
                <td className="border p-2">
                  {vehicle.status === 'Available' && (
                    <select
                      className="border p-2 rounded"
                      onChange={(e) => {
                        const selectedVendorId = e.target.value;
                        if (selectedVendorId) {
                          dispatch(assignVehicleToRegionalVendor({
                            vehicleId: vehicle.id,
                            regionalVendorId: selectedVendorId
                          }));
                        }
                      }}
                    >
                      <option value="">Assign to Regional Vendor</option>
                      {regionalVendors?.map((vendor) => (
                        <option key={vendor.id} value={vendor.id}>
                          {vendor.name}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
                <td className="border p-2">
                  <button
                    className="bg-gray-300 text-black px-2 py-1 rounded"
                    onClick={() => setExpandedVehicle(expandedVehicle === vehicle.id ? null : vehicle.id)}
                  >
                    {expandedVehicle === vehicle.id ? 'Hide Details' : 'View Details'}
                  </button>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6">Regional Vendors Summary</h3>
      
      <div className="flex justify-between mb-4 p-4 bg-gray-100 rounded-md">
        <span className="text-lg">🏢 Total Regional Vendors: {regionalVendors.length}</span>
      </div>

      <table className="w-full border-collapse border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Regional Vendor ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Assigned Vehicles</th>
          </tr>
        </thead>
        <tbody>
          {regionalVendors?.map((vendor) => (
            <tr key={vendor.id} className="text-center">
              <td className="border p-2">{vendor.id}</td>
              <td className="border p-2">{vendor.name}</td>
              <td className="border p-2">{vendor.vehicles.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FleetStatus;

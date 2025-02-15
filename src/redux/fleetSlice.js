


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   fleet: [
//     { id: "VH001", status: "Available", assignedTo: null, location: "Bengaluru, Karnataka" },
//     { id: "VH002", status: "In Service", assignedTo: null, location: "Hyderabad, Telangana" },
//     { id: "VH003", status: "Under Maintenance", assignedTo: null, location: "Chennai, Tamil Nadu" },
//     { id: "VH004", status: "Deployed", assignedTo: "RV002", location: "Vijayawada, Andhra Pradesh" },
//     { id: "VH005", status: "Available", assignedTo: null, location: "Kochi, Kerala" },
//     { id: "VH006", status: "Deployed", assignedTo: "RV001", location: "Mysuru, Karnataka" },
//     { id: "VH007", status: "In Service", assignedTo: null, location: "Visakhapatnam, Andhra Pradesh" },
//     { id: "VH008", status: "Available", assignedTo: null, location: "Coimbatore, Tamil Nadu" },
//     { id: "VH009", status: "Deployed", assignedTo: "RV003", location: "Bangalore, Karnataka" },
//     { id: "VH010", status: "Available", assignedTo: null, location: "Kachiguda, Telangana" },
//     { id: "VH011", status: "Under Maintenance", assignedTo: null, location: "Madurai, Tamil Nadu" },
//     { id: "VH012", status: "In Service", assignedTo: null, location: "Pune, Maharashtra" },
//     { id: "VH013", status: "Available", assignedTo: null, location: "Nashik, Maharashtra" },
//     { id: "VH014", status: "Deployed", assignedTo: "RV001", location: "Mangaluru, Karnataka" },
//     { id: "VH015", status: "In Service", assignedTo: null, location: "Nagpur, Maharashtra" },
//     { id: "VH016", status: "Available", assignedTo: null, location: "Thiruvananthapuram, Kerala" },
//     { id: "VH017", status: "Deployed", assignedTo: "RV002", location: "Warangal, Telangana" },
//     { id: "VH018", status: "Under Maintenance", assignedTo: null, location: "Ahmedabad, Gujarat" },
//     { id: "VH019", status: "Available", assignedTo: null, location: "Surat, Gujarat" },
//     { id: "VH020", status: "In Service", assignedTo: null, location: "Vadodara, Gujarat" }
// ],

// regionalVendors: [
//     { id: "RV001", name: "Regional Vendor 1", vehicles: ["VH006", "VH014"] },
//     { id: "RV002", name: "Regional Vendor 2", vehicles: ["VH004", "VH017"] },
//     { id: "RV003", name: "Regional Vendor 3", vehicles: ["VH009"] },
// ]

// };

// const fleetSlice = createSlice({
//   name: "fleet",
//   initialState,
//   reducers: {
//     updateVehicleStatus: (state, action) => {
//       const { vehicleId, status } = action.payload;
//       const vehicle = state.fleet.find((v) => v.id === vehicleId);
//       if (vehicle) vehicle.status = status;
//     },

//     assignVehicleToRegionalVendor: (state, action) => {
//       const { vehicleId, regionalVendorId } = action.payload;
//       const vehicle = state.fleet.find((v) => v.id === vehicleId);

//       if (vehicle) {
//         // Remove vehicle from previous vendor if reassigned
//         state.regionalVendors.forEach((vendor) => {
//           vendor.vehicles = vendor.vehicles.filter((v) => v !== vehicleId);
//         });

//         // Assign vehicle to new Regional Vendor
//         vehicle.assignedTo = regionalVendorId;
//         vehicle.status = "Deployed";

//         // Find or create the regional vendor entry
//         let vendor = state.regionalVendors.find((v) => v.id === regionalVendorId);
//         if (vendor) {
//           vendor.vehicles.push(vehicleId);
//         } else {
//           state.regionalVendors.push({ id: regionalVendorId, name: `Regional Vendor ${regionalVendorId}`, vehicles: [vehicleId] });
//         }
//       }
//     },

//     addNewVehicle: (state, action) => {
//       state.fleet.push(action.payload);
//     },
//   },
// });

// export const { updateVehicleStatus, assignVehicleToRegionalVendor, addNewVehicle } = fleetSlice.actions;
// export default fleetSlice.reducer;






import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fleet: [
    { id: "VH001", status: "Available", assignedTo: null, location: "Bengaluru, Karnataka" },
    { id: "VH002", status: "In Service", assignedTo: null, location: "Hyderabad, Telangana" },
    { id: "VH003", status: "Under Maintenance", assignedTo: null, location: "Chennai, Tamil Nadu" },
    { id: "VH004", status: "Deployed", assignedTo: "RV002", location: "Vijayawada, Andhra Pradesh" },
    { id: "VH005", status: "Available", assignedTo: null, location: "Kochi, Kerala" },
    { id: "VH006", status: "Deployed", assignedTo: "RV001", location: "Mysuru, Karnataka" },
    { id: "VH007", status: "In Service", assignedTo: null, location: "Visakhapatnam, Andhra Pradesh" },
    { id: "VH008", status: "Available", assignedTo: null, location: "Coimbatore, Tamil Nadu" },
    { id: "VH009", status: "Deployed", assignedTo: "RV003", location: "Bangalore, Karnataka" },
    { id: "VH010", status: "Available", assignedTo: null, location: "Kachiguda, Telangana" },
    { id: "VH011", status: "Under Maintenance", assignedTo: null, location: "Madurai, Tamil Nadu" },
    { id: "VH012", status: "In Service", assignedTo: null, location: "Pune, Maharashtra" },
    { id: "VH013", status: "Available", assignedTo: null, location: "Nashik, Maharashtra" },
    { id: "VH014", status: "Available", assignedTo: "RV001", location: "Mangaluru, Karnataka" },
    { id: "VH015", status: "In Service", assignedTo: null, location: "Nagpur, Maharashtra" },
    { id: "VH016", status: "Available", assignedTo: null, location: "Thiruvananthapuram, Kerala" },
    { id: "VH017", status: "Deployed", assignedTo: "RV002", location: "Warangal, Telangana" },
    { id: "VH018", status: "Under Maintenance", assignedTo: null, location: "Ahmedabad, Gujarat" },
    { id: "VH019", status: "Available", assignedTo: null, location: "Surat, Gujarat" },
    { id: "VH020", status: "In Service", assignedTo: null, location: "Vadodara, Gujarat" }
],

  regionalVendors: [
    { id: 2, name: "Pranav", vehicles: ["VH006", "VH014"] }, // Changed from "RV001" → 2
    { id: 3, name: "Vinay", vehicles: ["VH004", "VH017"] }, // Changed from "RV002" → 3
    { id: 4, name: "Tirupathi Reddy", vehicles: ["VH009"] }, // Changed from "RV003" → 4
  ],
};

const fleetSlice = createSlice({
  name: "fleet",
  initialState,
  reducers: {
    updateVehicleStatus: (state, action) => {
      const { vehicleId, status } = action.payload;
      const vehicle = state.fleet.find((v) => v.id === vehicleId);
      if (vehicle) vehicle.status = status;
    },

    assignVehicleToRegionalVendor: (state, action) => {
      const { vehicleId, regionalVendorId } = action.payload;
      const vehicle = state.fleet.find((v) => v.id === vehicleId);

      if (vehicle) {
        // Remove vehicle from previous vendor if reassigned
        state.regionalVendors.forEach((vendor) => {
          vendor.vehicles = vendor.vehicles.filter((v) => v !== vehicleId);
        });

        // Assign vehicle to new Regional Vendor
        vehicle.assignedTo = regionalVendorId;
        vehicle.status = "Deployed";

        // Find or create the regional vendor entry
        let vendor = state.regionalVendors.find((v) => v.id === regionalVendorId);
        if (vendor) {
          vendor.vehicles.push(vehicleId);
        } else {
          state.regionalVendors.push({ id: regionalVendorId, name: `Regional Vendor ${regionalVendorId}`, vehicles: [vehicleId] });
        }
      }
    },

    addNewVehicle: (state, action) => {
      state.fleet.push(action.payload);
    },
  },
});

export const { updateVehicleStatus, assignVehicleToRegionalVendor, addNewVehicle } = fleetSlice.actions;
export default fleetSlice.reducer;

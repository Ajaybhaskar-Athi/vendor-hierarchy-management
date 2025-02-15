import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fleet: [
    { id: "VH001", status: "Available", vendorId: 2, location: "Bengaluru, Karnataka" },
    { id: "VH002", status: "In Service", vendorId: 5, location: "Hyderabad, Telangana" },
    { id: "VH003", status: "Under Maintenance", vendorId: 7, location: "Chennai, Tamil Nadu" },
    { id: "VH004", status: "Available", vendorId: 8, location: "Vijayawada, Andhra Pradesh" },
    { id: "VH005", status: "Available", vendorId: 11, location: "Kochi, Kerala" },
    { id: "VH006", status: "Deployed", vendorId: 9, location: "Mysuru, Karnataka" },
    { id: "VH007", status: "In Service", vendorId: 10, location: "Visakhapatnam, Andhra Pradesh" },
    { id: "VH008", status: "Available", vendorId: 13, location: "Coimbatore, Tamil Nadu" },
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
    assignVendorToVehicle: (state, action) => {
      const { vehicleId, vendorId } = action.payload;
      const vehicle = state.fleet.find((v) => v.id === vehicleId);
      if (vehicle) vehicle.vendorId = vendorId;
    },
    addNewVehicle: (state, action) => {
      state.fleet.push(action.payload);
    },
  },
});

export const { updateVehicleStatus, assignVendorToVehicle, addNewVehicle } = fleetSlice.actions;
export default fleetSlice.reducer;

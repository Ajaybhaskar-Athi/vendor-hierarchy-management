import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from "./vendorSlice";
import authReducer from "./authSlice";
import permissionsReducer from "./permissionSlice";
import fleetReducer from "./fleetSlice";
import regionalFleetSlice from "./regionalFleetSlice"

export const store = configureStore({
  reducer: {
    vendors: vendorReducer,
    auth: authReducer,
    permissions: permissionsReducer,
    fleet: fleetReducer,
    regionalFleet: regionalFleetSlice,
  },
});

export default store;

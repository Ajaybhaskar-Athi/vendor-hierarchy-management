import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from "./vendorSlice";
import authReducer from "./authSlice";
import permissionsReducer from "./permissionSlice";
import fleetReducer from "./fleetSlice";

export const store = configureStore({
  reducer: {
    vendors: vendorReducer,
    auth: authReducer,
    permissions: permissionsReducer,
    fleet: fleetReducer,
  },
});

export default store;

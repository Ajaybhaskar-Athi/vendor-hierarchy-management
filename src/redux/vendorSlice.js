
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    vendors: [
        // Super Vendor (Top Level)
        { id: 1, name: "Raghu", email: "raghu@supervendor.com", level: "Super", parentId: null, shortForm: "R" },

        // Regional Vendors (Parent: Super Vendor)
        { id: 2, name: "Pranav", email: "pranav@regional.com", level: "Regional", parentId: 1, shortForm: "P" },
        { id: 3, name: "Vinay", email: "vinay@regional.com", level: "Regional", parentId: 1, shortForm: "V" },
        { id: 4, name: "Tirupathi Reddy", email: "tirupathi@regional.com", level: "Regional", parentId: 1, shortForm: "TR" },


        // City Vendors (Parent: Regional Vendors)
        { id: 5, name: "Akshaya", email: "akshaya@city.com", level: "City", parentId: 2, shortForm: "A" },
        { id: 6, name: "Hemanth", email: "hemanth@city.com", level: "City", parentId: 2, shortForm: "H" },

        { id: 7, name: "Prasad", email: "prasad@city.com", level: "City", parentId: 3, shortForm: "P" },
        { id: 8, name: "Chandu", email: "chandu@city.com", level: "City", parentId: 3, shortForm: "C" },
        { id: 11, name: "PawanKalyan", email: "kalyan@city.com", level: "City", parentId: 4, shortForm: "PK" },


        // Local Vendors (Parent: City Vendors)
        { id: 9, name: "Surya", email: "surya@local.com", level: "Local", parentId: 5, shortForm: "S" },
        { id: 10, name: "Devara", email: "devara@local.com", level: "Local", parentId: 7, shortForm: "D" },
    ],
};



const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    addVendor: (state, action) => {
      const newVendor = {
        id: state.vendors.length ? state.vendors[state.vendors.length - 1].id + 1 : 1, // Auto-increment ID
        name: action.payload.name,
        email: action.payload.email,
        level: action.payload.level,
        parentId: action.payload.parentId,
      };
      state.vendors.push(newVendor);
    },
    editVendor: (state, action) => {
        const { id, name, email, shortForm } = action.payload;
        const vendorIndex = state.vendors.findIndex((v) => v.id === id);
        if (vendorIndex !== -1) {
          state.vendors[vendorIndex] = {
            ...state.vendors[vendorIndex],
            name,
            email,
            shortForm,
          };
        }
      },
      moveVendor: (state, action) => {
        const { id, newParentId } = action.payload;
        console.log("In reducer: ",id,newParentId);
        const vendorIndex = state.vendors.findIndex((v) => v.id === id);
        if (vendorIndex !== -1) {
          state.vendors[vendorIndex].parentId = newParentId;

        }
        console.log("After operation: ",state.vendors[vendorIndex]);
      },
  },
});

export const { addVendor,editVendor,moveVendor } = vendorsSlice.actions;
export default vendorsSlice.reducer;

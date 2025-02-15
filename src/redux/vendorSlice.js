
// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     vendors: [
//         // Super Vendor (Top Level)
//         { id: 1, name: "Ajay Bhaskar", email: "ajay@supervendor.com", level: "Super", parentId: null, shortForm: "AB" },

//         // Regional Vendors (Parent: Super Vendor)
//         { id: 2, name: "Pranav", email: "pranav@regional.com", level: "Regional", parentId: 1, shortForm: "P" },
//         { id: 3, name: "Vinay", email: "vinay@regional.com", level: "Regional", parentId: 1, shortForm: "V" },
//         { id: 4, name: "Tirupathi Reddy", email: "tirupathi@regional.com", level: "Regional", parentId: 1, shortForm: "TR" },
//         // { id:14, name: "Suhas", email: "suhas@regional.com", level: "Regional", parentId: 1, shortForm: "S" },
        



//         // City Vendors (Parent: Regional Vendors)
//         { id: 5, name: "Akshaya", email: "akshaya@city.com", level: "City", parentId: 2, shortForm: "A" },
//         { id: 6, name: "Hemanth", email: "hemanth@city.com", level: "City", parentId: 2, shortForm: "H" },
//         // { id: 16, name: "sai", email: "sai@city.com", level: "City", parentId: 2, shortForm: "S" },


//         { id: 7, name: "Prasad", email: "prasad@city.com", level: "City", parentId: 4, shortForm: "P" },
//         { id: 8, name: "Chandu", email: "chandu@city.com", level: "City", parentId: 3, shortForm: "C" },
//         { id: 11, name: "PawanKalyan", email: "kalyan@city.com", level: "City", parentId: 4, shortForm: "PK" },


//         // Local Vendors (Parent: City Vendors)
//         { id: 9, name: "Surya", email: "surya@local.com", level: "Local", parentId: 5, shortForm: "S" },
//         { id: 10, name: "Raja", email: "raja@local.com", level: "Local", parentId: 7, shortForm: "D" },
//         // { id: 12, name: "Dasaradha", email: "dasaradha@local.com", level: "Local", parentId: 5, shortForm: "D" },
//         { id: 13, name: "Lucky", email: "lucky@deployassociate.com", level: "DeployAssociate", parentId: 10, shortForm: "D" },

//     ],
// };



// const vendorsSlice = createSlice({
//   name: "vendors",
//   initialState,
//   reducers: {
//     addVendor: (state, action) => {
//       const newVendor = {
//         id: state.vendors.length ? state.vendors[state.vendors.length - 1].id + 1 : 1, // Auto-increment ID
//         name: action.payload.name,
//         email: action.payload.email,
//         level: action.payload.level,
//         parentId: action.payload.parentId,
//         shortForm: action.payload.shortForm
//       };
//       state.vendors.push(newVendor);
//     },
//     editVendor: (state, action) => {
//         const { id, name, email, shortForm } = action.payload;
//         const vendorIndex = state.vendors.findIndex((v) => v.id === id);
//         if (vendorIndex !== -1) {
//           state.vendors[vendorIndex] = {
//             ...state.vendors[vendorIndex],
//             name,
//             email,
//             shortForm,
//           };
//         }
//       },
//       moveVendor: (state, action) => {
//         const { id, newParentId } = action.payload;
//         console.log("In reducer: ",id,newParentId);
//         const vendorIndex = state.vendors.findIndex((v) => v.id === id);
//         if (vendorIndex !== -1) {
//           state.vendors[vendorIndex].parentId = newParentId;

//         }
//         console.log("After operation: ",state.vendors[vendorIndex]);
//       },
//   },
// });

// export const { addVendor,editVendor,moveVendor } = vendorsSlice.actions;
// export default vendorsSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendors: [
    // Super Vendor (Top Level)
    { id: 1, name: "Ajay Bhaskar", email: "ajay@supervendor.com", level: "Super", parentId: null, shortForm: "AB" },

    // Regional Vendors
    { id: 2, name: "Pranav", email: "pranav@regional.com", level: "Regional", parentId: 1, shortForm: "P" },
    { id: 3, name: "Vinay", email: "vinay@regional.com", level: "Regional", parentId: 1, shortForm: "V" },
    { id: 4, name: "Tirupathi Reddy", email: "tirupathi@regional.com", level: "Regional", parentId: 1, shortForm: "TR" },

    // City Vendors
    { id: 5, name: "Akshaya", email: "akshaya@city.com", level: "City", parentId: 2, shortForm: "A" },
    // { id: 6, name: "Hemanth", email: "hemanth@city.com", level: "City", parentId: 2, shortForm: "H" },
    { id: 7, name: "Prasad", email: "prasad@city.com", level: "City", parentId: 4, shortForm: "P" },
    { id: 8, name: "Chandu", email: "chandu@city.com", level: "City", parentId: 3, shortForm: "C" },
    { id: 11, name: "PawanKalyan", email: "kalyan@city.com", level: "City", parentId: 4, shortForm: "PK" },

    // Local Vendors
    // { id: 9, name: "Surya", email: "surya@local.com", level: "Local", parentId: 5, shortForm: "S" },
    { id: 10, name: "Raja", email: "raja@local.com", level: "Local", parentId: 7, shortForm: "D" },
    { id: 13, name: "Driver 1", email: "driver1@deployassociate.com", level: "DeployAssociate", parentId: 10, shortForm: "D1" },
    { id: 14, name: "Driver 2", email: "driver2@deployassociate.com", level: "DeployAssociate", parentId: 10, shortForm: "D2" },
    { id: 15, name: "Driver 3", email: "driver3@deployassociate.com", level: "DeployAssociate", parentId: 16, shortForm: "D3" },

    { id: 16, name: "Local Vendor", email: "lv@local.com", level: "Local", parentId: 5, shortForm: "LV" },

    { id: 17, name: "Driver Ashok", email: "driverAshok@deployassociate.com", level: "DeployAssociate", parentId: 16, shortForm: "D3" },


    // { id: 18, name: "LocVendor", email: "lv2@local.com", level: "Local", parentId: 6, shortForm: "LV2" },


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
        shortForm: action.payload.shortForm,
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
      const vendorIndex = state.vendors.findIndex((v) => v.id === id);
      if (vendorIndex !== -1) {
        state.vendors[vendorIndex].parentId = newParentId;
      }
    },

    deleteVendor: (state, action) => {
      const vendorId = action.payload;
      
      // Ensure child vendors are also removed
      const removeVendorAndChildren = (id) => {
        state.vendors = state.vendors.filter(vendor => vendor.id !== id);
        const childVendors = state.vendors.filter(v => v.parentId === id);
        childVendors.forEach(child => removeVendorAndChildren(child.id));
      };

      removeVendorAndChildren(vendorId);
    }
  },
});

export const { addVendor, editVendor, moveVendor, deleteVendor } = vendorsSlice.actions;
export default vendorsSlice.reducer;

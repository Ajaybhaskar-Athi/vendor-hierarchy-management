// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import { useDispatch ,useSelector} from "react-redux";
// import { editVendor } from "@/redux/vendorSlice";

// const EditVendorDialog = ({ open, onOpenChange, vendor }) => {
//     const { vendors } = useSelector((state) => state.vendors);
//     console.log(vendors[vendor.parentId]);
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     shortForm: vendor.shortForm,
//     name: vendor.name,
//     email: vendor.email,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     dispatch(editVendor({ id: vendor.id, ...formData })); // Dispatch Redux action
//     onOpenChange(false); // Close dialog
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent>
//         <DialogTitle>Edit Vendor</DialogTitle>

//         <div className="flex flex-col gap-4">
//         {
//             vendor.parentId? 
//           <Input name="parentName" value={vendors[vendor.parentId].name} className="disabled:" /> :null 

//         }
//           <Input name="shortForm" value={formData.shortForm} onChange={handleChange} placeholder="Short Form" />
//           <Input name="name" value={formData.name} onChange={handleChange} placeholder="Vendor Name" />
//           <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

//           <Button onClick={handleSave}>Save</Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EditVendorDialog;


import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editVendor } from "@/redux/vendorSlice";

const EditVendorDialog = ({ open, onOpenChange, vendor }) => {
  const dispatch = useDispatch();
  const { vendors } = useSelector((state) => state.vendors);

  const parentVendor = vendors.find((v) => v.id === vendor.parentId);

  const [formData, setFormData] = useState({
    shortForm: vendor.shortForm,
    name: vendor.name,
    email: vendor.email,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(editVendor({ id: vendor.id, ...formData }));
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>Edit Vendor</DialogTitle>
        <div className="flex flex-col gap-4">
          {parentVendor && (
            <div>
              <label className="text-sm font-medium">Parent Vendor</label>
              <Input value={parentVendor.name} disabled className="bg-gray-100" />
            </div>
          )}

          <div>
            <label className="text-sm font-medium">Short Form</label>
            <Input name="shortForm" value={formData.shortForm} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Vendor Name</label>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <Input name="email" value={formData.email} onChange={handleChange} />
          </div>

          <Button onClick={handleSave}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditVendorDialog;

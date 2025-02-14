
// "use client";
// import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
// import { addVendor } from "@/redux/vendorSlice";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// // Recursive Component to Display Vendor Hierarchy
// const VendorNode = ({ vendor }) => {
//   const [expanded, setExpanded] = useState(true);
//   const { vendors } = useSelector((state) => state.vendors);

//   // Get Children Vendors
//   const children = vendors.filter((v) => v.parentId === vendor.id);

//   return (
//     <div className="ml-4 border-l pl-4">
//       <div
//         className="cursor-pointer font-semibold text-gray-800 flex items-center"
//         onClick={() => setExpanded(!expanded)}
//       >
//         {children.length > 0 && (expanded ? "▼" : "▶")} {vendor.name} ({vendor.level}) - {vendor.email}
//       </div>
//       {expanded && children.length > 0 && (
//         <div className="ml-4 border-l pl-4">
//           {children.map((child) => (
//             <VendorNode key={child.id} vendor={child} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default function VendorsPage() {
//   const dispatch = useDispatch();
//   const { vendors } = useSelector((state) => state.vendors);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [level, setLevel] = useState("Regional");
//   const [parentId, setParentId] = useState("");

//   // Handle Vendor Addition
//   const handleAddVendor = () => {
//     if (!name || !email) return;
//     dispatch(addVendor({ 
//       name, 
//       email, 
//       level, 
//       parentId: parentId === "none" ? null : parentId 
//     }));
//     setName("");
//     setEmail("");
//     setLevel("Regional");
//     setParentId("none");
//   };
  

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold">Vendor Management</h1>
      
//       {/* Add Vendor Form */}
//       <Card className="my-4 p-4">
//         <Input type="text" placeholder="Vendor Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-2" />
//         <Input type="email" placeholder="Vendor Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2" />
//         <Select onValueChange={setLevel}>
//           <SelectTrigger className="mb-2"><SelectValue placeholder="Select Level" /></SelectTrigger>
//           <SelectContent>
//             <SelectItem value="Super">Super</SelectItem>
//             <SelectItem value="Regional">Regional</SelectItem>
//             <SelectItem value="City">City</SelectItem>
//             <SelectItem value="Local">Local</SelectItem>
//           </SelectContent>
//         </Select>
//         <Select onValueChange={setParentId}>
//           <SelectTrigger className="mb-2"><SelectValue placeholder="Select Parent Vendor" /></SelectTrigger>
//           <SelectContent>
//             <SelectItem value="none">No Parent (Super Vendor)</SelectItem>

//             {vendors.map((vendor) => (
//               <SelectItem key={vendor.id} value={vendor.id}>
//                 {vendor.name} ({vendor.level})
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//         <Button onClick={handleAddVendor} className="mt-2">Add Vendor</Button>
//       </Card>
      
//       {/* Display Vendor Hierarchy */}
//       <Card className="mt-4 p-4">
//         {vendors.filter((v) => !v.parentId).map((vendor) => (
//           <VendorNode key={vendor.id} vendor={vendor} />
//         ))}
//       </Card>
//     </div>
//   );
// }
"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addVendor } from "@/redux/vendorSlice";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Recursive Component to Display Vendor Hierarchy
const VendorNode = ({ vendor }) => {
  const [expanded, setExpanded] = useState(true);
  const { vendors } = useSelector((state) => state.vendors);

  // Get Children Vendors
  const children = vendors.filter((v) => v.parentId === vendor.id);

  return (
    <div className="ml-4 border-l pl-4">
      <div
        className="cursor-pointer font-semibold text-gray-800 flex items-center"
        onClick={() => setExpanded(!expanded)}
      >
        {children.length > 0 && (expanded ? "▼" : "▶")} {vendor.name} ({vendor.level}) - {vendor.email}
      </div>
      {expanded && children.length > 0 && (
        <div className="ml-4 border-l pl-4">
          {children.map((child) => (
            <VendorNode key={child.id} vendor={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function VendorsPage() {
  const dispatch = useDispatch();
  const { vendors } = useSelector((state) => state.vendors);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState(""); // Default empty so placeholder shows
  const [parentId, setParentId] = useState(""); // Default empty so placeholder shows

  // Handle Vendor Addition
  const handleAddVendor = () => {
    if (!name || !email || !level || !parentId) return;
    dispatch(
      addVendor({
        name,
        email,
        level,
        parentId: parseInt(parentId),
      })
    );
    setName("");
    setEmail("");
    setLevel(""); // Reset to empty for placeholder
    setParentId(""); // Reset to empty for placeholder
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Vendor Management</h1>

      {/* Add Vendor Form */}
      <Card className="my-4 p-4">
        <Input type="text" placeholder="Vendor Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-2" />
        <Input type="email" placeholder="Vendor Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2" />
        
        {/* Select Level */}
        <Select onValueChange={setLevel} value={level}>
          <SelectTrigger className="mb-2">{level ? level : "Select Level"}</SelectTrigger>
          <SelectContent>
            <SelectItem value="Regional">Regional</SelectItem>
            <SelectItem value="City">City</SelectItem>
            <SelectItem value="Local">Local</SelectItem>
          </SelectContent>
        </Select>

        {/* Select Parent Vendor (No Super Vendor Option) */}
        <Select onValueChange={setParentId} value={parentId}>
          <SelectTrigger className="mb-2">{parentId ? vendors.find(v => v.id == parentId)?.name : "Select Parent Vendor"}</SelectTrigger>
          <SelectContent>
            {vendors
              .filter((vendor) => vendor.level !== "Local") // Exclude Local Vendors
              .map((vendor) => (
                <SelectItem key={vendor.id} value={vendor.id.toString()}>
                  {vendor.name} ({vendor.level})
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        
        <Button onClick={handleAddVendor} className="mt-2">Add Vendor</Button>
      </Card>

      {/* Display Vendor Hierarchy */}
      <Card className="mt-4 p-4">
        {vendors.filter((v) => !v.parentId).map((vendor) => (
          <VendorNode key={vendor.id} vendor={vendor} />
        ))}
      </Card>
    </div>
  );
}

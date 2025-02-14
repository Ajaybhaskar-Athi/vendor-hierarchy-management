

// "use client";
// import { useSelector } from "react-redux";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Pencil, Move } from "lucide-react";
// import EditVendorDialog from "@/components/EditVendorDialog";

// const buildHierarchy = (vendors) => {
//     const map = new Map();
//     const root = [];

//     vendors.forEach(v => map.set(v.id, { ...v, children: [] }));
//     vendors.forEach(v => {
//         if (v.parentId) {
//             map.get(v.parentId).children.push(map.get(v.id));
//         } else {
//             root.push(map.get(v.id));
//         }
//     });
//     return root;
// };

// const TreeNode = ({ vendor }) => {
//     const [openEdit, setOpenEdit] = useState(false);
//     const [openMove, setOpenMove] = useState(false);

//     return (
//         <div className="flex flex-col items-center relative">
//             {/* Short Form Badge */}
//             <div className={`absolute top-[-20px] left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-white ${getRoleColor(vendor.level)}`}>
//                 {vendor.shortForm}
//             </div>
            
//             {/* Vendor Card */}
//             <Card className={`p-4 bg-white shadow-md border rounded-lg text-center min-w-[200px] ${vendor.level === "Super" ? "border-purple-500" : ""}`}>
//                 <div className="flex items-center justify-between">
//                     <h3 className="font-bold text-lg">{vendor.name}</h3>
//                     {/* Edit Button (Not for Super Vendor) */}
//                     {vendor.level !== "Super" && (
//                         <button onClick={() => setOpenEdit(true)} className="p-1 bg-gray-200 rounded-full hover:bg-gray-300">
//                             <Pencil size={16} />
//                         </button>
//                     )}
//                 </div>
//                 <p className="text-sm text-gray-500">{vendor.email}</p>
//                 {/* Move Profile Button (Only for City Vendors) */}
//                 {vendor.level === "City" && (
//                     <button className="mt-2 text-xs font-semibold px-2 py-1 rounded bg-gray-300" onClick={() => setOpenMove(true)}>
//                         Move Profile
//                     </button>
//                 )}
//             </Card>

//             {/* Vertical Line Below */}
//             {vendor.children.length > 0 && <div className="w-1 h-6 bg-gray-300"></div>}

//             {/* Children Nodes */}
//             {vendor.children.length > 0 && (
//                 <div className="flex justify-center mt-2 space-x-4 relative">
//                     {vendor.children.map(child => <TreeNode key={child.id} vendor={child} />)}
//                 </div>
//             )}

//             {/* Edit Vendor Dialog */}
//             <EditVendorDialog open={openEdit} onOpenChange={setOpenEdit} vendor={vendor} />
            
//             {/* Move Profile Dialog */}
//             <Dialog open={openMove} onOpenChange={setOpenMove}>
//                 <DialogTrigger />
//                 <DialogContent>
//                     <DialogTitle>Move Profile</DialogTitle>
//                     <p>Change role or reassign {vendor.name} to a different Regional Vendor.</p>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// };

// const getRoleColor = (level) => {
//     switch (level) {
//         case "Super": return "bg-purple-500";
//         case "Regional": return "bg-blue-500";
//         case "City": return "bg-green-500";
//         case "Local": return "bg-red-500";
//         default: return "bg-gray-400";
//     }
// };

// export default function Dashboard() {
//     const { vendors } = useSelector((state) => state.vendors);
//     const hierarchy = buildHierarchy(vendors);

    // return (
    //     <div className="p-6 w-full overflow-x-hidden flex justify-center">
    //         <h1 className="text-xl font-bold mb-4 text-center">Vendor Hierarchy</h1>
    //         <div className="flex flex-col items-center w-full">
    //             {hierarchy.map(vendor => <TreeNode key={vendor.id} vendor={vendor} />)}
    //         </div>
    //     </div>
    // );
// }



"use client";
import { useSelector } from "react-redux";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Pencil, Move } from "lucide-react";
import EditVendorDialog from "@/components/EditVendorDialog";
import MoveProfileDialog from "@/components/MoveProfileDialog";
const getRoleColor = (level) => {
  switch (level) {
    case "Super": return "bg-purple-500";
    case "Regional": return "bg-blue-500";
    case "City": return "bg-green-500";
    case "Local": return "bg-red-500";
    default: return "bg-gray-400";
  }
};

const VendorNode = ({ vendor }) => {
  const { vendors } = useSelector((state) => state.vendors);
  const children = vendors.filter((v) => v.parentId === vendor.id);
  const [openEdit, setOpenEdit] = useState(false);
  const [openMove, setOpenMove] = useState(false);

  return (
    <div className="flex flex-col items-center relative">
      {/* Vendor Card with Circle */}
      <div className="flex flex-col items-center relative">
        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full text-white text-xs font-bold ${getRoleColor(vendor.level)}`}>
          {vendor.shortForm}
        </div>
        <Card className={`p-4 bg-white shadow-md border rounded-lg text-center min-w-[200px] ${vendor.level === "Super" ? "border-purple-500" : ""}`}>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg ml-12 text-center ">{vendor.name}</h3>
            {vendor.level !== "Super" && (
              <button onClick={() => setOpenEdit(true)} className="p-1 bg-gray-200 rounded-full hover:bg-gray-300">
                <Pencil size={16} />
              </button>
            )}
          </div>
          <p className="text-sm text-gray-500">{vendor.email}</p>
          {vendor.level === "City" && (
            <button className="mt-2 text-xs font-semibold px-2 py-1 rounded bg-gray-300" onClick={() => setOpenMove(true)}>
              Move Profile
            </button>
          )}
        </Card>
      </div>

      {/* Downward Line */}
      {children.length > 0 && <div className="w-1 h-6 bg-gray-400"></div>}
      
      {/* Render Children */}
      {children.length > 0 && (
        <div className="flex justify-center space-x-6 mt-2">
          {children.map((child) => (
            <VendorNode key={child.id} vendor={child} />
          ))}
        </div>
      )}
      
      {/* Dialogs */}
      <EditVendorDialog open={openEdit} onOpenChange={setOpenEdit} vendor={vendor} />
      <MoveProfileDialog open={openMove} onOpenChange={setOpenMove} vendor={vendor}/>
      
      {/* <Dialog open={openMove} onOpenChange={setOpenMove}>
        <DialogTrigger />
        <DialogContent>
          <DialogTitle>Move Profile</DialogTitle>
          <p>Change role or reassign {vendor.name} to a different Regional Vendor.</p>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default function Dashboard() {
  const { vendors } = useSelector((state) => state.vendors);
  const superVendor = vendors.find((v) => v.level === "Super");
return (
    <div className="p-6 w-full overflow-x-hidden flex justify-center">
        <h1 className="text-xl font-bold mb-4 text-center">Vendor Hierarchy</h1>
        <div className="flex flex-col items-center w-full">
          {superVendor && <VendorNode vendor={superVendor} />}

        </div>
    </div>
);
}

import React, { useState }  from "react";
import AddVendors from "./AddVendors";
import ListVendors from "./ListVendors";

export default function Vendors() {
    
    const [add, SetAdd] = useState(false);

    return (
        <div style={{padding:"20px"}}>
            {
                add ?
                <AddVendors cancelAdd={() => SetAdd(false)} /> : 
                <ListVendors addVendor={() => SetAdd(true)} />
            }
        </div>
    )
}
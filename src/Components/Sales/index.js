import React, { useState }  from "react";
import SalesForm from "./SalesForm";

export default function Sales() {
    
    const [add, SetAdd] = useState(false);

    return (
        <div style={{padding:"20px"}}>
            <SalesForm cancelAdd={() => SetAdd(false)} />
        </div>
    )
}
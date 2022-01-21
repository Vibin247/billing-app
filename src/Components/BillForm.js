import React, { useState }  from "react";
import { Button, Flex, TextField } from "@aws-amplify/ui-react";

export default function BillForm(props) {

    const [name, SetName] = useState("");
    const [address, SetAddress] = useState("");
    const [itemDetails, SetItemDetails] = useState("");
    const [quantity, SetQuantity] = useState("");
    const [rate, SetRate] = useState("");

    const saveSale = () => {
        const postData = { name, address, itemDetails, quantity, rate };
        console.log(postData);
        window.html2pdf(document.getElementById("testPDF")).save()
    }

    var options = {year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date().toLocaleDateString("en-IN", options);

    return (
        <Flex direction={"column"} gap={"25px"} padding={"25px"} id="testPDF">

            <Flex direction={"row"} justifyContent={"flex-start"}>
                <TextField label="Date" disabled={true} value={today}/>
            </Flex>

            <Flex direction={"row"} justifyContent={"space-evely"}>
                <TextField label="Buyer Name" placeholder="Deva Doss" className="flex-1"
                onChange={e => SetName(e.target.value)} value={name}/>

                <TextField label="Buyer address" placeholder="Street, Area, Pincode"  isMultiline={true} className="flex-1"
                onChange={e => SetAddress(e.target.value)} value={address} rows={3}/>
            </Flex>

            <Flex direction={"row"} justifyContent={"space-between"}>
                <TextField label="Item details" placeholder="Product type" className="flex-4"
                onChange={e => SetItemDetails(e.target.value)} value={itemDetails} autoComplete="off"/>

                <TextField label="Rate" placeholder="Rate" type={"number"} className="flex-1"
                onChange={e => SetRate(e.target.value)} value={rate} autoComplete="off"/>

                <TextField label="Quantity" placeholder="Quantity" type={"number"} className="flex-1"
                onChange={e => SetQuantity(e.target.value)} value={quantity} autoComplete="off"/>
             </Flex>

             <Flex direction={"row"} justifyContent={"space-between"} border={"1px solid lightgrey"}
              padding={"10px"} borderRadius={"5px"}>
                <Flex flex={4}>
                    Total
                </Flex>
                <Flex flex={1} justifyContent={"end"}>
                    { quantity * rate }
                </Flex>
             </Flex>

            <Flex direction={"row"} justifyContent={"flex-end"}>
                <Button onClick={saveSale}>
                    Generate Bill
                </Button>
            </Flex>
        </Flex>
    )
}
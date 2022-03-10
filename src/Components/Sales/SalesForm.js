import React, { useState }  from "react";
import { Alert, Button, Flex, TextField } from "@aws-amplify/ui-react";
import ItemDetails from "../ItemDetails";
import Invoice from "../Invoice";

export default function SalesForm(props) {

    const [name, SetName] = useState("");
    const [address, SetAddress] = useState("");
    const [phone, SetPhone] = useState("");
    const [discount, SetDiscount] = useState("0");
    const [invoiceNumber, SetInvoiceNumber] = useState("");
    const [items, SetItems] = useState([{
        itemDetails : "",
        quantity    : "",
        rate        : ""
    }]);

    const [showError, SetShowError] = useState(false);
    const [displayError, SetDisplayError] = useState(false);
    const [showInvoice, SetShowInvoice] = useState(false);
    const [invoiceProps, SetInvoiceProps] = useState(false);
    
    var errorMessage = "";

    var options = {year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date().toLocaleDateString("en-IN", options);

    const checkEmpty = (data,fieldName) => {
        if (data.trim() === "") {
            errorMessage.trim() === "" ?
            errorMessage += fieldName :
            errorMessage += " " + fieldName;
            return true;
        }
        return false;
    }

    const saveSale = () => {
        SetShowError(false);
        errorMessage = "";
        const postData = { name, address, items, phone, invoiceNumber, today, discount };
        console.log(showError, errorMessage);
        if( 
            checkEmpty(invoiceNumber, "Invoice Number") ||
            checkEmpty(name, "Name") ||
            checkEmpty(phone, "Phone Number") ||
            checkEmpty(address, "Address") ||
            checkEmpty(items[0].itemDetails, "Item Details") ||
            checkEmpty(items[0].quantity, "Item Details") ||
            checkEmpty(items[0].rate, "Item Details")
        ) {
            SetDisplayError(errorMessage)
            SetShowError(true);
        }
        else{
            SetInvoiceProps(postData);
            SetShowInvoice(true);
        }
    }

    const addItems = () => {
        SetItems(current => {
            var newElement = {
                itemDetails : "",
                quantity    : "",
                rate        : ""
            }
            return [...current, newElement];
        });
    }

    
    const removeItems = removeIndex => {
        SetItems([
            ...[...items].splice(0, removeIndex),
            ...[...items].splice(removeIndex + 1)
        ]);   
    }

    const updateItems = (updatedItem, index) => {
        items[index] = updatedItem;
        SetItems(items);
    }

    const downloadInvoice = () => {
        window.html2pdf().from(document.getElementById("finalinvoice")).save();
    }

    const createNewSale = () => {
        SetName("");
        SetAddress("");
        SetPhone("");
        SetDiscount("0");
        SetInvoiceNumber("");
        SetItems([{
            itemDetails : "",
            quantity    : "",
            rate        : ""
        }]);
        SetInvoiceProps(false);
        SetShowInvoice(false);
    }

    return (
        <>
            {
                showError &&   
                <Flex padding={20}>
                    <Alert variation="error" hasIcon={true}
                     isDismissible={false} style={{flex:1}}>
                        {displayError} missing!
                    </Alert>
                </Flex>
            }
            {
                showInvoice ?
                <Flex direction={"column"} gap={"25px"} padding={"25px"}>
                    <Flex>
                        <Button onClick={() => createNewSale()}> Create another Sale </Button>
                        <Button onClick={() => downloadInvoice()}> Download Invoice </Button>
                    </Flex>
                    <Flex>
                        <Invoice {...invoiceProps}/> 
                    </Flex>
                </Flex> :
                <Flex direction={"column"} gap={"25px"} padding={"25px"}>

                    <Flex direction={"row"} gap={25}>
                        <TextField label="Date" disabled={true} value={today}/>

                        <TextField label="Invoice Number" placeholder="Invoice Number"
                        onChange={e => SetInvoiceNumber(e.target.value)} value={invoiceNumber} autoComplete="off"/>
                    </Flex>

                    <Flex direction={"row"} justifyContent={"space-evely"}>
                        <TextField label="Buyer Name" placeholder="Deva Doss" className="flex-1"
                        onChange={e => SetName(e.target.value)} value={name}/>

                        <TextField label="Buyer Phone Number" placeholder="984XXXXXXX" className="flex-1"
                        onChange={e => SetPhone(e.target.value)} value={phone}/>

                        <TextField label="Buyer address" placeholder="Street, Area, Pincode"  isMultiline={true} className="flex-1"
                        onChange={e => SetAddress(e.target.value)} value={address} rows={3}/>
                    </Flex>

                    <Flex direction={"column"}>
                        {
                            items.map((item, index) => {            
                                return (
                                    <Flex direction={"row"} key={index}>
                                        <ItemDetails SetItems={updateItems} item={items[0]} index={index} {...item}/>
                                        <Flex flex={1} alignItems={"flex-end"} justifyContent={"flex-end"}>
                                            <Button height={45} onClick={() => removeItems(index)}> - </Button>
                                            <Button height={45} onClick={addItems}> + </Button>
                                        </Flex>                            
                                    </Flex>
                                )
                            })
                        }
                    </Flex>

                    <Flex direction={"row"} justifyContent={"space-between"} gap={0}>
                        <Flex flex={1}>
                            <TextField label="Discount" placeholder="Discount" type={"number"} className="flex-1"
                            onChange={e => SetDiscount(e.target.value)} value={discount} autoComplete="off"/>
                        </Flex>

                        <Flex flex={1}></Flex>
                    </Flex>

                    <Flex direction={"row"} justifyContent={"flex-end"}>
                        <Button onClick={saveSale}>
                            Generate Bill
                        </Button>
                    </Flex>
                </Flex>
            }
        </>
    )
}
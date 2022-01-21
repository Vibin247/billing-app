import { Flex, TextField } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";

export default function ItemDetails(props) {
    
    const [itemDetails, SetItemDetails] = useState(props.itemDetails);
    const [quantity, SetQuantity] = useState(props.quantity);
    const [rate, SetRate] = useState(props.rate);

    const SetItems = props.SetItems;

    useEffect(() => {
        SetItems({ itemDetails, quantity, rate }, props.index);
    }, [itemDetails, quantity, rate]);
    useEffect(() => {
        SetItemDetails(props.itemDetails);
        SetQuantity(props.quantity);
        SetRate(props.rate);
    }, [props.itemDetails, props.quantity, props.rate]);

    return (
        <Flex direction={"row"} justifyContent={"space-between"} flex={12}>
            <TextField label="Item details" placeholder="Product type" className="flex-4"
            onChange={e => SetItemDetails(e.target.value)} value={itemDetails} autoComplete="off"/>

            <TextField label="Rate (in Rs.)" placeholder="Rate (in Rs.)" type={"number"} className="flex-1"
            onChange={e => SetRate(e.target.value)} value={rate} autoComplete="off"/>

            <TextField label="Quantity" placeholder="Quantity" type={"number"} className="flex-1"
            onChange={e => SetQuantity(e.target.value)} value={quantity} autoComplete="off"/>
        </Flex>
    )
}
import React, { useState } from "react";
import { Button, Flex, TextField } from "@aws-amplify/ui-react";

export default function AddVendors(props) {

    const [phone, SetPhone] = useState("");
    const [name, SetName]   = useState("");

    const addVendor = e => {
        e.preventDefault();
        if (name.trim() === "" && phone.trim() === "") {
            alert("Check details!");
            return
        }
        else {
            console.log(e)
        }
    }

    return (
        <Flex direction={"column"} padding={"20px"}>
            <h4>Add Vendors form</h4>

            <form onSubmit={addVendor}>
                <Flex direction={"column"} gap={"25px"}>
                    <TextField label="Vendor Name" placeholder="Deva Doss"
                    onChange={e => SetName(e.target.value)} value={name}/>

                    <TextField label="Vendor contact" placeholder="12345678"
                    onChange={e => SetPhone(e.target.value)} value={phone}/>

                    <Flex direction={"row"}>
                        <Button type="submit" onClick={addVendor}>
                            Add Vendor
                        </Button>
                        <Button type="submit" onClick={props.cancelAdd}>
                            Cancel
                        </Button>
                    </Flex>
                </Flex>
            </form>

        </Flex>
    )
}
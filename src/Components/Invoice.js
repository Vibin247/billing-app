import { Divider, Flex, Table, TableCell, TableRow } from '@aws-amplify/ui-react';
import React from 'react';
import { inWords } from '../utils';

export default function Invoice(props) {

    var totalAmount = 0;
    props.items.forEach(item=> {
        totalAmount += item.quantity * item.rate;
    })

    var totalBeforeDiscount = totalAmount;
    var totalAfterDiscount = totalAmount - props?.discount;
    var amountInWords = inWords(totalAfterDiscount);

    return (
        <div className='A4 invoice' id="finalinvoice">

            <Flex direction={"column"} justifyContent={"space-between"} height={"100%"}>
                <Flex direction={"column"} gap={15}>
                    <Flex alignItems={"center"} className='invoice-header'>
                        <div style={{display: "inline-block"}}>
                            <div className='shop-name' style={{
                                fontSize:"36px",
                                textAlign:"center"
                            }}> DEV PRAKASH</div>

                            <Divider margin={2}/>

                            <div style={{
                                fontSize:"18px",
                                textAlign:"center",
                                marginTop:"5px"
                            }}> FURNITURE </div>
                        </div>
                    </Flex>

                    <Divider style={{borderColor:"red"}}/>

                    <Flex justifyContent={"space-between"} alignItems={"flex-start"}>
                        <Flex direction={"column"} gap={5} flex={1}>
                            <Flex direction={"row"}>
                                <div> GSTIN </div> : <div> 33AAJPA0115D1ZR </div>
                            </Flex>
                            <Flex>
                                <div> STATE </div> : <div> Tamil Nadu </div>
                            </Flex>
                            <Flex>
                                <div> CODE  </div> : <div> 33 </div>
                            </Flex>
                        </Flex>
                        <Flex direction={"column"} gap={5} flex={1}>
                            <Flex direction={"row"}>
                                <Flex flex={5}> Invoice Number </Flex> <Flex flex={1}>:</Flex> <Flex flex={5}> {props.invoiceNumber} </Flex>
                            </Flex>
                            <Flex direction={"row"}>
                                <Flex flex={5}> Date </Flex> <Flex flex={1}>:</Flex> <Flex flex={5}> {props.today} </Flex>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex justifyContent={"center"}>
                        <span>
                            Bill of Supply
                            <Divider/>
                        </span>
                    </Flex>

                    <Flex direction={"column"}>
                        <Flex>
                            <Flex flex={2}> Name </Flex> :
                            <Flex flex={4}> {props.name} </Flex>
                        </Flex>
                        <Flex>
                            <Flex flex={2}> Phone Number </Flex> :
                            <Flex flex={4}> {props.phone} </Flex>
                        </Flex>
                        <Flex>
                            <Flex flex={2}> Delivery Address </Flex>:
                            <Flex flex={4}> {props.address} </Flex>
                        </Flex>
                    
                    </Flex>

                    <Flex padding={"20px 0px"}>
                        <Table data-variation={"bordered"}>
                            <TableRow key={0}>
                                <TableCell> S. No </TableCell>
                                <TableCell> Description of Goods </TableCell>
                                <TableCell> Quantity </TableCell>
                                <TableCell> Rate <br/> (in Rs.) </TableCell>
                                <TableCell> Amount <br/> (in Rs.) </TableCell>
                            </TableRow>

                            {
                                props.items.map((item, index) => {
                                    if (
                                        item.itemDetails.trim() !== "" &&
                                        item.quantity.trim() !== "" &&
                                        item.rate.trim() !== ""
                                    ) {
                                        
                                        return (
                                            <TableRow key={index+1}>
                                                <TableCell> {index+1} </TableCell>
                                                <TableCell> {item.itemDetails} </TableCell>
                                                <TableCell> {item.quantity} </TableCell>
                                                <TableCell> {item.rate} </TableCell>
                                                <TableCell> {item.quantity * item.rate} </TableCell>
                                            </TableRow>
                                        )
                                    }
                                    return <></>
                                })
                            }

                            <TableRow key={props.items.length + 1}>
                                <TableCell style={{borderWidth:"1px 0px 1px 1px"}}> </TableCell>
                                <TableCell> Total Before Discount </TableCell>
                                <TableCell style={{borderWidth:"1px 0px"}}> </TableCell>
                                <TableCell style={{borderWidth:"1px 0px"}}> </TableCell>
                                <TableCell> {totalBeforeDiscount} </TableCell>
                            </TableRow>

                            <TableRow key={props.items.length + 2}>
                                <TableCell style={{borderWidth:"1px 0px 1px 1px"}}> </TableCell>
                                <TableCell> Discount </TableCell>
                                <TableCell style={{borderWidth:"1px 0px"}}> </TableCell>
                                <TableCell style={{borderWidth:"1px 0px"}}> </TableCell>
                                <TableCell> {props?.discount} </TableCell>
                            </TableRow>

                            <TableRow key={props.items.length + 3}>
                                <TableCell style={{borderWidth:"1px 0px 1px 1px"}}> </TableCell>
                                <TableCell> Total </TableCell>
                                <TableCell style={{borderWidth:"1px 0px"}}> </TableCell>
                                <TableCell style={{borderWidth:"1px 0px"}}> </TableCell>
                                <TableCell> {totalAfterDiscount} </TableCell>
                            </TableRow>
                        </Table>
                    </Flex>

                    <Flex justifyContent={"center"}>
                        COMPOSITION TAXABLE PERSON NOT ELIGIBLE TO COLLECT TAX ON SUPPLIES
                    </Flex>

                    <Flex style={{marginTop:"35px"}}>
                        ( Rupees {amountInWords})                
                    </Flex>

                </Flex>

                <Flex justifyContent={"space-between"} alignItems={"stretch"}>
                    <Flex direction={"column"} gap={5} flex={1}>
                        <Flex direction={"row"}>
                            <Flex flex={1}> Bank </Flex> : <Flex flex={1}> Indian Bank </Flex>
                        </Flex>
                        <Flex>
                            <Flex flex={1}> Account No. </Flex> : <Flex flex={1}> 6784219255 </Flex>
                        </Flex>
                        <Flex>
                            <Flex flex={1}> Branch IFSC  </Flex> : <Flex flex={1}> IDIB000A132 </Flex>
                        </Flex>
                    </Flex>
                    <Flex justifyContent={"flex-end"} flex={1}  alignItems={"stretch"}>
                        <Flex direction={"column"} justifyContent={"space-between"} >
                            <Flex direction={"row"}>
                                <Flex> For DEV PRAKASH FURNITURE</Flex>
                            </Flex>
                            <Flex>
                                <Flex> Authorized Signature</Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex direction={"column"}>
                    <Divider style={{borderColor:"red"}}/>

                    <Flex padding={10} direction={"column"} gap={5} fontSize={12}>                        
                        <Flex>
                            16, Lakshmi Ammal Street, Ayyavoo Colony, Aminjikarai, Chennai - 600029. Mob. : +91 80561 82202
                        </Flex>
                        <Flex>
                            <strong><em>Certified that the  particulars above are true and correct.</em></strong>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

        </div>
    )
}
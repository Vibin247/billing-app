import { Button, Flex } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { listVendors } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export default function ListVendors(props) {

    const [vendors, SetVendors] = useState([]);
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        API.graphql(graphqlOperation(listVendors))
        .then(response => {
            SetVendors(response.data.listVendors.items)
            SetLoading(false);
        });
    }, []);

    const columns = [
        {
            field: 'name',
            headerName: 'Name'
        },
        {
            field: 'phone',
            headerName: 'Phone'
        }
    ]

    return (
        <div>
            <h3> List of Vendors </h3>
            <Flex direction={"column"} gap={"15px"}>
                <Flex justifyContent={"end"}>
                    <Button onClick={() => props.addVendor()}> Add Vendor </Button>
                </Flex>
                <Flex>
                    <DataGrid
                        loading={loading}
                        rows={vendors} 
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        autoHeight={true}
                        columnBuffer={2}
                    />
                </Flex>
            </Flex>
        </div>
    )
}
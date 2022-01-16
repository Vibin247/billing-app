import React, { Component }  from "react";
import { listVendors } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import AddVendors from "./AddVendors";
import ListVendors from "./ListVendors";

class Vendors extends Component {

    state = {
        add     : false,
        vendors : []
    }

    componentDidMount() {
        // API.graphql(graphqlOperation(listVendors))
        // .then(response => );
        this.setState({ vendors : [
            {
                id: 1,
                name: "Vibin",
                phone: "1234"
            },
            {
                id: 2,
                name: "Emperor",
                phone: "12345678"
            }
        ] })
    }



    render() {
        return (
            <div style={{padding:"20px"}}>
                {
                    this.state.add ?
                    <AddVendors cancelAdd={() => this.setState({ add : false})}/> : 
                    <ListVendors addVendor={() => this.setState({ add : true})} vendors={this.state.vendors}/>
                }
            </div>
        )
    }
}

export default Vendors;
import Vendors from "./Components/Vendors";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import BillForm from "./Components/BillForm";
import { TabItem, Tabs } from "@aws-amplify/ui-react";

Amplify.configure(aws_exports);

function App() {
  return (
    <div className="app">
      <div className="header">
        Dev Prakash Diwan Cots
      </div>
      <div className="Wrapper">
        <Tabs indicatorPosition="top" flex={1}>
          <TabItem title="Sales">
            <BillForm/>
          </TabItem>
          <TabItem title="Carpenters">
            <Vendors/>
          </TabItem>
        </Tabs>
      </div>
    </div>
  );
}

export default App;

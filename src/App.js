import Vendors from "./Components/Vendors";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import Sales from "./Components/Sales";
import { Flex, TabItem, Tabs } from "@aws-amplify/ui-react";
import { Title } from './ui-components';

Amplify.configure(aws_exports);

function App() {
  return (
    <div className="app">
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Title text={"DEV PRAKASH DIWAN COTS"}/>
      </Flex>
      <div className="Wrapper">
        <Tabs indicatorPosition="top" flex={1}>
          <TabItem title="Sales">
            <Sales/>
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

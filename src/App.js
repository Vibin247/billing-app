import Vendors from "./Components/Vendors";
import Sales from "./Components/Sales";
import { Flex, TabItem, Tabs } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="app">
      <Flex alignItems={"center"} justifyContent={"center"}>
        DEV PRAKASH DIWAN COTS
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

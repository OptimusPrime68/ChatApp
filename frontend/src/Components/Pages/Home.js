import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Forgot from "../LoginSignUp/Forgot";
import Login from "../LoginSignUp/Login";
import Register from "../LoginSignUp/Register";

const Home = () => {
  return (
    <Container centerContent>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        mt={{ base: "2", md: "40" }}
        mb={{ base: "2", md: "none" }}
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
            <Tab>Forgot Password</Tab>
          </TabList>
          <hr></hr>
          <TabPanels>
            <TabPanel height={{ base: "400px", md: "310px" }}>
              <Login />
            </TabPanel>
            <TabPanel height={{ base: "620px", md: "450px" }}>
              <Register />
            </TabPanel>
            <TabPanel height={{ base: "290px", md: "250px" }}>
              <Forgot />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;

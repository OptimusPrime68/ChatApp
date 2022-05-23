import React from "react";
import { Box } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";
import MyChats from "./MyChats";
import ChatBox from "./ChatBox";
import "../Css/ChatPage.css";

const ChatPage = () => {
  return (
    <div style={{ width: "100%" }} className="chatpage">
      <SideDrawer />
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        <MyChats />
        <ChatBox />
      </Box>
    </div>
  );
};

export default ChatPage;

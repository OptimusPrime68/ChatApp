import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import ChatLoading from "./ChatLoading";

const MyChats = () => {
  const [loggedUser, setLoggedUser] = useState();
  //   const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

  const toast = useToast();

  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        My Chats
        <Button
          display="flex"
          fontSize={{ base: "17px", md: "10px", lg: "17px" }}
          rightIcon={<AddIcon />}
        >
          New Group Chat
        </Button>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        <ChatLoading />
      </Box>
    </Box>
  );
};

export default MyChats;

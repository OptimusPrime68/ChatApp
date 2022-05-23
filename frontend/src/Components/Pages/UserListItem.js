import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserListItem = () => {
  return (
    <Box
      onClick=""
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar mr={2} size="sm" cursor="pointer" name="example" src="" />
      <Box>
        <Text>User Name</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          User Email
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;

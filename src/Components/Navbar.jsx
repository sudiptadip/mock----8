import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Flex
      justifyContent={"space-evenly"}
      alignItems={"center"}
      fontSize={"23px"}
      color={"white"}
      bg={"blue.300"}
      fontWeight={"500"}
      height={"80px"}
      border={"1px solid black"}
    >
      <Box cursor={"pointer"} onClick={() => navigate("/")}>
        All Product
      </Box>
      <Box cursor={"pointer"} onClick={() => navigate("/cart")}>
        Cart Product
      </Box>
      <Box cursor={"pointer"} onClick={() => navigate("/order")}>
        Order Product
      </Box>
    </Flex>
  );
}

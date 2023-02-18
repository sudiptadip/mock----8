import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCart({
  brand,
  title,
  image,
  category,
  price,
  id,
}) {
    const navigate = useNavigate()
  return (
    <Box
      cursor={"pointer"}
      borderRadius={"20px"}
      boxShadow={"2xl"}
      border={"1px solid black"}
      onClick={() => navigate('/product/'+id)}
    >
      <Box>
        <Image p={"20px"} w={"100%"} src={image} />
      </Box>
      <Box ml={"20px"} fontSize={"19px"} fontWeight={"500"}>
        {title}
      </Box>
      <Box ml={"20px"}>Category : - {category}</Box>
      <Box ml={"20px"}>Brand : - {brand}</Box>

      <Box ml={"20px"} mb={"10px"} fontWeight={"500"}>
        Price :- {price}/-
      </Box>
    </Box>
  );
}

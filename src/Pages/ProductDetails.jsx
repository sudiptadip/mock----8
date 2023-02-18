import { Box, Button, Flex, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState("");
  // const { brand, title, image, category, price } = data.product;

  useEffect(() => {
    const GetSingleProduct = () => {
      return axios
        .get(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
        )
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {});
    };
    GetSingleProduct();
  }, [id]);

  // https://new-mock-api-2.onrender.com/blogs

  function AddToCart() {
    axios
      .post("https://new-mock-api-2.onrender.com/blogs", data)
      .then((response) => {
        alert("Add to cart successfuly done");
      })
      .catch((error) => {
        alert("Already item added to add to cart option")
      });
  }

  return (
    <Box>
      <Navbar />
      <Box
        cursor={"pointer"}
        borderRadius={"5px"}
        boxShadow={"2xl"}
        border={"1px solid black"}
        w={"580px"}
        margin={"auto"}
        mt={"50px"}
      >
        <Flex>
          <Image p={"20px"} w={"50%"} src={data.image} />
          <Box p={"20px"}>
            Introducing the new XYZ Smartwatch, the perfect accessory for anyone
            who wants to stay connected and on top of their daily activities.
            This sleek and stylish smartwatch is packed with features that will
            help you stay organized, active, and in control.
            <Box>
              <Button onClick={AddToCart} mt={"50px"} colorScheme={"blue"}>
                Add To Cart
              </Button>
            </Box>
          </Box>
        </Flex>
        <Box ml={"20px"} fontSize={"19px"} fontWeight={"500"}>
          {data.title}
        </Box>
        <Box ml={"20px"}>Category : - {data.category}</Box>
        <Box ml={"20px"}>Brand : - {data.brand}</Box>

        <Box ml={"20px"} mb={"10px"} fontWeight={"500"}>
          Price :- {data.price}/-
        </Box>
      </Box>
    </Box>
  );
}

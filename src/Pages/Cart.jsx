import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CartProductCart from "../Components/CartProductCart";
import Navbar from "../Components/Navbar";

export default function Cart() {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  // let price = 0
  const [breakpoints] = useState({
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  })

  useEffect(() => {
    axios
      .get("https://new-mock-api-2.onrender.com/blogs")
      .then((e) => {
        setData(e.data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    data.map((e) => setPrice((ex) => ex + e.price));
  }, [data]);

  // https://new-mock-api-2.onrender.com/users
  function BuyNow() {
    data.map((e, i) =>
      axios
        .post("https://new-mock-api-2.onrender.com/users", {
          brand: e.brand,
          title: e.title,
          image: e.image,
          category: e.category,
          price: e.price,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        })
    );

    data.map((e) =>
      axios
        .delete("https://new-mock-api-2.onrender.com/blogs/" + e.id)
        .then((response) => {
          if(data.length === 1){
            alert("Successfully Buy Product")
            window.location.reload()
          }else{
            setData(data.splice(0, 1));
          }         
        })
        .catch((error) => {
          alert(error);
        })
    ); 
  }

  if (data.length === 0) {
    return (
      <Box>
        <Navbar />
        <Box>No Item Added</Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <Navbar />
        <Flex justifyContent={"center"} gap={"20px"} p={"20px"}>
          <Text textAlign={"center"} fontSize={"25px"} fontWeight={"bold"}>
            Total Price With 50 rs Delivery Charges : {price + 50}/-
          </Text>
          <Button onClick={BuyNow} colorScheme={"green"}>
            Buy Now
          </Button>
        </Flex>
        <Grid p={"20px"} templateColumns={breakpoints} gap={8}>
          {data.map((e, i) => (
            <CartProductCart {...e} key={i} />
          ))}
        </Grid>
      </Box>
    );
  }
}

import { Box, Grid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CartProductCart from "../Components/CartProductCart";
import Navbar from "../Components/Navbar";

export default function Order() {
  const [data,setData] = useState([])
  const [breakpoints] = useState({
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  })

  useEffect(() => {
    axios.get('https://new-mock-api-2.onrender.com/users')
    .then((e) => setData(e.data))
  },[])
  return (
    <Box>
      <Navbar />
      <Grid p={"20px"} templateColumns={breakpoints} gap={8} >
        {
          data.map((e,i) => (
            e.title ? <CartProductCart {...e} key={i} /> : null
          ))
        }
      </Grid>
    </Box>
  );
}

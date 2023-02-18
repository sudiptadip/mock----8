import { Box, Button, Flex, Grid, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import ProductCart from "../Components/ProductCart";
import { GetData } from "../Redux/AppReducer/action";

export default function Product() {
  const dispatch = useDispatch();
  const data = useSelector((e) => e.AppReducer);
  const [page, setPage] = useState(1);
  const [sp,setSp] = useState('')
  const [cp,setCp] = useState('')

  const [breakpoints] = useState({
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  })

  useEffect(() => {
    dispatch(GetData(page,sp,cp));
  }, [page,sp,cp]);

  return (
    <Box>
      <Navbar />
      <Flex
        w={"100%"}
        mt={"20px"}
        mb={"20px"}
        h={"60px"}
        justifyContent={"center"}
        gap={"30px"}
      >
        <Select onChange={(e) => setSp(e.target.value)} bg="tomato" w={"30%"} placeholder="Sort By Price">
          <option value="&sort=price&order=asc">Low To High</option>
          <option value="&sort=price&order=desc">High To Low</option>
        </Select>

        <Select onChange={(e) => setCp(e.target.value)} bg="tomato" w={"30%"} placeholder="Select option">
          <option value="&category=kids">Kids</option>
          <option value="&category=men">Man</option>
          <option value="&category=women">Women</option>
          <option value="&category=homedecor">Homedecor</option>
        </Select>
      </Flex>
      <Grid p={"20px"} templateColumns={breakpoints} gap={8}>
        {data.product.map((e, i) => (
          <ProductCart {...e} key={i} />
        ))}
      </Grid>

      <Flex gap={'20px'} justifyContent={"center"} p={'20px'} alignItems={"center"}>
        <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>-</Button>
        <Text>Page no : {page}</Text>
        <Button isDisabled={page === 4} onClick={() => setPage(page + 1)}>+</Button>
      </Flex>
    </Box>
  );
}

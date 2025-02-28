import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ItemsCards from "./ItemsCards"; // Importing the component that renders each card

function ProductItems() {
  return (
    <Box
      width={"100%"}
      min-height={"100vh"}
      // backgroundColor={'yellowgreen'}
      marginTop={"5rem"}
    >
      <VStack width={"100%"} height={"100%"} flexWrap={"wrap"}>
             {/* Title Section */}
       

         {/* Product Cards Section */}
        <HStack
          width={"80%"}
          height={"100%"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ItemsCards /> {/* This is where your card component will be rendered */}
        </HStack>
      </VStack>
    </Box>
  );
}

export default ProductItems;
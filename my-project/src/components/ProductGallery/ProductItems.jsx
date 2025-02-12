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
        <VStack>
          <HStack>
            <Text fontSize={['25px' , '40px']} fontWeight={"600"} letterSpacing={"2px"}>
              Fruits & Vegetables
            </Text>
          </HStack>

          <HStack>
            <Text
              width={"60%"}
              margin={"auto"}
              textAlign={"center"}
              marginTop={"1rem"}
            >
              Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </HStack>
        </VStack>

         {/* Product Cards Section */}
        <HStack
          width={"95%"}
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
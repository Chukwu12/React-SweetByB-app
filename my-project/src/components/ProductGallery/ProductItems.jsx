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
            Shop Your Favorite Sweet Treats
            </Text>
          </HStack>

          <HStack>
            <Text
              width={"50%"}
              margin={"auto"}
              textAlign={"center"}
              marginTop={"1rem"}
              fontSize={"13px"}
              color={"grey"}
            >
            Welcome to Sweets by B, your one-stop shop for delicious homemade desserts! Browse our selection of rich cheesecakes, decadent cupcakes, gourmet puddings, and more—all made with love and the finest ingredients. Whether you're craving a classic treat or looking to try something new, we’ve got something to satisfy your sweet tooth. Place your order today and indulge in pure sweetness!
            </Text>
          </HStack>
        </VStack>

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
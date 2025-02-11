import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import Product from "./Product"; // Import your Product component
import Image1 from "../../assets/images/cupcake-img.jpg";
import Image2 from "../../assets/images/cheesecake-img.jpg";
import Image3 from "../../assets/images/pudding-img.jpg";

function ProductDetails() {
  return (
    <Box
      width={"100%"}
      minHeight={"50vh"}
      marginTop={"5rem"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      overflow={"hidden"}
    >
      <HStack justifyContent={"center"} gap={"20px"} flexWrap={"wrap"}>
        <Product
          cardImage={Image1}
          CardSubHeading={"100% Healthy & Affordable"}
          cardTitle={"CHEESECAKE"}
          cardTitleColor={"#5EA98B"}
        />
        <Product
          cardImage={Image2}
          CardSubHeading={"All original Flavors"}
          cardTitle={"PUDDING"}
          cardTitleColor={"white"}
        />
        <Product
          cardImage={Image3}
          CardSubHeading={"Freshly Baked"}
          cardTitle={"COOKIES"}
          cardTitleColor={"#5EA98B"}
        />
      </HStack>
    </Box>
  );
}

export default ProductDetails;

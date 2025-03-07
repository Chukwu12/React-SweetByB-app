import React from "react";
import { motion } from 'framer-motion';
import { Box, HStack } from '@chakra-ui/react';
import Product from "./Product"; // Import your Product component
import Image1 from "../../assets/images/cheesecake-menu.jpg";
import Image2 from "../../assets/images/pudding-menu.jpg";
import Image3 from "../../assets/images/cookies-menu.jpg";
import { FadeIn } from "../../utility/animation";


// Wrap Chakra UI Box and HStack components with motion
const MotionBox = motion(Box);
const MotionHStack = motion(HStack);

function ProductDetails() {
  return (
    <MotionBox
      width={"100%"}
      minHeight={"50vh"}
      marginTop={"5rem"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      overflow={"hidden"}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
    >
      <MotionHStack
       justifyContent={"center"} 
       gap={["10px", "15px", "20px", "30px"]} 
       flexWrap={"wrap"}
       initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Trigger animation only once
        variants={FadeIn(0.5)} // Apply FadeIn animation with a delay of 0.5 seconds
       >

        <Product
          cardImage={Image1}
          CardSubHeading={""}
          cardTitle={"CHEESECAKE"}
          cardTitleColor={"lime"}
        />
        <Product
          cardImage={Image2}
          CardSubHeading={""}
          cardTitle={"PUDDING"}
          cardTitleColor={"lime"}
        />
        <Product
          cardImage={Image3}
          CardSubHeading={""}
          cardTitle={"COOKIES"}
          cardTitleColor={"lime"}
        />
     </MotionHStack>
     </MotionBox>
  );
}

export default ProductDetails;

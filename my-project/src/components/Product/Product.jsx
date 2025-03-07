import React, { useState } from "react";
import { Box, HStack, VStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Wrap Box component with motion to animate it
const MotionBox = motion(Box);

function Product({ cardImage, CardSubHeading, cardTitle, cardTitleColor }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionBox
      width={["90%", "90%", "80%", "28rem"]} // For mobile, tablet, and large screens
      height={["18rem", "18rem", "18rem", "18rem"]} // Fixed height for consistency
      borderRadius={"20px"}
      overflow="hidden"
      boxShadow="md"
      whileHover={{ scale: 1.05 }} // Scale the card when hovered
      whileTap={{ scale: 0.98 }} // Slightly scale down when clicked
      transition={{ duration: 0.3 }}
    >
      {/* Card Content */}
      <HStack
        width={"100%"}
        height={"100%"}
        position={"relative"}
        borderRadius={"20px"}
      >
        {/* Card Image */}
        <Image
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
          src={cardImage}
          borderRadius={"20px"}
        />

        {/* Card Details */}
        <VStack
          position={"absolute"}
          top={["10%", "10%", "20%", "25%"]}
          left={["60%", "60%", "60%", "15"]}
          alignItems={"flex-start"}
          gap={["10px", "10px", "15px"]}
          width={"40%"}
          height={"70%"}
        >
          {/* Card Sub Heading */}
          <Text fontSize={["sm", "md"]}>{CardSubHeading}</Text>

          {/* Card Title */}
          <Text
            fontSize={["20px", "16px", "20px", "24px"]}
            fontWeight={"800"}
            color={cardTitleColor}
            letterSpacing={"0.1rem"}
          >
            {cardTitle}
          </Text>

          {/* Shop Now Button */}
          <Text
            cursor={"pointer"}
            _hover={{
              textDecoration: "underline",
            }}
            color={" chartreuse;"}
            fontWeight={"700"}
            zIndex={"10"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            fontSize={["10px", "12px", "16px"]}
          >
            SHOP NOW
          </Text>

          {/* Shop Now Button Line */}
          <HStack
            width={isHovered ? "5rem" : "2rem"}
            border={"1px solid black"}
            marginTop={"-10px"}
            transition="width 0.3s"
          />
        </VStack>
      </HStack>
    </MotionBox>
  );
}

export default Product;

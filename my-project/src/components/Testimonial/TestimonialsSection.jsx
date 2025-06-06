import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
 import testimonialBg from "../../assets/images/testimonial-bg.png";
import TestimonialsCarousel from "./TestimonialsCarousel";

function TestimonialsSection() {
  return (
    <Box
      width={"100%"}
      min-height={"100vh"}
      marginTop={"5rem"}
      overflow={"hidden"}
      position={"relative"}
    >

        {/* Testimonial Background */}
      <HStack position={"absolute"} width={"100%"} height={"100%"}>
        <Image
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
           src={testimonialBg}
        />
      </HStack>

        {/* Testimonial Heading */}
      <VStack position={"relative"}>
        <VStack
          width={"100%"}
          min-height={"100%"}
          // backgroundColor={'yellowgreen'}
          paddingY={"5rem"}
        >
          <Text
            fontSize={["20px", "30px", "30px", "40px"]}
            fontWeight={"600"}
            letterSpacing={"2px"}
          >
            What Our Customers Say
          </Text>

          <Text
            width={["80%", "60%", "50%", "50%"]}
            textAlign={"center"}
            fontSize={["12px", "15px", "15px", "20px"]}
            marginTop={"1rem"}
            letterSpacing={"1px"}
          >
            Sweet-By-B desserts are absolutely delightful! 
            The flavors are rich, the presentation is beautiful, 
            and every bite feels like it’s made with love. It's my go-to for every special occasion
          </Text>


            {/* Testimonial Carousel */}
          <VStack
            width={"100%"}
            min-height={"100vh"}
            // backgroundColor={'red'}
          >
            <TestimonialsCarousel />
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default TestimonialsSection;
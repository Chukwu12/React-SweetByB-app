import { Box, VStack, Text, Image } from "@chakra-ui/react";
import React from "react";
import testimonialBg from "../../assets/images/testimonial-bg.webp";
import TestimonialsCarousel from "./TestimonialsCarousel";

function TestimonialsSection() {
  return (
    <Box
      width="100%"
      position="relative"
      py={{ base: "5rem", md: "8rem" }}
      overflow="hidden"
      borderRadius={'25px'}
    >
      {/* Background */}
      <Image
        src={testimonialBg}
        alt="Testimonials Background"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={0}
      />

      {/* Heading & Description */}
      <VStack position="relative" zIndex={1} spacing={6} textAlign="center" mb={12}>
        <Text
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="600"
          letterSpacing="2px"
        >
          What Our Customers Say
        </Text>

        <Text
          maxW={{ base: "90%", md: "70%", lg: "50%" }}
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          letterSpacing="1px"
        >
          Sweet-By-B desserts are absolutely delightful! The flavors are rich, the presentation is beautiful, and every bite feels like it’s made with love. It's my go-to for every special occasion.
        </Text>
      </VStack>

      {/* Carousel */}
      <Box position="relative" zIndex={1}>
        <TestimonialsCarousel />
      </Box>
    </Box>
  );
}

export default TestimonialsSection;

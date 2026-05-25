import { Box, VStack, Text, Image, HStack } from "@chakra-ui/react";
import React from "react";
import testimonialBg from "../../assets/images/testimonial-bg.webp";
import TestimonialsCarousel from "./TestimonialsCarousel";

function TestimonialsSection() {
  return (
    <Box
      width="100%"
      position="relative"
      py={{ base: "5rem", md: "7rem" }}
      overflow="hidden"
      borderRadius={"28px"}
      border="1px solid"
      borderColor="rgba(236, 214, 202, 0.9)"
      boxShadow="0 34px 70px -38px rgba(59, 42, 40, 0.6)"
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

      {/* Overlay layers */}
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(145deg, rgba(255, 248, 243, 0.78) 0%, rgba(255, 239, 229, 0.7) 100%)"
        zIndex={0}
      />
      <Box
        position="absolute"
        top="-40px"
        left="-30px"
        width={{ base: "220px", md: "300px" }}
        height={{ base: "220px", md: "300px" }}
        bg="rgba(252, 231, 243, 0.5)"
        borderRadius="full"
        filter="blur(60px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-50px"
        right="-20px"
        width={{ base: "240px", md: "340px" }}
        height={{ base: "240px", md: "340px" }}
        bg="rgba(244, 184, 96, 0.28)"
        borderRadius="full"
        filter="blur(70px)"
        zIndex={0}
      />

      {/* Heading & Description */}
      <VStack position="relative" zIndex={1} spacing={5} textAlign="center" mb={{ base: 10, md: 12 }} px={{ base: 4, md: 8 }}>
        <Text
          fontFamily="'Manrope', sans-serif"
          fontSize={{ base: "xs", md: "sm" }}
          letterSpacing="0.2em"
          textTransform="uppercase"
          color="#9a7268"
        >
          Guest Love Notes
        </Text>

        <Text
          fontFamily="'Playfair Display', serif"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="700"
          letterSpacing="0.01em"
          lineHeight="1.1"
          color="#3B2A28"
        >
          What Our Customers Say
        </Text>

        <Text
          maxW={{ base: "95%", md: "76%", lg: "58%" }}
          fontFamily="'Manrope', sans-serif"
          fontSize={{ base: "15px", md: "17px", lg: "18px" }}
          lineHeight={{ base: "1.8", md: "1.9" }}
          color="#6c5651"
        >
          Sweet-By-B desserts are absolutely delightful! The flavors are rich, the presentation is beautiful, and every bite feels like it’s made with love. It's my go-to for every special occasion.
        </Text>

        <HStack spacing={3} flexWrap="wrap" justifyContent="center">
          <Text fontFamily="'Manrope', sans-serif" fontSize="sm" color="#5f4a45" px={4} py={2} borderRadius="full" bg="whiteAlpha.800" border="1px solid" borderColor="#ecd8ce">
            100+ Happy Customers
          </Text>
          <Text fontFamily="'Manrope', sans-serif" fontSize="sm" color="#5f4a45" px={4} py={2} borderRadius="full" bg="whiteAlpha.800" border="1px solid" borderColor="#ecd8ce">
            Trusted for Events
          </Text>
        </HStack>
      </VStack>

      {/* Carousel */}
      <Box position="relative" zIndex={1}>
        <TestimonialsCarousel />
      </Box>
    </Box>
  );
}

export default TestimonialsSection;

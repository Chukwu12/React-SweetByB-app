import { Box, Button, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";


function ContactSection() {
  const sectionMotion = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", staggerChildren: 0.16 },
    },
  };

  const itemMotion = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Box
      width="100%"
      mt={{ base: "4rem", md: "5rem" }}
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 12 }}
      position="relative"
      overflow="hidden"
      borderRadius={{ base: "26px", md: "34px" }}
      border="1px solid"
      borderColor="#edd8cc"
      bg="linear-gradient(145deg, #fffaf7 0%, #ffefe7 52%, #fff6ee 100%)"
      boxShadow="0 32px 70px -45px rgba(59, 42, 40, 0.65)"
    >
      <Box
        position="absolute"
        top="-72px"
        right="-52px"
        width={{ base: "220px", md: "300px" }}
        height={{ base: "220px", md: "300px" }}
        borderRadius="full"
        bg="rgba(252, 231, 243, 0.75)"
        filter="blur(64px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-86px"
        left="-42px"
        width={{ base: "240px", md: "330px" }}
        height={{ base: "240px", md: "330px" }}
        borderRadius="full"
        bg="rgba(245, 190, 121, 0.36)"
        filter="blur(72px)"
        pointerEvents="none"
      />

      <HStack
        as={motion.div}
        position="relative"
        zIndex={1}
        width="100%"
        maxW="1160px"
        mx="auto"
        alignItems="stretch"
        spacing={{ base: 6, md: 8 }}
        flexDirection={{ base: "column", lg: "row" }}
        variants={sectionMotion}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <VStack
          as={motion.div}
          alignItems="flex-start"
          width={{ base: "100%", lg: "40%" }}
          spacing={6}
          p={{ base: 2, md: 4 }}
          variants={itemMotion}
        >
          <Text
            fontFamily="'Manrope', sans-serif"
            textTransform="uppercase"
            letterSpacing="0.18em"
            fontSize="xs"
            color="#9a7268"
          >
            Reach Out
          </Text>

          <Text
            fontFamily="'Playfair Display', serif"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight="1.08"
            color="#3B2A28"
          >
            Let’s Plan Something Sweet
          </Text>

          <Text
            fontFamily="'Manrope', sans-serif"
            color="#6d5751"
            lineHeight="1.9"
            fontSize={{ base: "15px", md: "16px" }}
          >
            Tell us what you are celebrating and we will help craft a dessert table your guests will remember. Share your date, style, and flavor preferences below.
          </Text>

          <VStack width="100%" spacing={4} pt={2}>
            <HStack
              width="100%"
              alignItems="center"
              justifyContent="flex-start"
              spacing={4}
              bg="rgba(255, 255, 255, 0.74)"
              border="1px solid"
              borderColor="#ecd8ce"
              borderRadius="20px"
              px={4}
              py={4}
            >
              <Box
                width="48px"
                height="48px"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#fff5f0"
                color="#d97757"
                fontSize="22px"
              >
                <MdEmail />
              </Box>
              <VStack spacing={0} alignItems="flex-start">
                <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#3B2A28">
                  Email
                </Text>
                <Text fontFamily="'Manrope', sans-serif" color="#6d5751" fontSize="sm">
                  Biancaboursiquot@yahoo.com
                </Text>
              </VStack>
            </HStack>

            <HStack
              width="100%"
              alignItems="center"
              justifyContent="flex-start"
              spacing={4}
              bg="rgba(255, 255, 255, 0.74)"
              border="1px solid"
              borderColor="#ecd8ce"
              borderRadius="20px"
              px={4}
              py={4}
            >
              <Box
                width="48px"
                height="48px"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#fff5f0"
                color="#d97757"
                fontSize="20px"
              >
                <FaLocationArrow />
              </Box>
              <VStack spacing={0} alignItems="flex-start">
                <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#3B2A28">
                  Address
                </Text>
                <Text fontFamily="'Manrope', sans-serif" color="#6d5751" fontSize="sm">
                  Baldwin, NY
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>

        <VStack
          as={motion.div}
          width={{ base: "100%", lg: "60%" }}
          bg="rgba(255, 255, 255, 0.72)"
          border="1px solid"
          borderColor="#edd8cc"
          borderRadius={{ base: "24px", md: "30px" }}
          backdropFilter="blur(8px)"
          p={{ base: 5, md: 8 }}
          spacing={5}
          alignItems="stretch"
          boxShadow="0 24px 56px -44px rgba(59,42,40,0.78)"
          variants={itemMotion}
        >
          <VStack alignItems="flex-start" spacing={2}>
            <Text fontFamily="'Playfair Display', serif" fontSize={{ base: "2xl", md: "3xl" }} color="#3B2A28">
              Send a Message
            </Text>
            <Text fontFamily="'Manrope', sans-serif" fontSize="sm" color="#7c6660">
              We usually respond within 24 hours.
            </Text>
          </VStack>

          <HStack spacing={4} flexDirection={{ base: "column", md: "row" }}>
            <VStack width="100%" alignItems="flex-start" spacing={2}>
              <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#4f3e3a">
                Name
              </Text>
              <Input
                placeholder="Your full name"
                bg="#fff5f0"
                border="1px solid"
                borderColor="#efd9cd"
                borderRadius="16px"
                _hover={{ borderColor: "#d9b9aa" }}
                _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
              />
            </VStack>
            <VStack width="100%" alignItems="flex-start" spacing={2}>
              <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#4f3e3a">
                Email
              </Text>
              <Input
                placeholder="name@email.com"
                type="email"
                bg="#fff5f0"
                border="1px solid"
                borderColor="#efd9cd"
                borderRadius="16px"
                _hover={{ borderColor: "#d9b9aa" }}
                _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
              />
            </VStack>
          </HStack>

          <VStack width="100%" alignItems="flex-start" spacing={2}>
            <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#4f3e3a">
              Phone
            </Text>
            <Input
              placeholder="(123) 456-7890"
              bg="#fff5f0"
              border="1px solid"
              borderColor="#efd9cd"
              borderRadius="16px"
              _hover={{ borderColor: "#d9b9aa" }}
              _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
            />
          </VStack>

          <VStack width="100%" alignItems="flex-start" spacing={2}>
            <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#4f3e3a">
              Message
            </Text>
            <Textarea
              placeholder="Tell us about your event, preferred desserts, and date."
              resize="vertical"
              minH="150px"
              bg="#fff5f0"
              border="1px solid"
              borderColor="#efd9cd"
              borderRadius="16px"
              _hover={{ borderColor: "#d9b9aa" }}
              _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
            />
          </VStack>

          <Button
            alignSelf="flex-start"
            px={8}
            py={6}
            borderRadius="full"
            fontFamily="'Manrope', sans-serif"
            fontWeight="700"
            fontSize="sm"
            letterSpacing="0.04em"
            bg="linear-gradient(120deg, #d97757 0%, #b85d3f 100%)"
            color="white"
            _hover={{ transform: "translateY(-1px)", boxShadow: "0 16px 26px -18px rgba(173, 92, 63, 0.7)" }}
            _active={{ transform: "translateY(0px)" }}
          >
            Send Message
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
}

export default ContactSection;
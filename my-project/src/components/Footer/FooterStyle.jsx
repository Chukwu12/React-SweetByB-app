import { Box, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { TbClock, TbMapPin, TbPhone } from "react-icons/tb";

function FooterStyle() {
  return (
    <Box width="100%" px={{ base: 6, md: 10 }} pb={{ base: 8, md: 12 }}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 8, lg: 10 }}>
        <VStack alignItems="flex-start" spacing={3}>
          <Text fontFamily="'Playfair Display', serif" fontSize="2xl" fontWeight="700" color="white">
            Sweets by B
          </Text>
          <Text fontFamily="'Manrope', sans-serif" color="whiteAlpha.900" fontSize="sm" lineHeight="1.8">
            Premium handcrafted desserts for birthdays, events, and everyday indulgence.
          </Text>
          <HStack color="whiteAlpha.900" spacing={2}>
            <TbMapPin />
            <Text fontFamily="'Manrope', sans-serif" fontSize="sm">Serving local delivery + pickup</Text>
          </HStack>
        </VStack>

        <VStack alignItems="flex-start" spacing={3}>
          <Text fontFamily="'Playfair Display', serif" fontSize="xl" fontWeight="700" color="white">
            Quick Links
          </Text>
          <Link href="/shop" fontFamily="'Manrope', sans-serif" color="whiteAlpha.900" _hover={{ color: 'white' }}>Shop</Link>
          <Link href="/about" fontFamily="'Manrope', sans-serif" color="whiteAlpha.900" _hover={{ color: 'white' }}>About Us</Link>
          <Link href="/contact" fontFamily="'Manrope', sans-serif" color="whiteAlpha.900" _hover={{ color: 'white' }}>Custom Orders</Link>
          <Link href="/cart" fontFamily="'Manrope', sans-serif" color="whiteAlpha.900" _hover={{ color: 'white' }}>Your Cart</Link>
        </VStack>

        <VStack alignItems="flex-start" spacing={3}>
          <Text fontFamily="'Playfair Display', serif" fontSize="xl" fontWeight="700" color="white">
            Opening Hours
          </Text>
          <HStack alignItems="flex-start" color="whiteAlpha.900" spacing={2}>
            <TbClock />
            <VStack alignItems="flex-start" spacing={1}>
              <Text fontFamily="'Manrope', sans-serif" fontSize="sm">Mon - Wed: 9:00 AM - 8:00 PM</Text>
              <Text fontFamily="'Manrope', sans-serif" fontSize="sm">Thu - Fri: 9:00 AM - 7:00 PM</Text>
              <Text fontFamily="'Manrope', sans-serif" fontSize="sm">Sat: 9:00 AM - 1:00 PM</Text>
              <Text fontFamily="'Manrope', sans-serif" fontSize="sm">Sun: Closed</Text>
            </VStack>
          </HStack>
        </VStack>

        <VStack alignItems="flex-start" spacing={3}>
          <Text fontFamily="'Playfair Display', serif" fontSize="xl" fontWeight="700" color="white">
            Contact
          </Text>
          <HStack color="whiteAlpha.900" spacing={2}>
            <TbPhone />
            <Text fontFamily="'Manrope', sans-serif" fontSize="sm">DM us on Instagram for fastest response</Text>
          </HStack>
          <Text fontFamily="'Manrope', sans-serif" color="whiteAlpha.900" fontSize="sm">
            Terms of Service
          </Text>
          <Text fontFamily="'Manrope', sans-serif" color="whiteAlpha.900" fontSize="sm">
            Privacy Policy
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}

export default FooterStyle;
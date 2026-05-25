import { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import logo from "../../assets/images/footer-logo.png";
import classicCheesecake from "../../assets/images/classic-cheesecake.webp";
import dozenCupcakes from "../../assets/images/dozen-cupcakes.webp";
import assortedDessert from "../../assets/images/assorted-dessert.webp";
import { FaInstagram } from "react-icons/fa";
import FooterStyle from "./FooterStyle";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};


function Footer() {
  const [email, setEmail] = useState("");
  const [isFooterHovered, setIsFooterHovered] = useState(false);
  const toast = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Thanks for joining Sweet ByB updates",
      description: "We will share seasonal drops and limited dessert menus soon.",
      status: "success",
      duration: 3500,
      isClosable: true,
      position: "top",
    });
    setEmail("");
  };

  const previewImages = [
    { src: classicCheesecake, alt: "Classic Cheesecake" },
    { src: dozenCupcakes, alt: "Dozen Cupcakes" },
    { src: assortedDessert, alt: "Assorted Dessert Box" },
  ];

  return (
    <Box
      width="100%"
      minHeight="auto"
      paddingTop={{ base: "4rem", md: "6rem" }}
      paddingBottom={{ base: "2rem", md: "3rem" }}
      overflow="hidden"
    >
      <Box
        width="95%"
        height="100%"
        mx="auto"
        bg="linear-gradient(135deg, #8BC6A2 0%, #5B9279 100%)"
        position="relative"
        overflow="hidden"
        borderRadius={['30px', '30px', '30px', '80px']}
        color="white"
        px={{ base: 6, md: 10 }}
        py={{ base: 8, md: 12 }}
        boxShadow="0 35px 80px -35px rgba(44, 94, 74, 0.6)"
        onMouseEnter={() => setIsFooterHovered(true)}
        onMouseLeave={() => setIsFooterHovered(false)}
      >
        <motion.div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-50px",
            width: "260px",
            height: "260px",
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "9999px",
            filter: "blur(55px)",
          }}
          animate={
            isFooterHovered
              ? { x: 14, y: 8, scale: 1.06 }
              : { x: 0, y: 0, scale: 1 }
          }
          transition={{ type: "spring", stiffness: 70, damping: 18 }}
        />
        <motion.div
          style={{
            position: "absolute",
            bottom: "-90px",
            right: "-70px",
            width: "280px",
            height: "280px",
            background: "#f4b86055",
            borderRadius: "9999px",
            filter: "blur(60px)",
          }}
          animate={
            isFooterHovered
              ? { x: -16, y: -10, scale: 1.08 }
              : { x: 0, y: 0, scale: 1 }
          }
          transition={{ type: "spring", stiffness: 70, damping: 18 }}
        />

        <Stack
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          position="relative"
          zIndex={1}
          align="stretch"
          justify="center"
          spacing={{ base: 8, md: 10 }}
        >
          <SimpleGrid as={motion.div} variants={fadeUpItem} columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 10 }} alignItems="stretch">
            <Stack as={motion.div} variants={fadeUpItem} spacing={6} justify="center">
              <HStack spacing={4}>
                <Image
                  src={logo}
                  alt="logo"
                  width={["75px", "90px", "105px", "120px"]}
                  height={["75px", "90px", "105px", "120px"]}
                  objectFit="contain"
                />
                <Box>
                  <Text fontFamily="'Playfair Display', serif" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700">
                    Sweets by B
                  </Text>
                  <Text fontFamily="'Manrope', sans-serif" color="whiteAlpha.900" fontSize="sm" letterSpacing="0.08em" textTransform="uppercase">
                    Premium Dessert Boutique
                  </Text>
                </Box>
              </HStack>

              <Box
                as={motion.div}
                variants={fadeUpItem}
                bg="whiteAlpha.220"
                border="1px solid"
                borderColor="whiteAlpha.400"
                borderRadius="2xl"
                p={{ base: 4, md: 5 }}
                backdropFilter="blur(10px)"
              >
                <Text fontFamily="'Playfair Display', serif" fontSize={{ base: "xl", md: "2xl" }} lineHeight="1.4">
                  "A dessert should taste like comfort and look like a celebration."
                </Text>
                <Text mt={3} fontFamily="'Manrope', sans-serif" color="whiteAlpha.900" fontSize="sm">
                  Signature cakes, puddings, and sweet trays crafted fresh for your moments.
                </Text>
              </Box>

              <HStack as={motion.div} variants={fadeUpItem} spacing={4}>
                <Link
                  href="https://www.instagram.com/sweets_byb/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  bg="white"
                  color="#5EA98B"
                  borderRadius="full"
                  w="46px"
                  h="46px"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="transform 0.25s"
                  _hover={{ transform: "translateY(-2px) scale(1.05)" }}
                >
                  <Icon as={FaInstagram} boxSize={5} />
                </Link>
                <Text fontFamily="'Manrope', sans-serif" color="whiteAlpha.900" fontSize="sm">
                  Follow us for daily bakes, event drops, and behind-the-scenes treats.
                </Text>
              </HStack>
            </Stack>

            <Stack
              as={motion.div}
              variants={fadeUpItem}
              spacing={6}
              bg="whiteAlpha.220"
              border="1px solid"
              borderColor="whiteAlpha.400"
              borderRadius="2xl"
              p={{ base: 5, md: 6 }}
              backdropFilter="blur(12px)"
              justify="space-between"
            >
              <Box>
                <Text fontFamily="'Playfair Display', serif" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700">
                  Join the Sweet List
                </Text>
                <Text fontFamily="'Manrope', sans-serif" color="whiteAlpha.900" mt={2}>
                  Get seasonal menu drops, limited holiday boxes, and early ordering windows.
                </Text>
              </Box>

              <Box as="form" onSubmit={handleNewsletterSubmit}>
                <HStack align="stretch" spacing={3} flexDirection={{ base: "column", sm: "row" }}>
                  <FormControl isRequired>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      bg="whiteAlpha.900"
                      color="#3B2A28"
                      _placeholder={{ color: "#7a615b" }}
                      borderColor="transparent"
                      _focusVisible={{ borderColor: "#F4B860", boxShadow: "0 0 0 1px #F4B860" }}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    bg="#D97757"
                    color="white"
                    px={6}
                    _hover={{ bg: "#c96a4d" }}
                    fontFamily="'Manrope', sans-serif"
                    fontWeight="700"
                    letterSpacing="0.03em"
                  >
                    Subscribe
                  </Button>
                </HStack>
              </Box>

              <Box>
                <Text fontFamily="'Playfair Display', serif" fontSize="lg" mb={3}>
                  Instagram Preview
                </Text>
                <SimpleGrid as={motion.div} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} columns={3} spacing={3}>
                  {previewImages.map((image) => (
                    <Box as={motion.div} variants={fadeUpItem} key={image.alt} borderRadius="xl" overflow="hidden" border="1px solid" borderColor="whiteAlpha.400">
                      <Image src={image.src} alt={image.alt} w="100%" h={{ base: "72px", md: "88px" }} objectFit="cover" />
                    </Box>
                  ))}
                </SimpleGrid>
                <Link
                  mt={3}
                  display="inline-block"
                  href="https://www.instagram.com/sweets_byb/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontFamily="'Manrope', sans-serif"
                  color="white"
                  textDecoration="underline"
                  _hover={{ color: "whiteAlpha.900" }}
                >
                  See more on Instagram
                </Link>
              </Box>
            </Stack>
          </SimpleGrid>

          <Divider as={motion.div} variants={fadeUpItem} borderColor="whiteAlpha.500" />

          <Box as={motion.div} variants={fadeUpItem}>
            <FooterStyle />
          </Box>

          <Flex as={motion.div} variants={fadeUpItem} justify="center" pt={2}>
            <Text fontFamily="'Manrope', sans-serif" fontSize="sm" color="whiteAlpha.900" textAlign="center">
              Copyright {new Date().getFullYear()} Sweets by B. Crafted fresh with love.
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}



export default Footer;
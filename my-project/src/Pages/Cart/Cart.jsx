import React, { useContext } from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
  Image,
  IconButton,
  Radio,
  RadioGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { StoreContext } from "../../context/storeContext";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    getCartTotalPrice,
    getTotalCartCount,
    fulfillmentMethod,
    setFulfillmentMethod,
  } = useContext(StoreContext);
  const navigate = useNavigate();
  const cartEntries = Object.entries(cartItems || {});
  const cartCount = getTotalCartCount();

  const subtotal = getCartTotalPrice();
  const deliveryFee = fulfillmentMethod === "delivery" ? 2 : 0;
  const total = subtotal + deliveryFee;

  const hasInvalidQuantities = cartEntries.some(
    ([, item]) => item.quantity < 5
  );

  const isCartEmpty = cartEntries.length === 0;

  const sectionMotion = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", staggerChildren: 0.14 },
    },
  };

  const itemMotion = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <Box
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 10 }}
    >
      <VStack
        as={motion.div}
        align="stretch"
        spacing={{ base: 6, md: 8 }}
        variants={sectionMotion}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <HStack as={motion.div} variants={itemMotion} justify="space-between" align="flex-end" flexWrap="wrap" spacing={4}>
          <VStack align="flex-start" spacing={1}>
            <Text
              fontFamily="'Playfair Display', serif"
              fontSize={{ base: "3xl", md: "4xl" }}
              color="#3B2A28"
              lineHeight="1.05"
            >
              Your Cart
            </Text>
            <Text fontFamily="'Manrope', sans-serif" color="#7a625b">
              Review your desserts before checkout.
            </Text>
          </VStack>

          <Badge
            px={4}
            py={2}
            borderRadius="full"
            bg="#fff5f0"
            color="#8c645a"
            border="1px solid"
            borderColor="#edd8cc"
            fontFamily="'Manrope', sans-serif"
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="0.08em"
          >
            {cartCount} item{cartCount === 1 ? "" : "s"}
          </Badge>
        </HStack>

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6} alignItems="start">
          <VStack
            as={motion.div}
            variants={itemMotion}
            gridColumn={{ base: "auto", lg: "span 2" }}
            align="stretch"
            spacing={4}
            p={{ base: 4, md: 6 }}
            borderRadius="28px"
            border="1px solid"
            borderColor="#edd8cc"
            bg="linear-gradient(145deg, #fffaf7 0%, #fff2ea 100%)"
            boxShadow="0 22px 48px -40px rgba(59,42,40,0.72)"
          >
            {isCartEmpty ? (
              <VStack spacing={4} py={{ base: 10, md: 14 }}>
                <Text fontSize="3xl">🍰</Text>
                <Text
                  fontFamily="'Playfair Display', serif"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color="#3B2A28"
                  textAlign="center"
                >
                  Your cart is empty
                </Text>
                <Text fontFamily="'Manrope', sans-serif" color="#7a625b" textAlign="center">
                  Add your favorite treats to get started.
                </Text>
                <Button
                  onClick={() => navigate("/shop")}
                  borderRadius="full"
                  px={8}
                  py={6}
                  fontFamily="'Manrope', sans-serif"
                  fontWeight="700"
                  fontSize="sm"
                  letterSpacing="0.04em"
                  bg="linear-gradient(120deg, #d97757 0%, #b85d3f 100%)"
                  color="white"
                  _hover={{ transform: "translateY(-1px)", boxShadow: "0 16px 26px -18px rgba(173, 92, 63, 0.7)" }}
                >
                  Browse Desserts
                </Button>
              </VStack>
            ) : (
              cartEntries.map(([cartKey, cartItem]) => {
                const itemPrice = Number(cartItem.minPrice || 0);
                const itemTotal = itemPrice * cartItem.quantity;

                return (
                  <Box
                    as={motion.div}
                    variants={itemMotion}
                    key={cartKey}
                    p={{ base: 4, md: 5 }}
                    borderRadius="22px"
                    border="1px solid"
                    borderColor="#edd8cc"
                    bg="rgba(255, 255, 255, 0.78)"
                  >
                    <HStack spacing={4} align="stretch" justify="space-between">
                      <HStack align="flex-start" spacing={4} flex="1">
                        <Image
                          src={cartItem.image}
                          alt={cartItem.name}
                          boxSize={{ base: "74px", md: "88px" }}
                          objectFit="cover"
                          borderRadius="16px"
                          border="1px solid"
                          borderColor="#edd8cc"
                        />

                        <VStack align="flex-start" spacing={1} flex="1">
                          <Text
                            fontFamily="'Playfair Display', serif"
                            fontSize={{ base: "lg", md: "xl" }}
                            color="#3B2A28"
                            lineHeight="1.2"
                          >
                            {cartItem.name}
                          </Text>

                          {cartItem.flavor && (
                            <Text fontFamily="'Manrope', sans-serif" fontSize="sm" color="#7a625b">
                              Flavor: {cartItem.flavor}
                            </Text>
                          )}

                          <HStack spacing={3} pt={2} flexWrap="wrap">
                            <Badge
                              borderRadius="full"
                              px={3}
                              py={1}
                              bg="#fff5f0"
                              color="#8a655b"
                              border="1px solid"
                              borderColor="#edd8cc"
                            >
                              ${itemPrice.toFixed(2)} each
                            </Badge>
                            <Badge
                              borderRadius="full"
                              px={3}
                              py={1}
                              bg={cartItem.quantity < 5 ? "#fff2f0" : "#f2fff9"}
                              color={cartItem.quantity < 5 ? "#b74d4d" : "#2b7e5d"}
                              border="1px solid"
                              borderColor={cartItem.quantity < 5 ? "#f1c7c0" : "#bce2d3"}
                            >
                              Qty {cartItem.quantity}
                            </Badge>
                          </HStack>
                        </VStack>
                      </HStack>

                      <VStack align="flex-end" justify="space-between">
                        <Text
                          fontFamily="'Manrope', sans-serif"
                          fontWeight="700"
                          color="#4f3e3a"
                          fontSize={{ base: "md", md: "lg" }}
                        >
                          ${itemTotal.toFixed(2)}
                        </Text>
                        <IconButton
                          icon={<FiTrash2 />}
                          aria-label="Remove from cart"
                          onClick={() => removeFromCart(cartKey)}
                          bg="#fff1ed"
                          color="#c5563d"
                          border="1px solid"
                          borderColor="#efcfc3"
                          _hover={{ bg: "#ffe6df" }}
                          size="sm"
                        />
                      </VStack>
                    </HStack>
                  </Box>
                );
              })
            )}
          </VStack>

          <VStack
            as={motion.div}
            variants={itemMotion}
            align="stretch"
            spacing={5}
            p={{ base: 5, md: 6 }}
            borderRadius="28px"
            border="1px solid"
            borderColor="#edd8cc"
            bg="rgba(255,255,255,0.82)"
            boxShadow="0 22px 48px -40px rgba(59,42,40,0.72)"
            position={{ base: "relative", lg: "sticky" }}
            top={{ lg: "110px" }}
          >
            <Text
              fontFamily="'Playfair Display', serif"
              fontSize={{ base: "2xl", md: "3xl" }}
              color="#3B2A28"
            >
              Cart Totals
            </Text>

            <VStack align="stretch" spacing={3}>
              <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#5f4a45">
                How would you like to receive your order?
              </Text>

              <RadioGroup value={fulfillmentMethod} onChange={setFulfillmentMethod}>
                <VStack align="stretch" spacing={2}>
                  <HStack
                    p={3}
                    borderRadius="14px"
                    border="1px solid"
                    borderColor={fulfillmentMethod === "delivery" ? "#d9b7ab" : "#edd8cc"}
                    bg={fulfillmentMethod === "delivery" ? "#fff5f0" : "white"}
                  >
                    <Radio value="delivery" colorScheme="orange">Delivery</Radio>
                  </HStack>
                  <HStack
                    p={3}
                    borderRadius="14px"
                    border="1px solid"
                    borderColor={fulfillmentMethod === "pickup" ? "#d9b7ab" : "#edd8cc"}
                    bg={fulfillmentMethod === "pickup" ? "#fff5f0" : "white"}
                  >
                    <Radio value="pickup" colorScheme="orange">Pickup (No delivery)</Radio>
                  </HStack>
                </VStack>
              </RadioGroup>
            </VStack>

            <Divider borderColor="#ecd8ce" />

            <VStack align="stretch" spacing={3}>
              <HStack justify="space-between">
                <Text fontFamily="'Manrope', sans-serif" color="#6d5751">Subtotal</Text>
                <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#4f3e3a">${subtotal.toFixed(2)}</Text>
              </HStack>
              <HStack justify="space-between">
                <Text fontFamily="'Manrope', sans-serif" color="#6d5751">
                  {fulfillmentMethod === "delivery" ? "Delivery Fee" : "Pickup Fee"}
                </Text>
                <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#4f3e3a">${deliveryFee.toFixed(2)}</Text>
              </HStack>
              <Divider borderColor="#ecd8ce" />
              <HStack justify="space-between">
                <Text fontFamily="'Manrope', sans-serif" fontSize="lg" fontWeight="700" color="#3B2A28">Total</Text>
                <Text fontFamily="'Manrope', sans-serif" fontSize="lg" fontWeight="800" color="#3B2A28">${total.toFixed(2)}</Text>
              </HStack>
            </VStack>

            {hasInvalidQuantities && (
              <Box p={3} borderRadius="14px" bg="#fff1ed" border="1px solid" borderColor="#f0cfc3">
                <Text fontFamily="'Manrope', sans-serif" color="#a44343" fontWeight="700" fontSize="sm">
                  Each item must have a minimum quantity of 5 to proceed to checkout.
                </Text>
              </Box>
            )}

            <Button
              onClick={() => navigate("/order")}
              width="100%"
              mt={1}
              py={6}
              borderRadius="full"
              fontFamily="'Manrope', sans-serif"
              fontWeight="700"
              fontSize="sm"
              letterSpacing="0.04em"
              bg="linear-gradient(120deg, #d97757 0%, #b85d3f 100%)"
              color="white"
              _hover={{ transform: "translateY(-1px)", boxShadow: "0 16px 26px -18px rgba(173, 92, 63, 0.7)" }}
              isDisabled={isCartEmpty || hasInvalidQuantities}
            >
              Proceed To Checkout
            </Button>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

export default Cart;

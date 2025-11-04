import React, { useContext } from "react";
import { Box, Button, HStack, Text, VStack, Image, IconButton } from "@chakra-ui/react";
import { StoreContext } from "../context/storeContext";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

function Cart() {
  const { cartItems, removeFromCart, getCartTotalPrice, getTotalCartCount } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = getCartTotalPrice(); // Centralized calculation
  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  const hasInvalidQuantities = Object.values(cartItems).some(item => item.quantity < 5);

  return (
    <Box maxWidth="1200px" margin="auto" padding="20px">
      <VStack spacing="24px" align="stretch">
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Your Cart
          </Text>
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
            <HStack spacing={4} fontWeight="semibold">
              <Text flex="1">Item</Text>
              <Text flex="1">Title</Text>
              <Text flex="1">Price</Text>
              <Text flex="1">Quantity</Text>
              <Text flex="1">Total</Text>
              <Text flex="0.5">Remove</Text>
            </HStack>
            <Box as="hr" my={2} />

            {Object.entries(cartItems).map(([cartKey, cartItem]) => (
              <Box key={cartKey} py={4}>
                <HStack spacing={4} align="center">
                  <Image
                    src={cartItem.image}
                    alt={cartItem.name}
                    boxSize="60px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                  <VStack flex="1" align="start" spacing={0}>
                    <Text fontWeight="semibold">{cartItem.name}</Text>
                    {cartItem.flavor && (
                      <Text fontSize="sm" color="gray.500">
                        Flavor: {cartItem.flavor}
                      </Text>
                    )}
                  </VStack>
                  <Text flex="1">${cartItem.minPrice}</Text>
                  <Text flex="1">{cartItem.quantity}</Text>
                  <Text flex="1">${(cartItem.minPrice * cartItem.quantity).toFixed(2)}</Text>
                  <IconButton
                    icon={<FiTrash2 />}
                    aria-label="Remove from cart"
                    onClick={() => removeFromCart(cartKey)}
                    colorScheme="red"
                    size="sm"
                  />
                </HStack>
                <Box as="hr" my={2} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Cart Totals Section */}
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Cart Totals
          </Text>
          <VStack align="stretch" spacing={4}>
            <HStack justify="space-between">
              <Text>Subtotal</Text>
              <Text>${subtotal.toFixed(2)}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Delivery Fee</Text>
              <Text>${deliveryFee.toFixed(2)}</Text>
            </HStack>
            <Box as="hr" />
            <HStack justify="space-between" fontWeight="bold">
              <Text>Total</Text>
              <Text>${total.toFixed(2)}</Text>
            </HStack>
          </VStack>

          {hasInvalidQuantities && (
            <Text color="red.500" fontWeight="bold" mb={2}>
              ⚠️ Each item must have a minimum quantity of 5 to proceed to checkout.
            </Text>
          )}

          <Button
            onClick={() => navigate('/order')}
            colorScheme="teal"
            size="lg"
            width="100%"
            mt={6}
            _hover={{ bg: "teal.500" }}
            isDisabled={Object.keys(cartItems).length === 0 || hasInvalidQuantities}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default Cart;

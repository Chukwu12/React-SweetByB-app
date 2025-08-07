import React, { useContext } from "react";
import { Box, Button, HStack, Text, VStack, Image, IconButton } from "@chakra-ui/react";
import { StoreContext } from "../context/storeContext";
import { useNavigate } from "react-router-dom"
import { FiTrash2 } from "react-icons/fi"; // Trash icon for remove action

function Cart() {
  const { cartItems, products, removeFromCart } = useContext(StoreContext);

  const navigate = useNavigate();

  // Calculate subtotal dynamically based on cart items
  const subtotal = products.reduce((total, item) => {
    const quantity = cartItems[item._id] || 0;
    if (quantity > 0) {
      const price = item.minPrice || 0; // fallback
      return total + (price * quantity);
    }
    return total;
  }, 0);


  const deliveryFee = 2; // Fixed delivery fee for simplicity
  const total = subtotal + deliveryFee;

  return (
    <Box maxWidth="1200px" margin="auto" padding="20px">
      <VStack spacing="24px" align="stretch">
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Your Cart</Text>
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
            {products.map((item) => {
              if (cartItems[item._id] > 0) {
                return (
                  <Box key={item._id} py={4}>
                    <HStack spacing={4}>
                      <Image src={item.image} alt={item.itemTitle} boxSize="50px" objectFit="cover" />
                      <Text flex="1">{item.name}</Text>
                      <Text flex="1">
                        {item.maxPrice ? `$${item.minPrice} - $${item.maxPrice}` : `$${item.minPrice}`}
                      </Text>
                      <Text flex="1">{cartItems[item._id]}</Text>
                      <Text flex="1">
                        ${(item.minPrice * cartItems[item._id]).toFixed(2)}
                      </Text>
                      <IconButton
                        icon={<FiTrash2 />}
                        aria-label="Remove from cart"
                        onClick={() => removeFromCart(item._id)}
                        colorScheme="red"
                      />
                    </HStack>
                    <Box as="hr" my={2} />
                  </Box>
                );
              }
              return null;
            })}
          </Box>
        </Box>

        {/* Cart Totals Section */}
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="xl" fontWeight="bold" mb={4}>Cart Totals</Text>
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
          <Button onClick={() => navigate('/order')}
            colorScheme="teal"
            size="lg"
            width="100%"
            mt={6}
            _hover={{ bg: "teal.500" }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default Cart;

import React, { useContext } from "react";
import { Box, Button, HStack, Text, VStack, Image, IconButton } from "@chakra-ui/react";
import { StoreContext } from "../context/storeContext"; 
import { FiTrash2 } from "react-icons/fi"; // Trash icon for remove action

function Cart() {
  const { cartItems, itemCard, removeFromCart } = useContext(StoreContext);

  const navigate = useNavigate();

  // Calculate subtotal dynamically based on cart items
  const subtotal = itemCard.reduce((total, item) => {
    if (cartItems[item.id] > 0) {
      return total + (parseFloat(item.price) * cartItems[item.id]);
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
            {itemCard.map((item) => {
              if (cartItems[item.id] > 0) {
                return (
                  <Box key={item.id} py={4}>
                    <HStack spacing={4}>
                      <Image src={item.itemImage} alt={item.itemTitle} boxSize="50px" objectFit="cover" />
                      <Text flex="1">{item.name}</Text>
                      <Text flex="1">${item.price}</Text>
                      <Text flex="1">{cartItems[item.id]}</Text>
                      <Text flex="1">${(parseFloat(item.price) * cartItems[item.id]).toFixed(2)}</Text>
                      <IconButton
                        icon={<FiTrash2 />}
                        aria-label="Remove from cart"
                        onClick={() => removeFromCart(item.id)}
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
          <Button onClick={()=>navigate('/order')}
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

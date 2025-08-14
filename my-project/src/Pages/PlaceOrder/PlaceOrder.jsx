import { useState, useContext } from "react";
import { Box, Button, Input, Text, VStack, HStack, FormControl, FormLabel } from "@chakra-ui/react";
import { StoreContext } from "../../context/storeContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../../context/AuthContext";


function PlaceOrder() {
  const { cartItems, products } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const navigate = useNavigate();

  const { user } = useAuth?.() || {};


  // Calculate subtotal dynamically based on cart items
const subtotal = products.reduce((total, item) => {
  if (cartItems[item._id] > 0) {
    return total + (item.minPrice * cartItems[item._id]);
  }
  return total;
}, 0);


  const deliveryFee = 2; // Fixed delivery fee for simplicity
  const total = subtotal + deliveryFee;

  // Handle form submission (e.g., for saving order data)
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevents the form from reloading the page

 const orderData = {
  userId: user?._id || null,
  items: Object.entries(cartItems).map(([id, item]) => ({
    productId: id,
    name: item.name,
    minPrice: item.minPrice, 
    quantity: item.quantity,
  })),
  amount: total,
  address: {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    street: formData.street,
    city: formData.city,
    state: formData.state,
    zip: formData.zip,
    country: formData.country,
    phone: formData.phone,
  }
};


  try {
    // Make API request to backend to place the order
    const response = await axios.post('/api/order/place', orderData);
    // Log the backend response for debugging
    console.log("Backend Response:", response);

    if (response.data.success) {
      // Redirect user to Stripe checkout URL or confirmation page
      window.location.href = response.data.session_url;
    } else {
      alert(response.data.message || "Something went wrong, please try again.");
    }
  } catch (error) {
    console.error("Error submitting order:", error.response?.data || error);
    alert("An error occurred while processing your order.");
  }
};



return (
  <Box maxWidth="1200px" margin="auto" padding="20px">
    <VStack spacing="24px" align="stretch">
      {/* Delivery Information Form */}
      <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Delivery Information</Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="First name"
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Last name"
                  required
                />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email address"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Street</FormLabel>
              <Input
                type="text"
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                placeholder="Street"
                required
              />
            </FormControl>
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="City"
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>State</FormLabel>
                <Input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  placeholder="State"
                  required
                />
              </FormControl>
            </HStack>
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Zip</FormLabel>
                <Input
                  type="text"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  placeholder="Zip"
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="Country"
                  required
                />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone"
                required
              />
            </FormControl>

            {/* Cart Summary */}
            <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
              <Text fontSize="xl" fontWeight="bold" mb={4}>Cart Totals</Text>
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
            </Box>
            <Button type="submit" colorScheme="teal" size="lg" width="100%" mt={6}>
              Proceed To Payment
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  </Box>
);
}

export default PlaceOrder;

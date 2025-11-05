import { useState, useContext, useEffect } from "react";
import { Box, Button, Input, Text, VStack, HStack, FormControl, FormLabel } from "@chakra-ui/react";
import { StoreContext } from "../../context/storeContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function PlaceOrder() {
  const { cartItems, getCartTotalPrice } = useContext(StoreContext);
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

  // Load saved form data from localStorage on mount
  useEffect(() => {
    const savedForm = localStorage.getItem("formData");
    if (savedForm) setFormData(JSON.parse(savedForm));
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const subtotal = getCartTotalPrice();
  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  const isCartValid = () =>
    Object.values(cartItems).every((item) => item.quantity >= 5);

  // ✅ Use environment variable for backend URL with fallback
  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isCartValid()) {
      alert("Each item must have a minimum quantity of 5.");
      return;
    }

    const itemsArray = Object.values(cartItems).map((item) => ({
      name: item.name,
      minPrice: item.minPrice,
      quantity: item.quantity,
      flavor: item.flavor || "",
    }));

    const orderData = {
      userId: user?._id || null,
      items: itemsArray,
      amount: total,
      address: { ...formData },
    };

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/order/place`,
        orderData
      );

      if (response.data.success) {
        // Clear saved form and cart on success
        localStorage.removeItem("formData");
        localStorage.removeItem("cartItems");
        // Redirect to Stripe checkout
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
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Delivery Information
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              {/* Name Fields */}
              <HStack spacing={4}>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    placeholder="First name"
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    placeholder="Last name"
                    required
                  />
                </FormControl>
              </HStack>

              {/* Email */}
              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Email address"
                  required
                />
              </FormControl>

              {/* Address Fields */}
              <FormControl>
                <FormLabel>Street</FormLabel>
                <Input
                  type="text"
                  value={formData.street}
                  onChange={(e) =>
                    setFormData({ ...formData, street: e.target.value })
                  }
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
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    placeholder="City"
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>State</FormLabel>
                  <Input
                    type="text"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, zip: e.target.value })
                    }
                    placeholder="Zip"
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Input
                    type="text"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    placeholder="Country"
                    required
                  />
                </FormControl>
              </HStack>

              {/* Phone */}
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input
                  type="text"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Phone"
                  required
                />
              </FormControl>

              {/* Cart Totals */}
              <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  Cart Totals
                </Text>
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

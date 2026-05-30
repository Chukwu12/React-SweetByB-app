import { useState, useContext, useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  Input,
  Text,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { StoreContext } from "../../context/storeContext.jsx";
import apiClient from "../../api";
import { useAuth } from "../../context/AuthContext";

function PlaceOrder() {
  const { cartItems, getCartTotalPrice, fulfillmentMethod } = useContext(StoreContext);
  const cartEntries = Object.entries(cartItems || {});

  const isDelivery = fulfillmentMethod === "delivery";
  const { user } = useAuth() || {};


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

  // Load saved form data from localStorage on mount
  useEffect(() => {
    const savedForm = localStorage.getItem("formData");
    if (savedForm) setFormData(JSON.parse(savedForm));
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // ✅ Clear delivery address fields when switching to pickup
useEffect(() => {
  if (fulfillmentMethod === "pickup") {
    setFormData((prev) => ({
      ...prev,
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    }));
  }
}, [fulfillmentMethod]);


  const subtotal = getCartTotalPrice();
  const deliveryFee = fulfillmentMethod === "delivery" ? 2 : 0;
const total = subtotal + deliveryFee;


  const isCartValid = () =>
    Object.values(cartItems).every((item) => item.quantity >= 5);

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
      fulfillmentMethod,
      address: isDelivery
      ? { ...formData }
      : {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        },
    };

    try {
      const response = await apiClient.post("/api/order/place", orderData);

      if (response.data.success) {
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
    <Box
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 10 }}
    >
      <VStack
        as={motion.div}
        align="stretch"
        spacing={6}
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
              lineHeight="1.05"
              color="#3B2A28"
            >
              Checkout
            </Text>
            <Text fontFamily="'Manrope', sans-serif" color="#7a625b">
              {isDelivery ? "Share your delivery details to continue." : "Pickup selected. We just need your contact details."}
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
            {isDelivery ? "Delivery" : "Pickup"}
          </Badge>
        </HStack>

        <SimpleGrid as={motion.div} variants={itemMotion} columns={{ base: 1, lg: 3 }} spacing={6} alignItems="start">
          <Box
            as={motion.form}
            variants={itemMotion}
            onSubmit={handleSubmit}
            gridColumn={{ base: "auto", lg: "span 2" }}
            p={{ base: 5, md: 7 }}
            borderRadius="28px"
            border="1px solid"
            borderColor="#edd8cc"
            bg="linear-gradient(145deg, #fffaf7 0%, #fff2ea 100%)"
            boxShadow="0 22px 48px -40px rgba(59,42,40,0.72)"
          >
            <VStack spacing={5} align="stretch">
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize={{ base: "2xl", md: "3xl" }}
                color="#3B2A28"
              >
                {isDelivery ? "Delivery Information" : "Pickup Information"}
              </Text>

              {!isDelivery && (
                <Box p={3} borderRadius="14px" bg="#fff7f3" border="1px solid" borderColor="#f0ddd2">
                  <Text fontFamily="'Manrope', sans-serif" color="#7a625b" fontSize="sm">
                    Pickup orders do not require an address. We will contact you if we need any details.
                  </Text>
                </Box>
              )}

              <HStack spacing={4} flexDirection={{ base: "column", md: "row" }}>
                <FormControl isRequired>
                  <FormLabel fontFamily="'Manrope', sans-serif" color="#4f3e3a" fontWeight="700">First Name</FormLabel>
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    placeholder="First name"
                    bg="#fff5f0"
                    border="1px solid"
                    borderColor="#efd9cd"
                    borderRadius="14px"
                    _hover={{ borderColor: "#d9b9aa" }}
                    _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontFamily="'Manrope', sans-serif" color="#4f3e3a" fontWeight="700">Last Name</FormLabel>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    placeholder="Last name"
                    bg="#fff5f0"
                    border="1px solid"
                    borderColor="#efd9cd"
                    borderRadius="14px"
                    _hover={{ borderColor: "#d9b9aa" }}
                    _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
                  />
                </FormControl>
              </HStack>

              <FormControl isRequired>
                <FormLabel fontFamily="'Manrope', sans-serif" color="#4f3e3a" fontWeight="700">Email Address</FormLabel>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Email address"
                  bg="#fff5f0"
                  border="1px solid"
                  borderColor="#efd9cd"
                  borderRadius="14px"
                  _hover={{ borderColor: "#d9b9aa" }}
                  _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontFamily="'Manrope', sans-serif" color="#4f3e3a" fontWeight="700">Phone</FormLabel>
                <Input
                  type="text"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Phone"
                  bg="#fff5f0"
                  border="1px solid"
                  borderColor="#efd9cd"
                  borderRadius="14px"
                  _hover={{ borderColor: "#d9b9aa" }}
                  _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
                />
              </FormControl>

              {isDelivery && (
                <>
                  <FormControl isRequired>
                    <FormLabel fontFamily="'Manrope', sans-serif" color="#4f3e3a" fontWeight="700">Street</FormLabel>
                    <Input
                      type="text"
                      value={formData.street}
                      onChange={(e) =>
                        setFormData({ ...formData, street: e.target.value })
                      }
                      placeholder="Street"
                      bg="#fff5f0"
                      border="1px solid"
                      borderColor="#efd9cd"
                      borderRadius="14px"
                      _hover={{ borderColor: "#d9b9aa" }}
                      _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
                    />
                  </FormControl>

                  <HStack spacing={4} flexDirection={{ base: "column", md: "row" }}>
                    <FormControl isRequired>
                      <FormLabel fontFamily="'Manrope', sans-serif" color="#4f3e3a" fontWeight="700">City</FormLabel>
                      <Input
                        type="text"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        placeholder="City"
                        bg="#fff5f0"
                        border="1px solid"
                        borderColor="#efd9cd"
                        borderRadius="14px"
                        _hover={{ borderColor: "#d9b9aa" }}
                        _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontFamily="'Manrope', sans-serif" color="#4f3e3a" fontWeight="700">State</FormLabel>
                      <Input
                        type="text"
                        value={formData.state}
                        onChange={(e) =>
                          setFormData({ ...formData, state: e.target.value })
                        }
                        placeholder="State"
                        bg="#fff5f0"
                        border="1px solid"
                        borderColor="#efd9cd"
                        borderRadius="14px"
                        _hover={{ borderColor: "#d9b9aa" }}
                        _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
                      />
                    </FormControl>
                  </HStack>

                  <HStack spacing={4} flexDirection={{ base: "column", md: "row" }}>
                    <FormControl isRequired>
                      <FormLabel fontFamily="'Manrope', sans-serif" color="#4f3e3a" fontWeight="700">Zip</FormLabel>
                      <Input
                        type="text"
                        value={formData.zip}
                        onChange={(e) =>
                          setFormData({ ...formData, zip: e.target.value })
                        }
                        placeholder="Zip"
                        bg="#fff5f0"
                        border="1px solid"
                        borderColor="#efd9cd"
                        borderRadius="14px"
                        _hover={{ borderColor: "#d9b9aa" }}
                        _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontFamily="'Manrope', sans-serif" color="#4f3e3a" fontWeight="700">Country</FormLabel>
                      <Input
                        type="text"
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        placeholder="Country"
                        bg="#fff5f0"
                        border="1px solid"
                        borderColor="#efd9cd"
                        borderRadius="14px"
                        _hover={{ borderColor: "#d9b9aa" }}
                        _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
                      />
                    </FormControl>
                  </HStack>
                </>
              )}

              <Button
                type="submit"
                width="100%"
                mt={2}
                py={6}
                borderRadius="full"
                fontFamily="'Manrope', sans-serif"
                fontWeight="700"
                fontSize="sm"
                letterSpacing="0.04em"
                bg="linear-gradient(120deg, #d97757 0%, #b85d3f 100%)"
                color="white"
                _hover={{ transform: "translateY(-1px)", boxShadow: "0 16px 26px -18px rgba(173, 92, 63, 0.7)" }}
              >
                Proceed To Payment
              </Button>
            </VStack>
          </Box>

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
            <Text fontFamily="'Playfair Display', serif" fontSize={{ base: "2xl", md: "3xl" }} color="#3B2A28">
              Order Summary
            </Text>

            {cartEntries.length === 0 ? (
              <Box p={3} borderRadius="14px" bg="#fff7f3" border="1px solid" borderColor="#f0ddd2">
                <Text fontFamily="'Manrope', sans-serif" color="#7a625b" fontSize="sm">
                  Your cart is empty.
                </Text>
              </Box>
            ) : (
              <VStack align="stretch" spacing={3} maxH="260px" overflowY="auto" pr={1}>
                {cartEntries.map(([cartKey, cartItem]) => (
                  <HStack key={cartKey} justify="space-between" align="flex-start">
                    <VStack spacing={0} align="flex-start">
                      <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#4f3e3a" fontSize="sm">
                        {cartItem.name}
                      </Text>
                      <Text fontFamily="'Manrope', sans-serif" color="#7a625b" fontSize="xs">
                        Qty {cartItem.quantity}{cartItem.flavor ? ` • ${cartItem.flavor}` : ""}
                      </Text>
                    </VStack>
                    <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#4f3e3a" fontSize="sm">
                      ${(Number(cartItem.minPrice || 0) * Number(cartItem.quantity || 0)).toFixed(2)}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            )}

            <Divider borderColor="#ecd8ce" />

            <VStack align="stretch" spacing={3}>
              <HStack justify="space-between">
                <Text fontFamily="'Manrope', sans-serif" color="#6d5751">Subtotal</Text>
                <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#4f3e3a">${subtotal.toFixed(2)}</Text>
              </HStack>
              <HStack justify="space-between">
                <Text fontFamily="'Manrope', sans-serif" color="#6d5751">
                  {isDelivery ? "Delivery Fee" : "Pickup Fee"}
                </Text>
                <Text fontFamily="'Manrope', sans-serif" fontWeight="700" color="#4f3e3a">${deliveryFee.toFixed(2)}</Text>
              </HStack>
              <Divider borderColor="#ecd8ce" />
              <HStack justify="space-between">
                <Text fontFamily="'Manrope', sans-serif" fontSize="lg" fontWeight="700" color="#3B2A28">Total</Text>
                <Text fontFamily="'Manrope', sans-serif" fontSize="lg" fontWeight="800" color="#3B2A28">${total.toFixed(2)}</Text>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

export default PlaceOrder;

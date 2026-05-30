import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiClient from "../../api";
import { StoreContext } from "../../context/storeContext";

function Verify() {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useContext(StoreContext);

  const { isSuccess, orderId } = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return {
      isSuccess: params.get("success") === "true",
      orderId: params.get("orderId") || "",
    };
  }, [location.search]);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!isSuccess || !orderId) {
        return;
      }

      try {
        await apiClient.post("/api/order/verify", { orderId, success: true });
      } catch (error) {
        console.error("Error verifying payment:", error.response?.data || error);
      } finally {
        clearCart();
        localStorage.removeItem("cartItems");
        localStorage.removeItem("formData");
      }
    };

    verifyPayment();
  }, [isSuccess, orderId, clearCart]);

  return (
    <Box
      minH="100vh"
      px={{ base: 6, md: 8 }}
      py={{ base: 14, md: 20 }}
      bg="linear-gradient(145deg, #fff9f5 0%, #f8efe8 100%)"
      display="grid"
      placeItems="center"
    >
      <VStack
        spacing={5}
        maxW="620px"
        w="full"
        textAlign="center"
        p={{ base: 6, md: 10 }}
        borderRadius="28px"
        border="1px solid"
        borderColor="#ebd7cb"
        bg="white"
        boxShadow="0 24px 60px -42px rgba(59,42,40,0.72)"
      >
        <Text
          fontFamily="'Playfair Display', serif"
          fontSize={{ base: "3xl", md: "4xl" }}
          color="#3B2A28"
          lineHeight="1.1"
        >
          {isSuccess ? "Payment Confirmed" : "Payment Not Completed"}
        </Text>

        <Text fontFamily="'Manrope', sans-serif" color="#6e5a54" fontSize={{ base: "md", md: "lg" }}>
          {isSuccess
            ? "Thank you. Your order has been received and is being processed."
            : "You returned before completing payment. Your order was not charged."}
        </Text>

        {orderId && (
          <Text fontFamily="'Manrope', sans-serif" color="#8b6d63" fontSize="sm">
            Order ID: {orderId}
          </Text>
        )}

        <Button
          mt={2}
          px={8}
          py={6}
          borderRadius="full"
          bg="linear-gradient(120deg, #d97757 0%, #b85d3f 100%)"
          color="white"
          fontFamily="'Manrope', sans-serif"
          fontWeight="700"
          _hover={{ transform: "translateY(-1px)", boxShadow: "0 16px 26px -18px rgba(173,92,63,0.7)" }}
          onClick={() => navigate(isSuccess ? "/shop" : "/cart")}
        >
          {isSuccess ? "Continue Shopping" : "Return To Cart"}
        </Button>
      </VStack>
    </Box>
  );
}

export default Verify;

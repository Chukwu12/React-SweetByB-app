import apiClient from "../api";
import { useAuth } from "../context/AuthContext";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  HStack,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../utility/alerts";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { user, login, isAuthenticated, logout, isLoading } = useAuth();

  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const sectionMotion = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", staggerChildren: 0.16 },
    },
  };

  const itemMotion = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.48, ease: "easeOut" },
    },
  };

  // NOTE: we navigate to shop after successful login/signup below.
  // Keep users on the Home page when already authenticated so they can sign out here.

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setForm({ userName: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const endpoint = isLogin ? "/api/user/login" : "/api/user/signup";

  try {
    const response = await apiClient.post(
      endpoint,
      isLogin
        ? { email: form.email, password: form.password }
        : { ...form, confirmPassword: form.password }
    );

    login(response.data.user);
    await showSuccess(response.data.message);
    navigate("/shop");
  } catch (err) {
    const errorMsg = err.response?.data?.message || err.message;
    showError(errorMsg);
  }

  setForm({ userName: "", email: "", password: "" });
};

const handleSignOut = async () => {
  try {
    await apiClient.get("/api/user/logout");
    logout();
    showSuccess("Signed out successfully");
    navigate("/");
  } catch (err) {
    const errorMsg = err.response?.data?.message || err.message;
    showError(errorMsg);
  }
};




if (isLoading) {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="linear-gradient(145deg, #fff9f4 0%, #ffece2 55%, #fff5ee 100%)"
    >
      <VStack spacing={4}>
        <Spinner size="xl" color="#d97757" thickness="4px" />
        <Text fontFamily="'Manrope', sans-serif" fontSize="sm" color="#7c6660" letterSpacing="0.05em" textTransform="uppercase">
          Preparing your dessert lounge
        </Text>
      </VStack>
    </Flex>
  );
}

if (isAuthenticated) {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      px={4}
      py={10}
      bg="linear-gradient(145deg, #fff9f4 0%, #ffece2 55%, #fff5ee 100%)"
      position="relative"
      overflow="hidden"
    >
      <Box position="absolute" top="-80px" right="-60px" w="320px" h="320px" borderRadius="full" bg="rgba(252,231,243,0.6)" filter="blur(70px)" />
      <Box position="absolute" bottom="-90px" left="-50px" w="340px" h="340px" borderRadius="full" bg="rgba(245,190,121,0.34)" filter="blur(72px)" />

      <Box
        as={motion.div}
        w="full"
        maxW="560px"
        p={{ base: 7, md: 10 }}
        borderRadius="30px"
        border="1px solid"
        borderColor="#edd8cc"
        boxShadow="0 34px 72px -46px rgba(59, 42, 40, 0.72)"
        bg="rgba(255,255,255,0.8)"
        backdropFilter="blur(8px)"
        textAlign="center"
        position="relative"
        zIndex={1}
        initial="hidden"
        animate="show"
        variants={itemMotion}
      >
        <Text fontFamily="'Manrope', sans-serif" fontSize="xs" letterSpacing="0.18em" textTransform="uppercase" color="#9a7268">
          Welcome Back
        </Text>
        <Text mt={3} fontFamily="'Playfair Display', serif" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="700" lineHeight="1.05" color="#3B2A28">
          Sweet moments await
        </Text>
        <Text mt={4} fontFamily="'Manrope', sans-serif" fontSize="md" color="#6d5751">
          Signed in as {user?.userName || user?.email}
        </Text>

        <Button
          width="full"
          mt={8}
          borderRadius="full"
          py={6}
          fontFamily="'Manrope', sans-serif"
          fontWeight="700"
          fontSize="sm"
          letterSpacing="0.04em"
          bg="linear-gradient(120deg, #d97757 0%, #b85d3f 100%)"
          color="white"
          _hover={{ transform: "translateY(-1px)", boxShadow: "0 16px 26px -18px rgba(173, 92, 63, 0.7)" }}
          onClick={() => navigate('/shop')}
        >
          Go To Shop
        </Button>
        <Button
          width="full"
          mt={3}
          borderRadius="full"
          py={6}
          fontFamily="'Manrope', sans-serif"
          fontWeight="700"
          fontSize="sm"
          letterSpacing="0.04em"
          bg="white"
          color="#5f4a45"
          border="1px solid"
          borderColor="#e7d2c7"
          _hover={{ bg: "#fff6f1" }}
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </Box>
    </Flex>
  );
}

return (
  <Flex
    minH="100vh"
    align="center"
    justify="center"
    px={4}
    py={10}
    bg="linear-gradient(145deg, #fff9f4 0%, #ffece2 55%, #fff5ee 100%)"
    position="relative"
    overflow="hidden"
  >
    <Box position="absolute" top="-80px" right="-60px" w={{ base: "250px", md: "320px" }} h={{ base: "250px", md: "320px" }} borderRadius="full" bg="rgba(252,231,243,0.6)" filter="blur(70px)" />
    <Box position="absolute" bottom="-90px" left="-50px" w={{ base: "260px", md: "340px" }} h={{ base: "260px", md: "340px" }} borderRadius="full" bg="rgba(245,190,121,0.34)" filter="blur(72px)" />

    <HStack
      as={motion.div}
      w="full"
      maxW="1050px"
      spacing={{ base: 0, md: 8 }}
      flexDirection={{ base: "column", md: "row" }}
      alignItems="stretch"
      position="relative"
      zIndex={1}
      variants={sectionMotion}
      initial="hidden"
      animate="show"
    >
      <VStack
        as={motion.div}
        display={{ base: "none", md: "flex" }}
        width="46%"
        alignItems="flex-start"
        justifyContent="center"
        spacing={6}
        p={6}
        variants={itemMotion}
      >
        <Text fontFamily="'Manrope', sans-serif" fontSize="xs" letterSpacing="0.18em" textTransform="uppercase" color="#9a7268">
          Handcrafted Dessert Studio
        </Text>
        <Text fontFamily="'Playfair Display', serif" fontSize={{ md: "4xl", lg: "5xl" }} lineHeight="1.05" color="#3B2A28">
          Enter your Sweet by B account
        </Text>
        <Text fontFamily="'Manrope', sans-serif" color="#6d5751" lineHeight="1.9">
          Save favorites, track orders, and make every celebration feel custom and memorable.
        </Text>
        <HStack spacing={3}>
          <Text fontFamily="'Manrope', sans-serif" fontSize="sm" color="#5f4a45" px={4} py={2} borderRadius="full" bg="whiteAlpha.800" border="1px solid" borderColor="#ecd8ce">
            Secure Checkout
          </Text>
          <Text fontFamily="'Manrope', sans-serif" fontSize="sm" color="#5f4a45" px={4} py={2} borderRadius="full" bg="whiteAlpha.800" border="1px solid" borderColor="#ecd8ce">
            Fast Reorders
          </Text>
        </HStack>
      </VStack>

      <Box
        as={motion.div}
        w="full"
        maxW={{ base: "560px", md: "54%" }}
        p={{ base: 7, md: 10 }}
        borderRadius="30px"
        border="1px solid"
        borderColor="#edd8cc"
        boxShadow="0 34px 72px -46px rgba(59, 42, 40, 0.72)"
        bg="rgba(255,255,255,0.8)"
        backdropFilter="blur(8px)"
        variants={itemMotion}
      >
      <Text
        fontFamily="'Playfair Display', serif"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="700"
        letterSpacing="0.01em"
        textAlign="center"
        mb={2}
        color="#3B2A28"
      >
        {isLogin ? "Sign In" : "Create Account"}
      </Text>
      <Text
        fontFamily="'Manrope', sans-serif"
        fontSize="md"
        textAlign="center"
        color="#6d5751"
        mb={6}
      >
        Access your handcrafted dessert experience.
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {!isLogin && (
            <FormControl isRequired>
              <FormLabel fontFamily="'Manrope', sans-serif" color="#4f3e3a" fontWeight="700">Username</FormLabel>
              <Input
                name="userName"
                value={form.userName}
                onChange={handleChange}
                placeholder="Enter your username"
                bg="#fff5f0"
                border="1px solid"
                borderColor="#efd9cd"
                borderRadius="14px"
                _hover={{ borderColor: "#d9b9aa" }}
                _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
              />
            </FormControl>
          )}

          <FormControl isRequired>
            <FormLabel fontFamily="'Manrope', sans-serif" color="#4f3e3a" fontWeight="700">Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              bg="#fff5f0"
              border="1px solid"
              borderColor="#efd9cd"
              borderRadius="14px"
              _hover={{ borderColor: "#d9b9aa" }}
              _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontFamily="'Manrope', sans-serif" color="#4f3e3a" fontWeight="700">Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="password"
              bg="#fff5f0"
              border="1px solid"
              borderColor="#efd9cd"
              borderRadius="14px"
              _hover={{ borderColor: "#d9b9aa" }}
              _focus={{ borderColor: "#d97757", boxShadow: "0 0 0 1px #d97757" }}
            />
          </FormControl>

          <Button
            width="full"
            type="submit"
            mt={2}
            borderRadius="full"
            py={6}
            fontFamily="'Manrope', sans-serif"
            fontWeight="700"
            fontSize="sm"
            letterSpacing="0.04em"
            bg="linear-gradient(120deg, #d97757 0%, #b85d3f 100%)"
            color="white"
            _hover={{ transform: "translateY(-1px)", boxShadow: "0 16px 26px -18px rgba(173, 92, 63, 0.7)" }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>

          <Button
            variant="link"
            color="#9a7268"
            onClick={handleToggle}
            mt={2}
            fontFamily="'Manrope', sans-serif"
            fontWeight="700"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </Button>

          <Button
            variant="link"
            color="#6d5751"
            onClick={() => navigate('/shop')}
            fontFamily="'Manrope', sans-serif"
            fontWeight="700"
          >
            Continue as Guest
          </Button>
        </VStack>
      </form>

      <HStack justify="center" spacing={4} mt={6}>
        {[FaFacebook, FaTwitter, FaGoogle, FaInstagram].map((SocialIcon, index) => (
          <Box
            key={index}
            width="42px"
            height="42px"
            borderRadius="full"
            bg="#fff5f0"
            border="1px solid"
            borderColor="#ecd8ce"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={SocialIcon} boxSize={4} color="#b27e6f" />
          </Box>
        ))}
      </HStack>
      </Box>
    </HStack>
  </Flex>
);
};

export default AuthForm;

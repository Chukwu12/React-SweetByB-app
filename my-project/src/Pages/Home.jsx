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
import { useState, useEffect } from "react";
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
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Spinner size="lg" color="teal.500" />
    </Flex>
  );
}

if (isAuthenticated) {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box w="full" maxW="md" p={8} borderRadius="lg" boxShadow="lg" bg="white" textAlign="center">
        <Text fontSize="xl" fontWeight="semibold">Signed in as {user?.userName || user?.email}</Text>
        <Button colorScheme="teal" width="full" mt={6} onClick={() => navigate('/shop')}>Go to Shop</Button>
        <Button colorScheme="red" width="full" mt={3} onClick={handleSignOut}>Sign Out</Button>
      </Box>
    </Flex>
  );
}

return (
  <Flex minH="100vh" align="center" justify="center" bg="gray.50">
    <Box w="full" maxW="md" p={8} borderRadius="lg" boxShadow="lg" bg="white">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
        {isLogin ? "Sign In" : "Sign Up"}
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {!isLogin && (
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                name="userName"
                value={form.userName}
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </FormControl>
          )}

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="password"
            />
          </FormControl>

          <Button colorScheme="teal" width="full" type="submit" mt={2}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>

          <Button
            variant="link"
            colorScheme="blue"
            onClick={handleToggle}
            mt={2}
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </Button>

          <Button
            variant="link"
            colorScheme="teal"
            onClick={() => navigate('/shop')}
          >
            Continue as Guest
          </Button>
        </VStack>
      </form>

      {/* Optional: Social Icons */}
      <HStack justify="center" spacing={4} mt={6}>
        <Icon as={FaFacebook} boxSize={6} />
        <Icon as={FaTwitter} boxSize={6} />
        <Icon as={FaGoogle} boxSize={6} />
        <Icon as={FaInstagram} boxSize={6} />
      </HStack>
    </Box>
  </Flex>
);
};

export default AuthForm;

import axios from "axios";
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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../utility/alerts";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  // ✅ Auto-redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/shop");
    }
  }, [isAuthenticated, navigate]);

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setForm({ userName: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/login" : "/signup";

    const API_BASE_URL =
      import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

    try {
      const response = await axios.post(
      `${API_BASE_URL}/api${endpoint}`,
    isLogin
      ? { email: form.email, password: form.password }
      : { ...form, confirmPassword: form.password },
    { withCredentials: true }
  );

      const { data } = response;

      login(data.user); // Save user in context
      
      
      // ✅ Show SweetAlert success
      await showSuccess(data.message || "Logged in successfully!");

      navigate("/shop"); // ✅ Redirect to shop after login/signup
    } catch (err) {
     const errorMsg =
        err.response?.data?.message || err.message || "Something went wrong.";

      // ❌ Show SweetAlert error
      showError(errorMsg);
    }

    setForm({ userName: "", email: "", password: "" });
  };

  

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

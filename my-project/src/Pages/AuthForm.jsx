import { useAuth } from "../context/AuthContext"; // adjust path as needed


import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useToast,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toast = useToast();
  const navigate = useNavigate();

  // Accessing login and isAuthenticated from context
  const { login } = useAuth(); 

  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

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

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
         login(data.user); // Use the login function from context to store user data
        toast({
          title: "Success!",
          description: data.message || "Logged in successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        navigate("/dashboard"); 
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: "Network Error",
        description: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
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
                 autocomplete="email"
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
                 autocomplete="password"
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

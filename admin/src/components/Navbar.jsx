import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <Flex bg="teal.500" p={4} justify="space-between" align="center">
      <Image src={assets.logo} alt="Bakery Logo" boxSize="50px" />
      <Text color="white" fontSize="xl" fontWeight="bold">Admin Panel</Text>
      <Button colorScheme="teal" variant="outline" onClick={() => alert("Logging out...")}>Logout</Button>
    </Flex>
  );
};

export default Navbar;

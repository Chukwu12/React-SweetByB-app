import { Box, VStack, Button, Image } from '@chakra-ui/react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom'; 

const Sidebar = () => {
  return (
    <Box bg="gray.800" color="white" width="250px" p={5} h="100vh">
      <VStack align="stretch" spacing={6}>
        <NavLink 
          to="/add-product" 
          style={({ isActive }) => ({
            textDecoration: 'none', // Remove the default underline
            backgroundColor: isActive ? '#2D3748' : 'transparent', // Highlight active button
          })}
        >
          <Button colorScheme="teal" variant="ghost" leftIcon={<Image src={assets.add_icon} boxSize="20px" />}>
            Add Product
          </Button>
        </NavLink>

        <NavLink 
          to="/list" 
          style={({ isActive }) => ({
            textDecoration: 'none', // Remove the default underline
            backgroundColor: isActive ? '#2D3748' : 'transparent', // Highlight active button
          })}
        >
          <Button colorScheme="teal" variant="ghost" leftIcon={<Image src={assets.parcel_icon} boxSize="20px" />}>
            View Products
          </Button>
        </NavLink>

        <NavLink 
          to="/orders" 
          style={({ isActive }) => ({
            textDecoration: 'none', // Remove the default underline
            backgroundColor: isActive ? '#2D3748' : 'transparent', // Highlight active button
          })}
        >
          <Button colorScheme="teal" variant="ghost" leftIcon={<Image src={assets.order_icon} boxSize="20px" />}>
            Orders
          </Button>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;

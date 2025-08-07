import {
  Box,
  Button,
  Image,
  Text,
  VStack,
  HStack,
  IconButton,
  useToast,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DeleteIcon } from '@chakra-ui/icons';

const List = () => {
  const [list, setList] = useState([]);
  const toast = useToast();

  // Fetch the food list from the API
  const fetchList = async () => {
    try {
      const response = await axios.get('https://ideal-guide-pg5p57qpw55h67g-5000.app.github.dev/api/foods/list');
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch the food list.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Error fetching food items.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Delete a food item from the list
  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(`https://ideal-guide-pg5p57qpw55h67g-5000.app.github.dev/api/foods/remove`, {
        data: { id },
      });

      if (response.data.success) {
        // Remove item from list without re-fetching
        setList((prevList) => prevList.filter(item => item._id !== id));
        toast({
          title: "Item deleted.",
          description: "The food item was successfully deleted.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to delete the food item.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while deleting the item.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <VStack spacing={4} align="stretch" p={5}>
      {list.length > 0 ? (
        list.map((item) => (
          <Box
            key={item._id}
            p={5}
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            bg="white"
            _hover={{ boxShadow: "lg", cursor: "pointer" }}
            transition="box-shadow 0.3s ease"
          >
            <Flex direction="row" align="center">
              {/* Image */}
              <Image
                src={item.image}
                alt={item.name}
                boxSize="100px"
                objectFit="cover"
                borderRadius="md"
              />

              {/* Item Details */}
              <Box ml={4}>
                <Text fontWeight="bold" fontSize="lg">{item.name}</Text>
                <Text color="gray.500">{item.category}</Text>
                <Text fontWeight="semibold" color="teal.500">
                  {item.maxPrice ? `$${item.minPrice} - $${item.maxPrice}` : `$${item.minPrice}`}
                </Text>

              </Box>

              {/* Spacer */}
              <Spacer />

              {/* Delete Button */}
              <IconButton
                icon={<DeleteIcon />}
                colorScheme="red"
                variant="outline"
                onClick={() => deleteItem(item._id)}
                aria-label="Delete item"
              />
            </Flex>
          </Box>
        ))
      ) : (
        <Text textAlign="center" fontSize="lg" color="gray.500">No items found</Text>
      )}
    </VStack>
  );
};

export default List;

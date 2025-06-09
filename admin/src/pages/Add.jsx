import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Image,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';

const AddProductForm = () => {
  const url = 'http://localhost:5000';
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Cupcakes",
  });

  const toast = useToast(); // Toast for user feedback

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    console.log("Form data changed:", data);
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('price', data.price);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        // Show success toast
        toast({
          title: "Product added successfully.",
          description: "The product was successfully added to the menu.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        // Reset the form data
        setData({
          name: "",
          description: "",
          price: "",
          category: "Cupcakes",
        });
        setImage(null); // Reset image state
        setPreview(null); // Reset preview
      } else {
        // Show error toast if response isn't successful
        toast({
          title: "Error adding product.",
          description: "There was an error while adding the product.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      // Catch errors in axios request
      console.error("Error submitting product:", error);
      toast({
        title: "Server Error",
        description: "Failed to add product. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    console.log('Form Submitted:', {
      ...data,
      image,
    });
  };

  return (
    <Box maxW="600px" mx="auto" p={6} bg="gray.100" borderRadius="md" boxShadow="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={5} align="stretch">
          <FormControl isRequired>
            <FormLabel>Product Image</FormLabel>
            <Input type="file" accept="image/*" onChange={handleImageChange} />
            {preview && <Image src={preview} alt="Preview" boxSize="150px" mt={3} />}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Product Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={data.name}
              onChange={onChangeHandler}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              placeholder="Enter product description"
              value={data.description}
              onChange={onChangeHandler}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Category</FormLabel>
            <Select
              name="category"
              value={data.category}
              onChange={onChangeHandler}
              placeholder="Select category"
            >
              <option value="Cupcakes">Cupcakes</option>
              <option value="Cheesecakes">Cheesecakes</option>
              <option value="Dessert Boxs">Dessert Boxs</option>
              <option value="Pudding">Pudding</option>
              <option value="Mini Pudding Cups">Mini Pudding Cups</option>
              <option value="Cookies">Cookies</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Price ($)</FormLabel>
            <Input
              type="number"
              name="price"
              step="0.01"
              placeholder="Enter price"
              value={data.price}
              onChange={onChangeHandler}
            />
          </FormControl>

          <Button colorScheme="teal" type="submit">
            Add Product
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AddProductForm;

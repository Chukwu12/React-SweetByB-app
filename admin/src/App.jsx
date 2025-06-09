import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddProductForm from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <ToastContainer />
        <Navbar />
        <Flex>
          <Sidebar />
          <Box flex="1" p={8}>
            <Routes>
              <Route path="/add-product" element={<AddProductForm />} />
              <Route path="/list" element={<List />} />
              <Route path="/order" element={<Orders />} />
            </Routes>
          </Box>
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;

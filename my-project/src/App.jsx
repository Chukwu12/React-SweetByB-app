import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import StoreContextProvider from './context/storeContext';
import About from './Pages/About';
import Cart from './Pages/Cart'; // Import Cart Page

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <StoreContextProvider>
          <Navbar />
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            {/* About Page */}
            <Route path="/about" element={<About />} />
            {/* Cart Page */}
            <Route path="/cart" element={<Cart />} />  
            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* Footer is outside Routes so it appears on all pages */}
          <Footer />
        </StoreContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'; 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menus from './components/Menus/Menus';
import Banner from './components/Banner/Banner';
import ProductDetails from "./components/Product/ProductDetails";

const App = () => {
  return (
    <ChakraProvider> 
      <main className='overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <ProductDetails />
      </main>
    </ChakraProvider>
  );
};

export default App;

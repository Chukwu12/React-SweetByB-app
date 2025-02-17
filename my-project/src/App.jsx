import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'; 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menus from './components/Menus/Menus';
import Banner from './components/Banner/Banner';
import ProductDetails from "./components/Product/ProductDetails";
import ProductItems from "./components/ProductGallery/ProductItems"; 
import TestimonialsSection from './components/Testimonial/TestimonialsSection'; 
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <ChakraProvider> 
      <main className='overflow-x-hidden'>
         {/* Main Layout Components */}
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <ProductDetails />
        <ProductItems /> 
        <TestimonialsSection />
        <Footer /> 
      </main>
    </ChakraProvider>
    
  );
};

export default App;

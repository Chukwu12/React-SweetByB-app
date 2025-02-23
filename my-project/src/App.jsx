import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
      <Navbar />
      <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} /> {/* Displays Home page when user visits "/" */}
          <Route path="/shop" element={<Shop />} /> {/* Displays Shop page */}
          <Route path="/CheeseCakes" element={<CheeseCakesPage />} />
        <Route path="/Cupcakes" element={<CupcakesPage />} />
        <Route path="/DessertBoxs" element={<DessertBoxsPage />} />
        <Route path="/Puddings" element={<PuddingsPage />} />
        <Route path="/Puddings-Flavors" element={<PuddingsFlavorsPage />} />
        <Route path="/Mini-Puddings-Cups" element={<MiniPuddingsCupsPage />} />
        <Route path="/Cookies" element={<CookiesPage />} />
      </Routes>
      <main className='overflow-x-hidden'>
         {/* Main Layout Components */}
        <Hero />
        <Menus />
        <Banner />
        <ProductDetails />
        <ProductItems /> 
        <TestimonialsSection />
        <Footer /> 
      </main>
      </BrowserRouter>
    </ChakraProvider>
    
  );
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';
import { ChakraProvider } from '@chakra-ui/react'; 
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menus from './components/Menus/Menus';
import Banner from './components/Banner/Banner';
import ProductDetails from "./components/Product/ProductDetails";
import ProductItems from "./components/ProductGallery/ProductItems"; 
import TestimonialsSection from './components/Testimonial/TestimonialsSection'; 
import Contact from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import ContactSection from './components/Contact/ContactSection';
import ExploreMenu from './components/ProductGallery/ExploreMenu';
import StoreContextProvider from './context/storeContext';
import FoodDisplay from './components/FoodDisplay/FoodDisplay';





const App = () => {

  const [category, setCategory] = useState("All");
  return (
    <ChakraProvider> 
      <BrowserRouter>
      <StoreContextProvider>
      <Navbar />
      <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} />
          <Route path="/CheeseCakes" element={<CheeseCakesPage />} />
        <Route path="/Cupcakes" element={<CupcakesPage />} />
        <Route path="/DessertBoxs" element={<DessertBoxsPage />} />
        <Route path="/Puddings" element={<PuddingsPage />} />
        <Route path="/Puddings-Flavors" element={<PuddingsFlavorsPage />} />
        <Route path="/Mini-Puddings-Cups" element={<MiniPuddingsCupsPage />} />
        <Route path="/Cookies" element={<CookiesPage />} /> */}
      </Routes>
      <main className='overflow-x-hidden'>
         {/* Main Layout Components */}
         <Home />
        <Hero />
        <Menus />
        <Banner />
        {/* <ProductDetails />  */}
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category = {category} />
        {/* <ProductItems />  */}
        <TestimonialsSection />
        {/* <ContactSection /> */}
        <Footer /> 
      </main>
      </StoreContextProvider>
      </BrowserRouter>
    </ChakraProvider>
    
  );
};

export default App;

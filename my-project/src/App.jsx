import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Pages/Home';
import Shop from './Pages/Shop'; 
import { AuthProvider } from './context/AuthContext'; 
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
// import ProtectedRoute from './components/Auth/ProtectedRoute';
import StoreContextProvider from './context/storeContext';
import About from './Pages/About';
import Cart from './Pages/Cart/Cart'; // Import Cart Page
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

const AppRoutes = () => {
  const location = useLocation();
  const noFooterPaths = ['/', '/cart', '/order'];
  const showFooter = !noFooterPaths.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Auth page /Home */}
        {<Route path="/" element={<Home />} />}
        {/* Shop Page */}
        <Route
          path="/shop" element={<Shop />} />
        {/* About Page */}
        <Route path="/about" element={<About />} />
        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />
        {/* Order Page */}
        <Route path="/order" element={<PlaceOrder />} />
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer is hidden on home and shown elsewhere */}
      {showFooter && <Footer />}
    </>
  );
};


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <StoreContextProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </StoreContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;

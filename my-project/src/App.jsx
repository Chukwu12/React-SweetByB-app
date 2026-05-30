import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
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
import Verify from './Pages/Verify/Verify';

const AppRoutes = () => {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/+$/, '') || '/';
  const noFooterPaths = ['/', '/cart', '/order', '/verify'];
  const noNavbarPaths = ['/verify'];
  const showFooter = !noFooterPaths.includes(normalizedPath);
  const showNavbar = !noNavbarPaths.includes(normalizedPath);

  return (
    <>
      {showNavbar && <Navbar />}
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
        {/* Stripe return page */}
        <Route path="/verify" element={<Verify />} />
        <Route path="/verify/" element={<Verify />} />
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        {/* Prevent blank page on unmatched paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
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

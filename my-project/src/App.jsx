import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Pages/Home';
import Auth from './Pages/AuthForm';
import { AuthProvider } from './context/AuthContext'; 
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
// import ProtectedRoute from './components/Auth/ProtectedRoute';
import StoreContextProvider from './context/storeContext';
import About from './Pages/About';
import Cart from './Pages/Cart'; // Import Cart Page
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';



const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <StoreContextProvider>
          <AuthProvider>
            <Navbar />
            <Routes>
              {/* Auth page at root */}
              {<Route path="/" element={<Auth />} />}
              {/* Home Page */}
              <Route
                path="/dashboard" element={<Home />} />
              {/* About Page */}
              <Route path="/about" element={<About />} />
              {/* Cart Page */}
              <Route path="/cart" element={<Cart />} />
              {/* Order Page */}
              <Route path="/order" element={<PlaceOrder />} />
              {/* Contact Page */}
              <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* Footer is outside Routes so it appears on all pages */}
            <Footer />
          </AuthProvider>
        </StoreContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;

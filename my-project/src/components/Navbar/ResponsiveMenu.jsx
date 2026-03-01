import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
import { useAuth } from '../../context/AuthContext';
import apiClient from '../../api';
import { showSuccess, showError } from '../../utility/alerts';

const MotionDiv = motion.create("div");

const ResponsiveMenu = ({ open, setOpen }) => {

  const { getTotalCartCount } = useContext(StoreContext);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  return (
    <AnimatePresence mode="wait">
      {open && (
        <MotionDiv
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className=" top-20 left-0 w-full h-[350px] z-20"
          onClick={() => setOpen(false)}
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >

            <ul className="flex flex-col items-center gap-10">
              <li>
                <Link to="/" className="hover:text-gray-300" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gray-300" onClick={() => setOpen(false)}>
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-gray-300" onClick={() => setOpen(false)}>
                  🛒 Cart ({getTotalCartCount()})
                </Link>
              </li>

              {isAuthenticated && (
                <li>
                  <button
                    className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold"
                    onClick={async (e) => {
                      e.stopPropagation();
                      try {
                        await apiClient.get("/api/user/logout");
                        logout();
                        showSuccess('Signed out');
                        setOpen(false);
                        navigate('/');
                      } catch (err) {
                        showError(err.response?.data?.message || err.message);
                      }
                    }}
                  >
                    Sign Out
                  </button>
                </li>
              )}

            </ul>
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
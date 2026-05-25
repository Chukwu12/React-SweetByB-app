import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
import { useAuth } from '../../context/AuthContext';
import apiClient from '../../api';
import { showSuccess, showError } from '../../utility/alerts';
import { MdClose } from 'react-icons/md';

const MotionDiv = motion.create("div");

const ResponsiveMenu = ({ open, setOpen }) => {

  const { getTotalCartCount } = useContext(StoreContext);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  return (
    <AnimatePresence mode="wait">
      {open && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[70] bg-[#1f1411]/45 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.98 }}
            transition={{ duration: 0.24 }}
            className="mx-4 mt-4 rounded-3xl border border-[#efd5c6] bg-gradient-to-b from-[#fff7f1] to-[#ffece2] shadow-[0_30px_70px_-36px_rgba(42,20,14,0.7)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-5 py-4 border-b border-[#efd8cc]">
              <div>
                <p className="font-playfair text-xl text-[#3B2A28]">Sweets by B</p>
                <p className="font-manrope text-[11px] tracking-[0.16em] uppercase text-[#8a695f]">Navigation</p>
              </div>
              <button
                type="button"
                className="p-2 rounded-full bg-white border border-[#ead4c8] text-[#634f48]"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <MdClose className="text-2xl" />
              </button>
            </div>

            <ul className="flex flex-col p-5 gap-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block w-full rounded-2xl px-4 py-3 font-manrope font-semibold transition-all ${
                      isActive ? "bg-[#D97757] text-white" : "bg-white/75 text-[#5f4a45]"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `block w-full rounded-2xl px-4 py-3 font-manrope font-semibold transition-all ${
                      isActive ? "bg-[#D97757] text-white" : "bg-white/75 text-[#5f4a45]"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block w-full rounded-2xl px-4 py-3 font-manrope font-semibold transition-all ${
                      isActive ? "bg-[#D97757] text-white" : "bg-white/75 text-[#5f4a45]"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block w-full rounded-2xl px-4 py-3 font-manrope font-semibold transition-all ${
                      isActive ? "bg-[#D97757] text-white" : "bg-white/75 text-[#5f4a45]"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="block w-full rounded-2xl px-4 py-3 font-manrope font-semibold bg-[#3B2A28] text-white"
                  onClick={() => setOpen(false)}
                >
                  Cart ({getTotalCartCount()})
                </Link>
              </li>

              {isAuthenticated && (
                <li>
                  <button
                    className="w-full bg-[#D97757] text-white px-6 py-3 rounded-2xl font-manrope font-semibold"
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
          </motion.div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({ open,setOpen }) => {
    return (
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className=" top-20 left-0 w-full h-[300px] z-20"
            onClick={() => setOpen(false)}
          >
            <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
            >
            
              <ul className="flex flex-col items-center gap-10">
                  <li>
                  <Link to="/" className="hover:text-gray-300"  onClick={() => setOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-gray-300"  onClick={() => setOpen(false)}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-300" onClick={() => setOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-300"  onClick={() => setOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  
  export default ResponsiveMenu;
import React from 'react';
import { motion } from 'framer-motion';
import '../ProductGallery/ExploreMenu.css';
import { menu_list } from '../../assets/Data.js';
import { FadeUp, FadeIn } from "../../utility/animation";

// Use motion.div instead of motion(Box) to avoid Chakra UI conflicts
const MotionDiv = motion.div;

const ExploreMenu = ({ category, setCategory }) => {
  // Handle category change when a menu item is clicked
  const handleCategoryChange = (menu_name) => {
    setCategory(prev => (prev === menu_name ? "All" : menu_name));
  };

  return (
    <MotionDiv
      width="100%"
      minHeight="50vh"
      marginTop="5rem"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Title & Description */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        style={{ textAlign: "center", padding: "40px 0px" }} // Center the text
      >
        <motion.h1 
          variants={FadeUp(0.5)} 
          className="text-3xl lg:text-6xl font-bold uppercase"
          style={{
            marginBottom: '1rem',
            fontSize: '2.5rem', // Adjust the font size
          }}
        >
          Shop Your Favorite Sweet Treats
        </motion.h1>

        <motion.p 
          variants={FadeIn(0.7)} 
          className="text-center text-gray-600 mt-4 w-full px-4"
          style={{
            fontSize: "14px",
            lineHeight: "1.6", // Add line height for better readability
            margin: '0 auto', // Ensure it's centered within the container
            maxWidth: '800px', // Limit width for better readability
          }}
        >
          Welcome to Sweets by B, your one-stop shop for delicious homemade desserts! 
          Browse our selection of rich cheesecakes, decadent cupcakes, gourmet puddings, and more—all made with love 
          and the finest ingredients. Whether you're craving a classic treat or looking to try something new, 
          we’ve got something to satisfy your sweet tooth. Place your order today and indulge in pure sweetness!
        </motion.p>
      </motion.div>

      {/* Animated Menu Items */}
      <motion.div 
        className="menu-container" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }} // Improved spacing and layout
      >
        {menu_list.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => handleCategoryChange(item.menu_name)}
            className="explore-menu-list-item"
            variants={FadeUp(0.3)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              maxWidth: '250px',
              textAlign: 'center', // Ensure text is centered for each item
            }}
          >
            <motion.img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                width: '100%',
                height: '100px',
                borderRadius: '8px', // Add border radius for a cleaner look
                marginBottom: '1rem',
              }}
            />
            <p>{item.menu_name}</p>
          </motion.div>
        ))}
      </motion.div>
    </MotionDiv>
  );
};

export default ExploreMenu;

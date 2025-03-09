import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Box, HStack, VStack } from "@chakra-ui/react";
import '../ProductGallery/ExploreMenu.css';
import { menu_list } from '../../assets/Data.js';
import { FadeUp, FadeIn } from "../../utility/animation"; // Import custom animations

// Wrap Chakra UI components with motion
const MotionBox = motion(Box);
const MotionHStack = motion(HStack);
const MotionVStack = motion(VStack);

const ExploreMenu = ({ category, setCategory }) => {
  
  // Memoized function to prevent unnecessary re-renders
  const handleCategoryClick = useCallback((menuName) => {
    setCategory(prev => prev === menuName ? "All" : menuName);
  }, [setCategory]);

  return (
    <MotionBox
      width={"100%"}
      minHeight={"50vh"}
      marginTop={"5rem"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      overflow={"hidden"}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Animated Title & Description */}
      <MotionVStack
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Optimized to avoid repeated triggers
      >
        <motion.h1 
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className='text-3xl lg:text-6xl font-bold uppercase'
        >
          Shop Your Favorite Sweet Treats
        </motion.h1>

        <motion.p
          variants={FadeIn(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-gray-600 mt-4"
          style={{
            width: "50%",
            fontSize: "14px",
          }}
        >
          Welcome to Sweets by B, your one-stop shop for delicious homemade desserts! 
          Browse our selection of rich cheesecakes, decadent cupcakes, gourmet puddings, and more—all made with love 
          and the finest ingredients. Whether you're craving a classic treat or looking to try something new, 
          we’ve got something to satisfy your sweet tooth. Place your order today and indulge in pure sweetness!
        </motion.p>
      </MotionVStack>

      {/* Animated Menu Items */}
      <MotionHStack
        justifyContent={"center"}
        gap={["10px", "15px", "20px", "30px"]}
        flexWrap={"wrap"}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Prevents re-triggering
        variants={FadeUp(0.7)}
        marginTop={"3rem"} 
      >
        {menu_list.map((item) => (
          <motion.div
            key={item.id} // ✅ Using unique `id` instead of index
            onClick={() => handleCategoryClick(item.menu_name)}
            className='explore-menu-list-item'
            variants={FadeUp(0.3)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
              transition={{ duration: 0.6, ease: "easeOut", delay: item.id * 0.15 }}
            />
            <p>{item.menu_name}</p>
          </motion.div>
        ))}
      </MotionHStack>
    </MotionBox>
  );
};

export default ExploreMenu;

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import '../ProductGallery/ExploreMenu.css';
import { menu_list } from '../../assets/Data.js';
import { FadeUp, FadeIn } from "../../utility/animation"; 
import debounce from "lodash.debounce";

// Motion-wrapped Chakra UI components
const MotionBox = motion(Box);
const MotionHStack = motion(HStack);
const MotionVStack = motion(VStack);

const ExploreMenu = ({ category, setCategory }) => {
  // Debounced category change to reduce unnecessary re-renders
  const handleCategoryChange = (menu_name) => {
    setCategory((prev) => (prev === menu_name ? "All" : menu_name));
  };

  const debouncedHandleCategoryChange = useCallback(
    debounce(handleCategoryChange, 200),
    []
  );

  // Memoized menu item to prevent re-renders
  const MemoizedCategoryItem = React.memo(({ item }) => (
    <motion.div
      key={item.menu_name}
      onClick={() => debouncedHandleCategoryChange(item.menu_name)}
      className='explore-menu-list-item'
      variants={FadeUp(0.3)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img
        className={category === item.menu_name ? "active" : ""}
        src={item.menu_image}
        alt={item.menu_name}
        loading="lazy" // Lazy loading enabled
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <p>{item.menu_name}</p>
    </motion.div>
  ));

  return (
    <MotionBox
      width="100%"
      minHeight="50vh"
      marginTop="5rem"
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      overflow="hidden"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Title & Description */}
      <MotionVStack initial="hidden" animate="visible">
        <motion.h1 
          variants={FadeUp(0.5)}
          initial="hidden"
          animate="visible"
          className='text-3xl lg:text-6xl font-bold uppercase'
        >
          Shop Your Favorite Sweet Treats
        </motion.h1>

        <motion.p
          variants={FadeIn(0.7)}
          initial="hidden"
          animate="visible"
          className="text-center text-gray-600 mt-4"
          style={{ width: "50%", fontSize: "14px" }}
        >
          Welcome to Sweets by B, your one-stop shop for delicious homemade desserts! 
          Browse our selection of rich cheesecakes, decadent cupcakes, gourmet puddings, and more—all made with love 
          and the finest ingredients. Whether you're craving a classic treat or looking to try something new, 
          we’ve got something to satisfy your sweet tooth. Place your order today and indulge in pure sweetness!
        </motion.p>
      </MotionVStack>

      {/* Menu Items */}
      <MotionHStack
        justifyContent="center"
        gap={["10px", "15px", "20px", "30px"]}
        flexWrap="wrap"
        initial="hidden"
        animate="visible"
        variants={FadeUp(0.7)}
        marginTop="3rem"
      >
        {menu_list.map((item) => (
          <MemoizedCategoryItem key={item.menu_name} item={item} />
        ))}
      </MotionHStack>
    </MotionBox>
  );
};

export default ExploreMenu;

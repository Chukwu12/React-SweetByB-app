import React from 'react';
import { motion } from 'framer-motion';
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import '../ProductGallery/ExploreMenu.css';
import { menu_list } from '../../assets/Data.js';
import { FadeIn } from "../../utility/animation"; // Import your animation variant

// Wrap Chakra UI components with motion
const MotionBox = motion(Box);
const MotionHStack = motion(HStack);
const MotionVStack = motion(VStack);

const ExploreMenu = ({ category, setCategory }) => {
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
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
    >
      {/* Animated Title & Description */}
      <MotionVStack
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FadeIn(0.5)}
      >
        <MotionHStack>
          <Text fontSize={['25px', '40px']} fontWeight={"600"} letterSpacing={"2px"}>
            Shop Your Favorite Sweet Treats
          </Text>
        </MotionHStack>

        <MotionHStack>
          <Text
            width={"50%"}
            margin={"auto"}
            textAlign={"center"}
            marginTop={"1rem"}
            fontSize={"13px"}
            color={"grey"}
          >
            Welcome to Sweets by B, your one-stop shop for delicious homemade desserts! Browse our selection of rich cheesecakes, decadent cupcakes, gourmet puddings, and more—all made with love and the finest ingredients. Whether you're craving a classic treat or looking to try something new, we’ve got something to satisfy your sweet tooth. Place your order today and indulge in pure sweetness!
          </Text>
        </MotionHStack>
      </MotionVStack>

      {/* Animated Menu Items */}
      <MotionHStack
        justifyContent={"center"}
        gap={["10px", "15px", "20px", "30px"]}
        flexWrap={"wrap"}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FadeIn(0.5)}
      >
        {menu_list.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            className='explore-menu-list-item'
            whileHover={{ scale: 1.1 }} // Animation when hovered
            whileTap={{ scale: 0.95 }} // Animation when clicked
          >
            <motion.img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
            <p>{item.menu_name}</p>
          </motion.div>
        ))}
      </MotionHStack>
    </MotionBox>
  );
};

export default ExploreMenu;

import React from 'react';
import { motion } from 'framer-motion';
import '../ProductGallery/ExploreMenu.css';
import { menu_list } from '../../assets/Data.js';
import { FadeUp, FadeIn } from "../../utility/animation";

// Motion components for DOM elements
const MotionDiv = motion.create("div");
const MotionH1 = motion.create("h1");
const MotionP = motion.create("p");
const MotionImg = motion.create("img");

const ExploreMenu = ({ category, setCategory }) => {
  // Handle category change when a menu item is clicked
  const handleCategoryChange = (menu_name) => {
    setCategory(prev => (prev === menu_name ? "All" : menu_name));
  };

  return (
    <MotionDiv
      className="explore-menu-container"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } } // only stagger children
      }}
    >
      {/* Title & Description */}
      <MotionDiv
        style={{
          textAlign: "center",
          padding: "40px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <MotionH1
          variants={FadeUp(0)}
          className="text-3xl lg:text-6xl font-bold uppercase text-center mb-6"
        >
          Shop Your Favorite Sweet Treats
        </MotionH1>

        <MotionP
          variants={FadeIn(0)}
          className="text-center text-gray-600"
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            maxWidth: '800px',
            fontWeight: "600",
          }}
        >
          Welcome to Sweets by B, your one-stop shop for delicious homemade desserts! 
          Browse our selection of rich cheesecakes, decadent cupcakes, gourmet puddings, and more—all made with love 
          and the finest ingredients. Whether you're craving a classic treat or looking to try something new, 
          we’ve got something to satisfy your sweet tooth. Place your order today and indulge in pure sweetness!
        </MotionP>
      </MotionDiv>

      {/* Animated Menu Items */}
      <MotionDiv
        className="menu-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem"
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {menu_list.map((item, index) => (
          <MotionDiv
            key={item.menu_name + index}
            onClick={() => handleCategoryChange(item.menu_name)}
            className="explore-menu-list-item"
            variants={FadeUp(0.1 * index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              maxWidth: '250px',
              textAlign: 'center',
            }}
          >
            <MotionImg
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                width: '100%',
                height: '100px',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}
            />
            <p>{item.menu_name}</p>
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionDiv>
  );
};

export default ExploreMenu;

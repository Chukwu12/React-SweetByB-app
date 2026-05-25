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
const MotionButton = motion.create("button");

const ExploreMenu = ({ category, setCategory }) => {
  // Handle category change when a menu item is clicked
  const handleCategoryChange = (menu_name) => {
    setCategory(prev => (prev === menu_name ? "All" : menu_name));
  };

  return (
    <MotionDiv
      className="explore-menu-container"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } } // only stagger children
      }}
    >
      <div className="explore-menu-glow explore-menu-glow-left" />
      <div className="explore-menu-glow explore-menu-glow-right" />

      {/* Title & Description */}
      <MotionDiv
        className="explore-menu-heading-wrap"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <span className="explore-menu-eyebrow">Find Your Flavor</span>

        <MotionH1
          variants={FadeUp(0)}
          className="font-playfair text-4xl lg:text-6xl font-bold tracking-tight text-center mb-4 text-neutral-900"
        >
          Shop Your Favorite Sweet Treats
        </MotionH1>

        <MotionP
          variants={FadeIn(0)}
          className="font-manrope text-center text-gray-600 explore-menu-subcopy"
        >
          Welcome to Sweets by B, your one-stop shop for delicious homemade desserts! 
          Browse our selection of rich cheesecakes, decadent cupcakes, gourmet puddings, and more—all made with love 
          and the finest ingredients. Whether you're craving a classic treat or looking to try something new, 
          we’ve got something to satisfy your sweet tooth. Place your order today and indulge in pure sweetness!
        </MotionP>

        <div className="explore-menu-meta">
          <span>{menu_list.length} curated categories</span>
          <span>Selected: {category === "All" ? "All Desserts" : category}</span>
        </div>
      </MotionDiv>

      {/* Animated Menu Items */}
      <MotionDiv
        className="menu-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {menu_list.map((item, index) => (
          <MotionButton
            key={item.menu_name + index}
            type="button"
            onClick={() => handleCategoryChange(item.menu_name)}
            className={`explore-menu-list-item ${category === item.menu_name ? "is-active" : ""}`}
            variants={FadeUp(0.1 * index)}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MotionImg
              className="explore-menu-item-image"
              src={item.menu_image}
              alt={item.menu_name}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <p className="font-manrope text-[15px] md:text-base font-semibold text-neutral-800 tracking-wide">
              {item.menu_name}
            </p>
          </MotionButton>
        ))}
      </MotionDiv>
    </MotionDiv>
  );
};

export default ExploreMenu;

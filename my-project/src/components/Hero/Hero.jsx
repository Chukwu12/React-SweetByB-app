import React from 'react';
import { TbShoppingBag } from "react-icons/tb";

import HeroImg from '../../assets/images/hero-image.png';

import { motion } from 'framer-motion';
import { FadeRight } from '../../utility/animation';

const MotionDiv = motion.create("div");
const MotionH1 = motion.create("h1");
const MotionP = motion.create("p");
const MotionImg = motion.create("img");



const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">

        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">

            <MotionH1
              variants={FadeRight(0.3)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia"
            >
              Sweet <span className="text-secondary">ByB</span>
            </MotionH1>

            <MotionP
              variants={FadeRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide"
            >
              Baked to Perfection, Made with Love
            </MotionP>

            <MotionP
              variants={FadeRight(0.5)}
              initial="hidden"
              animate="visible"
              className="text-gray-400 max-w-[500px] text-[14px]"
            >
              "Welcome to Sweet ByB, where every bite is a moment of pure bliss. Our handcrafted desserts are made with love, using only the finest ingredients to bring you treats that are as beautiful as they are delicious. Whether you're craving something rich and indulgent or light and refreshing, our collection of desserts is sure to satisfy your sweetest cravings. Join us in celebrating the art of baking—one sweet creation at a time!""
            </MotionP>

            <MotionDiv 
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button
                className="primary-btn flex items-center gap-2"
                onClick={() => {
                  document.getElementById("product-menu")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <TbShoppingBag />
                Order Now
              </button>

            </MotionDiv >
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <MotionImg
            initial={{ opacity: 0, x: 100, rotate: 15 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.4 }}

            src={HeroImg}
            alt="Sweet ByB desserts"

            fetchpriority="high"
            loading="eager"
            decoding="async"

            className="w-[350px] md:w-[450px] drop-shadow"
            style={{ aspectRatio: "1 / 1" }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

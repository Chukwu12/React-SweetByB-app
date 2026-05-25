import React from 'react';
import { TbShoppingBag } from "react-icons/tb";

import HeroImg from '../../assets/images/hero-image.avif';

import { motion } from 'framer-motion';
import { FadeRight } from '../../utility/animation';

const MotionDiv = motion.create("div");
const MotionH1 = motion.create("h1");
const MotionP = motion.create("p");
const MotionImg = motion.create("img");



const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8f2] via-[#fff6ef] to-[#fff1e8]">
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-pink-200/35 blur-3xl rounded-full" />
      <div className="absolute bottom-[-90px] right-[-60px] w-80 h-80 bg-[#f4b860]/25 blur-3xl rounded-full" />
      <div className="absolute top-[18%] right-[12%] w-48 h-48 bg-[#a7c4a0]/20 blur-3xl rounded-full" />

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[680px] gap-8 items-center">

        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-7 lg:max-w-[560px]">
            <MotionDiv
              variants={FadeRight(0.2)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-[#f6d6ce] px-4 py-2"
            >
              <span className="font-manrope text-[11px] uppercase tracking-[0.22em] text-[#8c5a4a]">
                Handcrafted Premium Desserts
              </span>
            </MotionDiv>

            <MotionH1
              variants={FadeRight(0.3)}
              initial="hidden"
              animate="visible"
              className="font-playfair text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-[#3b2a28]"
            >
              Sweet <span className="text-[#d97757]">ByB</span>
            </MotionH1>

            <MotionP
              variants={FadeRight(0.4)}
              initial="hidden"
              animate="visible"
              className="font-playfair text-2xl md:text-3xl tracking-wide text-[#513732]"
            >
              Baked to Perfection, Made with Love
            </MotionP>

            <MotionP
              variants={FadeRight(0.5)}
              initial="hidden"
              animate="visible"
              className="font-manrope text-[#6f5953] max-w-[560px] text-[16px] leading-8"
            >
              Welcome to Sweet ByB, where every bite is a moment of pure bliss. Our handcrafted desserts are made with love, using only the finest ingredients to bring you treats that are as beautiful as they are delicious. Whether you're craving something rich and indulgent or light and refreshing, our collection is crafted to satisfy every sweet craving.
            </MotionP>

            <MotionDiv 
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <button
                className="font-manrope tracking-wide bg-[#d97757] hover:bg-[#c56a4d] text-white shadow-[0_14px_34px_-14px_rgba(217,119,87,0.95)] px-7 py-3 rounded-2xl flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => {
                  document.getElementById("product-menu")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <TbShoppingBag />
                Order Now
              </button>

              <button
                className="font-manrope tracking-wide bg-white/85 backdrop-blur-md text-[#3b2a28] border border-[#edd2c8] px-7 py-3 rounded-2xl transition-all duration-300 hover:bg-white"
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Our Story
              </button>

            </MotionDiv >

            <MotionDiv
              variants={FadeRight(0.7)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center md:justify-start gap-3"
            >
              <span className="font-manrope text-xs md:text-sm bg-white/80 border border-[#efd8cd] rounded-full px-4 py-2 text-[#5f4742]">
                100+ Happy Clients
              </span>
              <span className="font-manrope text-xs md:text-sm bg-white/80 border border-[#efd8cd] rounded-full px-4 py-2 text-[#5f4742]">
                Made Fresh Daily
              </span>
              <span className="font-manrope text-xs md:text-sm bg-white/80 border border-[#efd8cd] rounded-full px-4 py-2 text-[#5f4742]">
                Local Delivery
              </span>
            </MotionDiv>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center items-center">
          <MotionDiv
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="relative w-[350px] md:w-[500px] rounded-[2rem] bg-gradient-to-br from-white/80 to-[#ffe8da]/80 border border-white/70 p-4 shadow-[0_35px_70px_-30px_rgba(109,68,52,0.45)]"
          >
            <MotionImg
              initial={{ opacity: 0, x: 60, rotate: 8 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.55 }}
              src={HeroImg}
              alt="Sweet ByB desserts"
              fetchpriority="high"
              loading="eager"
              decoding="async"
              className="w-full rounded-[1.5rem] drop-shadow"
              style={{ aspectRatio: "1 / 1" }}
            />

            <div className="absolute -left-8 top-8 hidden md:block rounded-2xl bg-white/85 backdrop-blur-md border border-[#efd8cd] px-4 py-3 shadow-md">
              <p className="font-playfair text-lg text-[#3b2a28] leading-none">5.0</p>
              <p className="font-manrope text-xs text-[#6c5651] mt-1">Client Rating</p>
            </div>

            <div className="absolute -right-8 bottom-10 hidden md:block rounded-2xl bg-white/85 backdrop-blur-md border border-[#efd8cd] px-4 py-3 shadow-md">
              <p className="font-playfair text-lg text-[#3b2a28] leading-none">Same Day</p>
              <p className="font-manrope text-xs text-[#6c5651] mt-1">Pickup Available</p>
            </div>
          </MotionDiv>
        </div>

      </div>
    </section>
  );
};

export default Hero;

// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import BannerImg from "../assets/images/banner-img.png";
import OwnerPortrait from "../assets/images/banner-img.webp"; // add a small portrait (recommended)
import { FadeUp } from "../utility/animation";
import TestimonialsSection from "../components/Testimonial/TestimonialsSection";
import { TbTruckDelivery, TbStar, TbLeaf, TbCake } from "react-icons/tb";


const MotionDiv = motion.create("div");
const MotionH1 = motion.create("h1");
const MotionP = motion.create("p");
const MotionImg = motion.create("img");
const MotionH2 = motion.create("h2");



const About = () => {
  const scrollToShop = () => {
    const el = document.getElementById("product-menu");
    if (el) {
      const offset = 80; // adjust if navbar overlaps
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      // fallback to navigate to /shop if you have routing
      // window.location.href = "/shop";
    }
  };

  return (
    <section id="about" className="relative overflow-hidden py-20 bg-gradient-to-b from-[#fff8f3] via-white to-[#fff3ec]">
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#fce7f3]/45 blur-3xl" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-[#f4b860]/20 blur-3xl" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <MotionDiv
          variants={FadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="font-manrope text-xs md:text-sm tracking-[0.2em] uppercase text-[#9a7268] mb-3">
            The Heart Behind The Brand
          </p>
          <MotionH2
            className="font-playfair text-4xl md:text-6xl font-bold tracking-tight text-center text-neutral-900"
          >
            The Story Behind <span className="text-rose-500">Sweets by B</span>
          </MotionH2>
          <p className="font-manrope text-[#755f58] mt-4 max-w-3xl mx-auto leading-8">
            Built on passion, consistency, and handcrafted flavor-forward desserts designed to make every celebration unforgettable.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center">
          {/* Left: Image with soft accent */}
          <div className="relative flex justify-center items-center">
            <div className="absolute -inset-6 bg-rose-50/65 rounded-[28px] blur-2xl -z-10" />
            <div className="absolute inset-0 rounded-[25px] border border-white/80 shadow-[0_28px_60px_-32px_rgba(59,42,40,0.55)] -z-10" />
            <MotionImg 
              src={BannerImg}
              alt="Showcase of our products"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:max-w-[700px] h-auto object-cover rounded-[25px] shadow-xl"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center rounded-[28px] border border-[#efd8cc] bg-white/78 backdrop-blur-md p-6 md:p-8 shadow-[0_26px_58px_-34px_rgba(59,42,40,0.52)]">
            {/* Small avatar + signature */}
            < MotionDiv
              variants={FadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <img
                src={OwnerPortrait}
                alt="Bianca"
                className="w-20 h-20 rounded-full object-cover shadow-md border-2 border-white"
              />
              <div>
                <p className="font-playfair text-xl font-semibold text-[#3B2A28]">Bianca - Founder</p>
                <p className="font-manrope text-sm text-gray-500 tracking-wide">Sweets by B</p>
              </div>
            </ MotionDiv>

            < MotionH1
              variants={FadeUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-900"
            >
              About Me
            </ MotionH1>

            <MotionP
              variants={FadeUp(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-manrope text-base md:text-lg text-gray-700 leading-8 mb-4"
            >
              I’m Bianca, the heart behind Sweets by B. My love for baking started as
              a child and in 2019 I turned that passion into a small business focused
              on crafting desserts that create memories. I believe desserts should be
              balanced, thoughtful, and made with high-quality ingredients.
            </MotionP>

            <MotionP
              variants={FadeUp(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-manrope text-base md:text-lg text-gray-700 leading-8 mb-4"
            >
              From banana pudding to cheesecakes, cupcakes, and vegan options — every
              item is handcrafted with care. Whether you’re ordering for a cozy night in
              or a celebration, my goal is to bring a little sweetness to your day.
            </MotionP>

            {/* Emotional anchor / signature */}
            <MotionP
              variants={FadeUp(1.0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-playfair italic text-xl text-rose-600 font-medium mb-6"
            >
              “I don’t just bake desserts — I bake memories.”
            </MotionP>

            {/* Feature badges */}
            < MotionDiv
              variants={FadeUp(1.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <div className="flex items-center gap-2 bg-white/90 border border-[#ecd7cb] rounded-xl px-3 py-2 shadow-sm">
                <TbCake className="text-rose-500" />
                <span className="font-manrope text-sm font-semibold tracking-wide text-neutral-800">Made Fresh Daily</span>
              </div>

              <div className="flex items-center gap-2 bg-white/90 border border-[#ecd7cb] rounded-xl px-3 py-2 shadow-sm">
                <TbLeaf className="text-rose-500" />
                <span className="font-manrope text-sm font-semibold tracking-wide text-neutral-800">Vegan Options</span>
              </div>

              <div className="flex items-center gap-2 bg-white/90 border border-[#ecd7cb] rounded-xl px-3 py-2 shadow-sm">
                <TbTruckDelivery className="text-rose-500" />
                <span className="font-manrope text-sm font-semibold tracking-wide text-neutral-800">Local Delivery</span>
              </div>

              <div className="flex items-center gap-2 bg-white/90 border border-[#ecd7cb] rounded-xl px-3 py-2 shadow-sm">
                <TbStar className="text-rose-500" />
                <span className="font-manrope text-sm font-semibold tracking-wide text-neutral-800">100+ 5-Star Reviews</span>
              </div>
            </ MotionDiv>

            {/* CTA */}
            < MotionDiv
              variants={FadeUp(1.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 items-center"
            >
              <button
                onClick={scrollToShop}
                className="font-manrope tracking-wide flex items-center gap-2 px-6 py-3 rounded-full bg-[#D97757] text-white shadow-[0_16px_34px_-18px_rgba(217,119,87,0.95)] hover:bg-[#ca6d51] transition"
              >
                Order Now
              </button>

              <a
                href="/contact"
                className="font-manrope text-sm font-semibold tracking-wide rounded-full px-4 py-2 border border-[#ead6cb] bg-white/80 text-gray-700 hover:text-rose-500 hover:bg-white transition"
              >
                Contact for custom orders
              </a>
            </ MotionDiv>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-3xl mx-auto h-[2px] bg-gradient-to-r from-transparent via-rose-200 to-transparent my-14 rounded-full" />

        {/* Testimonials */}
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default About;

// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import BannerImg from "../assets/images/banner-img.png";
import OwnerPortrait from "../assets/images/banner-img.webp"; // add a small portrait (recommended)
import { FadeUp } from "../utility/animation";
import TestimonialsSection from "../components/Testimonial/TestimonialsSection";
import { TbTruckDelivery, TbStar, TbLeaf, TbCake } from "react-icons/tb";

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
    <section id="about" className="py-16">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <motion.h2
          variants={FadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-8"
        >
          The Story Behind <span className="text-rose-500">Sweets by B</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image with soft accent */}
          <div className="relative flex justify-center items-center">
            <div className="absolute -inset-6 bg-rose-50/60 rounded-[28px] blur-2xl -z-10" />
            <motion.img
              src={BannerImg}
              alt="Showcase of our products"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:max-w-[700px] h-auto object-cover rounded-[25px] shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            {/* Small avatar + signature */}
            <motion.div
              variants={FadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <img
                src={OwnerPortrait}
                alt="Bianca"
                className="w-20 h-20 rounded-full object-cover shadow-md"
              />
              <div>
                <p className="text-lg font-semibold">Bianca — Founder</p>
                <p className="text-sm text-gray-500">Sweets by B</p>
              </div>
            </motion.div>

            <motion.h1
              variants={FadeUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold uppercase mb-4"
            >
              About Me
            </motion.h1>

            <motion.p
              variants={FadeUp(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed mb-4"
            >
              I’m Bianca, the heart behind Sweets by B. My love for baking started as
              a child and in 2019 I turned that passion into a small business focused
              on crafting desserts that create memories. I believe desserts should be
              balanced, thoughtful, and made with high-quality ingredients.
            </motion.p>

            <motion.p
              variants={FadeUp(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed mb-4"
            >
              From banana pudding to cheesecakes, cupcakes, and vegan options — every
              item is handcrafted with care. Whether you’re ordering for a cozy night in
              or a celebration, my goal is to bring a little sweetness to your day.
            </motion.p>

            {/* Emotional anchor / signature */}
            <motion.p
              variants={FadeUp(1.0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="italic text-rose-600 font-medium mb-6"
            >
              “I don’t just bake desserts — I bake memories.”
            </motion.p>

            {/* Feature badges */}
            <motion.div
              variants={FadeUp(1.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2 shadow-sm">
                <TbCake className="text-rose-500" />
                <span className="text-sm font-medium">Made Fresh Daily</span>
              </div>

              <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2 shadow-sm">
                <TbLeaf className="text-rose-500" />
                <span className="text-sm font-medium">Vegan Options</span>
              </div>

              <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2 shadow-sm">
                <TbTruckDelivery className="text-rose-500" />
                <span className="text-sm font-medium">Local Delivery</span>
              </div>

              <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2 shadow-sm">
                <TbStar className="text-rose-500" />
                <span className="text-sm font-medium">100+ 5-Star Reviews</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={FadeUp(1.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-4 items-center"
            >
              <button
                onClick={scrollToShop}
                className="primary-btn flex items-center gap-2 px-5 py-3 rounded-lg shadow-md"
              >
                Order Now
              </button>

              <a
                href="/contact"
                className="text-sm underline text-gray-700 hover:text-rose-500"
              >
                Contact for custom orders
              </a>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-3xl mx-auto h-[2px] bg-rose-100 my-12 rounded-full" />

        {/* Testimonials */}
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default About;

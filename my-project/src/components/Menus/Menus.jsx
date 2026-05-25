import React from "react";
import { motion } from "framer-motion";


import pudding1 from "../../assets/images/birthday-pudding.webp";
import pudding2 from "../../assets/images/pumkin-pudding.webp";
import pudding3 from "../../assets/images/red-velvet-pudding.webp";
import pudding4 from "../../assets/images/Conquito-pudding.webp";
import pudding5 from "../../assets/images/banana-pudding.webp";
import pudding6 from "../../assets/images/pudding-shortcake.webp";

const MenusData = [
  { id: 1, title: "Red Velvet Cheesecake Pudding", price: "$15.00", img: pudding3, delay: 0.3 },
  { id: 2, title: "Birthday Cake Pudding", price: "$15.00", img: pudding1, delay: 0.6 },
  { id: 3, title: "Pumpkin Spice Pudding", price: "$15.00", img: pudding2, delay: 0.9 },
  { id: 4, title: "Coquito Cremas Pudding", price: "$15.00", img: pudding4, delay: 1.2 },
  { id: 5, title: "Banana Pudding", price: "$15.00", img: pudding5, delay: 1.2 },
  { id: 6, title: "Oreo's & Strawberry Pudding", price: "$15.00", img: pudding6, delay: 1.2 },
];

// Animation variants for framer-motion
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};


export default function Menus() {
  return (
    <section id="menus" className="relative overflow-hidden py-20 bg-gradient-to-b from-[#fff8f3] to-[#fff4ed]">
      <div className="absolute -top-20 -left-12 w-72 h-72 rounded-full bg-[#fce7f3]/40 blur-3xl" />
      <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-[#f4b860]/20 blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="font-manrope text-xs md:text-sm tracking-[0.2em] uppercase text-[#9a7268] mb-3">
            Crafted Fresh Daily
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-left text-neutral-900">
            Pudding Menu
          </h1>
          <p className="font-manrope text-[#755f58] mt-4 max-w-2xl leading-8">
            A boutique selection of rich puddings layered with flavor, texture, and handcrafted finishes made for celebrations and everyday indulgence.
          </p>
        </motion.div>

         <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >

          {MenusData.map((menu, index) => (
            <motion.div
              key={menu.id}
              variants={card}
              whileHover={{ y: -8, rotate: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: menu.delay * 0.08 }}
              className="
                relative bg-gradient-to-br from-white to-rose-50/80
                rounded-3xl p-5 shadow-xl border border-[#f1ddd4]
                flex flex-col items-center text-center
                transition-shadow duration-300 hover:shadow-2xl
                transform-gpu will-change-transform
              "
            >
              <span className="absolute top-4 right-4 font-manrope text-[10px] uppercase tracking-[0.14em] text-[#c2785f] bg-[#fff2ea] border border-[#f2d7ca] px-2 py-1 rounded-full">
                Signature
              </span>

              {/* Image */}
              <div className="w-full h-56 overflow-hidden rounded-2xl mb-5 bg-rose-50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]">
                <img
                  src={menu.img}
                  alt={menu.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Title */}
              <div className="relative mb-4">
                <h2 className="font-playfair text-xl font-semibold text-gray-800 leading-snug drop-shadow-sm">
                  {menu.title}
                </h2>
                <span className="block w-10 h-[2px] bg-[#d97757] mt-2.5 mx-auto"></span>
              </div>

              {/* Price */}
              <p className="font-manrope bg-[#D97757] text-white text-sm font-semibold tracking-wide py-1.5 px-4 rounded-full shadow-[0_12px_24px_-16px_rgba(217,119,87,0.95)]">
                {menu.price}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



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
    <section className="py-16">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-bold text-left pb-10 uppercase"
        >
          Pudding Menu
        </motion.h1>

         <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >

          {MenusData.map((menu) => (
            <motion.div
              key={menu.id}
              variants={card}
              className="
                bg-gradient-to-br from-white to-rose-50
                rounded-3xl p-5 shadow-lg border border-rose-100
                flex flex-col items-center text-center
                transition-shadow duration-300 hover:shadow-xl
                transform-gpu will-change-transform
              "
            >
              {/* Image */}
              <div className="w-full h-52 overflow-hidden rounded-2xl mb-4 bg-rose-50">
                <motion.img
                  src={menu.img}
                  alt={menu.title}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Title */}
              <div className="relative mb-3">
                <h2 className="text-[17px] font-semibold text-gray-800 leading-snug drop-shadow-sm">
                  {menu.title}
                </h2>
                <span className="block w-8 h-[2px] bg-rose-400 mt-2 mx-auto"></span>
              </div>

              {/* Price */}
              <p className="bg-rose-500 text-white text-sm font-bold py-1 px-4 rounded-full shadow-sm">
                {menu.price}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



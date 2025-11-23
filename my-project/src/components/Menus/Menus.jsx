import React from "react";

import pudding1 from "../../assets/images/birthday-pudding.webp";
import pudding2 from "../../assets/images/pumkin-pudding.webp";
import pudding3 from "../../assets/images/red-velvet-pudding.webp";
import pudding4 from "../../assets/images/Conquito-pudding.webp";
import pudding5 from "../../assets/images/banana-pudding.webp";
import pudding6 from "../../assets/images/pudding-shortcake.webp";

import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";


const MenusData = [
  { id: 1, title: "Red Velvet Cheesecake Pudding", price: "$15.00", img: pudding3, delay: 0.3 },
  { id: 2, title: "Birthday Cake Pudding", price: "$15.00", img: pudding1, delay: 0.6 },
  { id: 3, title: "Pumpkin Spice Pudding", price: "$15.00", img: pudding2, delay: 0.9 },
  { id: 4, title: "Coquito Cremas Pudding", price: "$15.00", img: pudding4, delay: 1.2 },
  { id: 5, title: "Banana Pudding", price: "$15.00", img: pudding5, delay: 1.2 },
  { id: 6, title: "Pudding Shortcake", price: "$15.00", img: pudding6, delay: 1.2 },
];

const Menus = () => {
  return (
    <section className="py-16">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl font-bold text-left pb-10 uppercase"
        >
          Pudding Menu
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {MenusData.map((menu) => (
            <motion.div
              key={menu.id}
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-white to-rose-50 rounded-3xl p-5 shadow-lg 
                         flex flex-col items-center text-center transition-all hover:shadow-xl"
            >
              {/* Image */}
              <div className="w-full h-52 overflow-hidden rounded-2xl mb-4">
                <motion.img
                  src={menu.img}
                  alt={menu.title}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Title */}
              <div className="relative mb-3">
                <h1 className="text-lg font-semibold text-gray-800 drop-shadow-sm">
                  {menu.title}
                </h1>
                <span className="block w-8 h-[2px] bg-rose-400 mt-1 mx-auto"></span>
              </div>

              {/* Price */}
              <p className="bg-rose-500 text-white text-sm font-bold py-1 px-4 rounded-full shadow-sm">
                {menu.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;

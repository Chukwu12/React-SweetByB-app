import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Swal from "sweetalert2";
import '../HolidayMenus/HolidayMenu.css';
import withReactContent from "sweetalert2-react-content";
import { FadeUp } from "../../utility/animation";

import { Eye } from "lucide-react";

// Placeholders
import Placeholder1 from "../../assets/images/christmasplaceholder.webp";
import Placeholder2 from "../../assets/images/easterplaceholder.webp";
import Placeholder3 from "../../assets/images/thanksgivingplaceholder.webp";
import Placeholder5 from "../../assets/images/motherdayplaceholder.webp";
import Placeholder6 from "../../assets/images/valentine-banner.webp";

// Real images
import ChristmasMenu from "../../assets/images/IMG_0878.webp";
import EasterMenu from "../../assets/images/IMG_0881.webp";
import ThanksgivingMenu from "../../assets/images/IMG_0879.webp";
import ThanksgivingMenu2 from "../../assets/images/IMG_0876.webp";
import MotherdaysMenu from "../../assets/images/IMG_0880.webp";
import ValentineMenu from "../../assets/images/IMG_0877.webp";

const MySwal = withReactContent(Swal);

const MotionDiv = motion.create("div");
const MotionH2 = motion.create("h2");

const holidayMenus = [
  {
    id: 1,
    title: "Christmas Menu",
    images: [ChristmasMenu],
    placeholder: Placeholder1,
  },
  {
    id: 2,
    title: "Easter Menu",
    images: [EasterMenu],
    placeholder: Placeholder2,
  },
  {
    id: 3,
    title: "Thanksgiving Menu",
    images: [ThanksgivingMenu, ThanksgivingMenu2],
    placeholder: Placeholder3,
  },
  {
    id: 4,
    title: "Mother's Day Menu",
    images: [MotherdaysMenu],
    placeholder: Placeholder5,
  },
  {
    id: 5,
    title: "Valentine Menu",
    images: [ValentineMenu],
    placeholder: Placeholder6,
  },
];

const HolidayMenus = () => {
  const openMenuModal = (menu) => {
    if (Array.isArray(menu.images)) {
      const imagesHTML = menu.images
        .map(
          (img) =>
            `<img src="${img}" alt="${menu.title}" style="width:100%; margin-bottom:10px; border-radius:15px;" />`
        )
        .join("");

      MySwal.fire({
        title: menu.title,
        html: imagesHTML,
        showCloseButton: true,
        showConfirmButton: false,
        width: "80%",
        padding: "1em",
        background: "#fff",
      });
    } else {
      MySwal.fire({
        title: menu.title,
        imageUrl: menu.images,
        imageAlt: menu.title,
        showCloseButton: true,
        showConfirmButton: false,
        width: "90%",
        padding: "1em",
        background: "#fff",
        imageWidth: "100%",
      });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#fff8f3] to-[#fff3ec]">
      <div className="absolute -top-16 -left-10 w-72 h-72 rounded-full bg-[#fce7f3]/35 blur-3xl" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-[#f4b860]/18 blur-3xl" />
      <div className="container">
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-8 md:mb-10">
          <p className="font-manrope text-xs md:text-sm tracking-[0.2em] uppercase text-[#9a7268] mb-3">
            Limited Seasonal Collection
          </p>
          <MotionH2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900"
          >
            Holiday Menus
          </MotionH2>
          <p className="font-manrope text-sm md:text-base text-[#7d655d] mt-4 leading-8">
            Seasonal collections designed to make every celebration feel special.
          </p>
        </div>

        <Swiper
          className="holiday-swiper"
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 8,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2.4 },
          }}
        >
          {holidayMenus.map((menu, index) => (
            <SwiperSlide key={menu.id}>
              <MotionDiv
                variants={FadeUp(index * 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  rotate: 1,
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openMenuModal(menu)}
                className="holiday-card relative cursor-pointer bg-gradient-to-br 
                from-white to-rose-50 rounded-[25px] shadow-2xl overflow-hidden
                flex flex-col items-center p-4 w-full h-full"
              >
                {/* Menu placeholder image */}
                <div className="relative w-full">
                  <img
                    src={menu.placeholder}
                    alt={menu.title}
                    className="w-full h-[320px] object-cover rounded-[25px]"
                  />

                  {/* Hover overlay */}
                  <div className="card-hover-overlay">
                    <span className="flex items-center gap-2">
                      <Eye size={22} /> View Menu
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-start text-center min-h-[108px] pt-3">
                  <h3 className="font-playfair text-2xl font-semibold text-neutral-900 leading-tight">
                    {menu.title}
                  </h3>

                  <p className="font-manrope text-sm text-gray-500 mt-1 md:hidden">
                    Tap to view menu
                  </p>

                  <span className="font-manrope text-[11px] tracking-[0.18em] uppercase text-rose-500/80 mt-2">
                    Limited Seasonal Drop
                  </span>
                </div>
              </MotionDiv >
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HolidayMenus;

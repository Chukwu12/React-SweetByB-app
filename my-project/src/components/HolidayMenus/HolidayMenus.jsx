import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swal from "sweetalert2";
import '../HolidayMenus/HolidayMenu.css';
import withReactContent from "sweetalert2-react-content";
import { FadeUp } from "../../utility/animation";

// Placeholder images
import Placeholder1 from "../../assets/images/christmasplaceholder.jpg";
import Placeholder2 from "../../assets/images/easterplaceholder.png";
import Placeholder3 from "../../assets/images/thanksgivingplaceholder.png";
import Placeholder5 from "../../assets/images/motherdayplaceholder.png";
import Placeholder6 from "../../assets/images/valentine-banner.png";

// Holiday menu images
import ChristmasMenu from "../../assets/images/IMG_0878.jpeg";
import EasterMenu from "../../assets/images/IMG_0881.jpeg";
import ThanksgivingMenu from "../../assets/images/IMG_0879.jpeg";
import ThanksgivingMenu2 from "../../assets/images/IMG_0876.jpeg";
import MotherdaysMenu from '../../assets/images/IMG_0880.jpeg'
import ValentineMenu from '../../assets/images/IMG_0877.jpeg'

const MySwal = withReactContent(Swal);

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
    // Check if fullMenu is an array
    if (Array.isArray(menu.fullMenu)) {
      // Create HTML with multiple images
      const imagesHTML = menu.fullMenu
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
        width: "90%",
        padding: "1em",
        background: "#fff",
      });
    } else {
      // Single image
      MySwal.fire({
        title: menu.title,
        imageUrl: menu.fullMenu,
        imageAlt: menu.title,
        showCloseButton: true,
        showConfirmButton: false,
        width: "90%",
        padding: "1em",
        background: "#fff",
        imageWidth: "100%",
        imageHeight: "auto",
      });
    }
  };

  return (
    <section className="py-14">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center pb-8"
        >
          Holiday Menus
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {holidayMenus.map((menu, index) => (
            <SwiperSlide key={menu.id}>
              <motion.div
                variants={FadeUp(index * 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => openMenuModal(menu)}
                className="cursor-pointer bg-white rounded-[25px] shadow-md overflow-hidden flex flex-col items-center p-4"
              >
                <img
                  src={menu.placeholder}
                  alt={menu.title}
                  className="w-full h-[250px] object-cover rounded-[25px] mb-4"
                />
                <h3 className="text-lg font-semibold text-center">
                  {menu.title}
                </h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};



export default HolidayMenus;

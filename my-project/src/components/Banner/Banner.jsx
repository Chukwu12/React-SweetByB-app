import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


import BannerImg from "../../assets/images/image0.webp";
import MenuImg from "../../assets/images/image4.webp";
import Pudding1 from "../../assets/images/pudding1.webp";
import Cupackes from "../../assets/images/IMG_0649.webp";
import Cupackes2 from "../../assets/images/IMG_9855.webp";
import Chessecake from "../../assets/images/image5.webp";
import Shortbread from "../../assets/images/shortbread.webp";
import ValentineBox from "../../assets/images/IMG_9908.webp";

import bannerVideo from "../../assets/images/banner-video.mp4";

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { TbSparkles, TbStar, TbTruckDelivery } from "react-icons/tb";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./BannerSwiper.css";


const MotionImg = motion.create("img");
const MotionVideo = motion.create("video");
const MotionDiv = motion.create("div");
const MotionP = motion.create("p");

const headingContainer = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.12,
            staggerChildren: 0.08,
        },
    },
};

const headingWord = {
    hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};




const MySwal = withReactContent(Swal);
const Banner = () => {

    const handleOpenMenu = () => {
        MySwal.fire({
            title: 'Full Menu',
            imageUrl: MenuImg,
            imageAlt: 'Sweets by B full menu',
            showCloseButton: true,
            showConfirmButton: false,
            width: '90%',
            padding: '1em',
            background: '#fff',
            imageWidth: '100%',
            imageHeight: 'auto',
        });
    };
    return (
        <section id='featured-banner' className='relative overflow-hidden bg-gradient-to-b from-[#fff8f3] via-white to-[#fff3ec] py-16 md:py-20'>
            <div className="absolute -top-24 -left-16 w-72 h-72 bg-[#fce7f3]/55 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 right-0 w-80 h-80 bg-[#f4b860]/25 blur-3xl rounded-full" />

            <div className='container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <MotionDiv
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55 }}
                    className='space-y-6'
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-[#efdacf] px-4 py-2 backdrop-blur-sm">
                        <TbSparkles className="text-[#D97757]" />
                        <span className="font-manrope text-[11px] tracking-[0.16em] uppercase text-[#8a695f]">Seasonal Highlights</span>
                    </div>

                    <motion.h2
                        variants={headingContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-[#3B2A28]"
                    >
                        {["Discover", "Our", "Signature", "Sweets"].map((word) => (
                            <motion.span
                                key={word}
                                variants={headingWord}
                                className="inline-block mr-3"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h2>

                    <MotionP
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-manrope text-[#6d5751] text-[1.03rem] leading-8 max-w-xl"
                    >
                        Explore our rotating dessert gallery featuring handcrafted puddings, premium cupcakes, cheesecakes, and seasonal drops made to celebrate every occasion.
                    </MotionP>

                    <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 font-manrope text-sm bg-white/85 border border-[#edd7ca] rounded-full px-4 py-2 text-[#604a45]">
                            <TbStar className="text-[#D97757]" /> 5-Star Favorites
                        </span>
                        <span className="inline-flex items-center gap-2 font-manrope text-sm bg-white/85 border border-[#edd7ca] rounded-full px-4 py-2 text-[#604a45]">
                            <TbTruckDelivery className="text-[#D97757]" /> Local Delivery
                        </span>
                    </div>

                    <MotionImg
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        viewport={{ once: true }}
                        src={BannerImg}
                        alt="Signature sweets preview"
                        loading="lazy"
                        className="w-full max-w-[640px] h-[280px] sm:h-[360px] object-cover rounded-[28px] border border-white/90 shadow-[0_28px_60px_-30px_rgba(59,42,40,0.55)]"
                    />

                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={handleOpenMenu}
                            className="font-manrope font-semibold tracking-wide bg-[#D97757] hover:bg-[#c96a4d] text-white px-6 py-3 rounded-full transition shadow-[0_14px_30px_-14px_rgba(217,119,87,0.95)]"
                        >
                            View Full Menu
                        </button>
                        <button
                            onClick={() => document.getElementById("product-menu")?.scrollIntoView({ behavior: "smooth" })}
                            className="font-manrope font-semibold tracking-wide bg-white/90 hover:bg-white text-[#3B2A28] px-6 py-3 rounded-full border border-[#ead5ca] transition"
                        >
                            Shop Categories
                        </button>
                    </div>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className='banner-frame'
                >
                    <div className="mb-4 px-2">
                        <p className="font-playfair text-2xl text-[#3B2A28]">Dessert Moments</p>
                        <p className="font-manrope text-sm text-[#7f6760]">Swipe through our favorites and seasonal creations.</p>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2600,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        className="banner-swiper w-full rounded-[25px] overflow-hidden">
                        <SwiperSlide>
                            <MotionImg
                                src={Pudding1}
                                alt="Fresh Baked Goods"
                                className="w-full h-full object-cover rounded-[25px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MotionImg
                                src={Cupackes}
                                alt="Another Banner Image"
                                className="w-full h-full object-cover rounded-[25px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MotionImg
                                src={Cupackes2}
                                alt="Another Banner Image"
                                className="w-full h-full object-cover rounded-[25px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MotionImg
                                src={Chessecake}
                                alt="Another Banner Image"
                                className="w-full h-full object-cover rounded-[25px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MotionImg
                                src={Shortbread}
                                alt="Another Banner Image"
                                className="w-full h-full object-cover rounded-[25px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MotionImg
                                src={ValentineBox}
                                alt="Another Banner Image"
                                className="w-full h-full object-cover rounded-[25px]"
                            />
                        </SwiperSlide>

                        {/* SwiperSlide with a video */}
                        <SwiperSlide>
                            <MotionVideo
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-cover rounded-[25px]"
                            >
                                <source src={bannerVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </MotionVideo>
                        </SwiperSlide>


                    </Swiper>
                </MotionDiv>
            </div>
        </section>
    );
};

export default Banner;

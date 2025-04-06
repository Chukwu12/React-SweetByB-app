import React from 'react';
import BannerImg from "../../assets/images/image0.png";
import Pudding1 from "../../assets/images/pudding1.jpeg";
import Cupackes from "../../assets/images/IMG_0649.jpeg"
import Cupackes2 from "../../assets/images/IMG_9855.jpeg"
import Chessecake from "../../assets/images/image5.jpeg"
import Chessecake2 from "../../assets/images/IMG_9907.jpeg"
import ValentineBox from "../../assets/images/IMG_9908.jpg"
import bannerVideo from "../../assets/images/banner-video.mp4";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';  // Core Swiper styles
import 'swiper/css/navigation'; // If using navigation
import 'swiper/css/pagination'; // If using pagination


const Banner = () => {
    return (
        <section id='about' className='bg-secondary/10'>
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-5 space-y-6 md:space-y-0 py-14'>
                {/* Banner Image */}
                <div className='flex justify-center items-center'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        viewport={{ once: true }}
                        src={BannerImg}
                        alt="Banner image showcasing our products or services"
                        loading="lazy"
                        className="w-full h-[300px] sm:h-[400px] md:h-auto md:max-w-[800px] object-cover rounded-[25px]"
                    />
                </div>

                {/* Swiper Component */}
                <div className='flex justify-center self-center items-center'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        className="w-full md:max-w-[800px] h-[300px] sm:h-[400px] md:h-auto rounded-[25px] overflow-hidden">
                        <SwiperSlide>
                            <motion.img
                                src={Pudding1}
                                alt="Fresh Baked Goods"
                                className="w-full h-full object-cover rounded-[25px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.img
                                src={Cupackes}
                                alt="Another Banner Image"
                                className="w-full h-full object-cover rounded-[25px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.img
                                src={Cupackes2}
                                alt="Another Banner Image"
                                className="w-full h-full object-cover rounded-[25px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.img
                                src={Chessecake}
                                alt="Another Banner Image"
                                className="w-full h-full object-cover rounded-[25px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.img
                                src={Chessecake2}
                                alt="Another Banner Image"
                                className="w-full h-full object-cover rounded-[25px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.img
                                src={ValentineBox}
                                alt="Another Banner Image"
                                className="w-full h-full object-cover rounded-[25px]"
                            />
                        </SwiperSlide>

                        {/* SwiperSlide with a video */}
                        <SwiperSlide>
                            <motion.video
                                autoPlay
                                loop
                                muted
                                className="w-full h-full object-cover rounded-[25px]"
                            >
                                <source src={bannerVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </motion.video>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Banner;

import React from 'react';
import BannerImg from "../../assets/images/image0.png";
import BannerVid from "../../assets/images/banner-video.mp4";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Core Swiper styles
import 'swiper/css/navigation'; // If using navigation
import 'swiper/css/pagination'; // If using pagination
import { FadeLeft, FadeUp } from '../../utility/animation';

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
                        className='w-full md:max-w-[800px] h-full object-cover rounded-[25px]'
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;

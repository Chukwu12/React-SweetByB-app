import React from 'react';
import BannerImg from "../../assets/images/banner-img.png";
import {motion} from 'framer-motion';
import { FadeLeft, FadeUp } from '../../utility/animation';

const Banner = () => {
    return (
        <section id='about' className='bg-secondary/10'>
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-5 space-y-6 md:space-y-0 py-14'>
                {/* Banner Image */}
                <div className='flex justify-center items-center'>
                    <motion.img
                     initial={{opacity: 0, scale: 0.5}}
                     whileInView={{opacity: 1, scale: 1}}
                     transition={{type: "spring", stiffness: 100, delay:0.2}}
                     viewport={{once:true}}
                        src={BannerImg}
                        alt="Banner image showcasing our products or services"
                        className='w-full md:max-w-[800px] h-full object-cover' 
                    />
                </div>
                {/* Banner Info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1 
                            variants={FadeUp(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className='text-3xl lg:text-6xl font-bold uppercase'>
                            {" "}
                            About Us
                        </motion.h1>

                        <motion.p
                            variants={FadeUp(0.7)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat neque nec nunc tristique sodales. Integer pellentesque felis metus, eget congue erat congue sed. Pellentesque interdum velit in mauris egestas consectetur. Pellentesque eget massa arcu. Aliquam euismod volutpat dolor, eu facilisis lectus auctor a. Cras volutpat posuere ultrices.
                             Quisque consectetur dui mattis tortor ultricies, sit amet feugiat justo fermentum. Sed faucibus, sapien at hendrerit rutrum, lorem sapien rutrum nibh.
                        </motion.p>

                        <motion.p
                            variants={FadeUp(1.1)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Suspendisse ac tortor tristique, placerat quam vitae, laoreet eros. Nulla facilisi. Nullam pulvinar ornare justo, id mattis sapien ornare in. Suspendisse ipsum ipsum, faucibus at placerat a, accumsan nec tellus. Vestibulum faucibus dictum vulputate.
                            .
                        </motion.p>

                        {/* Button Section */}
                        <motion.div
                            variants={FadeUp(1.1)}
                            initial="hidden"
                            animate="visible"
                            className='flex justify-center md:justify-start'>
                            <button className='primary-btn'>
                                Contact Us
                            </button>
                        </motion.div>
                    </div>   
                </div>
            </div>
        </section>
    );
};

export default Banner;

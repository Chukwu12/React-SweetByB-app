import React from 'react';
import BannerImg from "../../assets/images/image0.png";
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
                        className='w-full md:max-w-[800px] h-full object-cover rounded-[25px]' 
                    />
                </div>
                {/* Banner Info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        

  
                    </div>   
                </div>
            </div>
        </section>
    );
};

//  <div className="flex flex-col justify-center">
//       <div className="text-center md:text-left space-y-4 lg:max-w-[600px]">
//         <motion.h1 
//           variants={FadeUp(0.5)}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-3xl lg:text-6xl font-bold uppercase">
//           {" "}
//         </motion.h1>

//         <motion.h1 
//           variants={FadeUp(0.5)}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-3xl lg:text-6xl font-bold uppercase">
//           {" "}
//           About Us
//         </motion.h1>

//         <div className="bg-gray-50 p-8 rounded-lg shadow-lg mt-8 max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-[#5EC49D] mt-6 mb-4">
//             Sweets by B - Simple, Bold, Baked with love
//           </h2>
//           <motion.p
//             className="text-lg leading-relaxed text-gray-800 mb-6"
//             variants={FadeUp(0.7)}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <span className="font-semibold text-[#5EC49D]">I’m Bianca</span>, the heart behind Sweets by B! My love for baking started when I was a kid, and in 2019, I turned that passion into a business dedicated to creating desserts that bring joy with every bite. I believe great desserts don’t have to be overly sweet—they just need to be made with love, quality ingredients, and a little creativity.
//           </motion.p>

//           <motion.p
//             className="text-lg leading-relaxed text-gray-800 mb-6"
//             variants={FadeUp(1.1)}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             At Sweets by B, we offer a unique take on classic treats, from our signature banana pudding to cheesecakes, cupcakes, and cookies. Whether you’re looking for something indulgent or a little lighter or even vegan, my goal is to introduce you to new flavors and unforgettable desserts. Because life’s too short for boring sweets! Let’s make life a little sweeter—one dessert at a time.
//           </motion.p>
//         </div>

//         {/* Button Section */}
//         <motion.div
//           variants={FadeUp(1.1)}
//           initial="hidden"
//           animate="visible"
//           className="flex justify-center md:justify-start">
//           <button className="primary-btn">
//             Contact Us
//           </button>
//         </motion.div>
//       </div>   

      
//     </div>

export default Banner;

import React from 'react'
import WhyChooseUs from '../Components/WhyChooseUs Section/WhyChooseUs'
import AboutSection1 from '../Components/About Section 1/AboutSection1'
import CouponCode from '../Components/Coupon Code Section/CouponCode'
import FreeDelivery from '../Components/Free Delivery Section/FreeDelivery'

function About() {
  return (
    <>
      <WhyChooseUs />
      <AboutSection1 />
      <CouponCode />
      <FreeDelivery />
    </>
  )

//   <div className='flex flex-col justify-center'>
//                       <div className='text-center md:text-left space-y-4 lg:max-w-[600px]'>
//                           <motion.h1 
//                               variants={FadeUp(0.5)}
//                               initial="hidden"
//                               whileInView="visible"
//                               viewport={{ once: true }}
//                               className='text-3xl lg:text-6xl font-bold uppercase'>
//                               {" "}
                              
//                           </motion.h1>

{/* <motion.h1 
                            variants={FadeUp(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className='text-3xl lg:text-6xl font-bold uppercase'>
                            {" "}
                            About Us
                        </motion.h1> */}
  
                          
  
//                           <div className="bg-gray-50 p-8 rounded-lg shadow-lg mt-8 max-w-4xl mx-auto">
  
//                                   <h2 className="text-3xl font-bold text-center text-[#5EC49D] mt-6 mb-4">
//                                   Sweets by B - Simple, Bold, Baked with love
//                                   </h2>
//                               <motion.p
//                                   className="text-lg leading-relaxed text-gray-800 mb-6"
//                                   variants={FadeUp(0.7)}
//                                   initial="hidden"
//                                   whileInView="visible"
//                                   viewport={{ once: true }}
//                               >
//                                   <span className="font-semibold text-[#5EC49D]">I’m Bianca</span>, the heart behind Sweets by B! My love for baking started when I was a kid, and in 2019, I turned that passion into a business dedicated to creating desserts that bring joy with every bite. I believe great desserts don’t have to be overly sweet—they just need to be made with love, quality ingredients, and a little creativity.
//                               </motion.p>
  
//                               <motion.p
//                                   className="text-lg leading-relaxed text-gray-800 mb-6"
//                                   variants={FadeUp(1.1)}
//                                   initial="hidden"
//                                   whileInView="visible"
//                                   viewport={{ once: true }}
//                               >
//                                   At Sweets by B, we offer a unique take on classic treats, from our signature banana pudding to cheesecakes, cupcakes, and cookies. Whether you’re looking for something indulgent or a little lighter or even vegan, my goal is to introduce you to new flavors and unforgettable desserts. Because life’s too short for boring sweets! Let’s make life a little sweeter—one dessert at a time.
//                               </motion.p>
//                               </div>
  
//                           {/* Button Section */}
//                           <motion.div
//                               variants={FadeUp(1.1)}
//                               initial="hidden"
//                               animate="visible"
//                               className='flex justify-center md:justify-start'>
//                               <button className='primary-btn'>
//                                   Contact Us
//                               </button>
//                           </motion.div>
//                       </div>   
//                   </div>

                      // <motion.p
                      //       variants={FadeUp(0.7)}
                      //       initial="hidden"
                      //       whileInView="visible"
                      //       viewport={{ once: true }}
                      //   >
                      //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat neque nec nunc tristique sodales. Integer pellentesque felis metus, eget congue erat congue sed. Pellentesque interdum velit in mauris egestas consectetur. Pellentesque eget massa arcu. Aliquam euismod volutpat dolor, eu facilisis lectus auctor a. Cras volutpat posuere ultrices.
                      //        Quisque consectetur dui mattis tortor ultricies, sit amet feugiat justo fermentum. Sed faucibus, sapien at hendrerit rutrum, lorem sapien rutrum nibh.
                      //   </motion.p>

                      //   <motion.p
                      //       variants={FadeUp(1.1)}
                      //       initial="hidden"
                      //       whileInView="visible"
                      //       viewport={{ once: true }}
                      //   >
                      //       Suspendisse ac tortor tristique, placerat quam vitae, laoreet eros. Nulla facilisi. Nullam pulvinar ornare justo, id mattis sapien ornare in. Suspendisse ipsum ipsum, faucibus at placerat a, accumsan nec tellus. Vestibulum faucibus dictum vulputate.
                      //       .
                      //   </motion.p>

                      //   {/* Button Section */}
                      //   <motion.div
                      //       variants={FadeUp(1.1)}
                      //       initial="hidden"
                      //       animate="visible"
                      //       className='flex justify-center md:justify-start'>
                      //       <button className='primary-btn'>
                      //           Contact Us
                      //       </button>
                      //   </motion.div>
}

export default About
import React from 'react'
import { TbShoppingBag } from "react-icons/tb";
import HeroImg from '../../assets/images/hero-image.png'

const Hero = () => {
  return (
    <section>
        <div className='container grid grid cols-1 md:grid cols-2 min-h-[650px]'>
    {/* Brand Info */}
    <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
        <div className='text-center md:text-left space-y-6 lg:max-w[400px]'>
            <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia'>Sweet
            <br />
            ByB <span className='text-secondary'> Bakery</span>
            </h1>
            <p className='text-2xl tracking-wide'>Baked to Perfection, Made with Love</p>
            <p className='text-gray-400'>"Welcome to Sweet ByB, where every bite is a moment of pure bliss. Our handcrafted desserts are made with love,
                 using only the finest ingredients to bring you treats that are as beautiful as they are delicious. Whether you're
                  craving something rich and indulgent or light and refreshing, our collection of desserts is sure to satisfy your
                   sweetest cravings. Join us in celebrating the art of baking—one sweet creation at a time!"</p>
                   {/* button section */}
                   <div className='flex justify-center md:justify-start'>
                   <button className='primary-btn flex items-center gap2'>
                    <span>
                        <TbShoppingBag/>
                    </span>
                    Order Now</button>
                   </div>
                   
        </div>
    </div>
      {/* Hero images */}
      <div className='flex justify-center items-center'>
        <img src={HeroImg} alt=""  className='w-[350px] md:w-[500px] drop-shadow'/>
      </div>
  </div>
  </section>
  );
};

export default Hero
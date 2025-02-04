import React from 'react';
 import {BannerImg} from '../../assets/images/banner-img.png'
 import {motion} from 'framer-motion';
 import { Fadeleft, FadeUp } from '../../utility/animation';

const Banner = () => {
    return(
        <section>
               <div className='container grid grid-cols-1'>
        {/* Banner Image */}
        <div>
            <img src={BannerImg} alt="" 
            className='w-[300px] md:max-w-[400px] h-full object-cover' />
        </div>
        {/* Banner Info */}
            </div>
        </section>
    )
}

export default Banner;
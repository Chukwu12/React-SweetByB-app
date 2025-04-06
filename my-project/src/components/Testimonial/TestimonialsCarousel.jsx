import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Box, Image, Text, VStack } from '@chakra-ui/react';



function TestimonialsCarousel() {
  return (
    <Box
    width={'100%'}
    min-height={'100%'}
    >
     <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          
           {/* Testimonial Card */}
           <Box
            width={['25rem' , '25rem' , '25rem' , '25rem']}
            height={['21rem'  , '21rem'  , '21rem' , '26rem']}
            display={"flex"}
            justifyContent={"flex-end"}
            position={"relative"}
            backgroundColor={'white'}
            >

                {/* Testimonial Image */}
           <VStack
            width={'100px'}
            height={'100px'}
            position={"absolute"}
            top ={'20px'}
            left={'35%'}
            >
                
            </VStack>

            
                {/* Testimonial Details */}
                <VStack 
                width={['75%' , '85%' , '100%' , '90%']}
                height={"70%"}
                // backgroundColor={'red'}
                margin={'auto'}
                border={'1px dashed #5EA98B'}
                paddingTop={'5rem'}
                >

                    <Text
                    fontSize={['20px' , '20px' , '25px' , '30px']}
                    fontWeight={"700"}
                    letterSpacing={'2px'}
                    color={'#5EA98B'}
                    >Laybriccs</Text>

                    <Text 
                    fontWeight={"600"}
                    >Customer</Text>

                    <Text
                    width={'90%'}
                    textAlign={'center'}
                    fontSize={['12px' , '13px' , '15px' , '15px']}
                    letterSpacing={'1px'}

                    >
                  My day is made the absolute best vegan pudding out there... Hit her up for all your sweet treat cravings.
                    </Text>

                </VStack>

            </Box>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          
           {/* Testimonial Card */}
           <Box
           width={['25rem' , '25rem' , '25rem' , '25rem']}
           height={['21rem'  , '21rem'  , '21rem' , '26rem']}
            display={"flex"}
            justifyContent={"flex-end"}
            position={"relative"}
            backgroundColor={'white'}
            >

                {/* Testimonial Image */}
           <VStack
            width={'100px'}
            height={'100px'}
            position={"absolute"}
            top ={'20px'}
            left={'35%'}
            >
                
            </VStack>

            
                {/* Testimonial Details */}
                <VStack 
                width={['75%' , '85%' , '100%' , '90%']}
                height={"70%"}
                // backgroundColor={'red'}
                margin={'auto'}
                border={'1px dashed #5EA98B'}
                paddingTop={'5rem'}
                >

                    <Text
                  fontSize={['20px' , '20px' , '25px' , '30px']}
                    fontWeight={"700"}
                    letterSpacing={'2px'}
                    color={'#5EA98B'}
                    >Instagram</Text>

                    <Text 
                    fontWeight={"600"}
                    >Customer</Text>

                    <Text
                    width={'90%'}
                    textAlign={'center'}
                    fontSize={['12px' , '13px' , '15px' , '15px']}
                    letterSpacing={'1px'}

                    >
                  Cupcakes was a hit 10 out of 10
                    </Text>

                </VStack>

            </Box>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          
         {/* Testimonial Card */}
         <Box
           width={['25rem' , '25rem' , '25rem' , '25rem']}
           height={['21rem'  , '21rem'  , '21rem' , '26rem']}
            display={"flex"}
            justifyContent={"flex-end"}
            position={"relative"}
            backgroundColor={'white'}
            >

                {/* Testimonial Image */}
           <VStack
            width={'100px'}
            height={'100px'}
            position={"absolute"}
            top ={'20px'}
            left={'35%'}
            >
                
            </VStack>

            
                {/* Testimonial Details */}
                <VStack 
             width={['75%' , '85%' , '100%' , '90%']}
                height={"70%"}
                // backgroundColor={'red'}
                margin={'auto'}
                border={'1px dashed #5EA98B'}
                paddingTop={'5rem'}
                >

                    <Text
                  fontSize={['20px' , '20px' , '25px' , '30px']}
                    fontWeight={"700"}
                    letterSpacing={'2px'}
                    color={'#5EA98B'}
                    >Instagram</Text>

                    <Text 
                    fontWeight={"600"}
                    >Customer</Text>

                    <Text
                    width={'90%'}
                    textAlign={'center'}
                    fontSize={['12px' , '13px' , '15px' , '15px']}
                    letterSpacing={'1px'}
                    >
                  Bianca holy cow these were insane I truly had to stop myself from taste tasting more than 1, so good. And the Chai were just as yummy.
                    </Text>

                </VStack>
            </Box>
        </SwiperSlide>

      
     
      </Swiper>
    </Box>
  )
}

export default TestimonialsCarousel
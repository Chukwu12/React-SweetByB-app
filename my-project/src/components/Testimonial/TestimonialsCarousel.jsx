import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Box, VStack, Text } from "@chakra-ui/react";
import "./TestimonialsSwiper.css";

const testimonials = [
  {
    name: "Laybriccs",
    role: "Customer",
    message:
      "My day is made the absolute best vegan pudding out there... Hit her up for all your sweet treat cravings.",
  },
  {
    name: "Instagram",
    role: "Customer",
    message: "Cupcakes was a hit 10 out of 10",
  },
  {
    name: "Instagram",
    role: "Customer",
    message:
      "Bianca holy cow these were insane I truly had to stop myself from taste testing more than 1, so good. And the Chai were just as yummy.",
  },
];

function TestimonialsCarousel() {
  return (
    <Box width="100%" px={{ base: 4, md: 8 }}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.15 },
          768: { slidesPerView: 1.7 },
          1024: { slidesPerView: 2.35 },
        }}
        coverflowEffect={{
          rotate: 12,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        spaceBetween={18}
         className="myTestimonialsSwiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              bg="linear-gradient(155deg, rgba(255,255,255,0.95) 0%, rgba(255,244,238,0.95) 100%)"
              borderRadius="2xl"
              border="1px solid"
              borderColor="#edd8cc"
              boxShadow="0 22px 48px -32px rgba(59,42,40,0.55)"
              width={{ base: "86%", md: "90%", lg: "22rem" }}
              p={{ base: 6, md: 8 }}
              textAlign="center"
            >
              <VStack spacing={4}>
                <Text fontFamily="'Playfair Display', serif" fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1" color="#d97757" mb={-1}>
                  "
                </Text>
                <Text
                  fontFamily="'Playfair Display', serif"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="700"
                  color="#3B2A28"
                >
                  {item.name}
                </Text>
                <Text fontFamily="'Manrope', sans-serif" fontWeight="700" letterSpacing="0.08em" textTransform="uppercase" fontSize="xs" color="#9a7268">
                  {item.role}
                </Text>
                <Text fontFamily="'Manrope', sans-serif" fontSize={{ base: "14px", md: "16px" }} lineHeight="1.9" color="#6d5751">
                  {item.message}
                </Text>
              </VStack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default TestimonialsCarousel;

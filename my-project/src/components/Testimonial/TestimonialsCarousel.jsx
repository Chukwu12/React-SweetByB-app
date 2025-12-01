import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Box, VStack, Text } from "@chakra-ui/react";

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
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        spaceBetween={30}
         className="myTestimonialsSwiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              bg="white"
              borderRadius="xl"
              boxShadow="lg"
              width={{ base: "80%", md: "90%", lg: "22rem" }}
              p={{ base: 6, md: 8 }}
              textAlign="center"
            >
              <VStack spacing={4}>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="700"
                  color="#5EA98B"
                >
                  {item.name}
                </Text>
                <Text fontWeight="600">{item.role}</Text>
                <Text fontSize={{ base: "14px", md: "16px" }} letterSpacing="0.5px">
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

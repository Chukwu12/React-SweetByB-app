import React, { useContext } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import './FoodDisplay.css';
import { StoreContext } from '../../context/storeContext';
import FoodItem from '../FoodItem/FoodItem';
import { FadeUp } from '../../utility/animation';

// Motion components for DOM elements only
const MotionDiv = motion.create("div");

const FoodDisplay = ({ category }) => {
  const { products } = useContext(StoreContext);

  const filteredItems = products.filter(
    item => category === "All" || category === item.category
  );

  const totalItems = filteredItems.length;
  const categoryLabel = category === "All" ? "All Desserts" : category;

  return (
    <MotionDiv
      className="food-display premium-food-display relative w-full py-16 md:py-20"
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <div className="absolute -top-16 left-0 w-72 h-72 bg-[#fce7f3]/40 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-[#f4b860]/20 blur-3xl rounded-full" />

      <div className="container relative z-10 flex flex-col items-center gap-8 md:gap-10">
        {/* Heading */}
        <MotionDiv variants={FadeUp(0)} className="text-center max-w-3xl">
          <Text
            fontFamily="'Manrope', sans-serif"
            fontSize={{ base: 'xs', md: 'sm' }}
            textTransform="uppercase"
            letterSpacing="0.18em"
            color="#9a7268"
            mb={2}
          >
            Handcrafted Collection
          </Text>

          <Text
            fontFamily="'Playfair Display', serif"
            fontSize={['2.1rem', '2.9rem']}
            fontWeight="700"
            letterSpacing="0.02em"
            lineHeight="1.1"
            color="gray.800"
            textAlign="center"
          >
            Signature Dessert Collection
          </Text>

          <Text
            fontFamily="'Manrope', sans-serif"
            fontSize={['1rem', '1.1rem']}
            lineHeight="1.9"
            color="gray.600"
            textAlign="center"
            maxW="2xl"
            mx="auto"
            mt={3}
          >
            Handcrafted puddings, cheesecakes, cupcakes, and sweet treats made fresh for every celebration.
          </Text>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <span className="font-manrope text-xs md:text-sm bg-white/85 border border-[#edd7ca] rounded-full px-4 py-2 text-[#604a45]">
              {categoryLabel}
            </span>
            <span className="font-manrope text-xs md:text-sm bg-white/85 border border-[#edd7ca] rounded-full px-4 py-2 text-[#604a45]">
              {totalItems} items available
            </span>
          </div>
        </MotionDiv>

        {/* Grid Layout */}
        <MotionDiv
          style={{ width: '100%' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {totalItems === 0 ? (
            <MotionDiv
              variants={FadeUp(0.15)}
              className="mx-auto max-w-xl rounded-3xl border border-[#efd9cd] bg-white/80 backdrop-blur-sm px-6 py-12 text-center shadow-[0_22px_45px_-26px_rgba(59,42,40,0.45)]"
            >
              <Text fontFamily="'Playfair Display', serif" fontSize={{ base: '2xl', md: '3xl' }} color="#3B2A28">
                No desserts in this category yet
              </Text>
              <Text fontFamily="'Manrope', sans-serif" color="#755f58" mt={3}>
                Try another category to discover more handcrafted favorites.
              </Text>
            </MotionDiv>
          ) : (
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={{ base: '1.1rem', md: '1.4rem', lg: '1.7rem' }}
              justifyItems="center"
              width="100%"
              px={{ base: '0.2rem', md: '0.6rem' }}
            >
              {filteredItems.map((item, index) => (
                <GridItem key={item._id} width="100%">
                  <MotionDiv
                    variants={FadeUp(0.07 * index)}
                    style={{ width: '100%' }}
                  >
                    <FoodItem
                      id={item._id}
                      name={item.name}
                      description={item.description}
                      price={
                        item.maxPrice && item.minPrice
                          ? `$${(item.minPrice ?? 0).toFixed(2)} - $${(item.maxPrice ?? 0).toFixed(2)}`
                          : `$${(item.minPrice ?? 0).toFixed(2)}`
                      }
                      itemImage={item.image}
                      flavors={item.flavors ?? []}
                    />
                  </MotionDiv>
                </GridItem>
              ))}
            </Grid>
          )}
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default FoodDisplay;

import React, { useContext } from 'react';
import { Grid, GridItem, VStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import './FoodDisplay.css';
import { StoreContext } from '../../context/storeContext';
import FoodItem from '../FoodItem/FoodItem';
import { FadeUp } from '../../utility/animation';

// Motion components for DOM elements only
const MotionDiv = motion.create("div");
const MotionText = motion.create("p"); // for heading if you want

const FoodDisplay = ({ category }) => {
  const { products } = useContext(StoreContext);

  const filteredItems = products.filter(
    item => category === "All" || category === item.category
  );

  return (
    <MotionDiv
      className="food-display"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Heading */}
      <MotionDiv variants={FadeUp(0)}>
        <Text
          fontSize={['25px', '40px']}
          fontWeight="600"
          letterSpacing="2px"
          textAlign="center"
        >
          Check out our Full Menu
        </Text>
      </MotionDiv>

      {/* Grid Layout */}
      <MotionDiv
        style={{ width: '100%' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="1rem"
          justifyItems="center"
          width="100%"
          padding="1rem"
        >
          {filteredItems.map((item, index) => (
            <GridItem key={item._id} width="100%">
              <MotionDiv
                variants={FadeUp(0.1 * index)}
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
      </MotionDiv>
    </MotionDiv>
  );
};

export default FoodDisplay;

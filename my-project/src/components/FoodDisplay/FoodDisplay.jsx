import React, { useContext } from 'react';
import { Grid, GridItem, VStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import './FoodDisplay.css';
import { StoreContext } from '../../context/storeContext';
import FoodItem from '../FoodItem/FoodItem';
import { FadeUp } from '../../utility/animation';

const MotionVStack = motion(VStack);
const MotionGridItem = motion(GridItem);
const MotionText = motion(Text);

const FoodDisplay = ({ category }) => {
  const { products } = useContext(StoreContext);

  const filteredItems = products.filter(item => category === "All" || category === item.category);

  return (
    <MotionVStack
      className="food-display"
      id="food-display"
      spacing={4}
      align="center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.3, // Heading → grid → items
          },
        },
      }}
    >
      {/* Heading */}
      <MotionText
        fontSize={['25px', '40px']}
        fontWeight="600"
        letterSpacing="2px"
        textAlign="center"
        variants={FadeUp(0)}
      >
        Check out our Full Menu
      </MotionText>

      {/* Grid Layout */}
      <motion.div
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
              <motion.div
                variants={FadeUp(0.1 * index)}
                style={{ width: "100%" }} // ensures it fills the grid cell
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
              </motion.div>
            </GridItem>
          ))}
        </Grid>
      </motion.div>
    </MotionVStack>
  );
};

export default FoodDisplay;

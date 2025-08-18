import React, { useContext } from 'react';
import { Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/storeContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { products } = useContext(StoreContext); // Get products from context

  // Filter items based on the category
  const filteredItems = products.filter(item => category === "All" || category === item.category);

  return (
    <VStack className="food-display" id="food-display" spacing={4}>
      <Text fontSize={['25px', '40px']} fontWeight="600" letterSpacing="2px" textAlign={'center'}>
        Check out our Full Menu
      </Text>

      {/* Grid Layout for Food Items */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)", // Single column on small screens
          md: "repeat(2, 1fr)", // Two columns on medium screens
          lg: "repeat(3, 1fr)", // Three columns on large screens
        }}
        gap="1rem"
        justifyItems="center"
        width="100%"
        padding="1rem"
      >
        {filteredItems.map((item, index) => (
          <GridItem key={index} width="100%">
            <FoodItem
               id={item._id}
              name={item.name}
              description={item.description}
              // Update the price prop to handle ranges
              price={
                item.maxPrice && item.minPrice
                  ? `$${(item.minPrice ?? 0).toFixed(2)} - $${(item.maxPrice ?? 0).toFixed(2)}`
                  : `$${(item.minPrice ?? 0).toFixed(2)}`
              }
              itemImage={item.image} 
              flavors={item.flavors ?? []}
            />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default FoodDisplay;
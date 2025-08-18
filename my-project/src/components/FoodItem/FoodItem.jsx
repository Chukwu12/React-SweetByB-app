import React, { useContext, useState } from 'react';
import './FoodItem.css';
import PlusIcon from "../../assets/images/plus-icon.png";
import GreenIcon from "../../assets/images/plus-green.png";
import RedIcon from "../../assets/images/minus-red.png";
import { StoreContext } from '../../context/storeContext';
import { Select, FormControl, FormLabel } from '@chakra-ui/react';

const FoodItem = ({ id, name, price, description, itemImage, flavors = [] }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const [selectedFlavor, setSelectedFlavor] = useState('');

  // Generate the cart key for this item + flavor
  const cartKey = `${id}-${selectedFlavor || ''}`;
  const cartItem = cartItems[cartKey];

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={itemImage} alt={name} />

        {!cartItem ? (
          <img
            className='add'
            onClick={() => {
              if (flavors.length > 0 && !selectedFlavor) {
                alert("Please select a flavor!");
                return;
              }
              addToCart(id, selectedFlavor);
            }}
            src={PlusIcon}
            alt='Add to cart'
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={() => removeFromCart(cartKey)}
              src={RedIcon}
              alt="Remove one"
            />
            <p>{cartItem?.quantity ?? 0}</p>
            <img
              onClick={() => addToCart(id, selectedFlavor)}
              src={GreenIcon}
              alt="Add one"
            />
          </div>
        )}
      </div>

      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
        </div>

        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>{price}</p>

        {/* Flavor dropdown */}
        {flavors.length > 0 && (
          <FormControl mt={2}>
            <FormLabel fontSize="sm" mb={1}>Flavor</FormLabel>
            <Select
              placeholder="Select Flavor"
              value={selectedFlavor}
              onChange={(e) => setSelectedFlavor(e.target.value)}
              fontSize="sm"
              borderRadius="md"
              focusBorderColor="tomato"
              bg="gray.50"
            >
              {flavors.map((flavor, idx) => (
                <option key={idx} value={flavor}>{flavor}</option>
              ))}
            </Select>
          </FormControl>
        )}
      </div>
    </div>
  );
};

export default FoodItem;

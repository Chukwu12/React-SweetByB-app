import React, { useContext } from 'react';
import './FoodItem.css'
import PlusIcon from "../../assets/images/plus-icon.png";
import GreenIcon from "../../assets/images/plus-green.png";
import RedIcon from "../../assets/images/minus-red.png";
import { StoreContext } from '../../context/storeContext';


const FoodItem = ({ id, name, price, description, itemImage }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const cartItem = cartItems[id]; // Store once for readability

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={itemImage} alt={name} />

        {!cartItem ? (
          <img className='add' onClick={() => addToCart(id)} src={PlusIcon} alt='Add to cart' />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={RedIcon} alt="Remove one" />
            <p>{cartItem?.quantity ?? 0}</p> {/* ✅ Fixed: display quantity only */}
            <img onClick={() => addToCart(id)} src={GreenIcon} alt="Add one" />
          </div>
        )}
      </div>

      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>{price}</p>
      </div>
    </div>
  )
}

export default FoodItem

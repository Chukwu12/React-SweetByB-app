import React, { useContext} from 'react';
import './FoodItem.css'
import PlusIcon from "../../assets/images/plus-icon.png";
// import MinusIcon from "../../assets/images/minus-icon.png";
import GreenIcon from "../../assets/images/plus-green.png";
import RedIcon from "../../assets/images/minus-red.png";
import { StoreContext } from '../../context/storeContext';


const FoodItem = ({id, name, price, description, itemImage}) => {
 const{cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return ( 
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={itemImage} alt="" />
        {!cartItems[id]
        ?<img className='add' onClick={()=>addToCart(id)} src={PlusIcon} alt='' />
        :<div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={RedIcon} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={GreenIcon} alt="" />
            </div>
           
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>{name}</p>
            <img src='' alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>{price}</p>
      </div>
    </div>
  )
}

export default FoodItem

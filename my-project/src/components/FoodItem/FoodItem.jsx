import React from 'react'
import './FoodItem.css'

const FoodItem = ({id, name, price, description, itemImage}) => {

    // const[itemCount, setItemCount] = useState(0)

  return ( 
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={itemImage} alt="" />
        
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>{name}</p>
            <img src='' alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem

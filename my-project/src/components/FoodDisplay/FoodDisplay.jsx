import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/storeContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const{itemCard} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Check out our Full Menu</h2>
        <div className='food-display-list'>
            {itemCard.map((item, index) => {
                return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} itemImage={item.itemImage}/>
            })}
        </div>
    </div>
  )
}

export default FoodDisplay

// src/Pages/Shop.jsx
import  { useState } from 'react';
import ExploreMenu from '../components/ProductGallery/ExploreMenu';
import Hero from '../components/Hero/Hero';
import Menus from '../components/Menus/Menus';
import HolidayMenus from '../components/HolidayMenus/HolidayMenus';
import Banner from '../components/Banner/Banner';
import FoodDisplay from '../components/FoodDisplay/FoodDisplay';
import ScrollToTopButton from '../components/ScrollToTopButton'; //

const Shop = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Hero />
      <Menus />
      <Banner />
      <HolidayMenus />  
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <ScrollToTopButton />
    </div>
  );
};

export default Shop;

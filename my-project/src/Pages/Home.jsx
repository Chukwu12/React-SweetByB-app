import React, { useState } from 'react';
import ExploreMenu from '../components/ProductGallery/ExploreMenu';
import Hero from '../components/Hero/Hero';
import Menus from '../components/Menus/Menus';
import Banner from '../components/Banner/Banner';
import FoodDisplay from '../components/FoodDisplay/FoodDisplay';
// import TestimonialsSection from '../components/Testimonial/TestimonialsSection';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Menus Section */}
      <Menus />

      {/* Promotional Banner */}
      <Banner />

      {/* Explore Menu Section */}
      <ExploreMenu category={category} setCategory={setCategory} />

      {/* Food Display (Filtered by Category) */}
      <FoodDisplay category={category} />

      {/* Testimonials */}
      {/* <TestimonialsSection /> */}
    </div>
  );
};

export default Home;

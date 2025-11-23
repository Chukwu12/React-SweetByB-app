// src/Pages/Shop.jsx
import { useState, Suspense, lazy } from "react";

import Hero from "../components/Hero/Hero";
import Menus from "../components/Menus/Menus";
import Banner from "../components/Banner/Banner";
import ScrollToTopButton from "../components/ScrollToTopButton";


const HolidayMenus = lazy(() =>
  import("../components/HolidayMenus/HolidayMenus")
);

const ExploreMenu = lazy(() =>
  import("../components/ProductGallery/ExploreMenu")
);

const FoodDisplay = lazy(() =>
  import("../components/FoodDisplay/FoodDisplay")
);

const Shop = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Hero />
      <Menus />
      <Banner />


      <Suspense fallback={<div className="text-center py-10">Loading menu...</div>}>
        <HolidayMenus />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
        <ExploreMenu category={category} setCategory={setCategory} />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Loading items...</div>}>
        <FoodDisplay category={category} />
      </Suspense>

      <ScrollToTopButton />
    </div>
  );
};

export default Shop;

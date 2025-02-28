import React, {useState} from 'react';
import ExploreMenu from '../components/ProductGallery/ExploreMenu';

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      {/* <ExploreMenu category={category} setCategory={setCategory} /> */}
    </div>
  )
}
  
  export default Home;
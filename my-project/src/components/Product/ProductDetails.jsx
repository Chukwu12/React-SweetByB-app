import React from "react";
import Product from '../components/Product/ProductDetails'; // Adjust according to the relative path
import Image1 from '../../assets/images/cupcake-img.jpg'
import Image2 from '../../assets/images/cheesecake-img.jpg'
import Image3 from '../../assets/images/pudding-img.jpg'

function Section2() {
  return (
    <div className="w-full min-h-[50vh] mt-20 flex justify-center items-center overflow-hidden">
      <div className="flex justify-center gap-5 flex-wrap">
        <Product
          cardImage={Image1} 
          CardSubHeading={'100% Healthy & Affordable'} 
          cardTitle={'ORGANIC CITRUS FRUITS'} 
          cardTitleColor={'#5EA98B'} 
        />
        
        <Product 
          cardImage={Image2} 
          CardSubHeading={'Natural Raw Vegtables'} 
          cardTitle={'NEW GREENY VEGTABLES'} 
          cardTitleColor={'white'} 
        />

        <Product
          cardImage={Image3}  
          CardSubHeading={'Garden Fresh Fruits'} 
          cardTitle={'HEALTHY ORGANIC EATABLES'} 
          cardTitleColor={'#5EA98B'} 
        />
      </div>
    </div>
  );
}

export default Section2;

import ProductCard from "../productcard/ProductCard";
import React from "react";

const AllProductPanel = ({ title }) => {

  return (
    <div>
      <div className="mb-10 border-b-2">
        <h2 className="font-bold text-lg py-2">{title || "Products"}</h2>
      </div>
      <div className='flex gap-4 flex-wrap gap-y-8'>    
         <ProductCard />
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
      </div>
    </div>
  );
};

export default AllProductPanel;

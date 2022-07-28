import React from "react";
import Product from "../components/Product";

import products from "../data/products.json";

export default function Shop() {
  return (
    <div className='shop__container'>
      <div className='shop__page-title'>
        <h1>Shop</h1>
        <h4>
          TomCrew Ceramics is a London based studio focusing on hand crafted
          ceramic and functional objects.
        </h4>
      </div>
      <div className='shop__grid'>
        {products.map((product, index) => {
          return <Product key={product.id} index={index} {...product} />;
        })}
      </div>
    </div>
  );
}

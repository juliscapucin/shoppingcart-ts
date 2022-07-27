import React from "react";
import Product from "../components/Product";

import products from "../data/products.json";

export default function Shop() {
  return (
    <div className='shop__container'>
      <div className='shop__page-title'>
        <h1>Shop</h1>
      </div>
      <div className='shop__grid'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
}

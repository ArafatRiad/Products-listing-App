/* eslint-disable react/prop-types */

import React from "react";
import Product from "./Product";

function Products({ products }) {
  const { id } = products;
  return (
    <div>
      <h2>Product List</h2>
      <div className="products">
        {products.map((product) => (
          <Product key={id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Products;

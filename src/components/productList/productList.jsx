import React from 'react';
import Product from '../product/product';

const ProductList =()=>{
  return(
    <article className="product-list d-flex justify-content-between">
      <Product />
      <Product />
      <Product />
      <Product />
    </article>
  );
}

export default ProductList;

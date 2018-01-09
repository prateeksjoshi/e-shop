import React from 'react';
import Product from '../product/product';
import _ from 'lodash';

class ProductList extends React.Component{
  constructor(props){
    super(props);
    //console.log('product props-0-0-0-0-',props);
  }
  render(){
    const prod = this.props.propProducts.map((product,index)=>(
      <Product key={product.id} propProductName={product.productName} propProductImage={product.productImageUrl}
               propProductPrice={product.productPrice} propProductIsSelected={product.isSelected} />
    ))
    return(
      <article className="product-list d-flex justify-content-between">
        {prod}
      </article>
    );
  }
}

export default ProductList;

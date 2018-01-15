import React from 'react';
import Product from '../product/product';

export default class ProductList extends React.Component {
  render(){
    return (
      <article className="product-list d-flex justify-flex-start flex-wrap">
        {this.props.propProducts.map(function(product,index){
          return (<Product key={product.id} propProduct={product} {...product} />);
        })}
      </article>
    );
  }
}

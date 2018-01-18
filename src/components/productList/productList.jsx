import React from 'react';
import PropTypes from 'prop-types';

import Product from '../product/product';

export default class ProductList extends React.Component {

  static propTypes = {
    propProducts : PropTypes.arrayOf(PropTypes.object).isRequired
  }

  static defaultProps = {
    propProducts: []
  }

  render(){
    return (
      <article className="product-list d-flex justify-content-start flex-wrap">
        {this.props.propProducts.map(function(product,index){
          return (<Product key={product.id} propProduct={product} {...product} />);
        })}
      </article>
    );
  }
}

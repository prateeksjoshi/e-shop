import React from 'react';
import PropTypes from 'prop-types';

import PageTitleBar from '../../components/pageTitleBar/pageTitleBar';
import ProductList from '../../components/productList/productList';

class Cart extends React.Component {

  render(){
    console.log('selected prod=',this.props.products);
      return (
        <article className="page">
          <PageTitleBar propTitle="Selected Products" />
          <ProductList propProducts={this.props.products} />
        </article>
      );
  }
}

Cart.propTypes = {
  propTitle : PropTypes.string.isRequired,
  propProducts : PropTypes.arrayOf(PropTypes.object).isRequired
}

Cart.defaultProps = {
  propTitle : "Selected Products",
  propProducts : []
}

export default Cart;

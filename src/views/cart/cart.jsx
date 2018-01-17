import React from 'react';
import PropTypes from 'prop-types';

import PageTitleBar from '../../components/pageTitleBar/pageTitleBar';
import ProductList from '../../components/productList/productList';

class Cart extends React.Component {

  propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render(){
      return (
        <article className="page">
          <PageTitleBar propTitle="Selected Products" />
          <ProductList propProducts={this.props.products} />
        </article>
      );
  }
}

export default Cart;

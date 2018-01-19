import React from 'react';
import PropTypes from 'prop-types';

import PageTitleBar from '../../components/pageTitleBar/pageTitleBar';
import ProductList from '../../components/productList/productList';

class Home extends React.Component {

  render(){
      return (
        <article className="page">
          <PageTitleBar propsSortBy propTitle="Products" />
          <ProductList propProducts={this.props.products} />
        </article>
      );
  }
}


export default Home;

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PageTitleBar from '../../components/pageTitleBar/pageTitleBar';
import ProductList from '../../components/productList/productList';


class Home extends React.Component {

  static propTypes={
    products : PropTypes.array.isRequired
  };

  static defaultProps = {
    products : []
  };

  render(){
      return (
        <article className="page">
          <PageTitleBar propsSortBy propTitle="Products" />
          <ProductList propProducts={this.props.products} />
        </article>
      );
  }
}


function mapStateToProps(state){
    return {
        products: state.products.productList,
        hasErrored: state.products.hasError,
        isLoading: state.products.isLoading
    };
}

export default connect(mapStateToProps,null)(Home);

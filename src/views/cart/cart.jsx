import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PageTitleBar from '../../components/pageTitleBar/pageTitleBar';
import ProductList from '../../components/productList/productList';

import _ from "lodash";

class Cart extends React.Component {

    constructor(props){
        super(props);
        this.state={
            selectedProducts:[]
        }
    }

  static propTypes={
    products : PropTypes.array.isRequired
  };

  static defaultProps = {
    products : []
  };

  render(){
      const selectedProducts = _.filter(this.props.products,'isSelected');
      return (
        <article className="page">
          <PageTitleBar propTitle="Selected Products" />
          <ProductList propProducts={selectedProducts} />
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

export default connect(mapStateToProps,null)(Cart);

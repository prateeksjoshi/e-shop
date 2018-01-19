import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import api from './api/api';
import {productsFetchData} from './actions/productAction';

import './App.css';
import EshopContainer from './components/eshopContainer/eshopContainer';
import Header from './components/header/header';
import Home from './views/home/home';
import Cart from './views/cart/cart';


class App extends Component {

  static propTypes = {
    products:PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedProducts : PropTypes.arrayOf(PropTypes.object).isRequired
  }

  static defaultProps = {
    selectedProducts: []
  }

  componentDidMount(){
    this.props.fetchData(api);
  }
  render() {

    const selectedProducts = _.filter(this.props.products,'isSelected');
    return (
      <EshopContainer>
        <Header cartCount={selectedProducts.length}></Header>
        <Switch>
          <Route exact path="/" render={()=><Home products={this.props.products} />} />
          <Route exact path="/cart" render={()=><Cart products={selectedProducts} />} />
        </Switch>
      </EshopContainer>
    );
  }
}

function mapStateToProps(state){
  console.log('this state',state);
  return {
    products: state.products.productList,
    hasErrored: state.productsHasError,
    isLoading: state.productsIsLoading
  };
}

function mapDispatchToProps(dispatch){
  return{
    fetchData:(url)=>dispatch(productsFetchData(url))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));

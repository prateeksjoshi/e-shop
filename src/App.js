import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {productsFetchData} from './actions/productAction';
import './App.css';
import EshopContainer from './components/eshopContainer/eshopContainer';
import Header from './components/header/header';
import Home from './views/home/home';
import Cart from './views/cart/cart';
import _ from 'lodash';

class App extends Component {
  componentDidMount(){
    this.props.fetchData("http://localhost:3004/products");
  }
  render() {
    const selectedProducts = _.filter(this.props.products,'isSelected');
    console.log('sel,',selectedProducts);
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
  return {
    products: state.products,
    hasErrored: state.hasError,
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch){
  return{
    fetchData:(url)=>dispatch(productsFetchData(url))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));

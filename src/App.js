import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import EshopContainer from './components/eshopContainer/eshopContainer';
import Header from './components/header/header';
import Home from './views/home/home';
import Cart from './views/cart/cart';

class App extends Component {
  render() {
    return (
      <EshopContainer>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </EshopContainer>
    );
  }
}

export default App;

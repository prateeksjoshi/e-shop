import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import EshopContainer from './components/eshopContainer/eshopContainer';
import Header from './components/header/header';
import Home from './views/home/home';

class App extends Component {
  render() {
    return (
      <EshopContainer>
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </EshopContainer>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


import './App.css';
import EshopContainer from './components/eshopContainer/eshopContainer';
import Header from './components/header/header';
import Home from './views/home/home';
import Cart from './views/cart/cart';

class App extends Component {

    static propTypes={
        products : PropTypes.array.isRequired,
        hasErrored : PropTypes.bool,
        isLoading : PropTypes.bool
    };

    static defaultProps = {
        products : [],
        hasErrored:false,
        isLoading:false
    };

    render() {

        return (
            <EshopContainer>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />} />
                    <Route exact path="/cart" component={Cart} />} />
                </Switch>
            </EshopContainer>
        );
    }
}



export default withRouter(App);

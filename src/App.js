import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import api from './api/api';
import {productsFetchData} from './actions/productAction';

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

    componentDidMount(){
        this.props.fetchData(api);
    }
    render() {

        return (
            <EshopContainer>
                <Header/>
                {/*<Header cartCount={selectedProducts.length}></Header>*/}
                {/*<Switch>*/}
                {/*<Route exact path="/" render={()=><Home products={this.props.products} />} />*/}
                {/*<Route exact path="/cart" render={()=><Cart products={selectedProducts} />} />*/}
                {/*</Switch>*/}
                <Switch>
                    <Route exact path="/" component={Home} />} />
                    <Route exact path="/cart" component={Cart} />} />
                </Switch>
            </EshopContainer>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchData:(url)=>dispatch(productsFetchData(url))
    }
}

export default withRouter(connect(null,mapDispatchToProps)(App));

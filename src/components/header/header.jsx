import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';
import Button from '../button/button';

import {search} from '../../actions/productAction';
import _ from "lodash";

class Header extends React.Component{

    static propTypes={
        cartCount : PropTypes.number,
        propIsBadge : PropTypes.bool,
        propBadgeValue : PropTypes.number
    };

    static defaultProps = {
        cartCount : 0,
        propIsBadge : true,
        propBadgeValue:0
    };

    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.state={
            selectedProducts:0
        }
    }
    search(e){
        this.props.search(e.target.value);
    }

    render(){
        const selectedProducts = _.filter(this.props.products,'isSelected');
        return(
            <header className="navbar navbar-dark bg-dark app-header">
                <Link to='/'><span className="app-logo">e-Shop</span></Link>
                <div className="d-flex">
                    <input type="text" onChange={this.search} className="form-control" placeholder="Search Product" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <Link to='/cart'><Button propIsBadge propClassName="btn btn-link" propValue="Cart" propBadgeValue={selectedProducts.length} /></Link>
                </div>

            </header>
        );
    }
}

function mapStateToProps(state){
    return {
        products: state.products.productList
    };
}
function mapDispatchToProps(dispatch){
    return {
        search:(val)=>dispatch(search(val))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

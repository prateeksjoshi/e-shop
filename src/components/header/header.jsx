import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';
import Button from '../button/button';

import {search} from '../../actions/productAction';

class Header extends React.Component{

  static propTypes={
    cartCount : PropTypes.number,
    propIsBadge : PropTypes.bool
  }

  static defaultProps = {
    cartCount : 0,
    propIsBadge : true
  }

  constructor(props){
    super(props);
    this.search = this.search.bind(this);
  }
  search(e){
    this.props.search(e.target.value);
  }
  render(){
    return(
      <header className="navbar navbar-dark bg-dark app-header">
        <Link to='/'><span className="app-logo">e-Shop</span></Link>
        <div className="d-flex">
          <input type="text" onChange={this.search} className="form-control" placeholder="Search Product" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <Link to='/cart'><Button propIsBadge propClassName="btn btn-link" propValue="Cart" propBadgeValue={this.props.cartCount} /></Link>
        </div>

      </header>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    search:(val)=>dispatch(search(val))
  }
}

export default connect(null,mapDispatchToProps)(Header);

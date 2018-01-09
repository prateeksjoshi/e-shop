import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '../button/button';
import './style.css';

const Header =(props)=>{
  let selectedProductsCnt:number = 0;
  props.products.map(function(prod){
    if(prod.isSelected){
      selectedProductsCnt +=1;
    }
  })
  console.log('cart count = ',selectedProductsCnt);
  return(
    <header className="navbar navbar-dark bg-dark app-header">
      <Link to='/'><span className="app-logo">e-Shop</span></Link>
      <Link to='/cart'><Button propClassName="btn btn-link" propValue="Cart" propBadgeValue={selectedProductsCnt} /></Link>
    </header>
  );
}

function mapStateToProps(state){
  console.log('my header props = >>>>>> ',state);
  return{
    products:state.products
  }
}

export default connect(mapStateToProps)(Header);

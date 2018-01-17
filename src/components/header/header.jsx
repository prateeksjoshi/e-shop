import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button';
import './style.css';

const Header =(props)=>{
  return(
    <header className="navbar navbar-dark bg-dark app-header">
      <Link to='/'><span className="app-logo">e-Shop</span></Link>
      <Link to='/cart'><Button propClassName="btn btn-link" propValue="Cart" propBadgeValue={props.cartCount} /></Link>
    </header>
  );
}

export default Header;

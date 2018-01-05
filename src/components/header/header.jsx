import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button';
import './style.css';

const Header =()=>{
  return(
    <header className="navbar navbar-dark bg-dark app-header">
      <h2 className="app-title">e-Shop</h2>
      <Link to='/cart'><Button propClassName="btn btn-link" propValue="Cart" propBadgeValue={22} /></Link>
    </header>
  );
}

export default Header;

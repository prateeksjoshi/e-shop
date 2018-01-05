import React from 'react';
import Badge from '../badge/badge';
import Button from '../button/button';
import './style.css';

class Product extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className="card">
        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleaUq5f3Z_Y8v46-9bzGT1nkl5Yia-ovrA-fAUm60G2HRMckrdg" alt="Card image cap" />
        <div className="card-body d-flex">
          <h6>Product Title</h6>
          <Badge propBadgeValue="Rs. 200" propClassName="badge badge-pill badge-secondary" />
          <Button propClassName="btn btn-dark btn-sm" propValue="Add to Cart" />
        </div>
      </div>
    );
  }
}

export default Product;

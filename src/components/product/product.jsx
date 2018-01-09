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
        <img className="card-img-top" src={this.props.propProductImage} alt="Card image cap" />
        <div className="card-body d-flex">
          <h6>{this.props.propProductName}</h6>
          <Badge propBadgeValue={"Rs. "+this.props.propProductPrice} propClassName="badge badge-pill badge-secondary" />
          <Button propClassName="btn btn-dark btn-sm" propValue={this.props.propProductIsSelected ? "Remove":"Add to Cart"} />
        </div>
      </div>
    );
  }
}

export default Product;

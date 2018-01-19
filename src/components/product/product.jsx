import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';
import Badge from '../badge/badge';
import Button from '../button/button';

import {updateCart} from '../../actions/productAction';

class Product extends React.Component {

  static propTypes={
    propProduct : PropTypes.object.isRequired,
    productImage : PropTypes.string,
    productName : PropTypes.string,
    productPrice : PropTypes.number,
    id : PropTypes.number,
    isSelected : PropTypes.bool
  }

  static defaultProps = {
    propProduct : {},
    productImage : "",
    productName : "",
    productPrice : 0,
    id : 0,
    isSelected : false
  }

  render(){
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.productImage} alt="" />
        <div className="card-body">
          <h6 className="product-name text-center">{this.props.productName}</h6>
          <div className="d-flex justify-content-center">
              <Badge propBadgeValue={"Rs. "+this.props.productPrice} propClassName="badge badge-pill badge-secondary" />
              <Button propClassName={"btn btn-dark btn-sm "+(this.props.isSelected ? 'bg-red':null)} onClick={()=>this.props.updateCart(this.props.id,this.props.propProduct)} propValue={this.props.isSelected ? "Remove":"Add to Cart"} />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    updateCart:(id,product)=>dispatch(updateCart(id,product))
  }
}

export default connect(null,mapDispatchToProps)(Product);

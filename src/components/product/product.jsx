import React from 'react';
import Badge from '../badge/badge';
import Button from '../button/button';
import './style.css';
import {connect} from 'react-redux';
import {updateCart} from '../../actions/productAction';

class Product extends React.Component {
  render(){
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.productImage} alt="" />
        <div className="card-body d-flex align-items-center">
          <h6 className="product-name">{this.props.productName}</h6>
          <Badge propBadgeValue={"Rs. "+this.props.productPrice} propClassName="badge badge-pill badge-secondary" />
          <Button propClassName="btn btn-dark btn-sm" onClick={()=>this.props.updateCart(this.props.id,this.props.propProduct)} propValue={this.props.isSelected ? "Remove":"Add to Cart"} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    products: state.products,
    hasErrored: state.hasError,
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch){
  return{
    updateCart:(id,product)=>dispatch(updateCart(id,product))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);

import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';
import Badge from '../badge/badge';
import Button from '../button/button';

import {updateCart} from '../../actions/productAction';

const Product = (props)=>(
    <div className="card">
        <img className="card-img-top" src={props.productImage} alt="" />
        <div className="card-body">
            <h6 className="product-name text-center">{props.productName}</h6>
            <div className="d-flex justify-content-center">
                <Badge propBadgeValue={"Rs. "+props.productPrice} propClassName="badge badge-pill badge-secondary" />
                <Button propIsBadge={false} propClassName={"btn btn-dark btn-sm "+(props.isSelected ? 'bg-red':null)} onClick={()=>props.updateCart(props.propProduct.id,props.propProduct)} propValue={props.isSelected ? "Remove":"Add to Cart"} />
            </div>
        </div>
    </div>
);

Product.propTypes={
    propProduct : PropTypes.object.isRequired,
    productImage : PropTypes.string,
    productName : PropTypes.string,
    productPrice : PropTypes.number,
    id : PropTypes.number,
    isSelected : PropTypes.bool
};
Product.defaultProps = {
    propProduct : {},
    productImage : "",
    productName : "",
    productPrice : 0,
    id : 0,
    isSelected : false
};

function mapDispatchToProps(dispatch){
  return{
    updateCart:(id,product)=>{
        dispatch(updateCart(id,product))
    }
  }
}

export default connect(null,mapDispatchToProps)(Product);

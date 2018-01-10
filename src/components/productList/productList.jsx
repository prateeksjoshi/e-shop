import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as productAction from '../../actions/productAction.js';
import Product from '../product/product';
import _ from 'lodash';

class ProductList extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.actions.getProducts();
  }

  render(){
    
    let prod=[];
    if(this.props.propsUrl==="cart"){
      prod=_.filter(this.props.products,{isSelected:true});
    }

    const products = _.map(this.props.propsUrl==="cart" ? prod : this.props.products,(p)=>{
      return (
        <Product key={p.id} propProductName={p.productName} propProductImage={p.productImageUrl}
                 propProductPrice={p.productPrice} propProductIsSelected={p.isSelected} />
      );
    })

    return (
      <article className="product-list d-flex justify-content-between">
        {products}
      </article>
    );
  }
}

function mapStateToProps(state){
  return{
    products:state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(Object.assign({},productAction), dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);

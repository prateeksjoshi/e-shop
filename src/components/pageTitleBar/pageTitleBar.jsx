import React from 'react';
import Select from '../select/select';
import './style.css';
import _ from 'lodash';
import {connect} from 'react-redux';
import {sortProducts} from '../../actions/productAction';

class PageTitleBar extends React.Component{
  constructor(props){
    super(props);
    this.handleSortBy = this.handleSortBy.bind(this);
  }
  handleSortBy(e){
    const sortedProducts = _.sortBy(this.props.products,e.target.value);
    this.props.sortProducts(sortedProducts);
  }
  render(){
    return (
      <header className="d-flex justify-content-between page-title-bar">
        <h3>{this.props.propTitle}</h3>
        {this.props.propsSortBy && <Select propOnChange={this.handleSortBy} />}
      </header>
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
    sortProducts:(products)=>dispatch(sortProducts(products))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PageTitleBar);

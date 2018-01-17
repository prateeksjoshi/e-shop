import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {connect} from 'react-redux';

import './style.css';
import Select from '../select/select';
import {sortProducts} from '../../actions/productAction';

class PageTitleBar extends React.Component{

  propTypes = {
    products : PropTypes.arrayOf(PropTypes.object).isRequired,
    propTitle : PropTypes.string,
    propsSortBy : PropTypes.bool,
    sortProducts : PropTypes.func
  }

  defaultProps = {
    propTitle: "Products",
    propsSortBy: true
  }

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

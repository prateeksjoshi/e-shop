import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {connect} from 'react-redux';

import './style.css';
import Select from '../select/select';
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
        {this.props.propsSortBy &&
          <div className="d-flex sort-by justify-content-between align-items-center">
            <label>Sort By: </label>
            <Select propOnChange={this.handleSortBy} />
          </div>
        }
      </header>
    );
  }

}


function mapDispatchToProps(dispatch){
  return{
    sortProducts:(products)=>dispatch(sortProducts(products))
  }
}

export default connect(null,mapDispatchToProps)(PageTitleBar);

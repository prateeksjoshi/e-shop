import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Page from '../../components/page/page';
import * as productAction from '../../actions/productAction.js';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.actions.getProducts();
  }

  render(){
      return (
        <Page propPageTitle="Products" propProducts={this.props.products}  />
      );
  }
}

function mapStateToProps(state){
  //console.log('my init props = >>>>>> ',state);
  return{
    products:state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(Object.assign({},productAction), dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

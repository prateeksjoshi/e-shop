import React,{Component} from 'react';
import {connect} from 'react-redux';

import api from '../../api/api';

import {productsFetchData} from "../../actions/productAction";

class EshopContainer extends React.Component{
    componentDidMount(){
        this.props.fetchData(api);
    }
    render(){
        return(
            <section>
                {this.props.children}
            </section>
        );
    }
};



function mapDispatchToProps(dispatch){
    return{
        fetchData:(url)=>dispatch(productsFetchData(url))
    }
}

export default connect(null,mapDispatchToProps)(EshopContainer);

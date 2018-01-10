import React from 'react';
import PageTitleBar from '../../components/pageTitleBar/pageTitleBar';
import ProductList from '../../components/productList/productList';

class Cart extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
      return (
        <article className="page">
          <PageTitleBar propTitle="Selected Products" />
          <ProductList propsUrl="cart" />
        </article>
      );
  }
}

export default Cart;

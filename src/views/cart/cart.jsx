import React from 'react';
import PageTitleBar from '../../components/pageTitleBar/pageTitleBar';
import ProductList from '../../components/productList/productList';

class Cart extends React.Component {

  render(){
    console.log('selected prod=',this.props.products);
      return (
        <article className="page">
          <PageTitleBar propTitle="Selected Products" />
          <ProductList propsUrl="home" propProducts={this.props.products} />
        </article>
      );
  }
}

export default Cart;

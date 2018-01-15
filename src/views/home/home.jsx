import React from 'react';
import PageTitleBar from '../../components/pageTitleBar/pageTitleBar';
import ProductList from '../../components/productList/productList';

class Home extends React.Component {
  render(){
      console.log('prod=',this.props.products);
      return (
        <article className="page">
          <PageTitleBar propsSortBy propTitle="Products" />
          <ProductList propsUrl="home" propProducts={this.props.products} />
        </article>
      );
  }
}

export default Home;

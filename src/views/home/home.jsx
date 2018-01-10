import React from 'react';
import PageTitleBar from '../../components/pageTitleBar/pageTitleBar';
import ProductList from '../../components/productList/productList';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
      return (
        <article className="page">
          <PageTitleBar propTitle="Products" />
          <ProductList propsUrl="home"/>
        </article>
      );
  }
}

export default Home;

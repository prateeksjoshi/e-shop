import React from 'react';
import PageTitleBar from '../pageTitleBar/pageTitleBar';
import ProductList from '../productList/productList';
import './style.css';

const Page = (props)=>{
  console.log('page props-.....',props.propProducts);
  return (
    <article className="page">
      <PageTitleBar propTitle={props.propPageTitle} />
      <ProductList propProducts={props.propProducts}/>
    </article>
  );
}


export default Page;

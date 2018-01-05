import React from 'react';
import PageTitleBar from '../pageTitleBar/pageTitleBar';
import ProductList from '../productList/productList';
import './style.css';

const Page = (props)=>{
  return (
    <article className="page">
      <PageTitleBar propTitle={props.propPageTitle} />
      <ProductList />
    </article>
  );
}


export default Page;

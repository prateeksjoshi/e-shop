import React from 'react';
import PageTitleBar from '../pageTitleBar/pageTitleBar';
import ProductList from '../productList/productList';

const Page = ()=>{
  return (
    <article>
      <PageTitleBar />
      <ProductList />
    </article>
  );
}


export default Page;

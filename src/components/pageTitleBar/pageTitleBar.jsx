import React from 'react';
import Select from '../select/select';
import './style.css';

const PageTitleBar = (props)=>{
  return (
    <header className="d-flex justify-content-between page-title-bar">
      <h3>{props.propTitle}</h3>
      <Select />
    </header>
  );
}


export default PageTitleBar;

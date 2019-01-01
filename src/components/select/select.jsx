import React from 'react';

const Select = (props)=>(
    <select className="form-control" value={props.propValue} onChange={props.propOnChange}>
        <option value="productName">Name</option>
        <option value="productPrice">Price</option>
    </select>
);

export default Select;

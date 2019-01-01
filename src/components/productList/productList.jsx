import React from 'react';
import PropTypes from 'prop-types';

import Product from '../product/product';

const ProductList = (props)=>(
    <article className="product-list d-flex justify-content-start flex-wrap">
        {props.propProducts.map(function(product){
            return (<Product key={product.id} propProduct={product} {...product} onSelect />);
        })}
    </article>
);

ProductList.propTypes={
    propProducts : PropTypes.array.isRequired
};

ProductList.defaultProps = {
    propProducts : []
};

export default ProductList;

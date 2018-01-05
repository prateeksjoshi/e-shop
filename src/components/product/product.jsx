import React from 'react';
import Badge from '../badge/badge';
import Button from '../button/button';

class Product extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>
        image
        <div>
          <h6>Product title</h6>
          <Badge />
          <Button />
        </div>
      </div>
    );
  }
}

export default Product;

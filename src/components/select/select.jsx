import React from 'react';

class Select extends React.Component {
  render(){
    return(
      <select className="form-control" value={this.props.propValue} onChange={this.props.propOnChange}>
        <option value="productName">Name</option>
        <option value="productPrice">Price</option>
      </select>
    );
  }
}


export default Select;

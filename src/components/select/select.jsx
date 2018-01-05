import React from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <select>
        <option>value1</option>
        <option>value2</option>
        <option>value3</option>
        <option>value4</option>
      </select>
    );
  }
}


export default Select;

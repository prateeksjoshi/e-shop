import React from 'react';
import Badge from '../badge/badge';

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <button>
        <Badge />
      </button>
    );
  }
}

export default Button;

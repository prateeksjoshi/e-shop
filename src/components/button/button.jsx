import React from 'react';
import Badge from '../badge/badge';
import './style.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    console.log('props = ',this.props);
  }
  render(){
    return(
      <button className={this.props.propClassName}>
        {this.props.propValue}
        {this.props.propBadgeValue && (
          <Badge propClassName="badge badge-light" propBadgeValue={this.props.propBadgeValue} />
        )}

      </button>
    );
  }
}

export default Button;

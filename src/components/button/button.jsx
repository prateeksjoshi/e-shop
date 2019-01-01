import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Badge from '../badge/badge';

class Button extends React.Component {

  static propTypes={
    propClassName : PropTypes.string,
    propValue : PropTypes.string,
    propBadgeValue : PropTypes.number,
    propIsBadge : PropTypes.bool
  }

  static defaultProps = {
    propClassName : "",
    propValue : "",
    propIsBadge : false

  }

  render(){
    return(
      <button onClick={this.props.onClick} className={this.props.propClassName}>
        {this.props.propValue}&nbsp;
        {this.props.propIsBadge && (
          <Badge propClassName="badge badge-light" propBadgeValue={this.props.propBadgeValue} />
        )}

      </button>
    );
  }
}

export default Button;

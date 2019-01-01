import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Badge from '../badge/badge';

const Button = (props)=>(
  <button onClick={props.onClick} className={props.propClassName}>
      {props.propValue}&nbsp;
      {props.propIsBadge && (
          <Badge propClassName="badge badge-light" propBadgeValue={props.propBadgeValue} />
      )}
  </button>
);


Button.propTypes={
    propClassName : PropTypes.string,
    propValue : PropTypes.string,
    propBadgeValue : PropTypes.number,
    propIsBadge : PropTypes.bool
};

Button.defaultProps = {
    propClassName : "",
    propValue : "",
    propIsBadge : false,

};

export default Button;

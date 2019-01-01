import React from 'react';
import PropTypes from 'prop-types';

const Badge = (props)=>(
    <span className={props.propClassName}>{props.propBadgeValue}</span>
);

Badge.propTypes = {
  propClassName : PropTypes.string,
  propBadgeValue : PropTypes.number
};

Badge.defaultProps = {
  propClassName : "",
  propBadgeValue : 0
};

export default Badge;

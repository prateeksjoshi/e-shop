import React from 'react';

const Badge = (props)=>{
  return (
    <span className={props.propClassName}>{props.propBadgeValue}</span>
  );
}

export default Badge;

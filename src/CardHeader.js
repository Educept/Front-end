import React from 'react';
import PropTypes from 'prop-types';

import './CardHeader.css'

const CardHeader = props => {
  return (
    <div className="card-header">
      <div className="header medium-margin">{props.headerText}</div>
    </div>
  );
};

export default CardHeader;
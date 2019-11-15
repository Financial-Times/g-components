/**
 * @file
 * Basic card component
 */

import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Card = ({ children, className, ...props }) => (
  <div className={classNames(className, 'g-card')}>{children}</div>
);

export default Card;

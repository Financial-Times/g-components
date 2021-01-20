/**
 * @file
 * A basic card that adds a title and styles to the Card component
 */

import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import './styles.scss';

const BasicCard = ({ children, title }) => (
  <Card className="g-basic-card">
    {title && <h3 className="g-basic-card__title">{title}</h3>}
    {children}
  </Card>
);

BasicCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default BasicCard;

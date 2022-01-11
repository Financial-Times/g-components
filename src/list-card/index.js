/**
 * @file
 * A card that puts an array of items in a list
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Card from '../card';

const ListCard = ({ title, children }) => (
  <Card className="g-list-card">
    {title && <h3 className="g-list-card__title">{title}</h3>}
    <ul className="g-list-card__list">
      {Children.map(children, child => {
        return <li className="g-list-card__list-item">{child}</li>;
      })}
    </ul>
  </Card>
);

ListCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
};

ListCard.defaultProps = {
  title: false,
  children: [],
};

export default ListCard;

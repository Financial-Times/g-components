/**
 * @file
 * An o-grid container component
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const GridContainer = ({ bleed, snappy, children, className, ...props }) => (
  <div
    className={classnames(
      className,
      'o-grid-container',
      bleed && ' o-grid-container--bleed',
      snappy && 'o-grid-container--snappy',
    )}
    {...props}
  >
    {children}
  </div>
);

GridContainer.displayName = 'GGridContainer';

GridContainer.propTypes = {
  bleed: PropTypes.bool,
  snappy: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

GridContainer.defaultProps = {
  bleed: false,
  snappy: false,
};

export default GridContainer;

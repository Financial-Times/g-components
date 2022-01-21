/**
 * @file
 * An o-grid container component
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';

export const GridContainer = ({ bleed, snappy, children, className, ...props }) => (
  <div
    className={classnames(
      className,
      styles['o-grid-container'],
      bleed && styles['o-grid-container--bleed'],
      snappy && styles['o-grid-container--snappy'],
    )}
    {...props}
  >
    {children}
  </div>
);

GridContainer.displayName = 'GGridContainer';

GridContainer.propTypes = {
  className: PropTypes.string,
  bleed: PropTypes.bool,
  snappy: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

GridContainer.defaultProps = {
  className: null,
  bleed: false,
  snappy: false,
};

export default GridContainer;

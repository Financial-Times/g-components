/**
 * @file
 * Basic loading throbber
 */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export const Loading = ({ size, theme }) => (
  <div
    className={classNames(
      styles['g-loading'],
      styles[`g-loading--${size}`],
      styles[`g-loading--${theme}`],
    )}
  />
);

Loading.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['light', 'dark']),
};

Loading.defaultProps = {
  size: 'small',
  theme: 'dark',
};

Loading.displayName = 'GLoading';
export default Loading;

/**
 * @file
 * Basic card component
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Icon = ({ className, iconName, iconColor, width, height }) => {
  const colorHex = iconColor.replace('#', '');
  return (
    <i
      className={classNames(className, styles['g-icon'])}
      style={{
        backgroundImage: `url('https://www.ft.com/__origami/service/image/v2/images/raw/fticon-v1:${iconName}?source=o-icons&tint=%23${colorHex},%23${colorHex}&format=svg')`,
        width,
        height,
      }}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Icon.defaultProps = {
  className: null,
  iconColor: '#000000',
  width: 20,
  height: 20,
};

export default Icon;

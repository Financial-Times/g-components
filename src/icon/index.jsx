/**
 * @file
 * Basic card component
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Icon = ({
  className = '',
  iconName,
  accessibleLabel = '',
  iconColor = '#000000',
  width = 20,
  height = 20,
}) => {
  const colorHex = iconColor.replace('#', '');
  return (
    <React.Fragment>
      {accessibleLabel && <span className="visually-hidden">{accessibleLabel}</span>}
      <i
        className={classNames(className, 'g-icon')}
        style={{
          backgroundImage: `url('https://www.ft.com/__origami/service/image/v2/images/raw/fticon-v1:${iconName}?source=o-icons&tint=%23${colorHex},%23${colorHex}&format=svg')`,
          width,
          height,
        }}
      />
    </React.Fragment>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  accessibleLabel: PropTypes.string,
};

export default Icon;

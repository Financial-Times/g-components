/**
 * @file
 * An o-grid child component
 */

import React from 'react';
import PropTypes from 'prop-types';

export const GridChild = ({ children, colspan, ...props }) => {
  switch (typeof colspan) {
    case 'number':
    case 'string':
      return (
        <div data-o-grid-colspan={colspan} {...props}>
          {children}
        </div>
      );
    default:
      break;
  }
  return (
    <div
      data-o-grid-colspan={Object.entries(colspan)
        .map(([breakpoint, size]) => `${breakpoint.toUpperCase()}${size}`)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

GridChild.displayName = 'GGridChild';

GridChild.propTypes = {
  children: PropTypes.node.isRequired,
  colspan: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      s: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      l: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      S: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      M: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      L: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      XL: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ]),
};

GridChild.defaultProps = {
  colspan: 'full-width',
};

export default GridChild;

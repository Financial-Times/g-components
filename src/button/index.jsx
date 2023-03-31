/**
 * @file
 * Origami o-buttons wrapped
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validIcons from './icons';
import './styles.scss';

/* eslint-disable react/button-has-type */
export const Button = ({
  className,
  selected,
  type,
  buttonType,
  children,
  big,
  icon,
  theme,
  disabled,
  label,
  inverse,
  ...props
}) => (
  <button
    className={classnames(
      className,
      'o-buttons',
      `o-buttons--${type}`,
      theme && `o-buttons--${theme}`,
      big && 'o-buttons--big',
      icon && `o-buttons-icon o-buttons-icon--${icon}`,
      icon && label && 'o-buttons-icon--icon-only',
      inverse && 'o-buttons--inverse',
    )}
    type={buttonType}
    aria-pressed={selected}
    disabled={disabled}
    {...props}
  >
    {label && icon ? <span className="o-buttons-icon__label">{label}</span> : children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['mono', 'b2c', '']),
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  big: PropTypes.bool,
  buttonType: PropTypes.oneOf(['button', 'submit', 'reset']),
  type: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  icon: PropTypes.oneOf([...validIcons, '']),
  label: PropTypes.string,
  inverse: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  theme: '',
  selected: undefined,
  disabled: false,
  big: false,
  icon: '',
  type: 'secondary',
  buttonType: 'button',
  label: '',
  inverse: false,
  children: 'Click me',
};

export const ButtonGroup = ({ children, className }) => (
  <div className={classnames(className, 'o-buttons-group')}>{children}</div>
);

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  className: PropTypes.string,
};

ButtonGroup.defaultProps = {
  className: undefined,
};

export const ButtonPaginationGroup = ({ children, className }) => (
  <div className={classnames(className, 'o-buttons-pagination')}>{children}</div>
);

ButtonPaginationGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  className: PropTypes.string,
};

ButtonPaginationGroup.defaultProps = {
  className: undefined,
};

export default Button;

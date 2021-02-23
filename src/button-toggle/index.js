import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../button';
import './styles.scss';

const ButtonToggle = ({
  title,
  items,
  selectedItem,
  onToggle,
  width,
  equalButtons,
  big,
  inverse,
  theme,
}) => (
  <fieldset
    className={classnames(
      'button-toggle',
      equalButtons && 'button-toggle--equal',
      inverse && 'button-toggle--inverse',
    )}
  >
    {title && <legend className="button-toggle__title">{title}</legend>}
    <div style={{ width }}>
      {items.map(({ value, display }) => (
        <Button
          key={value}
          id={value}
          value={value}
          name={title}
          big={big}
          inverse={inverse}
          theme={!inverse ? theme : null}
          selected={value === selectedItem}
          onClick={() => onToggle(value)}
        >
          {display}
        </Button>
      ))}
    </div>
  </fieldset>
);

ButtonToggle.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      display: PropTypes.oneOfType([PropTypes.node]),
    }),
  ).isRequired,
  selectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onToggle: PropTypes.func.isRequired,
  width: PropTypes.string,
  equalButtons: PropTypes.bool,
  big: PropTypes.bool,
  inverse: PropTypes.bool,
  theme: PropTypes.string,
};

ButtonToggle.defaultProps = {
  equalButtons: true,
  big: true,
  inverse: false,
  theme: 'mono',
};

export default ButtonToggle;

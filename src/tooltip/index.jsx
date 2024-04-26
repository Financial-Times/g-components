import React, { useRef, useEffect } from 'react';
import OTooltip from '@financial-times/o-tooltip';
import PropTypes from 'prop-types';
import './styles.scss';

const Tooltip = ({
  children,
  content,
  showOnHover = true,
  showOnClick = false,
  position = 'below',
}) => {
  const ref = useRef(null);
  const tooltip = useRef(null);

  useEffect(() => {
    tooltip.current = new OTooltip(ref.current, {
      target: crypto.randomUUID(),
      content,
      showOnHover,
      showOnClick,
      position,
    });
  }, []);

  // Add open/close functions to children
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && typeof child.type === 'function') {
      return React.cloneElement(child, {
        closeTooltip: () => tooltip.current.close(),
        openTooltip: () => tooltip.current.show(),
      });
    }
    return child;
  });

  return <span ref={ref}>{childrenWithProps}</span>;
};

Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string.isRequired,
  showOnHover: PropTypes.bool,
  position: PropTypes.oneOf(['above', 'below', 'left', 'right']),
};

export default Tooltip;

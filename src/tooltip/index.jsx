import React, { useRef, useEffect } from 'react';
import OTooltip from '@financial-times/o-tooltip';
import PropTypes from 'prop-types';
import './styles.scss';

const Tooltip = ({ children, content, showOnHover = true, position = 'below' }) => {
  const ref = useRef(null);
  const tooltip = useRef(null);

  useEffect(() => {
    tooltip.current = new OTooltip(ref.current, {
      target: crypto.randomUUID(),
      content,
      showOnHover,
      position,
    });
  }, []);

  return <span ref={ref}>{children}</span>;
};

Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string.isRequired,
  showOnHover: PropTypes.bool,
  position: PropTypes.oneOf(['above', 'below', 'left', 'right']),
};

export default Tooltip;

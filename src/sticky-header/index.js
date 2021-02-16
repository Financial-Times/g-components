import React, { useState, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Context } from '../article-layout';
import useScrollPosition from './useScrollPosition';
import './styles.scss';

const StickyHeader = ({ children, containerRef, height }) => {
  const [isSticky, setSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const ref = useRef(null);

  useScrollPosition(({ prevPos, currPos }) => {
    if (ref.current && containerRef.current) {
      const { top: stickyTop, height: stickyHeight } = ref.current.getBoundingClientRect();
      const { bottom: containerBottom } = containerRef.current.getBoundingClientRect();
      const isSticky = stickyTop <= 0 && containerBottom - stickyHeight >= 0;

      setSticky(isSticky);
      setScrollDirection(currPos.y > prevPos.y ? 'up' : 'down');
    }
  }, []);

  const { b } = useContext(Context);
  const breakpoint = (b && b.breakpoint) || 'default';
  const breakpointHeight = height[breakpoint];

  const wrapperClasses = classNames(
    'sticky-header-wrapper',
    isSticky && 'sticky-header-wrapper--fixed',
  );

  return (
    <div
      className={wrapperClasses}
      ref={ref}
      style={{ minHeight: isSticky && breakpointHeight ? breakpointHeight : 'auto' }}
    >
      {typeof children === 'function' ? children({ isSticky, scrollDirection }) : children}
    </div>
  );
};

StickyHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.node]).isRequired,
  height: PropTypes.object.isRequired,
  containerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

StickyHeader.defaultProps = {
  height: { default: 0, s: 0, m: 0, l: 0, xl: 0 },
};

export default StickyHeader;

import React, { useState, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Context } from '../article-layout';
import useScrollPosition from './useScrollPosition';
import './styles.scss';

const StickyHeader = ({ children, containerRef, height, alwaysShowShadowWhenSticky }) => {
  const [isSticky, setSticky] = useState(false);
  const [stickyShadow, setStickyShadow] = useState(false);
  const ref = useRef(null);

  useScrollPosition(({ prevPos, currPos }) => {
    if (ref.current && containerRef.current) {
      const { top: stickyTop, height: stickyHeight } = ref.current.getBoundingClientRect();
      const { bottom: containerBottom } = containerRef.current.getBoundingClientRect();
      const isSticky = stickyTop <= 0 && containerBottom - stickyHeight >= 0;

      setSticky(isSticky);
      // Only show shadow when scrolling up
      if (isSticky) setStickyShadow(alwaysShowShadowWhenSticky || currPos.y > prevPos.y);
    }
  }, []);

  const { b } = useContext(Context);
  const breakpoint = (b && b.breakpoint) || 'default';
  const breakpointHeight = height[breakpoint];

  const wrapperClasses = classNames(
    'sticky-header-wrapper',
    isSticky && 'sticky-header-wrapper--fixed',
    // Always show shadow on mobile
    stickyShadow && isSticky && 'sticky-header-wrapper--shadow',
  );

  return (
    <div
      className={wrapperClasses}
      ref={ref}
      style={{ minHeight: isSticky && breakpointHeight ? breakpointHeight : 'auto' }}
    >
      {children}
    </div>
  );
};

StickyHeader.propTypes = {
  height: PropTypes.object.isRequired,
  alwaysShowShadow: PropTypes.bool,
  containerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

StickyHeader.defaultProps = {
  alwaysShowShadow: false,
  height: { default: 0, s: 0, m: 0, l: 0, xl: 0 },
};

export default StickyHeader;

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Context } from '../article-layout';
import useScrollPosition from './useScrollPosition';
import './styles.scss';

const StickyHeader = ({ children, containerRef }) => {
  const [isSticky, setSticky] = useState(false);
  const [heightOfChildren, setHeightOfChildren] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const ref = useRef(null);
  const childrenRef = useRef(null);

  useScrollPosition(({ prevPos, currPos }) => {
    if (ref.current && containerRef.current) {
      const { top: stickyTop, height: stickyHeight } = ref.current.getBoundingClientRect();
      const { bottom: containerBottom } = containerRef.current.getBoundingClientRect();
      const isSticky = stickyTop <= 0 && containerBottom - stickyHeight >= 0;

      if (childrenRef.current) {
        const { height } = childrenRef.current.getBoundingClientRect();
        setHeightOfChildren(height);
      } else {
        setHeightOfChildren(stickyHeight);
      }

      setSticky(isSticky);
      setScrollDirection(currPos.y > prevPos.y ? 'up' : 'down');
    }
  }, []);

  const wrapperClasses = classNames('sticky-header', isSticky && 'sticky-header--fixed');

  const childrenIsFunction = typeof children === 'function';

  return (
    <div
      className={wrapperClasses}
      ref={ref}
      style={{ minHeight: isSticky ? heightOfChildren : 'auto' }}
    >
      {childrenIsFunction ? children({ isSticky, scrollDirection, ref: childrenRef }) : children}
    </div>
  );
};

StickyHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.node]).isRequired,
  containerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default StickyHeader;

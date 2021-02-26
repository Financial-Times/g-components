import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useScrollPosition from './useScrollPosition';
import './styles.scss';

const StickyHeader = ({ children, containerRef, offset }) => {
  const [isSticky, setSticky] = useState(false);
  const [heightOfChildren, setHeightOfChildren] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const stickyRef = useRef(null);
  const childrenRef = useRef(null);

  useScrollPosition(({ prevPos, currPos }) => {
    if (stickyRef.current && childrenRef.current) {
      const { top: stickyTop, height: stickyHeight } = stickyRef.current.getBoundingClientRect();
      const { height: heightOfChildren } = childrenRef.current.getBoundingClientRect();

      let isSticky;
      if (containerRef?.current) {
        const { bottom: containerBottom } = containerRef.current.getBoundingClientRect();
        isSticky = stickyTop <= offset && containerBottom - stickyHeight - offset >= 0;
      } else {
        isSticky = stickyTop <= offset;
      }

      setHeightOfChildren(heightOfChildren);
      setSticky(isSticky);
      setScrollDirection(currPos.y > prevPos.y ? 'up' : 'down');
    }
  }, []);

  const stickyHeaderClasses = classNames('sticky-header', isSticky && 'sticky-header--fixed');

  const childrenIsFunction = typeof children === 'function';

  return (
    <header
      className={stickyHeaderClasses}
      ref={stickyRef}
      style={{ minHeight: isSticky ? heightOfChildren : 'auto' }}
    >
      <div className="sticky-header__children-wrapper" ref={childrenRef} style={{ top: offset }}>
        {childrenIsFunction ? children({ isSticky, scrollDirection }) : children}
      </div>
    </header>
  );
};

StickyHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.node]).isRequired,
  containerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  offset: PropTypes.number,
};

StickyHeader.defaultProps = {
  offset: 0,
};

export default StickyHeader;

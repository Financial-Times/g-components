import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';

const RefPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
]);

export const NavigationHeaderMobileDropdownButton = ({
  currentText,
  onClick,
  isOpen,
  buttonRef,
}) => (
  <button
    ref={buttonRef}
    className={classNames(
      styles['navigation-header__dropdown-button'],
      styles[`navigation-header__dropdown-button--${isOpen ? 'open' : 'closed'}`],
    )}
    onClick={onClick}
    aria-haspopup="true"
    aria-expanded={isOpen}
    aria-controls="dropwdown-menu"
  >
    {currentText}
  </button>
);

NavigationHeaderMobileDropdownButton.propTypes = {
  currentText: PropTypes.string.isRequired,
  currentPage: PropTypes.string,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
  buttonRef: RefPropType,
};

NavigationHeaderMobileDropdownButton.defaultProps = {
  onClick: () => {},
  isOpen: false,
};

export const NavigationHeaderMobileDropdown = ({
  links,
  currentPage,
  openLinksInNewTab,
  closeDropdown,
  buttonRef,
}) => {
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      // If clicking outside dropdown or button, close dropdown
      if (
        !(dropdownRef.current.contains(event.target) || buttonRef.current.contains(event.target))
      ) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [closeDropdown, buttonRef]);

  return (
    <ul
      className={styles['navigation-header__dropdown']}
      role="menu"
      id="dropwdown-menu"
      ref={dropdownRef}
    >
      {links.map(({ text, url }) => (
        <li role="none">
          <a
            key={url}
            className={styles['navigation-header__dropdown-link']}
            href={currentPage !== url ? url : '#'}
            target={openLinksInNewTab ? '_blank' : null}
            aria-current={currentPage === url ? 'page' : null}
            role="menuitem"
            onClick={closeDropdown}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};

NavigationHeaderMobileDropdown.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  openLinksInNewTab: PropTypes.bool,
  currentPage: PropTypes.string,
  closeDropdown: PropTypes.func,
  buttonRef: RefPropType,
};

NavigationHeaderMobileDropdown.defaultProps = {
  links: [],
  openLinksInNewTab: false,
  closeDropdown: () => {},
};

import React, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../article-layout';
import { NavigationHeaderMobileDropdown, NavigationHeaderMobileDropdownButton } from './dropdown';
import styles from './styles.module.scss';

const NavigationHeader = ({
  title,
  links,
  currentPage,
  openLinksInNewTab,
  useDropdown: useDropdownOverride,
}) => {
  const buttonRef = useRef();
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const { breakpoint: b } = useContext(Context);
  const breakpoint = ((b && b.breakpoint) || 'default').toLowerCase();
  const useDropdown =
    useDropdownOverride !== undefined ? useDropdownOverride : breakpoint === 'default';

  const { text: currentText } = links.find(({ url }) => url === currentPage) || links[0];

  return (
    <nav className={styles['navigation-header']} role="navigation" aria-label="Navigation menu">
      {title && <div className={styles['navigation-header__title']}>{title}</div>}
      {useDropdown ? (
        <NavigationHeaderMobileDropdownButton
          currentText={currentText}
          currentPage={currentPage}
          onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
          isOpen={dropdownIsOpen}
          buttonRef={buttonRef}
        />
      ) : (
        <ul className={styles['navigation-header__list']}>
          {links.map(({ text, url }) => (
            <li key={url} className={styles['navigation-header__item']}>
              <a
                className={styles['navigation-header__link']}
                href={currentPage !== url ? url : '#'}
                target={openLinksInNewTab ? '_blank' : null}
                aria-current={currentPage === url ? 'page' : null}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      )}
      {dropdownIsOpen && (
        <NavigationHeaderMobileDropdown
          links={links}
          currentPage={currentPage}
          openLinksInNewWindow={openLinksInNewTab}
          closeDropdown={() => setDropdownIsOpen(false)}
          buttonRef={buttonRef}
        />
      )}
    </nav>
  );
};

NavigationHeader.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  openLinksInNewTab: PropTypes.bool,
  currentPage: PropTypes.string,
  useDropdown: PropTypes.bool,
};

NavigationHeader.defaultProps = {
  openLinksInNewTab: false,
  links: [],
};

export default NavigationHeader;

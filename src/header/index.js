/**
 * @file
 * Header component
 */

import React, { useEffect, useRef } from 'react';
import './styles.scss';
import { flagsPropType } from '../shared/proptypes';
import { useOrigami } from '../shared/hooks';

const Header = ({ flags, ...props }) => {
  const ref = useRef();
  const oHeaderRef = useOrigami('o-header', ref);

  const { dark } = flags;

  const headerClasses = ['o-header', 'o-header--simple', dark && 'o-header--transparent']
    .filter((i) => i)
    .join(' ');

  return (
    <header ref={ref} className={headerClasses} data-o-component="o-header" data-o-header--no-js="">
      <div className="o-header__row o-header__top">
        <div className="o-header__container">
          <div className="o-header__top-wrapper">
            <div className="o-header__top-column o-header__top-column--center">
              <a
                className="o-header__top-logo"
                href="https://www.ft.com/"
                title="Go to Financial Times homepage"
              >
                <span className="o-header__visually-hidden">Financial Times</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.displayName = 'GHeader';

Header.propTypes = {
  flags: flagsPropType,
};

Header.defaultProps = {
  flags: {
    dark: false,
  },
};

export default Header;

/**
 * @file
 * Header component
 */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import OHeader from '@financial-times/o-header/main';
import './styles.scss';
import { flagsPropType } from '../shared/proptypes';

const Header = ({ flags, isVideoTopper, ...props }) => {
  const ref = useRef();

  const { dark } = flags;

  const headerClasses = [
    'o-header',
    'o-header--simple',
    dark && 'o-header--transparent',
    isVideoTopper && 'o-header--video',
  ]
    .filter((i) => i)
    .join(' ');

  useEffect(() => {
    (async () => {
      try {
        new OHeader(ref.current);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

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
  isVideoTopper: PropTypes.bool,
};

Header.defaultProps = {
  flags: {
    dark: false,
  },
  isVideoTopper: false,
};

export default Header;

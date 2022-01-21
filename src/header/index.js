/**
 * @file
 * Header component
 */

import React, { useEffect, useRef } from 'react';
import OHeader from '@financial-times/o-header';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { flagsPropType } from '../shared/proptypes';

const Header = ({ flags, ...props }) => {
  const ref = useRef();

  const { dark } = flags;

  const headerClasses = [
    styles['o-header'],
    styles['o-header--simple'],
    dark && styles['o-header--transparent'],
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
      <div className={classNames(styles['o-header__row'], styles['o-header__top'])}>
        <div className={styles['o-header__container']}>
          <div className={styles['o-header__top-wrapper']}>
            <div
              className={classNames(
                styles['o-header__top-column'],
                styles['o-header__top-column--center'],
              )}
            >
              <a
                className={styles['o-header__top-logo']}
                href="https://www.ft.com/"
                title="Go to Financial Times homepage"
              >
                <span className={styles['o-header__visually-hidden']}>Financial Times</span>
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

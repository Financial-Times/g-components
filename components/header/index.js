/**
 * @file
 * Header component
 */

import React, { PureComponent } from 'react';
import OHeader from 'o-header/main.js';
import './styles.scss';
import { flagsPropType } from '../../shared/proptypes';

class Header extends PureComponent {
  ref = React.createRef();

  static displayName = 'GHeader';

  async componentDidMount() {
    new OHeader(this.ref.current); // eslint-disable-line no-new
  }

  render() {
    const {
      props: {
        flags: { dark },
      },
    } = this;

    const headerClasses = ['o-header', 'o-header--simple', dark && 'o-header--transparent']
      .filter(i => i)
      .join(' ');

    return (
      <header
        ref={this.ref}
        className={headerClasses}
        data-o-component="o-header"
        data-o-header--no-js=""
      >
        <div className="o-header__row o-header__top">
          <div className="o-header__container">
            <div className="o-header__top-wrapper">
              <div className="o-header__top-column o-header__top-column--center">
                <a
                  className="o-header__top-logo"
                  href="http://www.ft.com/"
                  title="Go to Financial Times homepage"
                >
                  <span className="o-header__visually-hidden">
Financial Times
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

Header.propTypes = {
  flags: flagsPropType,
};

Header.defaultProps = {
  flags: {
    dark: false,
  },
};

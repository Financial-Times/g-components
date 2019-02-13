/**
 * @file
 * Main page layout view
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import OAds from 'o-ads/main.js';
import { strftime } from '../../shared/helpers';
import { flagsPropType, StringBoolPropType } from '../../shared/proptypes';
import Header from '../header';
import Analytics from '../analytics';
import { TopAd } from '../ads';
import ArticleHead from '../article-head';
import OnwardJourney from '../onwardjourney';
import Comments from '../comments';
import Footer from '../footer';
import './styles.scss';

export const GridContainer = ({ bleed, children }) => (
  <div className={`o-grid-container${bleed ? ' o-grid-container--bleed' : ''}`}>
    {children}
  </div>
);

GridContainer.displayName = 'GGridContainer';

GridContainer.propTypes = {
  bleed: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

GridContainer.defaultProps = {
  bleed: false,
};

export const GridRow = ({ compact, children }) => (
  <div className={`o-grid-row ${compact ? ' o-grid-row--compact' : ''}`}>
    {children}
  </div>
);

GridRow.displayName = 'GGridRow';

GridRow.propTypes = {
  compact: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

GridRow.defaultProps = {
  compact: false,
};

export const GridChild = ({ children, span }) => (
  <div data-o-grid-colspan={span}>
    {children}
  </div>
);

GridChild.displayName = 'GGridChild';

GridChild.propTypes = {
  children: PropTypes.node.isRequired,
  span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GridChild.defaultProps = {
  span: '12 S11 Scenter M9 L8 XL7',
};

class Layout extends PureComponent {
  async componentDidMount() {
    try {
      const { flags } = this.props;
      if (flags.ads) {
        const { ads } = this.props;

        const initialised = await OAds.init({
          gpt: {
            network: 5887,
            site: ads.gptSite || 'ft.com',
            zone: ads.gptZone || 'unclassified',
          },
          dfp_targeting: ads.dfpTargeting,
        });

        const slots = Array.from(document.querySelectorAll('.o-ads, [data-o-ads-name]'));
        slots.forEach(initialised.slots.initSlot.bind(initialised.slots));
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
  }

  render() {
    const {
      flags = {}, children, defaultContainer, ...props
    } = this.props;

    const hasCustomChildren = React.Children.toArray(children).some(
      el => (el.className || '').includes('o-grid-container') || el.type === GridContainer,
    ) || !defaultContainer;
    return (
      <Fragment>
        {flags.analytics && <Analytics {...this.props} />}
        {flags.ads && <TopAd />}
        {flags.header && <Header key="header" {...{ ...props, flags }} />}
        <main key="main" role="main">
          <article className="article" itemScope itemType="http://schema.org/Article">
            <div className="article-head o-grid-container">
              <div className="o-grid-row">
                <header data-o-grid-colspan="12 S11 Scenter M9 L8 XL7">
                  <ArticleHead {...props} flags={flags} />
                </header>
              </div>
            </div>
            <div className="article-body o-typography-wrapper" itemProp="articleBody">
              {hasCustomChildren ? (
                children
              ) : (
                <GridContainer>
                  <GridRow>
                    <GridChild>
                      <div>
                        {children}
                      </div>
                    </GridChild>
                  </GridRow>
                </GridContainer>
              )}

              <footer
                className="o-typography-footer"
                itemProp="publisher"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <div className="o-grid-container">
                  <div className="o-grid-row">
                    <div data-o-grid-colspan="12 S11 Scenter M9 L8 XL7">
                      <small>
                        <a
                          href="http://www.ft.com/servicestools/help/copyright"
                          data-trackable="link-copyright"
                        >
                          Copyright
                        </a>
                        {' '}
                        <span itemProp="name">
The Financial Times
                        </span>
                        {' '}
Limited
                        {' '}
                        {strftime('%Y')(new Date())}
                        . All rights reserved. You may share using our article tools. Please
                        don&apos;t cut articles from FT.com and redistribute by email or post to the
                        web.
                      </small>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </article>
        </main>
        {flags.onwardjourney && <OnwardJourney key="oj" {...props} />}
        {flags.comments && <Comments key="comments" {...{ ...props, flags }} />}
        {flags.footer && <Footer key="footer" {...props} />}
      </Fragment>
    );
  }
}

Layout.displayName = 'GLayout';

Layout.propTypes = {
  id: PropTypes.string,
  ads: PropTypes.shape({
    gptSite: PropTypes.string.isRequired,
    gptZone: StringBoolPropType.isRequired,
    dfpTargeting: StringBoolPropType.isRequired,
  }),
  flags: flagsPropType.isRequired,
  children: PropTypes.node,
  defaultContainer: PropTypes.bool,
};

Layout.defaultProps = {
  id: '',
  ads: {
    gptSite: 'test.5887.origami', // Ad unit hierarchy makes ads more granular.
    gptZone: false, // Start with ft.com and /companies /markets /world as appropriate to your story
    dfpTargeting: false, // granular targeting is optional and will be specified by the ads team
  },
  children: null,
  defaultContainer: true,
};

export default Layout;

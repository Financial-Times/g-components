/**
 * @file
 * Main page layout view
 */

import React, { useState, useEffect, useRef, createContext } from 'react';
import PropTypes from 'prop-types';
import OAds from 'o-ads/main.js';
import {
  strftime,
  registerLayoutChangeEvents,
  unregisterLayoutChangeEvents,
} from '../../shared/helpers';
import { flagsPropType, StringBoolPropType } from '../../shared/proptypes';
import Header from '../header';
import Analytics from '../analytics';
import { TopAd } from '../ads';
import ArticleHead from '../article-head';
import OnwardJourney from '../onwardjourney';
import Comments from '../comments';
import Footer from '../footer';
import './styles.scss';

export const Context = createContext(null);

export const GridContainer = ({ bleed, children }) => (
  <div className={`o-grid-container${bleed ? ' o-grid-container--bleed' : ''}`}>{children}</div>
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
  <div className={`o-grid-row ${compact ? ' o-grid-row--compact' : ''}`}>{children}</div>
);

GridRow.displayName = 'GGridRow';

GridRow.propTypes = {
  compact: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

GridRow.defaultProps = {
  compact: false,
};

export const GridChild = ({ children, span }) => <div data-o-grid-colspan={span}>{children}</div>;

GridChild.displayName = 'GGridChild';

GridChild.propTypes = {
  children: PropTypes.node.isRequired,
  span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GridChild.defaultProps = {
  span: '12 S11 Scenter M9 L8 XL7',
};

const Layout = ({ flags, ads, children, defaultContainer, customArticleHead, ...props }) => {
  const [state, setState] = useState({
    breakpoint: 'default',
  });

  const listenersRef = useRef();

  const update = ({ detail }) => {
    setState({ breakpoint: detail });
  };

  useEffect(() => {
    // Async side-effects should be in an IIFE in useEffect; don't make the CB async!
    (async () => {
      try {
        window.addEventListener('o-grid.layoutChange', update);
        listenersRef.current = registerLayoutChangeEvents();
        if (flags.ads) {
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
        if (!global.STORYBOOK_ENV) console.error(e); // eslint-disable-line no-console
      }
    })();

    return () => {
      unregisterLayoutChangeEvents(listenersRef.current);
      window.removeEventListener('o-grid.layoutChange', update);
    };
  }, [ads.dfpTargeting, ads.gptSite, ads.gptZone, flags.ads]);

  const { breakpoint } = state;

  const hasCustomChildren =
    React.Children.toArray(children).some(
      el => (el.className || '').includes('o-grid-container') || el.type === GridContainer,
    ) || !defaultContainer;

  const articleHeadComponent = customArticleHead || <ArticleHead {...props} flags={flags} />;

  return (
    <Context.Provider
      value={{
        flags,
        ads,
        defaultContainer,
        customArticleHead,
        ...props,
      }}
    >
      {flags.analytics && <Analytics {...{ ...props, breakpoint }} />}
      {flags.ads && <TopAd />}
      {flags.header && <Header key="header" {...{ ...props, flags, breakpoint }} />}
      <main key="main" role="main">
        <article className="article" itemScope itemType="http://schema.org/Article">
          <div className="article-head o-grid-container">
            <div className="o-grid-row">
              <header data-o-grid-colspan="12 S11 Scenter M9 L8 XL7">{articleHeadComponent}</header>
            </div>
          </div>
          <div className="article-body o-typography-wrapper" itemProp="articleBody">
            {hasCustomChildren ? (
              React.Children.map(children, child =>
                React.cloneElement(
                  child,
                  typeof !child.type || child.type === 'string' ? {} : { ...props, breakpoint },
                ),
              )
            ) : (
              <GridContainer>
                <GridRow>
                  <GridChild>
                    <div>
                      {React.Children.map(children, child =>
                        React.cloneElement(
                          child,
                          !child.type || typeof child.type === 'string'
                            ? {}
                            : { ...props, breakpoint },
                        ),
                      )}
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
                      </a>{' '}
                      <span itemProp="name">The Financial Times</span> Limited{' '}
                      {strftime('%Y')(new Date())}. All rights reserved. You may share using our
                      article tools. Please don&apos;t cut articles from FT.com and redistribute by
                      email or post to the web.
                    </small>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </article>
      </main>
      {flags.onwardjourney && <OnwardJourney key="oj" {...{ ...props, breakpoint }} />}
      {flags.comments && <Comments key="comments" {...{ ...props, flags, breakpoint }} />}
      {flags.footer && <Footer key="footer" {...{ ...props, flags, breakpoint }} />}
    </Context.Provider>
  );
};

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
  customArticleHead: PropTypes.node,
  wrapArticleHead: PropTypes.bool,
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
  customArticleHead: null,
  wrapArticleHead: true,
};

export default Layout;

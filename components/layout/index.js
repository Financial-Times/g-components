/**
 * @file
 * Main page layout view
 */

import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { strftime } from '../../shared/helpers';
import { flagsPropType, StringBoolPropType } from '../../shared/proptypes';
import Header from '../header';
import Analytics from '../analytics';
import { TopAd } from '../ads';
import ArticleHead from '../article-head';
import OnwardJourney from '../onwardjourney';
import Comments from '../comments';
import Footer from '../footer';
import { GridChild, GridRow, GridContainer } from '../grid';
import './styles.scss';
import { useAds, useLayoutChangeEvents } from '../../shared/hooks';

export const Context = createContext({});

const Article = ({
  flags,
  ads,
  children,
  defaultContainer,
  customArticleHead,
  bodyColspan,
  headerColspan,
  ...props
}) => {
  const breakpoint = useLayoutChangeEvents();
  useAds(ads, flags.ads);

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
        breakpoint,
        ...props,
      }}
    >
      {flags.analytics && <Analytics {...{ ...props, flags, breakpoint }} />}
      {flags.ads && <TopAd />}
      {flags.header && <Header key="header" {...{ ...props, flags, breakpoint }} />}
      <main key="main" role="main">
        <article className="article" itemScope itemType="http://schema.org/Article">
          <GridContainer className="article-head">
            <GridRow>
              <GridChild colspan="12 S11 Scenter M9 L8 XL7">{articleHeadComponent}</GridChild>
            </GridRow>
          </GridContainer>
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
                  <GridChild colspan={bodyColspan}>
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
          </div>

          <footer
            className="o-typography-footer"
            itemProp="publisher"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <GridContainer>
              <GridRow>
                <GridChild colspan="12 S11 Scenter M9 L8 XL7">
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
                </GridChild>
              </GridRow>
            </GridContainer>
          </footer>
        </article>
      </main>
      {flags.onwardjourney && <OnwardJourney key="oj" {...{ ...props, breakpoint }} />}
      {flags.comments && <Comments key="comments" {...{ ...props, flags, breakpoint }} />}
      {flags.footer && <Footer key="footer" {...{ ...props, flags, breakpoint }} />}
    </Context.Provider>
  );
};

Article.displayName = 'GArticle';

Article.propTypes = {
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
  bodyColspan: PropTypes.string,
  headerColspan: PropTypes.string,
};

Article.defaultProps = {
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
  bodyColspan: '12 S11 Scenter M9 L8 XL7',
  headerColspan: '12 S11 Scenter M9 L8 XL7',
};

export default Article;

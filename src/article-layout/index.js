/**
 * @file
 * Article layout
 */

import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { flagsPropType, StringBoolPropType } from '../shared/proptypes';
import Header from '../header';
import Analytics from '../analytics';
import { TopAd } from '../ads';
import Epilogue from '../epilogue';
import OnwardJourney from '../onwardjourney';
import Comments from '../comments';
import Footer from '../footer';
import './styles.scss';
import { useAds, useLayoutChangeEvents } from '../shared/hooks';

export const Context = createContext({});

const ArticleLayout = ({
  flags,
  ads,
  children: [topper, ...body],
  ...props
}) => {
  const breakpoint = useLayoutChangeEvents();
  useAds(ads, flags.ads);

  return (
    <Context.Provider
      value={{
        flags,
        ads,
        breakpoint,
        ...props,
      }}
    >
      {flags.analytics && <Analytics {...{ ...props, flags, breakpoint }} />}
      {flags.ads && <TopAd />}
      {flags.header && <Header key="header" {...{ ...props, flags, breakpoint }} />}
      <main key="main" role="main">
        <article className="article" itemScope itemType="http://schema.org/Article">
          {topper}
          <div className="article-body o-editorial-typography-body" itemProp="articleBody">
            {body}
          </div>
          <Epilogue />
        </article>
      </main>
      {flags.onwardjourney && <OnwardJourney key="oj" {...{ ...props, breakpoint }} />}
      {flags.comments && <Comments key="comments" {...{ ...props, flags, breakpoint }} />}
      {flags.footer && <Footer key="footer" {...{ ...props, flags, breakpoint }} />}
    </Context.Provider>
  );
};

ArticleLayout.displayName = 'GArticleLayout';

ArticleLayout.propTypes = {
  flags: flagsPropType.isRequired,
  ads: PropTypes.exact({
    gptSite: PropTypes.string.isRequired,
    gptZone: StringBoolPropType.isRequired,
    targeting: StringBoolPropType.isRequired,
  }),
  children: PropTypes.node,
};

ArticleLayout.defaultProps = {
  ads: {
    gptSite: 'test.5887.origami', // Ad unit hierarchy makes ads more granular.
    gptZone: false, // Start with ft.com and /companies /markets /world as appropriate to your story
    targeting: false, // granular targeting is optional and will be specified by the ads team
  },
};

export default ArticleLayout;

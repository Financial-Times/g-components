/**
 * @file
 * Article layout
 */

import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { initSourcepointCmp, properties } from "@financial-times/cmp-client";
import { flagsPropType, StringBoolPropType } from '../shared/proptypes';
import Header from '../header';
import Analytics from '../analytics';
import { TopAd } from '../ads';
import OnwardJourney from '../onwardjourney';
import Comments from '../comments';
import Footer from '../footer';
import './styles.scss';
import { useAds, useLayoutChangeEvents } from '../shared/hooks';

export const Context = createContext({});

const ArticleLayout = ({ flags, ads, children, ...props }) => {
  useEffect(() => {
    if (flags.prod) {
      initSourcepointCmp({
        propertyConfig: properties.FT_DOTCOM_PROD,
      });
    }
  }, []);

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
      {children}
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
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

ArticleLayout.defaultProps = {
  ads: {
    gptSite: 'test.5887.origami', // Ad unit hierarchy makes ads more granular.
    gptZone: false, // Start with ft.com and /companies /markets /world as appropriate to your story
    targeting: false, // granular targeting is optional and will be specified by the ads team
  },
};

export default ArticleLayout;

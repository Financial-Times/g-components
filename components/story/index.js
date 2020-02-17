/**
 * @file
 * Story layout component
 *
 * Use without `<Layout>`, this replaces it.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { flagsPropType, StringBoolPropType } from '../../shared/proptypes';
import Header from '../header';
import Analytics from '../analytics';
import { TopAd } from '../ads';
import './styles.scss';
import { Context } from '../layout';
import { useAds, useLayoutChangeEvents } from '../../shared/hooks';

const Layout = ({
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
      <main key="main" role="main" />
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
  bodyColspan: PropTypes.string,
  headerColspan: PropTypes.string,
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
  bodyColspan: '12 S11 Scenter M9 L8 XL7',
  headerColspan: '12 S11 Scenter M9 L8 XL7',
};

export default Layout;

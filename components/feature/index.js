/**
 * @file
 * Story layout component
 *
 * Use without `<Layout>`, this replaces it.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { flagsPropType, StringBoolPropType } from '../../shared/proptypes';
import Header from '../header';
import Analytics from '../analytics';
import './styles.scss';
import { useAds, useLayoutChangeEvents, useKeyboardShortcuts } from '../../shared/hooks';
import { Context } from '../layout';
import Progress from '../progress';

export { Context } from '../layout';

const Feature = ({ flags, ads, children, ...props }) => {
  const breakpoint = useLayoutChangeEvents();
  useAds(ads, flags.ads);
  const [currentPage, setPage] = useState(0);
  const goForward = () => setPage(currentPage + 1);
  const goBack = () => setPage(currentPage - 1);

  useKeyboardShortcuts({
    37: goBack,
    39: goForward,
  });

  return (
    <Context.Provider
      value={{
        flags,
        ads,
        breakpoint,
        ...props,
      }}
    >
      <div className={classnames(flags.dark && 'dark', 'g-feature')}>
        {flags.analytics && <Analytics {...{ ...props, flags, breakpoint }} />}
        {flags.header && <Header key="header" {...{ ...props, flags, breakpoint }} />}

        <Progress value={0} steps={20} />
        <div className="g-feature__controls">
          <div
            tabIndex={0}
            aria-label="Go back"
            className="g-feature__controls__back"
            role="button"
            onClick={goBack}
          />
          <div
            tabIndex={0}
            aria-label="Go back"
            className="g-feature__controls__forward"
            role="button"
            onClick={goForward}
          />
        </div>
        <main className="g-feature__container" key="main" role="main">
          {children}
          {currentPage}
        </main>
      </div>
    </Context.Provider>
  );
};

Feature.displayName = 'GFeature';

Feature.propTypes = {
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

Feature.defaultProps = {
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

export default Feature;

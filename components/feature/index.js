/**
 * @file
 * Story layout component
 *
 * Use without `<Layout>`, this replaces it.
 */

import React, { useState, Children, useCallback, forwardRef } from 'react';
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

const Feature = forwardRef(
  (
    {
      flags,
      ads,
      children,
      background: BackgroundComponent,
      foreground: ForegroundComponent,
      ...props
    },
    ref,
  ) => {
    const breakpoint = useLayoutChangeEvents();
    useAds(ads, flags.ads);

    const [currentPage, goPage] = useState(0);
    const [allowBack, setAllowBack] = useState(true);
    const [allowForward, setAllowForward] = useState(true);
    const [navigationEnabled, setNavigationEnabled] = useState(true);
    const goForward = useCallback(
      () => allowForward && currentPage + 1 < Children.count(children) && goPage(currentPage + 1),
      [allowForward, children, currentPage],
    );
    const goBack = useCallback(() => currentPage > 0 && allowBack && goPage(currentPage - 1), [
      allowBack,
      currentPage,
    ]);

    // const keyboardHandlers = useKeyboardShortcuts({
    //   37: goBack,
    //   39: goForward,
    // });

    return (
      <Context.Provider
        value={{
          flags,
          ads,
          breakpoint,
          goBack,
          goForward,
          goPage,
          allowBack,
          allowForward,
          setAllowForward,
          setAllowBack,
          navigationEnabled,
          setNavigationEnabled,
          ...props,
        }}
      >
        <div className={classnames(flags.dark && 'dark', 'g-feature')}>
          {flags.analytics && <Analytics {...{ ...props, flags, breakpoint }} />}
          {flags.header && <Header key="header" {...{ ...props, flags, breakpoint }} />}
          <div ref={ref} className="g-feature__container">
            <Progress
              value={currentPage / Children.count(children)}
              steps={Children.count(children) - 1}
            />
            {/* Navigation */}
            {navigationEnabled && (
              <nav className="g-feature__controls">
                <div
                  tabIndex={currentPage > 0 ? 0 : -1}
                  aria-label="Go back"
                  className={classnames(
                    'g-feature__controls--back',
                    currentPage < 1 && 'g-feature__controls--disabled',
                  )}
                  role="button"
                  // onKeyDown={keyboardHandlers.goBack}
                  onClick={goBack}
                />
                <div
                  tabIndex={currentPage + 1 < Children.count(children) ? 0 : -1}
                  aria-label="Go forward"
                  className={classnames(
                    'g-feature__controls--forward',
                    currentPage + 1 === Children.count(children) && 'g-feature__controls--disabled',
                  )}
                  role="button"
                  // onKeyDown={keyboardHandlers.goForward}
                  onClick={goForward}
                />
              </nav>
            )}
            {/* The main bit */}
            <main key="main" role="main" className="g-feature__main">
              {BackgroundComponent && (
                <div className="g-feature__background" role="presentation">
                  <BackgroundComponent page={currentPage} />
                </div>
              )}
              <article className="g-feature__content">
                {Children.map(children, (d, i) => (i === currentPage ? d : null))}
              </article>
              {ForegroundComponent && (
                <div className="g-feature__foreground" role="presentation">
                  <ForegroundComponent page={currentPage} />
                </div>
              )}
            </main>
          </div>
        </div>
      </Context.Provider>
    );
  },
);

Feature.displayName = 'GFeature';

Feature.propTypes = {
  ads: PropTypes.shape({
    gptSite: PropTypes.string.isRequired,
    gptZone: StringBoolPropType.isRequired,
    dfpTargeting: StringBoolPropType.isRequired,
  }),
  flags: flagsPropType,
  children: PropTypes.node,
  background: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  foreground: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};

Feature.defaultProps = {
  ads: {
    gptSite: 'test.5887.origami', // Ad unit hierarchy makes ads more granular.
    gptZone: false, // Start with ft.com and /companies /markets /world as appropriate to your story
    dfpTargeting: false, // granular targeting is optional and will be specified by the ads team
  },
  flags: {
    dark: true,
  },
  children: null,
  background: undefined,
  foreground: undefined,
};

export default Feature;

/**
 * @file
 * Various ad sizes
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const Ad = ({
  name,
  targeting,
  background,
  reserve,
  showAdsLabel,
  defaultFormat,
  smallFormat,
  mediumFormat,
  largeFormat,
  extraFormat,
}) => {
  return (
    <div
      className={`o-ads o-ads--center o-ads--${
        background === 'slate' ? 'slate-' : ''
      }background o-ads--reserve-${reserve} ${showAdsLabel ? 'o-ads--label-left' : ''}`}
      data-o-ads-name={name}
      data-o-ads-targeting={targeting}
      data-o-ads-formats-default={defaultFormat}
      data-o-ads-formats-small={smallFormat}
      data-o-ads-formats-medium={mediumFormat}
      data-o-ads-formats-large={largeFormat}
      data-o-ads-formats-extra={extraFormat}
      aria-hidden="true"
    />
  );
};

Ad.displayName = 'GAd';

export const TopAd = () => (
  <Ad
    name="top-ad"
    targeting="pos=top;"
    reserve="90"
    defaultFormat={false}
    smallFormat={false}
    mediumFormat="Leaderboard,Responsive"
    largeFormat="SuperLeaderboard,Leaderboard,Responsive"
    extraFormat="Billboard,SuperLeaderboard,Leaderboard,Responsive"
  />
);

TopAd.displayName = 'GTopAd';

export const MiddleAd = () => (
  <Ad
    name="mid-ad"
    targeting="pos=mid;"
    reserve="250"
    showAdsLabel
    defaultFormat="Responsive"
    smallFormat="MediumRectangle,Responsive"
    mediumFormat="MediumRectangle,Responsive"
    largeFormat="MediumRectangle,Responsive"
    extraFormat="MediumRectangle,Responsive"
  />
);

MiddleAd.displayName = 'GMiddleAd';

Ad.propTypes = {
  name: PropTypes.string,
  targeting: PropTypes.string,
  background: PropTypes.oneOf(['default', 'slate']),
  reserve: PropTypes.oneOf(['90', '250']), // creates placeholder of height to prevent page from jumping when ad loads
  showAdsLabel: PropTypes.bool,
  defaultFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  smallFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  mediumFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  largeFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  extraFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

// defaults to top ad configuration
Ad.defaultProps = {
  name: 'top-ad',
  targeting: 'pos=top',
  background: 'default',
  reserve: '90',
  showAdsLabel: false,
  defaultFormat: false,
  smallFormat: false,
  mediumFormat: 'Leaderboard,Responsive',
  largeFormat: 'SuperLeaderboard,Leaderboard,Responsive',
  extraFormat: 'Billboard,SuperLeaderboard,Leaderboard,Responsive',
};

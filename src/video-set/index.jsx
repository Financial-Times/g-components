/**
 * @file
 * Responsive video set
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const VideoSet = ({ alt, sources }) => (
  <div className="g-videoset">
    {/* Large video */}
    <div className="g-videoset__large">
      <figure>
        <video alt={alt} controls poster={sources.large.poster}>
          <source src={sources.large.url} type={sources.large.type} />
          Your browser does not support the video tag.
        </video>
      </figure>
    </div>

    {/* Medium video */}
    <div className="g-videoset__medium">
      <figure>
        <video alt={alt} controls poster={sources.medium.poster}>
          <source src={sources.medium.url} type={sources.medium.type} />
          Your browser does not support the video tag.
        </video>
      </figure>
    </div>

    {/* Small video */}
    <div className="g-videoset__small">
      <figure>
        <video alt={alt} controls poster={sources.small.poster}>
          <source src={sources.small.url} type={sources.small.type} />
          Your browser does not support the video tag.
        </video>
      </figure>
    </div>
  </div>
);

const videoSetSourcePropTypes = PropTypes.shape({
  url: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video/mp4', 'video/webm']).isRequired,
});

VideoSet.propTypes = {
  alt: PropTypes.string.isRequired,
  sources: PropTypes.shape({
    small: videoSetSourcePropTypes.isRequired,
    medium: videoSetSourcePropTypes.isRequired,
    large: videoSetSourcePropTypes.isRequired,
  }).isRequired,
};

export default VideoSet;

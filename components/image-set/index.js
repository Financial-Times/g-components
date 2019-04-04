/**
 * @file
 * Responsive image set
 */

import React from 'react';
import PropTypes from 'prop-types';

const imageSet = ({ graphicsData }) => (
  <div className="g-imageset">
    <figure>
      <picture>
        {graphicsData.sources
          && graphicsData.sources.small && (
            <source
              media="screen and (max-width: 490px)"
              srcSet={`https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F${
                graphicsData.sources.small
              }?source=ig&amp;fit=scale-down&amp;quality=highest&amp;width=490`}
            />
        )}
        {graphicsData.sources
          && graphicsData.sources.large && (
            <source
              media="screen and (min-width: 980px)"
              srcSet={`https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F${
                graphicsData.sources.large
              }?source=ig&amp;fit=scale-down&amp;quality=highest&amp;width=1260`}
            />
        )}
        {graphicsData.sources
          && graphicsData.sources.medium && (
            <img
              src={`https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F${
                graphicsData.sources.medium
              }?source=ig&amp;fit=scale-down&amp;quality=highest&amp;width=700`}
              alt={graphicsData.alt}
            />
        )}
      </picture>
    </figure>
  </div>
);

imageSet.propTypes = {
  graphicsData: PropTypes.objectOf({
    alt: PropTypes.string,
    sources: PropTypes.objectOf({
      small: PropTypes.string,
      medium: PropTypes.string,
      large: PropTypes.string,
    }).isRequired,
  }),
};

imageSet.defaultProps = {
  graphicsData: {
    alt: '',
  },
};

export default imageSet;

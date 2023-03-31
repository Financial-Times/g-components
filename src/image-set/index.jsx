/**
 * @file
 * Responsive image set
 */

import React from 'react';
import PropTypes from 'prop-types';

function imageUUID(uuid, width) {
  return `https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F${uuid}?source=ig&amp;fit=scale-down&amp;quality=highest&amp;width=${width}`;
}

function imageURL(url, width) {
  return `https://www.ft.com/__origami/service/image/v2/images/raw/${url}?source=ig&amp;fit=scale-down&amp;quality=highest&amp;width=${width}`;
}

function getImageURL(imgString, width, skipImageService) {
  if (skipImageService) return imgString;
  if (imgString.startsWith('http')) return imageURL(imgString, width);
  return imageUUID(imgString, width);
}

const ImageSet = ({ alt, sources, skipImageService }) => (
  <div className="g-imageset">
    <figure>
      <picture>
        {sources && sources.small && (
          <source
            media="screen and (max-width: 490px)"
            srcSet={getImageURL(sources.small, 490, skipImageService)}
          />
        )}
        {sources && sources.large && (
          <source
            media="screen and (min-width: 980px)"
            srcSet={getImageURL(sources.large, 1260, skipImageService)}
          />
        )}
        {sources && sources.medium && (
          <img srcSet={getImageURL(sources.medium, 700, skipImageService)} alt={alt} />
        )}
      </picture>
    </figure>
  </div>
);

ImageSet.propTypes = {
  alt: PropTypes.string.isRequired,
  sources: PropTypes.shape({
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
  }).isRequired,
  skipImageService: PropTypes.bool,
};

ImageSet.defaultProps = {
  skipImageService: false,
};

export default ImageSet;

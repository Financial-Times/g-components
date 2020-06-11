/**
 * @file
 * Reusable proptypes
 */

import PropTypes from 'prop-types';

export const StringBoolPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.bool]);

export const flagsPropType = PropTypes.shape({
  prod: StringBoolPropType.isRequired,
  errorReporting: StringBoolPropType.isRequired,
  analytics: StringBoolPropType.isRequired,
  googleAnalytics: StringBoolPropType.isRequired,
  ads: StringBoolPropType.isRequired,
  mainImage: StringBoolPropType.isRequired,
  summary: StringBoolPropType.isRequired,
  bylines: StringBoolPropType.isRequired,
  onwardjourney: StringBoolPropType.isRequired,
  shareButtons: StringBoolPropType.isRequired,
  header: StringBoolPropType.isRequired,
  footer: StringBoolPropType.isRequired,
  comments: StringBoolPropType.isRequired,
  data: StringBoolPropType.isRequired,
  dark: StringBoolPropType.isRequired,
});

export const mainImagePropType = PropTypes.oneOfType([
  PropTypes.shape({
    uuid: PropTypes.string.isRequired,
  }),
  PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
]);

export const trackingPropType = PropTypes.shape({
  micrositeName: PropTypes.string,
  product: PropTypes.string,
});

export const topicPropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export const dataMetaPropType = PropTypes.shape({
  '@context': PropTypes.oneOf(['http://schema.org/']),
  '@type': PropTypes.oneOf(['Dataset']),
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  sameAs: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  creator: PropTypes.shape({
    '@type': PropTypes.oneOf(['Organization']),
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    contactPoint: PropTypes.shape({
      '@type': PropTypes.oneOf(['ContactPoint']),
      contactType: PropTypes.string,
      telephone: PropTypes.string,
      email: PropTypes.string,
    }),
  }).isRequired,
  includedInDataCatalog: PropTypes.shape({
    '@type': PropTypes.oneOf(['DataCatalog']),
    name: PropTypes.string.isRequired,
  }),
  distribution: PropTypes.arrayOf(
    PropTypes.shape({
      '@type': PropTypes.oneOf(['DataDownload']),
      encodingFormat: PropTypes.string.isRequired,
      contentUrl: PropTypes.string.isRequired,
    }),
  ),
  // Dates the dataset covers
  temporalCoverage: PropTypes.string.isRequired,
  // Where the dataset covers. See spec.
  spatialCoverage: PropTypes.shape({
    '@type': PropTypes.oneOf(['Place']),
    geo: PropTypes.shape({
      '@type': PropTypes.oneOf(['GeoShape']),
      box: PropTypes.string.isRequired,
    }),
  }),
});

export const bylinesPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
      location: PropTypes.string,
    }),
  )
]);

export default '';

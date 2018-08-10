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
  onwardjourney: StringBoolPropType.isRequired,
  shareButtons: StringBoolPropType.isRequired,
  header: StringBoolPropType.isRequired,
  footer: StringBoolPropType.isRequired,
  comments: StringBoolPropType.isRequired,
  data: StringBoolPropType.isRequired,
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
  '@context': 'http://schema.org/',
  '@type': 'Dataset',
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  sameAs: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  creator: PropTypes.shape({
    '@type': 'Organization',
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    contactPoint: PropTypes.shape({
      '@type': 'ContactPoint',
      contactType: PropTypes.string,
      telephone: PropTypes.string,
      email: PropTypes.string,
    }),
  }).isRequired,
  includedInDataCatalog: PropTypes.shape({
    '@type': 'DataCatalog',
    name: PropTypes.string.isRequired,
  }),
  distribution: PropTypes.arrayOf(
    PropTypes.shape({
      '@type': 'DataDownload',
      encodingFormat: PropTypes.string.isRequired,
      contentUrl: PropTypes.string.isRequired,
    }),
  ),
  // Dates the dataset covers
  temporalCoverage: PropTypes.string.isRequired,
  // Where the dataset covers. See spec.
  spatialCoverage: PropTypes.shape({
    '@type': 'Place',
    geo: PropTypes.shape({
      '@type': 'GeoShape',
      box: PropTypes.string.isRequired,
    }),
  }),
});

export default '';

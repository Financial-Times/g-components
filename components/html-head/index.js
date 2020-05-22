/**
 * @file
 * Main HTML metatags and such
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getMainImage } from '../../shared/helpers';
import {
  flagsPropType,
  mainImagePropType,
  trackingPropType,
  topicPropType,
  dataMetaPropType,
} from '../../shared/proptypes';

// Disables warning for dangerouslySetInnerHTML because we kiiiiinda need it here.
/* eslint-disable react/no-danger */

const HtmlHead = ({
  children,
  flags,
  dataMeta,
  description,
  facebookDescription,
  facebookHeadline,
  facebookImage,
  headline,
  wrapWithHeadTags,
  mainImage,
  socialDescription,
  socialHeadline,
  socialImage,
  stylesheets,
  summary,
  title,
  topic,
  tracking,
  twitterCard,
  twitterCreator,
  twitterDescription,
  twitterHeadline,
  twitterImage,
  url,
  polyfills,
}) => {
  const polyfillFeatures = polyfills.join(',');
  const mainImageUrl = getMainImage(mainImage);
  const Tag = wrapWithHeadTags ? 'head' : Fragment;

  return (
    <Tag>
      <meta charset="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* resource hints */}
      <link rel="preconnect" href="https://www.ft.com" />
      <link rel="preconnect" href="https://cdn.polyfill.io" />

      {stylesheets && stylesheets.map(stylesheet => <link rel="stylesheet" href={stylesheet} />)}

      <meta property="fb:app_id" content="429755910551755" />
      <link
        rel="icon"
        type="image/svg+xml"
        href="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&width=32&height=32"
      />
      <link
        rel="alternate icon"
        type="image/png"
        href="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&width=32&height=32&format=png"
        sizes="32x32"
      />
      <link
        rel="alternate icon"
        type="image/png"
        href="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&width=194&height=194&format=png"
        sizes="194x194"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&width=180&height=180&format=png"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="robots" content="index,follow" />
      <meta name="copyright" content="Financial Times" />
      <meta name="theme-color" content="#fff1e5" />
      {flags.data && dataMeta && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dataMeta),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            name: 'Financial Times',
            alternateName: 'FT.com',
            url: 'http://www.ft.com',
          }),
        }}
      />
      {topic.name && topic.url && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@id': topic.url,
                    name: topic.name,
                    image: getMainImage(mainImage),
                  },
                },
              ],
            }),
          }}
        />
      )}

      {flags.errorReporting && (
        <script
          type="application/json"
          data-o-errors-config
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              sentryEndpoint: 'https://ddbd80489ff549538250bbe37fa52bbd@sentry.io/71130',
            }),
          }}
        />
      )}

      {/* Add polyfill service */}
      <script src={`https://cdn.polyfill.io/v2/polyfill.min.js?features=${polyfillFeatures}`} />

      {/* Add CTM checks */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            cutsTheMustard = 'querySelector' in document && 'localStorage' in window &&
            'addEventListener' in window && typeof Function.prototype.bind !== 'undefined';
            if (cutsTheMustard) document.documentElement.className = document.documentElement.className.replace( /core/g, 'enhanced');
            `,
        }}
      />

      {flags.analytics && (
        <Fragment>
          <link rel="preconnect" href="https://spoor-api.ft.com" />
          <meta property="ft.track:is_live" content="true" />
          {tracking.product && <meta property="ft.track:product" content="tracking.product" />}
          {tracking.micrositeName && (
            <meta property="ft.track:microsite_name" content="tracking.micrositeName" />
          )}
        </Fragment>
      )}

      <title>{title || headline}</title>
      <meta name="twitter:title" content={twitterHeadline || socialHeadline || headline} />
      <meta property="og:title" content={facebookHeadline || socialHeadline || headline} />

      <meta name="description" content={description || summary} />
      <meta
        name="twitter:description"
        content={twitterDescription || socialDescription || description || summary}
      />
      <meta
        property="og:description"
        content={facebookDescription || socialDescription || description || summary}
      />

      <link rel="canonical" href={url} />
      <meta name="twitter:url" content={url} />
      <meta property="og:url" content={url} />
      {mainImageUrl && <link rel="image_src" href={mainImageUrl} />}
      {(twitterImage || socialImage || mainImageUrl) && (
        <meta name="twitter:image" content={twitterImage || socialImage || mainImageUrl} />
      )}
      {(facebookImage || socialImage || mainImageUrl) && (
        <meta property="og:image" content={facebookImage || socialImage || mainImageUrl} />
      )}

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@FinancialTimes" />

      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}

      {/* open graph tags for Financial Times, FT World News, Financial Times Italy,
          FT MBA and FT Health */}
      <meta property="fb:pages" content="8860325749" />
      <meta property="fb:pages" content="121862597867466" />
      <meta property="fb:pages" content="622419751233155" />
      <meta property="fb:pages" content="23117544640" />
      <meta property="fb:pages" content="293710391064899" />

      {/* Finally, render all children */}
      {children}
    </Tag>
  );
};

HtmlHead.displayName = 'GHtmlHead';

HtmlHead.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  dataMeta: dataMetaPropType,
  description: PropTypes.string,
  facebookDescription: PropTypes.string,
  facebookHeadline: PropTypes.string,
  facebookImage: PropTypes.string,
  flags: flagsPropType,
  headline: PropTypes.string.isRequired,
  wrapWithHeadTags: PropTypes.bool,
  mainImage: mainImagePropType,
  socialDescription: PropTypes.string,
  socialHeadline: PropTypes.string,
  socialImage: PropTypes.string,
  stylesheets: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
  title: PropTypes.string.isRequired,
  topic: topicPropType,
  tracking: trackingPropType,
  twitterCard: PropTypes.string,
  twitterCreator: PropTypes.string,
  twitterDescription: PropTypes.string,
  twitterHeadline: PropTypes.string,
  twitterImage: PropTypes.string,
  url: PropTypes.string.isRequired,
  polyfills: PropTypes.arrayOf(PropTypes.string),
};

const DEFAULTS = {
  headline: 'New Starter Kit Project',
  desc: 'A Starter Kit page',
};

HtmlHead.defaultProps = {
  children: null,
  dataMeta: undefined,
  mainImage: {
    uuid: 'f07ccec8-7ded-11e8-af48-190d103e32a4',
  },
  flags: {},
  topic: {},
  description: DEFAULTS.desc,
  wrapWithHeadTags: true,
  facebookDescription: '',
  facebookHeadline: '',
  facebookImage: '',
  twitterCard: '',
  twitterCreator: '',
  twitterDescription: '',
  twitterHeadline: '',
  twitterImage: '',
  socialDescription: '',
  socialHeadline: '',
  socialImage: '',
  stylesheets: [],
  summary: '',
  tracking: {
    product: 'IG',
  },
  polyfills: ['default', 'fetch'],
};

HtmlHead.displayName = 'GHtmlHead';

export default HtmlHead;

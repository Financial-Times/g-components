/**
 * @file
 * Analytics code
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import OTracking from 'o-tracking/main.js';
import { flagsPropType } from '../../shared/proptypes';
import { spoorTrackingPixel } from '../../shared/helpers';

// Disables warning for dangerouslySetInnerHTML because we kiiiiinda need it here.
/* eslint-disable react/no-danger */

class Analytics extends PureComponent {
  async componentDidMount() {
    if (!window.cutsTheMustard) return;
    const pageData = {
      content: { asset_type: 'interactive' },
    };

    const properties = [].reduce.call(
      document.querySelectorAll('head meta[property^="ft.track:"]') || [],
      (o, el) => {
        const attName = el.getAttribute('property').replace('ft.track:', '');
        o[attName] = el.getAttribute('content'); // eslint-disable-line no-param-reassign
        return o;
      },
      {},
    );

    const id = document.documentElement.getAttribute('data-content-id');

    if (id) {
      pageData.content.uuid = id;
    }

    if (properties.microsite_name) {
      pageData.microsite_name = properties.microsite_name;
    }

    // Setup
    OTracking.init({
      server: 'https://spoor-api.ft.com/px.gif',
      system: {
        is_live: typeof properties.is_live === 'string' ? properties.is_live.toLowerCase() : false,
      },
      context: { product: properties.product || 'IG' },
    });

    // Page
    OTracking.page(pageData);

    // Links
    OTracking.link.init();
  }

  render() {
    const { id, tracking, flags } = this.props;
    return (
      <Fragment>
        {/* Add fallback if browsers don't cut the mustard */}
        {spoorTrackingPixel({
          action: 'view',
          category: 'page',
          context: {
            content: {
              asset_type: 'interactive',
              uuid: id,
            },
            product: 'IG',
            microsite_name: tracking.micrositeName,
          },
          system: {
            is_live: flags.prod,
            apiKey: 'qUb9maKfKbtpRsdp0p2J7uWxRPGJEP',
            source: 'o-tracking-ns',
            version: '1.0.0',
          },
        })}
        {flags.googleAnalytics && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-35229645-1', 'auto');
          ga('require','displayfeatures');
          ga('send', 'pageview');
          `,
            }}
          />
        )}
        {/* Floodlight tracking pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          var spoorId = /spoor-id=([^;]+)/.exec(document.cookie)[1] || 'cj5y2utdx00003i5z6l6po8c1';
          var endpoint = 'https://4235225.fls.doubleclick.net/activityi;src=4235225;type=homeo886;cat=ft-ne000;u10=' + spoorId + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + Date.now() + ';num=1';
          var img = document.createElement('img');
          img.setAttribute('width', 1);
          img.setAttribute('height', 1);
          img.setAttribute('src', endpoint);
          img.style.position = 'absolute';
          document.body.insertBefore(img, document.body.firstElementChild);
          `,
          }}
        />
      </Fragment>
    );
  }
}

Analytics.displayName = 'GAnalytics';

Analytics.propTypes = {
  id: PropTypes.string.isRequired,
  flags: flagsPropType.isRequired,
  tracking: PropTypes.shape({
    micrositeName: PropTypes.string,
  }),
};

Analytics.defaultProps = {
  tracking: {
    micrositeName: undefined,
  },
};

export default Analytics;

/**
 * @file
 * Sharing buttons
 */

import React, { useEffect, useRef } from 'react';
import OShare from '@financial-times/o-share';
import PropTypes from 'prop-types';
import { flagsPropType } from '../shared/proptypes';
import './styles.scss';

const Share = ({
  headline,
  twitterHeadline,
  socialHeadline,
  twitterRelatedAccounts,
  url,
  tweetText,
  flags,
}) => {
  const ref = useRef();

  const { shareButtons, dark } = flags;

  useEffect(() => {
    (async () => {
      new OShare(ref.current); // eslint-disable-line no-new
    })();
  }, []);

  if (!shareButtons) return null;

  const containerClasses = ['container', dark && 'container--inverse'].filter(i => i).join(' ');
  const sharingClasses = ['o-share', dark && 'o-share--inverse'].filter(i => i).join(' ');
  const services = new Map([
    [
      'Twitter',
      `https://twitter.com/intent/tweet?url=${url}&amp;text=${tweetText ||
        twitterHeadline ||
        socialHeadline ||
        headline}${twitterRelatedAccounts &&
        `&amp;related=${twitterRelatedAccounts.join(',')}`}&amp;via=FinancialTimes`,
    ],
    ['Facebook', `http://www.facebook.com/sharer.php?u=${url}`],
    [
      'LinkedIn',
      `https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}&amp;source=Financial%20Times`,
    ],
    ['WhatsApp', `whatsapp://send?text=${socialHeadline || headline}%20-%20${url}`],
  ]);
  return (
    <div
      className="article__share article__share--top n-util-clearfix"
      data-trackable="share | top"
    >
      <div className={containerClasses}>
        <div ref={ref} data-o-component="o-share" className={sharingClasses}>
          <ul>
            {[...services.entries()].map(([serviceName, link]) => (
              <li className={`o-share__action o-share__action--${serviceName.toLowerCase()}`}>
                <a
                  className={`o-share__icon o-share__icon--${serviceName.toLowerCase()}`}
                  href={link}
                  rel="noopener"
                  data-trackable={serviceName.toLowerCase()}
                >
                  <span className="o-share__text">
                    Share on {serviceName}. Opens in a new window.
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Share.displayName = 'GShare';

Share.propTypes = {
  url: PropTypes.string.isRequired,
  socialHeadline: PropTypes.string,
  twitterHeadline: PropTypes.string,
  headline: PropTypes.string,
  twitterRelatedAccounts: PropTypes.arrayOf(PropTypes.string),
  tweetText: PropTypes.string,
  flags: flagsPropType,
};

Share.defaultProps = {
  tweetText: 'FT article: ',
  socialHeadline: '',
  twitterHeadline: '',
  headline: '',
  twitterRelatedAccounts: [],
  flags: {
    dark: false,
  },
};

Share.displayName = 'GShare';

export default Share;

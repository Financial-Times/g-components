/**
 * @file
 * Sharing buttons
 */

import React, { PureComponent } from 'react';
import OShare from 'o-share/main.js';
import PropTypes from 'prop-types';
import { flagsPropType } from '../../shared/proptypes';
import './styles.scss';

class Share extends PureComponent {
  ref = React.createRef();

  static displayName = 'GShare';

  async componentDidMount() {
    new OShare(this.ref.current); // eslint-disable-line no-new
  }

  render() {
    const {
      headline,
      twitterHeadline,
      socialHeadline,
      twitterRelatedAccounts,
      url,
      tweetText,
      flags: { dark },
    } = this.props;
    const containerClasses = ['container', dark && 'container--inverse'].filter(i => i).join(' ');
    const sharingClasses = ['o-share', dark && 'o-share--inverse'].filter(i => i).join(' ');
    return (
      <div
        className="article__share article__share--top n-util-clearfix"
        data-trackable="share | top"
      >
        <div className={containerClasses}>
          <div ref={this.ref} data-o-component="o-share" className={sharingClasses}>
            <ul>
              <li className="o-share__action o-share__action--twitter">
                <a
                  className="o-share__icon o-share__icon--twitter"
                  href={`https://twitter.com/intent/tweet?url=${url}&amp;text=${tweetText
                    || twitterHeadline
                    || socialHeadline
                    || headline}${twitterRelatedAccounts
                    && `&amp;related=${twitterRelatedAccounts.join(',')}`}&amp;via=FinancialTimes`}
                  rel="noopener"
                >
                  <span className="o-share__text">
Share on Twitter. Opens in a new window.
                  </span>
                </a>
              </li>
              <li className="o-share__action o-share__icon--facebook">
                <a href={`http://www.facebook.com/sharer.php?u=${url}`} rel="noopener">
                  <span className="o-share__text">
Share on Facebook. Opens in a new window.
                  </span>
                </a>
              </li>
              <li className="o-share__action o-share__icon--linkedin">
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}&amp;source=Financial%20Times`}
                  rel="noopener"
                >
                  <span className="o-share__text">
Share on LinkedIn. Opens in a new window.
                  </span>
                </a>
              </li>
              <li className="o-share__action o-share__icon--whatsapp">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`whatsapp://send?text=${socialHeadline || headline}%20-%20${url}`}
                  data-trackable="whatsapp"
                >
                  <span className="o-share__text">
Share on Whatsapp. Opens in a new window.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

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

export default Share;

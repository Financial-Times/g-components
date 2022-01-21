/**
 * @file
 * Top of something important
 */

import React from 'react';
import PropTypes from 'prop-types';
import Share from '../share';
import Bylines from '../bylines';
import { Graphic } from '../graphic';
import { H1 } from '../typography/heading';
import { Standfirst } from '../typography/standfirst';
import { getMainImage } from '../shared/helpers';
import {
  mainImagePropType,
  topicPropType,
  bylinesPropType,
  flagsPropType,
} from '../shared/proptypes';
import styles from './styles.module.scss';

const BigTopper = ({
  url,
  topic,
  headline,
  summary,
  relatedArticle,
  mainImage,
  bylines,
  socialHeadline,
  twitterHeadline,
  facebookHeadline,
  tweetText,
  flags,
  byline,
  share,
  ...props
}) => {
  // These really mess with Storyshots' snapshot testing
  const buildTime = props.buildTime || new Date().toISOString(); // eslint-disable-line
  const publishedDate = props.publishedDate || new Date().toISOString(); // eslint-disable-line

  return (
    <div className={styles['big-topper']}>
      {flags.mainImage && (mainImage.url || mainImage.uuid) && (
        <Graphic
          alt={mainImage.description}
          description={mainImage.description}
          credit={mainImage.credit}
          src={getMainImage(mainImage)}
        />
      )}

      {topic && (
        <div className="topic">
          <Topic href={topic.url}>{topic.name}</Topic>
        </div>
      )}

      <H1 itemProp="headline">{headline}</H1>

      {flags.bylines && bylines && (
        <Bylines prefix="By" names={bylines} date={publishedDate} {...(byline || {})} />
      )}

      {flags.shareButtons && (
        <Share
          url={url}
          text={socialHeadline || headline}
          textTwitter={tweetText || twitterHeadline}
          textFacebook={facebookHeadline}
          dark={flags.dark}
          {...(share || {})}
        />
      )}

      {flags.summary && summary && (
        <div className="standfirst">
          <Standfirst>
            {summary}{' '}
            {relatedArticle && (
              <a href={relatedArticle.url} className="standfirst-link">
                {relatedArticle.text}
              </a>
            )}
          </Standfirst>
        </div>
      )}

      <meta itemProp="dateModified" content={buildTime} suppressHydrationWarning />
    </div>
  );
};

BigTopper.propTypes = {
  url: PropTypes.string.isRequired,
  topic: topicPropType,
  headline: PropTypes.string.isRequired,
  summary: PropTypes.string,
  relatedArticle: PropTypes.exact({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  mainImage: mainImagePropType,
  bylines: bylinesPropType,
  socialHeadline: PropTypes.string,
  twitterHeadline: PropTypes.string,
  facebookHeadline: PropTypes.string,
  tweetText: PropTypes.string,
  flags: flagsPropType.isRequired,
  publishedDate: PropTypes.string.isRequired,
  buildTime: PropTypes.string.isRequired,
  byline: PropTypes.object,
  share: PropTypes.object,
};

BigTopper.displayName = 'GBigTopper';

export default BigTopper;

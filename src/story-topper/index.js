/**
 * @file
 * Top of a story
 */

import React from 'react';
import PropTypes from 'prop-types';
import Share from '../share';
import Bylines from '../bylines';
import { Graphic } from '../graphic';
import { Link } from '../typography/link';
import { H1 } from '../typography/heading';
import { Topic } from '../typography/topic';
import { getMainImage } from '../shared/helpers';
import {
  mainImagePropType,
  bylinesPropType,
  topicPropType,
  flagsPropType,
} from '../shared/proptypes';
import { Standfirst } from '../typography/standfirst';
import styles from './styles.module.scss';

export const StoryTopper = ({
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
  ...props
}) => {
  // These really mess with Storyshots' snapshot testing
  const buildTime = props.buildTime || new Date().toISOString(); // eslint-disable-line
  const publishedDate = props.publishedDate || new Date().toISOString(); // eslint-disable-line

  return (
    <div className={styles['story-topper']}>
      {topic && (
        <div className="topic">
          <Topic href={topic.url}>{topic.name}</Topic>
        </div>
      )}

      <H1 itemProp="headline">{headline}</H1>

      {summary && (
        <Standfirst>
          {summary} {relatedArticle && <Link href={relatedArticle.url}>{relatedArticle.text}</Link>}
        </Standfirst>
      )}

      <meta itemProp="dateModified" content={buildTime} suppressHydrationWarning />

      {flags.mainImage && (mainImage.url || mainImage.uuid) && (
        <Graphic
          description={mainImage.description}
          src={getMainImage(mainImage)}
          credit={mainImage.credit}
        />
      )}

      {flags.shareButtons && (
        <Share
          url={url}
          text={socialHeadline || headline}
          textTwitter={tweetText || twitterHeadline}
          textFacebook={facebookHeadline}
          dark={flags.dark}
        />
      )}

      {flags.bylines && bylines && <Bylines names={bylines} date={publishedDate} />}
    </div>
  );
};

StoryTopper.propTypes = {
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
};

StoryTopper.displayName = 'GStoryTopper';

export default StoryTopper;

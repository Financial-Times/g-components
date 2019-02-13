/**
 * @file
 * Top of the article
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Share from '../share';
import { getMainImage } from '../../shared/helpers';
import { mainImagePropType, topicPropType } from '../../shared/proptypes';
import Byline, { BylinesPropType } from './byline';
import './styles.scss';

class ArticleHead extends PureComponent {
  static displayName = 'GArticleHead';

  render() {
    const {
      topic,
      headline,
      summary,
      relatedArticle,
      mainImage,
      flags,
      bylines,
      ...props
    } = this.props;

    // These really mess with Storyshots' snapshot testing
    const buildTime = this.props.buildTime || new Date().toISOString(); // eslint-disable-line
    const publishedDate = this.props.publishedDate || new Date().toISOString(); // eslint-disable-line

    return (
      <Fragment>
        <div>
          <a href={topic.url} className="o-typography-topic">
            {topic.name}
          </a>
        </div>

        <h1 className="o-typography-headline" itemProp="headline">
          {headline}
        </h1>

        <div className="o-typography-standfirst">
          {summary}
          {' '}
          {relatedArticle && (
            <a href={relatedArticle.url} className="o-typography-link">
              {relatedArticle.text}
            </a>
          )}
        </div>
        <meta itemProp="dateModified" content={buildTime} suppressHydrationWarning />

        {(mainImage.url || mainImage.uuid) && (
          <figure className="graphic graphic-b-1 graphic-pad-1">
            <img alt={mainImage.description} src={getMainImage(mainImage)} />
            <figcaption className="o-typography-caption">
              {mainImage.description}
              {mainImage.credit}
            </figcaption>
          </figure>
        )}

        {flags && flags.shareButtons && <Share headline={headline} {...{ ...props, flags }} />}

        <Byline names={bylines} date={publishedDate} />
      </Fragment>
    );
  }
}

ArticleHead.propTypes = {
  flags: PropTypes.shape({}).isRequired,
  headline: PropTypes.string.isRequired,
  summary: PropTypes.string,
  mainImage: mainImagePropType,
  relatedArticle: PropTypes.shape({}),
  publishedDate: PropTypes.string,
  buildTime: PropTypes.string,
  topic: topicPropType,
  bylines: BylinesPropType,
};

ArticleHead.defaultProps = {
  mainImage: {
    uuid: 'f07ccec8-7ded-11e8-af48-190d103e32a4',
  },
  relatedArticle: {},
  publishedDate: false,
  buildTime: false,
  summary: '',
  topic: {},
  bylines: [],
};

export default ArticleHead;

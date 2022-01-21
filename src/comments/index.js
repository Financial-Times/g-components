/**
 * @file
 * Comments component
 */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import OComments from '@financial-times/o-comments';
import { GridContainer, GridChild, GridRow } from '../grid';
import { flagsPropType } from '../shared/proptypes';
import styles from './styles.module.scss';

const Comments = ({ id, url, linkPageUrl, flags }) => {
  const ref = useRef();

  const { dark } = flags;

  useEffect(() => {
    if ((id && linkPageUrl) || (id && url)) {
      new OComments(ref.current, {
        // eslint-disable-line no-new
        articleUrl: linkPageUrl || url,
        articleId: id,
        title: id,
      });
    }
  }, [id, url, linkPageUrl]);

  const comments = (
    <GridContainer>
      <GridRow>
        <GridChild colspan="12 S11 Scenter M9 L8 XL7">
          <div ref={ref} data-o-component="o-comments" id="comments">
            <div className={styles['o--if-no-js']}>
              To participate in this chat, you need to upgrade to a newer web browser.{' '}
              <a href="https://help.ft.com/tools-services/browser-compatibility/">Learn more.</a>
            </div>
          </div>
        </GridChild>
      </GridRow>
    </GridContainer>
  );

  if (dark) {
    return <div className="pink">{comments}</div>;
  }

  return comments;
};

Comments.displayName = 'GComments';

Comments.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  flags: flagsPropType,
};

Comments.defaultProps = {
  title: 'Comments',
  flags: {
    dark: false,
  },
};

export default Comments;
Comments.displayName = 'GComments';

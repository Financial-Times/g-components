/**
 * @file
 * Comments component
 */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import OComments from 'o-comments/main.js';
import { flagsPropType } from '../../shared/proptypes';
import './styles.scss';

const Comments = ({ id, url, linkPageUrl, flags }) => {
  const ref = useRef();

  const { dark } = flags;

  useEffect(() => {
    if ((id && linkPageUrl) || (id && url)) {
      new OComments(ref.current, { // eslint-disable-line no-new
        articleUrl: linkPageUrl || url,
        articleId: id,
      });
    }
  }, [id, url, linkPageUrl]);

  const comments = (
    <div className="o-grid-container">
      <div className="o-grid-row">
        <div
          ref={ref}
          data-o-component="o-comments"
          id="comments"
          data-o-grid-colspan="12 S11 Scenter M9 L8 XL7"
        >
          <div className="o--if-no-js">
            To participate in this chat, you need to upgrade to a newer web browser.{' '}
            <a href="http://help.ft.com/tools-services/browser-compatibility/">Learn more.</a>
          </div>
        </div>
      </div>
    </div>
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

/**
 * @file
 * Comments component
 */

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import OComments from '@financial-times/o-comments/main';
import { flagsPropType } from '../shared/proptypes';
import FTTimeFormat from '@financial-times/ft-date-format';
const { format, ftTime } = FTTimeFormat;
import './styles.scss';

const Comments = ({ id, url, linkPageUrl, flags, openCommentsAt }) => {
  const ref = useRef();
  const { dark } = flags;
  const [opensAt, setOpensAt] = useState(null);

  useEffect(() => {
    if (id && (url || linkPageUrl)) {
      const openTime = new Date(openCommentsAt || 0);
      // Switch to staging if comments are scheduled to go live in the future
      const useStagingEnvironment = openTime > new Date();

      if (useStagingEnvironment) {
        setOpensAt(openTime);
      } else {
        setOpensAt(null);
      }

      new OComments(ref.current, {
        // eslint-disable-line no-new
        articleUrl: linkPageUrl || url,
        articleId: id,
        title: id,
        useStagingEnvironment,
      });
    }
  }, [id, url, linkPageUrl, openCommentsAt]);

  const comments = (
    <div className="o-grid-container">
      <div className="o-grid-row">
        <div data-o-grid-colspan="12 S11 Scenter M9 L8 XL7">
          {opensAt && (
            <p className="g-comments__scheduled">
              The live comments are scheduled to open on {format(opensAt)}.
            </p>
          )}
          <div ref={ref} data-o-component="o-comments" id="comments">
            <div className="o--if-no-js">
              To participate in this chat, you need to enable javascript or upgrade to a newer web
              browser.{' '}
              <a href="https://help.ft.com/tools-services/browser-compatibility/">Learn more.</a>
            </div>
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
  openCommentsAt: PropTypes.string,
};

Comments.defaultProps = {
  title: 'Comments',
  flags: {
    dark: false,
  },
  openCommentsAt: null,
};

export default Comments;

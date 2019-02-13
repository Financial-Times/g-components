/**
 * @file
 * Comments component
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OComments from 'o-comments/main.js';
import { flagsPropType } from '../../shared/proptypes';
import './styles.scss';

class Comments extends PureComponent {
  ref = React.createRef();

  static displayName = 'GComments';

  async componentDidMount() {
    const { title, id, url } = this.props;

    // prettier-ignore
    new OComments(this.ref.current, { // eslint-disable-line no-new
      title,
      url,
      articleId: id,
    });
  }

  render() {
    const {
      flags: { dark },
    } = this.props;

    const containerClasses = ['o-grid-container', dark && 'pink'].filter(i => i).join(' ');

    return (
      <div className={containerClasses}>
        <div className="o-grid-row">
          <div
            ref={this.ref}
            data-o-component="o-comments"
            id="comments"
            data-o-comments-auto-init="false"
            data-o-grid-colspan="12 S11 Scenter M9 L8 XL7"
          >
            <div className="o--if-no-js">
              To participate in this chat, you need to upgrade to a newer web browser.
              {' '}
              <a href="http://help.ft.com/tools-services/browser-compatibility/">
Learn more.
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  url: PropTypes.string,
  flags: flagsPropType,
};

Comments.defaultProps = {
  title: 'Comments',
  id: '3a499586-b2e0-11e4-a058-00144feab7de',
  url: 'https://local.ft.com/comments-test',
  flags: {
    dark: false,
  },
};

export default Comments;

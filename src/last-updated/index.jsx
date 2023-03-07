/**
 * @file
 * Last updated component
 */

import React from 'react';
import PropTypes from 'prop-types';
import DateTime from '../datetime';
import './styles.scss';

const LastUpdated = ({ live, dot, date }) => (
  <div className={`last-updated${live ? ' last-updated--live' : ''}`}>
    {live ? (
      <div className="o-teaser o-teaser--small" data-o-component="o-teaser">
        <div className="o-teaser__content">
          {dot && (
            <div
              className="o-teaser__timestamp o-teaser__timestamp--inprogress"
              style={{ display: 'inline-block' }}
            >
              <span className="o-teaser__timestamp-prefix" />
            </div>
          )}
          {date ? (
            <React.Fragment>
              Last updated <DateTime datestamp={date} />
            </React.Fragment>
          ) : (
            'Live'
          )}
        </div>
      </div>
    ) : (
      <div>
        {dot && (
          <div
            className="o-teaser__timestamp"
            style={{ display: 'inline-block' }}
          >
            <span className="o-teaser__timestamp-prefix" />
          </div>
        )}
        {date && (
          <span>Last updated <DateTime datestamp={date} /></span>
        )}
      </div>
    )}
  </div>
);

LastUpdated.propTypes = {
  live: PropTypes.bool,
  dot: PropTypes.bool,
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.bool]),
};

LastUpdated.defaultProps = {
  live: false,
  dot: false,
  date: false,
};

export default LastUpdated;

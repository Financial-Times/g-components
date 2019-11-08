/**
 * @file
 * Last updated component
 */

import React from 'react';
import PropTypes from 'prop-types';
import DateTime from '../datetime';
import './styles.scss';

const LastUpdated = ({ lastUpdated, live }) => (
  <div className={`last-updated${live ? ' last-updated--live' : ''}`}>
    {live ? (
      <div className="o-teaser o-teaser--small" data-o-component="o-teaser">
        <div className="o-teaser__content">
          Last updated <DateTime timestamp={lastUpdated} />
          <div
            className="o-teaser__timestamp o-teaser__timestamp--inprogress"
            style={{ display: 'inline-block' }}
          >
            <span className="o-teaser__timestamp-prefix" />
          </div>
        </div>
      </div>
    ) : (
      <span>
        Last updated <DateTime timestamp={lastUpdated} />
      </span>
    )}
  </div>
);

LastUpdated.propTypes = {
  lastUpdated: PropTypes.instanceOf(Date),
  live: PropTypes.bool,
};
LastUpdated.defaultProps = {
  lastUpdated: new Date(),
  live: true,
};

export default LastUpdated;

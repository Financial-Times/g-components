/**
 * @file
 * Last updated component
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DateTime from '../datetime';
import styles from './styles.module.scss';

const LastUpdated = ({ live, dot, date }) => (
  <div className={classNames(styles[`last-updated`], live && styles['last-updated--live'])}>
    {live ? (
      <div
        className={classNames(styles['o-teaser'], styles['o-teaser--small'])}
        data-o-component="o-teaser"
      >
        <div className={styles['o-teaser__content']}>
          {dot && (
            <div
              className={classNames(
                styles['o-teaser__timestamp'],
                styles['o-teaser__timestamp--inprogress'],
              )}
              style={{ display: 'inline-block' }}
            >
              <span className={styles['o-teaser__timestamp-prefix']} />
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
          <div className={styles['o-teaser__timestamp']} style={{ display: 'inline-block' }}>
            <span className={styles['o-teaser__timestamp-prefix']} />
          </div>
        )}
        {date && (
          <span>
            Last updated <DateTime datestamp={date} />
          </span>
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

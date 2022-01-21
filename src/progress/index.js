/**
 * @file
 * Stepped progress bar.
 * Does *not* currently mirror o-stepped-progress.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';

export const Progress = ({ value, steps }) => (
  <ul className={styles['g-progress']}>
    {steps ? (
      (Array.isArray(steps) ? steps : Array(steps).fill()).map((step, i) => (
        <li
          key={i /* eslint-disable-line react/no-array-index-key */}
          className={classnames(
            styles['g-progress__segment'],
            i / steps < value && styles['g-progress__segment--active'],
          )}
        />
      ))
    ) : (
      <li className={styles['g-progress__segment']}>
        <div
          style={{ margin: 0, width: `${value * 100}%`, height: '100%' }}
          className={styles['g-progress__segment--active']}
        />
      </li>
    )}
  </ul>
);

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  steps: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.any)]),
};
Progress.defaultProps = {
  steps: undefined,
};

Progress.displayName = 'GProgress';

export default Progress;

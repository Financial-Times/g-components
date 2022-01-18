import React from 'react';
import PropTypes from 'prop-types';
import styles from './topic.module.scss';

export const Topic = ({ children, ...props }) => (
  <a className={styles.topic} {...props}>
    {children}
  </a>
);

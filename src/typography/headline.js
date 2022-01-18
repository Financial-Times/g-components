import React from 'react';
import PropTypes from 'prop-types';
import styles from './headline.module.scss';

export const Headline = ({ children, ...props }) => (
  <h1 className={styles.headline} {...props}>
    {children}
  </h1>
);

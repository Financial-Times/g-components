import React from 'react';
import PropTypes from 'prop-types';
import styles from './standfirst.module.scss';

export const Standfirst = ({ children, ...props }) => (
  <p className={styles.standfirst} {...props}>
    {children}
  </p>
);

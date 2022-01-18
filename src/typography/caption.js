import React from 'react';
import PropTypes from 'prop-types';
import styles from './caption.module.scss';

export const Caption = ({ children, ...props }) => (
  <figcaption className={styles.caption} {...props}>
    {children}
  </figcaption>
);

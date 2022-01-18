import React from 'react';
import PropTypes from 'prop-types';
import styles from './body-text.module.scss';

export const BodyText = ({ children, ...props }) => (
  <p className={styles['body-text']} {...props}>
    {children}
  </p>
);

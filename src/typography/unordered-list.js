import React from 'react';
import PropTypes from 'prop-types';
import styles from './unordered-list.module.scss';

export const UnorderedList = ({ children, ...props }) => (
  <ul className={styles['unordered-list']} {...props}>
    {children}
  </ul>
);

import React from 'react';
import PropTypes from 'prop-types';
import styles from './ordered-list.module.scss';

export const OrderedList = ({ children, ...props }) => (
  <ol className={styles['ordered-list']} {...props}>
    {children}
  </ol>
);

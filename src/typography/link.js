import React from 'react';
import PropTypes from 'prop-types';
import styles from './ordered-list.module.scss';
import classNames from 'classnames';

export const Link = ({ href, children, ...props }) => (
  <a
    href={href}
    className={styles[`${href.startsWith('http') ? 'link-external' : 'link'}`]}
    {...props}
  >
    {children}
  </a>
);

import React from 'react';
import PropTypes from 'prop-types';
import styles from './link.module.scss';

export const Link = ({ href, children, ...props }) => (
  <a
    href={href}
    className={styles[`${href.startsWith('http') ? 'link-external' : 'link'}`]}
    {...props}
  >
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

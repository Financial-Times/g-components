import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import styles from './heading.module.scss';

export const Heading = ({ level, children, ...props }) => {
  if (Number.isInteger(level) && level > 0 && level <= 5) {
    return createElement(`h${level}`, { className: styles[`level-${level}`], ...props }, children);
  }
};

export const H1 = ({ children, ...props }) => (
  <Heading level={1} {...props}>
    {children}
  </Heading>
);
export const H2 = ({ children, ...props }) => (
  <Heading level={2} {...props}>
    {children}
  </Heading>
);
export const H3 = ({ children, ...props }) => (
  <Heading level={3} {...props}>
    {children}
  </Heading>
);

export const H4 = ({ children, ...props }) => (
  <Heading level={4} {...props}>
    {children}
  </Heading>
);

export const H5 = ({ children, ...props }) => (
  <Heading level={5} {...props}>
    {children}
  </Heading>
);

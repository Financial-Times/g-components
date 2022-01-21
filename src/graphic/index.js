import React from 'react';
import classNames from 'classnames';
import { Caption } from '../typography/caption';
import styles from './styles.module.scss';

export const Graphic = ({ alt, description, src, credit }) => (
  <figure className={classNames(styles.graphic)}>
    <img alt={alt || description} src={src} />
    <Caption style={{ marginTop: '4px' }}>
      {description}
      {description && credit ? ' ' + credit : credit}
    </Caption>
  </figure>
);

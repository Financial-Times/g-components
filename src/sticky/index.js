/**
 * @file
 * Component using IntersectionObserver for scrollytelling
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Observer from 'react-scroll-percentage';
import styles from './styles.module.scss';

const Sticky = ({ article, graphic }) => {
  const [current, setCurrent] = useState();

  const updateGraphic = (label) => {
    setCurrent(label);
  };

  return (
    <Observer>
      {({ percentage, inView }) => (
        <div className={styles['sticky__container']}>
          <article className={styles['sticky__text']}>
            {article({ percentage, inView, updateGraphic })}
          </article>
          <figure className={styles['sticky__figure']}>
            {graphic({ percentage, inView, current })}
          </figure>
        </div>
      )}
    </Observer>
  );
};

Sticky.displayName = 'GSticky';

Sticky.propTypes = {
  article: PropTypes.func.isRequired,
  graphic: PropTypes.func.isRequired,
};

export default Sticky;

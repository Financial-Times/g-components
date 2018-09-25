/**
 * @file
 * Component using IntersectionObserver for scrollytelling
 */

import React from 'react';
import PropTypes from 'prop-types';
import Observer from 'react-scroll-percentage';
import './styles.scss';

const Sticky = ({ article, graphic }) => (
  <Observer>
    {({ percentage, inView }) => (
      <div className="sticky__container">
        <article className="sticky__text">
          {article({ percentage, inView })}
        </article>
        <figure className="sticky__figure">
          {graphic({ percentage, inView })}
        </figure>
      </div>
    )}
  </Observer>
);

Sticky.propTypes = {
  article: PropTypes.node.isRequired,
  graphic: PropTypes.node.isRequired,
};

export default Sticky;

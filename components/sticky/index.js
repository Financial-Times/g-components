/**
 * @file
 * Component using IntersectionObserver for scrollytelling
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Observer from 'react-scroll-percentage';
import './styles.scss';

class Sticky extends PureComponent {
  static displayName = 'GSticky';

  state = {
    current: null,
  };

  updateGraphic = (label) => {
    this.setState({ current: label });
  };

  render() {
    const { article, graphic } = this.props;
    const { current } = this.state;
    return (
      <Observer>
        {({ percentage, inView }) => (
          <div className="sticky__container">
            <article className="sticky__text">
              {article({ percentage, inView, updateGraphic: this.updateGraphic })}
            </article>
            <figure className="sticky__figure">
              {graphic({ percentage, inView, current })}
            </figure>
          </div>
        )}
      </Observer>
    );
  }
}

Sticky.propTypes = {
  article: PropTypes.func.isRequired,
  graphic: PropTypes.func.isRequired,
};

export default Sticky;

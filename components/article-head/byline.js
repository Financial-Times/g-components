/**
 * @file
 * Byline component
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import ODate from 'o-date/main.js';
import { ftdate } from '../../shared/helpers';

export const BylinesPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
      location: PropTypes.string,
    }),
  ),
]);

export default class Byline extends PureComponent {
  dateRef = React.createRef();

  static displayName = 'GByline';

  static propTypes = {
    names: BylinesPropType,
    date: PropTypes.string,
  };

  static defaultProps = {
    names: null,
    date: null,
  };

  async componentDidMount() {
    new ODate(this.dateRef.current); // eslint-disable-line no-new
  }

  render() {
    const { names, date } = this.props;
    if (!names && !date) return null;
    const namesList = Array.isArray(names) ? names : [names];
    const namesElements = namesList.reduce((a, name, i) => {
      /* eslint-disable no-nested-ternary */
      const separator = i === 0 ? '' : i === namesList.length - 1 ? ' and ' : ', ';
      const location = name.location && (
      <Fragment>
        {' '}
        {name.location}
      </Fragment>
      );
      const author = name.url ? (
        <Fragment key={`author-${name.name}`}>
          <a href={name.url} className="o-typography-author">
            {name.name}
          </a>
          {location}
        </Fragment>
      ) : (
        <Fragment key={`author-${name.name}`}>
          <span>
            {name.name}
          </span>
          {location}
        </Fragment>
      );
      return a.concat(separator, author);
    }, []);
    const dateElement = (
      <Fragment>
        {' '}
        <span
          ref={this.dateRef}
          data-o-component="o-date"
          className="o-date o-typography-timestamp"
          dateTime={date}
          suppressHydrationWarning
        >
          {ftdate(new Date(date))}
        </span>
      </Fragment>
    );
    return (
      <div className="byline">
        {names && namesElements}
        {date && dateElement}
      </div>
    );
  }
}

/**
 * @file
 * Bylines component
 */

import React, { Fragment, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { bylinesPropType } from '../shared/proptypes';
import ODate from '@financial-times/o-date';
import './styles.scss';

const NamesElement = ({ namesList }) => {
  return namesList.reduce((a, name, i) => {
    /* eslint-disable no-nested-ternary */
    const separator = i === 0 ? '' : i === namesList.length - 1 ? ' and ' : ', ';
    const author = name.url ? (
      <Fragment key={`author-${name.name}`}>
        <a href={name.url} className="o-editorial-typography-author">
          {name.name}
        </a>
        { name.location && ` in ${name.location}` }
      </Fragment>
    ) : (
      <Fragment key={`author-${name.name}`}>
        <span>{name.name}</span>
        { name.location && ` in ${name.location}` }
      </Fragment>
    );
    return a.concat(separator, author);
  }, []);
};

const DateElement = ({ dateRef, date }) => {
  const format = new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const [month,, day,, year] = format.formatToParts(new Date(date));
  const dateFormatted = `${month.value} ${day.value} ${year.value}`;
  return (
    <Fragment>
      {' '}
      <time
        ref={dateRef}
        data-o-component="o-date"
        className="o-date o-editorial-typography-byline-timestamp"
        dateTime={date}
        suppressHydrationWarning
      >
        {dateFormatted}
      </time>
    </Fragment>
  );
}

const Bylines = ({ prefix, names, date, dateFirst }) => {
  const dateRef = useRef();

  useEffect(() => {
    (async () => {
      new ODate(dateRef.current); // eslint-disable-line no-new
    })();
  }, []);

  if (!names && !date) return null;

  const namesList = Array.isArray(names) ? names : [{ name: names }];

  return (
    <div className="bylines">
      {prefix && `${prefix} `}
      {dateFirst && date && <DateElement dateRef={dateRef} date={date} />}
      {dateFirst && ' by '}
      {names && <NamesElement namesList={namesList} />}
      {!dateFirst && date && <DateElement dateRef={dateRef} date={date} />}
    </div>
  );
};

Bylines.propTypes = PropTypes.exact({
  prefix: PropTypes.string,
  names: bylinesPropType,
  date: PropTypes.string,
  dateFirst: PropTypes.boolean,
});

Bylines.displayName = 'GBylines';

export default Bylines;

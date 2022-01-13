/**
 * @file
 * Bylines component
 */

import React, { Fragment, useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { bylinesPropType } from '../shared/proptypes';
import { useOrigami } from '../shared/hooks';
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
        {name.location && ` in ${name.location}`}
      </Fragment>
    ) : (
      <Fragment key={`author-${name.name}`}>
        <span>{name.name}</span>
        {name.location && ` in ${name.location}`}
      </Fragment>
    );
    return a.concat(separator, author);
  }, []);
};

const DateElement = forwardRef(({ date }, ref) => {
  const format = new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const [month, , day, , year] = format.formatToParts(new Date(date));
  const dateFormatted = `${month.value} ${day.value} ${year.value}`;
  return (
    <Fragment>
      {' '}
      <time
        ref={ref}
        data-o-component="o-date"
        className="o-date o-editorial-typography-byline-timestamp"
        dateTime={date}
        suppressHydrationWarning
      >
        {dateFormatted}
      </time>
    </Fragment>
  );
});

const Bylines = ({ prefix, names, date, dateFirst }) => {
  const dateElRef = useRef();
  const oDateRef = useOrigami('o-date', dateElRef, undefined, true);

  if (!names && !date) return null;

  const namesList = Array.isArray(names) ? names : [{ name: names }];

  return (
    <div className="bylines">
      {prefix && `${prefix} `}
      {dateFirst && date && <DateElement ref={dateElRef} date={date} />}
      {dateFirst && ' by '}
      {names && <NamesElement namesList={namesList} />}
      {!dateFirst && date && <DateElement ref={dateElRef} date={date} />}
    </div>
  );
};

Bylines.propTypes = {
  prefix: PropTypes.string,
  names: bylinesPropType,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  dateFirst: PropTypes.bool,
};

Bylines.defaultProps = {
  names: 'FT Staff',
  prefix: '',
  date: false,
  dateFirst: false,
};

Bylines.displayName = 'GBylines';

export default Bylines;

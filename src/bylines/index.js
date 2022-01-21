/**
 * @file
 * Bylines component
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from '../datetime';
import { bylinesPropType } from '../shared/proptypes';
import styles from './styles.module.scss';

const NamesElement = ({ namesList }) => {
  return namesList.reduce((a, name, i) => {
    /* eslint-disable no-nested-ternary */
    const separator = i === 0 ? '' : i === namesList.length - 1 ? ' and ' : ', ';
    const author = name.url ? (
      <Fragment key={`author-${name.name}`}>
        <a href={name.url} className={styles.byline}>
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

export const Bylines = ({ prefix, names, date, dateFirst }) => {
  if (!names && !date) return null;

  const namesList = Array.isArray(names) ? names : [{ name: names }];

  return (
    <div className="bylines">
      {prefix && `${prefix} `}
      {dateFirst && date && <DateTime datestamp={date} />}
      {dateFirst && ' by '}
      {names && <NamesElement namesList={namesList} />}
      {!dateFirst && date && <DateTime datestamp={date} />}
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

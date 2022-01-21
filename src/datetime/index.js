/**
 * @file
 * o-date, wrapped as a React component
 */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ODate from '@financial-times/o-date';
import ftDateFormat from '@financial-times/ft-date-format';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const DateTime = ({ datestamp }) => {
  const elRef = useRef(null);
  const dateRef = useRef(null);
  const date = datestamp instanceof Date ? datestamp : new Date(datestamp);

  useEffect(() => {
    dateRef.current = ODate.init(elRef.current);

    return () => dateRef.current.destroy();
  }, [datestamp]);
  return (
    <time
      ref={elRef}
      suppressHydrationWarning
      data-o-component="o-date"
      className={classNames(styles['date-time'])}
      dateTime={date.toISOString()}
    >
      {ftDateFormat.ftTime(date)}
    </time>
  );
};

DateTime.propTypes = {
  datestamp: PropTypes.instanceOf(Date),
};

DateTime.defaultProps = {
  datestamp: new Date(),
};

export default DateTime;

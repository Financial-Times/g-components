/**
 * @file
 * o-date, wrapped as a React component
 */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ODate from '@financial-times/o-date/main';
import ftDateFormat from '@financial-times/ft-date-format';

const DateTime = ({ datestamp }) => {
  const elRef = useRef(null);
  const dateRef = useRef(null);
  useEffect(() => {
    dateRef.current = ODate.init(elRef.current);

    return () => dateRef.current.destroy();
  }, [datestamp]);
  return (
    <time
      ref={elRef}
      data-o-component="o-date"
      className="o-date"
      dateTime={datestamp.toISOString()}
      suppressHydrationWarning
    >
      {ftDateFormat.ftTime(datestamp)}
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

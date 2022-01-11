/**
 * @file
 * o-date, wrapped as a React component
 */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ftDateFormat from '@financial-times/ft-date-format';
import { useOrigami } from '../shared/hooks';

const DateTime = ({ datestamp }) => {
  const ref = useRef(null);
  const dateRef = useOrigami('o-date', ref)

  return (
    <time
      ref={ref}
      data-o-component="o-date"
      className="o-date"
      dateTime={datestamp.toISOString()}
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

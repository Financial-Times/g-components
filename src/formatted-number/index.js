import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { round, n_spell as spellOutNumber } from '@financial-times/format-number';
import './styles.scss';

const trimNumber = (n) => {
  return n.trim().replace(/\.0$/, '');
};

const FormattedNumber = ({ x, spellBelowTen }) => {
  let number;
  let shortSuffix;
  let accessibleSuffix;

  useEffect(() => {
    const num = Number(x); // Ensure typed as Number

    if (Number.isNaN(num)) {
      setNumber(null);
      return;
    }

    // Find if negative
    const n_sgn = num < 0 ? '-' : '';

    // Set as absolute value
    const n_abs = Math.abs(num);

    // Round and convert to string
    let n;

    if (n_abs < 1e3) {
      shortSuffix = '';
      accessibleSuffix = '';
      n = trimNumber(round(n_abs));
    } else if (n_abs < 1e6) {
      shortSuffix = 'k';
      accessibleSuffix = 'thousand';
      n = trimNumber(round(n_abs / 1e3));
    } else if (n_abs < 1e9) {
      shortSuffix = 'mn';
      accessibleSuffix = 'million';
      n = trimNumber(round(n_abs / 1e6));
    } else if (n_abs < 1e12) {
      shortSuffix = 'bn';
      accessibleSuffix = 'billion';
      n = trimNumber(round(n_abs / 1e9));
    } else if (n_abs < 1e15) {
      shortSuffix = 'tn';
      accessibleSuffix = 'trillion';
      n = trimNumber(round(n_abs / 1e12));
    } else if (n_abs < 1e18) {
      shortSuffix = ' quadrillion';
      accessibleSuffix = 'quadrillion';
      n = trimNumber(round(n_abs / 1e15));
    } else {
      shortSuffix = '';
      accessibleSuffix = '';
      n = new Intl.NumberFormat('en-GB', {
        maximumSignificantDigits: 3,
        notation: 'scientific',
      }).format(round(x));
    }

    //  Add `-` back in if negative
    const signed_number = n_sgn + n;

    if (n_abs < 10 && spellBelowTen) {
      number = spellOutNumber(signed_number);
      return;
    }

    number = signed_number;
  }, [x]);

  return number ? (
    <span>
      {number}
      {shortSuffix && <span aria-hidden="true">{shortSuffix}</span>}
      {accessibleSuffix && <span className="sr-only"> {accessibleSuffix}</span>}
    </span>
  ) : null;
};

FormattedNumber.propTypes = {
  x: PropTypes.number.isRequired,
  spellBelowTen: PropTypes.bool,
};

FormattedNumber.defaultProps = {
  spellBelowTen: false,
};

export default FormattedNumber;

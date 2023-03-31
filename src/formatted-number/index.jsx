import React from 'react';
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

  const num = Number(x); // Ensure typed as Number

  if (Number.isNaN(num)) {
    return null;
  }

  // Find if negative
  const nSign = num < 0 ? '-' : '';

  // Set as absolute value
  const nAbs = Math.abs(num);

  // Round and convert to string
  let n;

  if (nAbs < 1e3) {
    shortSuffix = '';
    accessibleSuffix = '';
    n = trimNumber(round(nAbs));
  } else if (nAbs < 1e6) {
    shortSuffix = 'k';
    accessibleSuffix = 'thousand';
    n = trimNumber(round(nAbs / 1e3));
  } else if (nAbs < 1e9) {
    shortSuffix = 'mn';
    accessibleSuffix = 'million';
    n = trimNumber(round(nAbs / 1e6));
  } else if (nAbs < 1e12) {
    shortSuffix = 'bn';
    accessibleSuffix = 'billion';
    n = trimNumber(round(nAbs / 1e9));
  } else if (nAbs < 1e15) {
    shortSuffix = 'tn';
    accessibleSuffix = 'trillion';
    n = trimNumber(round(nAbs / 1e12));
  } else if (nAbs < 1e18) {
    shortSuffix = ' quadrillion';
    accessibleSuffix = 'quadrillion';
    n = trimNumber(round(nAbs / 1e15));
  } else {
    shortSuffix = '';
    accessibleSuffix = '';
    n = new Intl.NumberFormat('en-GB', {
      maximumSignificantDigits: 3,
      notation: 'scientific',
    }).format(round(x));
  }

  //  Add `-` back in if negative
  const signedNumber = nSign + n;

  if (nAbs < 10 && spellBelowTen) {
    number = spellOutNumber(signedNumber);
  } else {
    number = signedNumber;
  }

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

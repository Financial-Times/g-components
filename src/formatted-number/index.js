import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { round, n_spell as spellOutNumber } from '@financial-times/format-number';
import './styles.scss';

const trimNumber = (n) => {
  return n.trim().replace(/\.0$/, '');
};

const FormattedNumber = ({ x, spellBelowTen }) => {
  const [number, setNumber] = useState(null);
  const [shortSuffix, setShortSuffix] = useState('');
  const [accessibleSuffix, setAccessibleSuffix] = useState('');

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
      setShortSuffix('');
      setAccessibleSuffix('');
      n = trimNumber(round(n_abs));
    } else if (n_abs < 1e6) {
      setShortSuffix('k');
      setAccessibleSuffix('thousand');
      n = trimNumber(round(n_abs / 1e3));
    } else if (n_abs < 1e9) {
      setShortSuffix('mn');
      setAccessibleSuffix('million');
      n = trimNumber(round(n_abs / 1e6));
    } else if (n_abs < 1e12) {
      setShortSuffix('bn');
      setAccessibleSuffix('billion');
      n = trimNumber(round(n_abs / 1e9));
    } else if (n_abs < 1e15) {
      setShortSuffix('tn');
      setAccessibleSuffix('trillion');
      n = trimNumber(round(n_abs / 1e12));
    } else if (n_abs < 1e18) {
      setShortSuffix(' quadrillion');
      setAccessibleSuffix('quadrillion');
      n = trimNumber(round(n_abs / 1e15));
    } else {
      setShortSuffix('');
      setAccessibleSuffix('');
      n = new Intl.NumberFormat('en-GB', {
        maximumSignificantDigits: 3,
        notation: 'scientific',
      }).format(round(x));
    }

    //  Add `-` back in if negative
    const signed_number = n_sgn + n;

    if (n_abs < 10 && spellBelowTen) {
      setNumber(spellOutNumber(signed_number));
      return;
    }

    setNumber(signed_number);
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

/**
 * @file
 * Constituency race result indicator for GE2019
 * @tags ge2019
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { uk } from '@financial-times/politics';
import { Context } from '../../article-layout';
import './styles.scss';

const { getPartyInfo } = uk;

const RaceResult = ({ incumbent, winner, backgroundColor, breakpoint: breakpointProp }) => {
  const { breakpoint = breakpointProp || 'default' } = useContext(Context) || {};
  if (!incumbent) return null;

  const incumbentParty = getPartyInfo(incumbent);
  const winnerParty = winner ? getPartyInfo(winner) : null;
  /* eslint-disable no-nested-ternary */
  // I am so sorry for the following expression: -æ.
  const text = winner
    ? winner !== incumbent
      ? `${
          !['default', 's', 'm'].includes(breakpoint.toLowerCase())
            ? winnerParty.formattedName.length <= 20
              ? winnerParty.formattedName
              : winnerParty.shortName
            : winnerParty.shortName
        } gain`
      : `${
          !['default', 's', 'm'].includes(breakpoint.toLowerCase())
            ? winnerParty.formattedName.length <= 20
              ? winnerParty.formattedName
              : winnerParty.shortName
            : winnerParty.shortName
        } hold`
    : 'Yet to declare';
  /* eslint-enable no-nested-ternary */
  return (
    <div className="race-result">
      <div className="race-result--incumbent" style={{ backgroundColor: incumbentParty.color }} />
      <div
        className="race-result--triangle-background"
        style={{
          borderColor: `transparent transparent transparent ${backgroundColor}`,
        }}
      />
      <div
        className="race-result--triangle"
        style={{
          borderColor: `transparent transparent transparent ${incumbentParty.color}`,
        }}
      />
      <div
        className="race-result--outcome"
        style={{
          backgroundColor: winner ? winnerParty.color : '#f2dfce',
          color: winner ? winnerParty.textColor : 'black',
          border: winner === 'The Speaker' ? '1px solid #B2AFAD' : 'none',
        }}
      >
        {text}
      </div>
    </div>
  );
};

RaceResult.propTypes = {
  winner: PropTypes.string.isRequired,
  incumbent: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  breakpoint: PropTypes.string,
};

RaceResult.defaultProps = {
  backgroundColor: '#fff1e5',
};

export default RaceResult;

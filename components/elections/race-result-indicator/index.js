/**
 * @file
 * Constituency race result indicator for GE2019
 * @tags ge2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import { getPartyInfo } from '../utils';
import './styles.scss';

const RaceResult = ({ incumbent, winner }) => {
  if (!incumbent || !winner) return null;
  const incumbentParty = getPartyInfo(incumbent);
  const winnerParty = getPartyInfo(winner);
  const text = winner !== incumbent ? `${winner} gain from ${incumbent}` : `${winner} holds`;
  return (
    <div className="race-result">
      <div className="race-result--incumbent" style={{ backgroundColor: incumbentParty.color }} />
      <div className="race-result--triangle-background" />
      <div
        className="race-result--triangle"
        style={{
          borderColor: `transparent transparent transparent ${incumbentParty.color}`,
        }}
      />
      <div className="race-result--outcome" style={{ backgroundColor: winnerParty.color }}>
        {text}
      </div>
    </div>
  );
};

RaceResult.propTypes = {
  winner: PropTypes.string.isRequired,
  incumbent: PropTypes.string.isRequired,
};

export default RaceResult;

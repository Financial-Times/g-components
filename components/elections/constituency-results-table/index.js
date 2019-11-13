/**
 * @file
 * Constituency results table component
 */

import React from 'react';
import PropTypes from 'prop-types';
import { uk } from '@financial-times/politics';
import { numberWithCommas } from '../utils';
import './styles.scss';

const { getPartyInfo } = uk;

export const ConstituencyResultsTable = ({ className, data, tableHeaders, note }) => {
  const sortedData = data.sort((a, b) =>
    a.votes && b.votes ? b.votes - a.votes : a.candidate.localeCompare(b.candidate),
  );

  return (
    <div className={className}>
      <table className={`${className}__table`}>
        <thead>
          <tr>
            {tableHeaders.map(t => (
              <th key={`th_${t}`}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map(({ party, candidate, votes, showAsterick }) => {
            const { shortName, color } = getPartyInfo(party);
            return (
              <tr key={`row_${party}`}>
                <td>
                  <span className="party-badge" style={{ backgroundColor: color }} />
                  {shortName}
                </td>
                <td>
                  {candidate}
                  {showAsterick && '*'}
                </td>
                {votes && <td className="number">{numberWithCommas(votes)}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
      {note && <div className={`${className}__note`}>{note}</div>}
    </div>
  );
};

ConstituencyResultsTable.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      party: PropTypes.string,
      candidate: PropTypes.string,
      votes: PropTypes.number,
      showAsterick: PropTypes.bool.isOptional,
    }),
  ).isRequired,
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  note: PropTypes.string,
};

ConstituencyResultsTable.defaultProps = {
  className: 'g-constituency-results-table',
};

export default ConstituencyResultsTable;

/**
 * @file
 * Constituency results table component
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { uk } from '@financial-times/politics';
import { Context } from '../../article-layout';
import { numberWithCommas } from '../utils';
import { Expander } from '../../expander';
import './styles.scss';

const { getPartyInfo } = uk;

const ConstituencyResultsTableRow = ({ party, candidate, votes, showAsterick }) => {
  const { shortName, color } = getPartyInfo(party);
  const border = party === 'The Speaker' ? '1px solid #B2AFAD' : 'none';
  return (
    <tr key={`row_${party}`}>
      <td className="party">
        <span className="party-badge" style={{ backgroundColor: color, border }} />
        <span className="party-name">{shortName}</span>
      </td>
      <td className="candidate-name">
        {candidate}
        {showAsterick && '*'}
      </td>
      {votes && <td className="number">{numberWithCommas(votes)}</td>}
    </tr>
  );
};

export const ConstituencyResultsTable = ({
  className,
  data,
  tableHeaders,
  note,
  sortFunction,
  expander: showExpander,
}) => {
  const defaultBreakpoint = { breakpoint: 'default' };
  const { breakpoint = defaultBreakpoint } = useContext(Context);

  const sortedData = sortFunction
    ? data.sort((a, b) => sortFunction(a, b))
    : data.sort((a, b) =>
        a.votes && b.votes ? b.votes - a.votes : a.candidate.localeCompare(b.candidate),
      );
  const rows = sortedData.map(({ party, candidate, votes, showAsterick }) => (
    <ConstituencyResultsTableRow
      key={`${party}_${candidate}`}
      party={party}
      candidate={candidate}
      votes={votes}
      showAsterick={showAsterick}
    />
  ));
  return (
    <div className={className}>
      <table className={`${className}__table`}>
        <thead>
          <tr>
            {tableHeaders.map((t) => (
              <th key={`th_${t}`}>{t}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {['l', 'xl'].includes(breakpoint.breakpoint.toLowerCase()) || showExpander ? (
            <Expander hasNote tagName="tr">
              {rows}
              <tr>
                {note && (
                  <td colSpan="1000" className={`${className}__table--note`}>
                    {note}
                  </td>
                )}
              </tr>
            </Expander>
          ) : (
            [
              rows,
              <tr key="note">
                {note && (
                  <td colSpan="1000" className={`${className}__table--note`}>
                    {note}
                  </td>
                )}
              </tr>,
            ]
          )}
        </tbody>
      </table>
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
      showAsterick: PropTypes.bool,
    }),
  ).isRequired,
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  note: PropTypes.string,
  sortFunction: PropTypes.func,
  expander: PropTypes.bool,
};

ConstituencyResultsTable.defaultProps = {
  className: 'g-constituency-results-table',
  expander: false,
  note: '',
  sortFunction: () => false,
};

export default ConstituencyResultsTable;

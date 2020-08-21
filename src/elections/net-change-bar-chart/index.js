/**
 * @file
 * Net change bar chart component
 * @tags ge2019
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { uk } from '@financial-times/politics';
import './styles.scss';

const { getPartyInfo } = uk;

const NetChangeBarChart = ({ className, title, tableHeaders, data, showShortPartyNames }) => {
  const footnoteData = data
    .filter(({ isInTable }) => !isInTable)
    .sort((a, b) => b.seatChange - a.seatChange);

  const othersData = {
    party: 'Others',
    seatChange: footnoteData.reduce((a, b) => a + b.seatChange, 0),
    isOthers: true,
  };

  const tableData = [
    ...data
      .filter(({ isInTable, isOthers }) => isInTable && !isOthers)
      .sort((a, b) => b.seatChange - a.seatChange),
    othersData,
  ];

  const minSeatChange = tableData.reduce((acc, { seatChange }) => Math.min(acc, seatChange), 0);
  const maxSeatChange = tableData.reduce((acc, { seatChange }) => Math.max(acc, seatChange), 0);
  const range = maxSeatChange - minSeatChange;

  const getBarPosition = (seatChange) => ((seatChange - minSeatChange) / range) * 100;
  const getStartPosition = (seatChange) => getBarPosition(Math.min(0, seatChange));
  const getBarWidth = (seatChange) => Math.abs(getBarPosition(seatChange) - getBarPosition(0));

  return (
    <div className={className}>
      <div className={`${className}__header`}>
        <h3 className={`${className}__title`}>{title}</h3>
      </div>

      <table className={`${className}__table`}>
        <thead>
          <tr>
            {tableHeaders.map((t) =>
              t === '0' ? (
                <th key={`th_${t}`} className="axis-label">
                  <span style={{ left: `${getStartPosition(0)}%` }}>{t}</span>
                </th>
              ) : (
                <th key={`th_${t}`}>{t}</th>
              ),
            )}
          </tr>
        </thead>

        <tbody>
          {tableData.map(({ party, seatChange, isOthers }, idx) => {
            const { formattedName, shortName, color, whiteOverlayOpacity } = getPartyInfo(party);
            return (
              <tr
                key={idx /* eslint-disable-line react/no-array-index-key */}
                className={`row${isOthers ? ' row--others' : ''}`}
              >
                <td className={`party${isOthers ? ' party--others' : ''}`}>
                  <span className="party-badge" style={{ backgroundColor: color }} />
                  <span className="party-name party-name--desktop">
                    {showShortPartyNames ? shortName : formattedName}
                  </span>
                  <span className="party-name party-name--mobile">{shortName}</span>
                </td>
                <td
                  className={`bar-change${isOthers ? ' bar-change--others' : ''}${
                    seatChange < 0
                      ? ' bar-change--others--negative'
                      : seatChange === 0
                      ? ' bar-change--others--zero'
                      : ''
                  }`}
                >
                  <span className="bar-container">
                    <span
                      className="bar"
                      style={{
                        backgroundColor: color,
                        left: `${getStartPosition(seatChange)}%`,
                        width: `${getBarWidth(seatChange)}%`,
                      }}
                    />
                    <span
                      className="bar bar--overlay"
                      style={{
                        backgroundColor:
                          whiteOverlayOpacity !== undefined
                            ? `rgba(255, 255, 255, ${whiteOverlayOpacity})`
                            : 'rgba(255, 255, 255, 0.3)',
                        left: `${getStartPosition(seatChange)}%`,
                        width: `${getBarWidth(seatChange)}%`,
                      }}
                    />
                    <span className="centre-line" style={{ left: `${getStartPosition(0)}%` }} />
                  </span>
                </td>
                <td className="change">
                  {seatChange > 0 && '+'}
                  {seatChange}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={`${className}__footnote`}>
        {footnoteData.map(({ party, seatChange }, index, arr) => {
          const { shortName } = getPartyInfo(party);
          return (
            <Fragment key={party}>
              {shortName} (
              <span className="seats">
                {seatChange > 0 && '+'}
                {seatChange}
              </span>
              ){index !== arr.length - 1 ? ', ' : ''}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

NetChangeBarChart.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      party: PropTypes.string,
      seatChange: PropTypes.number,
      isOthers: PropTypes.bool.isOptional,
      isInTable: PropTypes.bool,
    }),
  ).isRequired,
  showShortPartyNames: PropTypes.bool,
};

NetChangeBarChart.defaultProps = {
  className: 'g-net-change-bar-chart',
  title: 'Net change in seats compared to outgoing parliament',
  showShortPartyNames: false,
};

export default NetChangeBarChart;

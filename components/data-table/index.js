/**
 * @file
 * Data table component
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import OTable from 'o-table/main.js';
import './styles.scss';

const headerAttributes = (header, isSortable) => {
  const classes = header.columnType === 'number' ? 'o-table__cell--numeric' : '';
  const attributes = [
    classes ? { className: classes } : {},
    header.columnType === 'number' ? { 'data-o-table-data-type': 'numeric' } : {},
    isSortable === false || header.columnIsSortable === false
      ? { 'data-o-table-heading-disable-sort': '' }
      : {},
  ];
  return Object.assign(...attributes);
};

const cellAttributes = (header, row) => {
  const classes = [
    header.columnType === 'number' && 'o-table__cell--numeric',
    header.columnIsVerticallyCentred && 'o-table__cell--vertically-center',
  ];
  const attributes = [
    classes ? { className: classes.filter(x => x).join(' ') } : {},
    header.columnType === 'number' ? { 'data-o-table-data-type': 'numeric' } : {},
    header.columnSortField ? { 'data-o-table-order': row[header.columnSortField] } : {},
  ];
  return Object.assign(...attributes);
};

const footerAttributes = header => {
  const classes = header.columnType === 'number' ? 'o-table__cell--numeric' : '';
  const attributes = [
    classes ? { className: classes } : {},
    header.columnType === 'number' ? { 'data-o-table-data-type': 'numeric' } : {},
  ];
  return Object.assign(...attributes);
};

const tableAttributes = (responsive, isStriped, isLinedHorizontal, isLinedVertical, isCompact) => {
  const classes = [
    'o-table',
    responsive === 'scroll' && 'o-table--responsive-scroll',
    responsive === 'flat' && 'o-table--responsive-flat',
    isStriped && 'o-table--row-stripes',
    isLinedHorizontal && 'o-table--horizontal-lines',
    isLinedVertical && 'o-table--vertical-lines',
    isCompact && 'o-table--compact',
  ];
  const attributes = [
    classes ? { className: classes.filter(x => x).join(' ') } : {},
    { 'data-o-component': 'o-table' },
    responsive === 'flat' ? { 'data-o-table-responsive': 'flat' } : {},
  ];
  return Object.assign(...attributes);
};

const Head = ({ headers, isSortable }) => (
  <thead>
    <tr>
      {headers.map((header, i) => {
        const attributes = headerAttributes(header, isSortable);
        if (header.secondary) {
          const secondary = (
            <span className="o-table__cell--content-secondary">{header.secondary}</span>
          );
          return (
            <th {...attributes}>
              {header.contents} {secondary}
            </th>
          );
        }
        return (
          <th key={i} {...attributes}>
            {header.contents}
          </th>
        );
      })}
    </tr>
  </thead>
);

const Body = ({ rows, headers }) => (
  <tbody>
    {rows.map((row, i1) => (
      <tr key={i1}>
        {headers.map((header, i2) => {
          const attributes = cellAttributes(header, row);
          const valueFormat =
            typeof row[header.columnName] === 'number'
              ? value => value.toLocaleString()
              : value => value;
          const value = valueFormat(row[header.columnName] || '');
          if (header.columnIsHeader) {
            return (
              <th key={`${i1}-${i2}`} {...attributes}>
                {value}
              </th>
            );
          }
          return (
            <td key={`${i1}-${i2}`} {...attributes}>
              {value}
            </td>
          );
        })}
      </tr>
    ))}
  </tbody>
);

const Foot = ({ footers, headers }) => (
  <tfoot>
    <tr>
      {headers.map((header, i) => {
        const attributes = footerAttributes(header);
        const footer = footers[i];
        if (!footer) return <th {...attributes} />;
        if (footer.secondary) {
          const secondary = (
            <span className="o-table__cell--content-secondary">{footer.secondary}</span>
          );
          return (
            <th {...attributes}>
              {footer.contents} {secondary}
            </th>
          );
        }
        return <th {...attributes}>{header.contents}</th>;
      })}
    </tr>
  </tfoot>
);

const DataTable = ({
  className,
  captionTop,
  captionBottom,
  headers,
  rows,
  footers,
  responsive,
  isHeaderHidden,
  isSortable,
  isStriped,
  isLinedHorizontal,
  isLinedVertical,
  isCompact,
}) => {
  const tableRef = useRef();
  const tableOrigami = useRef();

  useEffect(() => {
    tableOrigami.current = OTable.init(tableRef.current);
  }, []);

  useEffect(() => {
    if (tableOrigami.current) {
      const tableRows = Array.from(tableRef.current.querySelectorAll('tr')).filter(
        row => Array.from(row.querySelectorAll('th')).length === 0,
      );
      const tableHeaders = Array.from(tableRef.current.querySelectorAll('thead th'));
      if (responsive === 'flat') {
        tableOrigami.current._duplicateHeaders(tableRows, tableHeaders); // so it deals with data changing
      }
    }
  }, [rows, headers]);

  const attributes = tableAttributes(
    responsive,
    isStriped,
    isLinedHorizontal,
    isLinedVertical,
    isCompact,
  );

  const namedClass = [className, 'g-data-table', 'o-table-wrapper'].filter(x => x).join(' ');

  return (
    <div className={namedClass}>
      <table {...attributes} ref={tableRef}>
        {captionTop && <caption className="o-table__caption--top">{captionTop}</caption>}
        {captionBottom && <caption className="o-table__caption--bottom">{captionBottom}</caption>}
        {!isHeaderHidden && <Head headers={headers} isSortable={isSortable} />}
        <Body rows={rows} headers={headers} />
        {footers.length !== 0 && <Foot footers={footers} headers={headers} />}
      </table>
    </div>
  );
};

DataTable.displayName = 'GDataTable';

DataTable.propTypes = {
  className: PropTypes.string,
  captionTop: PropTypes.string,
  captionBottom: PropTypes.string,
  headers: PropTypes.arrayOf(
    PropTypes.exact({
      contents: PropTypes.node.isRequired,
      secondary: PropTypes.node,
      columnName: PropTypes.string.isRequired,
      columnType: PropTypes.oneOf(['string', 'number']),
      columnSortField: PropTypes.string,
      columnIsHeader: PropTypes.bool,
      columnIsSortable: PropTypes.bool,
      columnIsVerticallyCentred: PropTypes.bool,
    }),
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object),
  footers: PropTypes.arrayOf(
    PropTypes.exact({
      contents: PropTypes.node.isRequired,
      secondary: PropTypes.node,
    }),
  ),
  responsive: PropTypes.oneOf(['none', 'scroll', 'flat']),
  isHeaderHidden: PropTypes.bool,
  isSortable: PropTypes.bool,
  isStriped: PropTypes.bool,
  isLinedHorizontal: PropTypes.bool,
  isLinedVertical: PropTypes.bool,
  isCompact: PropTypes.bool,
};

DataTable.defaultProps = {
  className: null,
  captionTop: null,
  captionBottom: null,
  rows: [],
  footers: [],
  responsive: 'none',
  isHeaderHidden: false,
  isSortable: true,
  isStriped: false,
  isLinedHorizontal: false,
  isLinedVertical: false,
  isCompact: false,
};

export default DataTable;

/**
 * @file
 * Data table component
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import OTable from '@financial-times/o-table';
import classnames from 'classnames';
import './styles.scss';

const headerAttributes = (header, isSortable) => {
  const classes = header.columnType === 'number' ? 'o-table__cell--numeric' : '';
  const attributes = [
    classes ? { className: classes } : {},
    header.columnType === 'number' ? { 'data-o-table-data-type': 'numeric' } : {},
    isSortable === false || header.columnIsSortable === false
      ? { 'data-o-table-heading-disable-sort': '' }
      : {},
    { scope: 'col', role: 'columnheader' },
  ];
  return Object.assign(...attributes);
};

const cellAttributes = (header, row) => {
  const className = classnames(
    header.columnType === 'number' && 'o-table__cell--numeric',
    header.columnIsVerticallyCentred && 'o-table__cell--vertically-center',
  );
  const attributes = [
    className ? { className } : {},
    header.columnType === 'number' ? { 'data-o-table-data-type': 'numeric' } : {},
    header.columnSortField ? { 'data-o-table-sort-value': row[header.columnSortField] } : {},
  ];
  return Object.assign(...attributes);
};

const footerAttributes = (header) => {
  const classes = header.columnType === 'number' ? 'o-table__cell--numeric' : '';
  const attributes = [
    classes ? { className: classes } : {},
    header.columnType === 'number' ? { 'data-o-table-data-type': 'numeric' } : {},
  ];
  return Object.assign(...attributes);
};

const tableAttributes = (responsive, isStriped, isLinedHorizontal, isCompact, isSortable) => {
  const className = classnames(
    'o-table',
    responsive === 'scroll' && 'o-table--responsive-scroll',
    responsive === 'flat' && 'o-table--responsive-flat',
    responsive === 'overflow' && 'o-table--responsive-overflow',
    isStriped && 'o-table--row-stripes',
    isLinedHorizontal && 'o-table--horizontal-lines',
    isCompact && 'o-table--compact',
  );
  const attributes = [
    { className },
    { 'data-o-component': 'o-table' },
    !isSortable ? { 'data-o-table-sortable': false } : {},
    responsive !== 'none' ? { 'data-o-table-responsive': responsive } : {},
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
              ? (value) => value.toLocaleString()
              : (value) => value;
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

const Footnote = ({ footnote, headers }) => (
  <tfoot>
    <tr>
      <td colSpan={headers.length} className="o-table-footnote">
        {footnote}
      </td>
    </tr>
  </tfoot>
);

const TableContainer = ({ responsive, className, children }) =>
  responsive ? (
    <div className="o-table-container">
      <div className="o-table-overlay-wrapper">
        <div className={className}>{children}</div>
      </div>
    </div>
  ) : (
    <div className={className}>{children}</div>
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
  isCompact,
}) => {
  const tableRef = useRef();
  const tableOrigami = useRef();

  useEffect(() => {
    tableOrigami.current = OTable.init(tableRef.current);
  }, []);

  // @TODO fix this; private method OTable.prototype._duplicateHeaders
  // useEffect(() => {
  //   if (tableOrigami.current) {
  //     const tableRows = Array.from(tableRef.current.querySelectorAll('tr')).filter(
  //       row => Array.from(row.querySelectorAll('th')).length === 0,
  //     );
  //     const tableHeaders = Array.from(tableRef.current.querySelectorAll('thead th'));

  //     // if (responsive === 'flat') {
  //     //   tableOrigami.current._duplicateHeaders(tableRows, tableHeaders); // so it deals with data changing
  //     // }
  //   }
  // }, [rows, headers]);

  const attributes = tableAttributes(
    responsive,
    isStriped,
    isLinedHorizontal,
    isCompact,
    isSortable,
  );

  const namedClass = classnames(className, 'g-data-table', 'o-table-scroll-wrapper');

  return (
    <TableContainer className={namedClass} responsive={responsive !== 'none'}>
      <table {...attributes} ref={tableRef}>
        {captionTop && (
          <caption className="o-table__caption">
            <h2 className="o-typography-heading-level-2">{captionTop}</h2>
          </caption>
        )}
        {captionBottom && <Footnote footnote={captionBottom} headers={headers} />}
        {!isHeaderHidden && <Head headers={headers} isSortable={isSortable} />}
        <Body rows={rows} headers={headers} />
        {footers.length !== 0 && <Foot footers={footers} headers={headers} />}
      </table>
    </TableContainer>
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
  responsive: PropTypes.oneOf(['none', 'scroll', 'flat', 'overflow']),
  isHeaderHidden: PropTypes.bool,
  isSortable: PropTypes.bool,
  isStriped: PropTypes.bool,
  isLinedHorizontal: PropTypes.bool,
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
  isCompact: false,
};

export default DataTable;

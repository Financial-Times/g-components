import React from 'react';
import PropTypes from 'prop-types';
import OTable from 'o-table/main.js';
import './styles.scss';

export default class DataTable extends React.PureComponent {
  static propTypes = {
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
    responsive: PropTypes.oneOf(['none', 'flat', 'scroll']),
    isHeaderHidden: PropTypes.bool,
    isSortable: PropTypes.bool,
    isStriped: PropTypes.bool,
    isLinedHorizontal: PropTypes.bool,
    isLinedVertical: PropTypes.bool,
    isCompact: PropTypes.bool,
  };

  static defaultProps = {
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

  componentDidMount() {
    OTable.init();
  }

  render() {
    const {
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
    } = this.props;
    const captionAtTop = !captionTop ? null : (
      <caption className="o-table__caption--top">
        {captionTop}
      </caption>
    );
    const captionAtBottom = !captionBottom ? null : (
      <caption className="o-table__caption--bottom">
        {captionBottom}
      </caption>
    );
    const headerAttributes = (header) => {
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
    const head = isHeaderHidden ? null : (
      <thead>
        <tr>
          {headers.map((header) => {
            const attributes = headerAttributes(header);
            if (header.secondary) {
              const secondary = (
                <span className="o-table__cell--content-secondary">
                  {header.secondary}
                </span>
              );
              return (
                <th {...attributes}>
                  {header.contents}
                  {' '}
                  {secondary}
                </th>
              );
            }
            return (
              <th {...attributes}>
                {header.contents}
              </th>
            );
          })}
        </tr>
      </thead>
    );
    const cellAttributes = (header, row) => {
      const classes = [
        header.columnType === 'number' ? 'o-table__cell--numeric' : null,
        header.columnIsVerticallyCentred ? 'o-table__cell--vertically-center' : null,
      ]
        .filter(x => x)
        .join(' ');
      const attributes = [
        classes ? { className: classes } : {},
        header.columnType === 'number' ? { 'data-o-table-data-type': 'numeric' } : {},
        header.columnSortField ? { 'data-o-table-order': row[header.columnSortField] } : {},
      ];
      return Object.assign(...attributes);
    };
    const body = (
      <tbody>
        {rows.map(row => (
          <tr>
            {headers.map((header) => {
              const attributes = cellAttributes(header, row);
              const valueFormat = typeof row[header.columnName] === 'number'
                ? value => value.toLocaleString()
                : value => value;
              const value = valueFormat(row[header.columnName] || '');
              if (header.columnIsHeader) {
                return (
                  <th {...attributes}>
                    {value}
                  </th>
                );
              }
              return (
                <td {...attributes}>
                  {value}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    );
    const footerAttributes = (header) => {
      const classes = header.columnType === 'number' ? 'o-table__cell--numeric' : '';
      const attributes = [
        classes ? { className: classes } : {},
        header.columnType === 'number' ? { 'data-o-table-data-type': 'numeric' } : {},
      ];
      return Object.assign(...attributes);
    };
    const foot = footers.length === 0 ? null : (
      <tfoot>
        <tr>
          {headers.map((header, i) => {
            const attributes = footerAttributes(header);
            const footer = footers[i];
            if (!footer) return <th {...attributes} />;
            if (footer.secondary) {
              const secondary = (
                <span className="o-table__cell--content-secondary">
                  {footer.secondary}
                </span>
              );
              return (
                <th {...attributes}>
                  {footer.contents}
                  {' '}
                  {secondary}
                </th>
              );
            }
            return (
              <th {...attributes}>
                {header.contents}
              </th>
            );
          })}
        </tr>
      </tfoot>
    );
    const tableAttributes = () => {
      const classes = [
        'o-table',
        responsive === 'flat' ? 'o-table--responsive-flat' : null,
        responsive === 'scroll' ? 'o-table--responsive-scroll' : null,
        isStriped ? 'o-table--row-stripes' : null,
        isLinedHorizontal ? 'o-table--horizontal-lines' : null,
        isLinedVertical ? 'o-table--vertical-lines' : null,
        isCompact ? 'o-table--compact' : null,
      ]
        .filter(x => x)
        .join(' ');
      const attributes = [
        classes ? { className: classes } : {},
        { 'data-o-component': 'o-table' },
        responsive === 'flat' ? { 'data-o-table-responsive': 'flat' } : {},
      ];
      return Object.assign(...attributes);
    };
    const attributes = tableAttributes();
    return (
      <div className="g-data-table o-table-wrapper">
        <table {...attributes}>
          {captionAtTop}
          {captionAtBottom}
          {head}
          {body}
          {foot}
        </table>
      </div>
    );
  }
}

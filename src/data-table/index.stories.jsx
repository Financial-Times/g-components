import DataTable from './';

const basicHeaders = [
  {
    contents: 'Year',
    columnType: 'number',
    columnName: 'appointed',
  },
  {
    contents: 'Editor',
    columnName: 'name',
  },
];

const headersWithDefaultSortIcon = [
  {
    contents: 'Year',
    columnType: 'number',
    columnName: 'appointed',
    defaultSortIcon: 'descending',
  },
  {
    contents: 'Editor',
    columnName: 'name',
  },
];

const basicRows = [
  { appointed: '2020', name: 'Roula Khalaf' },
  { appointed: '2006', name: 'Lionel Barber' },
  { appointed: '2001', name: 'Andrew Gowers' },
  { appointed: '1991', name: 'Richard Lambert' },
  { appointed: '1981', name: 'Sir Geoffrey Owen' },
  { appointed: '1973', name: 'Fredy Fisher' },
  { appointed: '1949', name: 'Sir Gordon Newton' },
  { appointed: '1945', name: 'Hargreaves Parkinson' },
];

export default {
  title: 'Core/DataTable',
  component: DataTable,
};

export const Examples = {
  render: () => (
    <>
      Basic:
      <DataTable headers={basicHeaders} rows={basicRows} />
      Basic (horizontally lined):
      <DataTable headers={basicHeaders} rows={basicRows} isLinedHorizontal={true} />
      Basic (striped):
      <DataTable headers={basicHeaders} rows={basicRows} isStriped={true} />
      Compact:
      <DataTable headers={basicHeaders} rows={basicRows} isCompact={true} />
      With caption and footnote:
      <DataTable
        captionTop={'captionTop'}
        captionBottom={'captionBottom'}
        headers={basicHeaders}
        rows={basicRows}
      />
      Responsive overflow:
      <DataTable headers={basicHeaders} rows={basicRows} responsive="overflow" />
      Responsive scroll:
      <DataTable headers={basicHeaders} rows={basicRows} responsive="scroll" />
      Responsive flat:
      <DataTable headers={basicHeaders} rows={basicRows} responsive="flat" />
      Sorting disabled:
      <DataTable headers={basicHeaders} rows={basicRows} responsive="flat" isSortable={false} />
      With row truncation:
      <DataTable headers={basicHeaders} rows={basicRows} responsive="overflow" truncation={4} />
      With default sort icon:
      <DataTable headers={headersWithDefaultSortIcon} rows={basicRows} />
    </>
  ),

  name: 'Examples',
};

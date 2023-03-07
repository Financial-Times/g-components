import DataFilter from './';

export default {
  title: 'Core/DataFilter',
  component: DataFilter,
};

export const Examples = {
  render: () => (
    <>
      Basic:
      <DataFilter />
      Drop-down:
      <DataFilter
        data={[
          {
            value: 'testA',
          },
          {
            value: 'testB',
          },
          {
            value: 'testC',
          },
        ]}
        selectFrom={'value'}
      />
      Radio:
      <DataFilter
        data={[
          {
            value: 'testA',
          },
          {
            value: 'testB',
          },
          {
            value: 'testC',
          },
        ]}
        selectFrom={'value'}
        isRadioSelectable={true}
      />
    </>
  ),

  name: 'Examples',
};

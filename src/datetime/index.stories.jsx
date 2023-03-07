import DateTime from './';

export default {
  title: 'Core/DateTime',
  component: DateTime,
};

export const Examples = {
  render: () => <DateTime datestamp={new Date('1987-01-05T00:00:00.00')} />,
  name: 'Examples',
};

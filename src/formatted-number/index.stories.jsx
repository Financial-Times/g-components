import FormattedNumber from './';

export default {
  title: 'Core/FormattedNumber',
  component: FormattedNumber,
};

export const Examples = {
  render: () => (
    <>
      <FormattedNumber x={3} />
      <br />
      <FormattedNumber x={3} spellBelowTen={true} />
      <br />
      <FormattedNumber x={1000} />
      <br />
      <FormattedNumber x={1003000} />
      <br />
      <FormattedNumber x={5700000000} />
      <br />
      <FormattedNumber x={1000000000000} />
      <br />
      <FormattedNumber x={1000000000000000} />
      <br />
    </>
  ),
  name: 'Examples',
};

import LastUpdated from './';

export default {
  title: 'Core/Last Updated',
  component: LastUpdated,
};

export const Examples = {
  render: () => (
    <>
      Basic:
      <div>
        <LastUpdated date={new Date('1987-01-05T00:00:00.00')} />
      </div>
      With dot:
      <div>
        <LastUpdated dot />
        <br />
        <LastUpdated dot date={new Date('1987-01-05T00:00:00.00')} />
        <br />
        <LastUpdated dot live />
        <br />
        <LastUpdated dot live date={new Date('1987-01-05T00:00:00.00')} />
      </div>
      Live:
      <div>
        <LastUpdated live />
        <br />
        <LastUpdated live date={new Date('1987-01-05T00:00:00.00')} />
        <br />
        <LastUpdated live dot />
        <br />
        <LastUpdated live dot date={new Date('1987-01-05T00:00:00.00')} />
      </div>
    </>
  ),

  name: 'Examples',
};

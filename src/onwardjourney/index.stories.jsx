import OnwardJourney from './';

export default {
  title: 'Core/OnwardJourney',
  component: OnwardJourney,
};

export const Example = {
  render: () => (
    <OnwardJourney
      relatedContent={[
        {
          rows: 2,
          list: 'thing/adae44ca-4ea7-3cf8-8332-bf85ec89a558',
        },
      ]}
    />
  ),

  name: 'Example',

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

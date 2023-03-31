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
          list: 'thing/a39873a9-37fd-4501-b9e1-d98da1677e99',
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

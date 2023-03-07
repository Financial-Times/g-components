import Bylines from './';

export default {
  title: 'Core/Bylines',
  component: Bylines,

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

export const BylineExamples = {
  render: () => (
    <>
      Basic:
      <div>
        <Bylines names="FT reporters" date="2020-05-07T00:00:00" />
      </div>
      Two names with URLs and locations:
      <div>
        <Bylines
          names={[
            {
              name: 'Max Harlow',
              url: 'https://ft.com/max-harlow',
            },
            {
              name: 'Hax Marlow',
              location: 'San Serriffe',
            },
          ]}
          date="2020-05-07T00:00:00"
        />
      </div>
      If there's more than two it only uses 'and' before the last:
      <div>
        <Bylines
          names={[
            {
              name: 'Max Harlow',
              url: 'https://ft.com/max-harlow',
            },
            {
              name: 'Hax Marlow',
              location: 'San Serriffe',
            },
            {
              name: 'Someone Else',
            },
          ]}
          date="2020-05-07T00:00:00"
        />
      </div>
      Without a date:
      <div>
        <Bylines names="Max Harlow" />
      </div>
      Without a name:
      <div>
        <Bylines date="2020-05-07T00:00:00" />
      </div>
      With prefix and date at start:
      <div>
        <Bylines
          prefix="Updated"
          names={[
            {
              name: 'FT Visual & Data Journalism team',
              url: 'https://www.ft.com/visual-and-data-journalism',
            },
          ]}
          date="2020-05-07T00:00:00"
          dateFirst
        />
      </div>
    </>
  ),

  name: 'Byline Examples',
};

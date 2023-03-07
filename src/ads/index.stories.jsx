import { Ad } from '.';

export const GenericAd = {
  render: () => (
    <Ad
      name="generic-ad"
      targeting="pos=top;version=1"
      reserve="90"
      defaultFormat={false}
      smallFormat={false}
      mediumFormat="Leaderboard,Responsive"
      largeFormat="SuperLeaderboard,Leaderboard,Responsive"
      extraFormat="Billboard,SuperLeaderboard,Leaderboard,Responsive"
    />
  ),

  name: 'GenericAd',

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

export const GenericAdSlate = {
  render: () => <Ad name="generic-ad" targeting="pos=top;version=1" background="slate" />,
  name: 'GenericAdSlate',

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

export default {
  title: 'Ads',
  component: Ad,
};

import { Ad, TopAd, MiddleAd } from '.';

export const GenericAdStory = {
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

export const GenericAdSlateStory = {
  render: () => <Ad name="generic-ad" targeting="pos=top;version=1" background="slate" />,
  name: 'GenericAdSlate',

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

export const TopAdStory = {
  render: () => <TopAd />,
  name: 'TopAd',

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

export const MiddleAdStory = {
  render: () => <MiddleAd />,
  name: 'MiddleAd',

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

export default {
  title: 'Core/Ads',
  component: Ad,
};

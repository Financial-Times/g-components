import VideoSet from './';

export default {
  title: 'Core/Video Set',

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

export const Example = {
  render: () => (
    <VideoSet
      alt="Demo video set video"
      sources={{
        small: {
          url: 'https://ig.ft.com/india-pollution/videos/india-china-pollution-mobile.mp4',
          poster: 'https://ig.ft.com/india-pollution/videos/poster-mobile.jpg',
          type: 'video/mp4',
        },

        medium: {
          url: 'https://ig.ft.com/india-pollution/videos/india-china-pollution-large.mp4',
          poster: 'https://ig.ft.com/india-pollution/videos/poster-desktop.jpg',
          type: 'video/mp4',
        },

        large: {
          url: 'https://ig.ft.com/india-pollution/videos/india-china-pollution-large.mp4',
          poster: 'https://ig.ft.com/india-pollution/videos/poster-desktop.jpg',
          type: 'video/mp4',
        },
      }}
    />
  ),

  name: 'Example',
};

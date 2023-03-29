import FlourishEmbed from './';

export default {
  title: 'Core/FlourishEmbed',
  component: FlourishEmbed,
};

export const Example = {
  render: () => (
    <FlourishEmbed
      alt="Timeline of government responses"
      url="https://public.flourish.studio/visualisation/7730043/"
    />
  ),
  name: 'Example',

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

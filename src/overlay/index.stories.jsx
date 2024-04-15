import Overlay from './';

export default {
  title: 'Core/Overlay',
  component: Overlay,
  argTypes: {
    isShowing: { control: 'boolean' },
  },
};

export const Example = {
  render: ({ ...args }) => (
    <div>
      Use isShowing in the Controls to show overlay
      <Overlay {...args}>Overlay content</Overlay>
    </div>
  ),

  name: 'Example',

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

Overlay.args = { isShowing: false };

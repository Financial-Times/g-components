import Overlay from './';

export default {
  title: 'Core/Overlay',
  component: Overlay,
};

export const Example = {
  render: () => (
    <div>
      Use the Knobs toggle to show overlay<Overlay isShowing>Overlay content</Overlay>
    </div>
  ),

  name: 'Example',

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

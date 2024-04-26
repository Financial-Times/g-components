import Tooltip from './';

export default {
  title: 'Core/Tooltip',
  component: Tooltip,
};

export const Examples = {
  render: () => (
    <>
      <Tooltip position="below" content="Tooltip!">
        <button>I'm a button</button>
      </Tooltip>
    </>
  ),

  name: 'Examples',
};

import { useState } from 'react';
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
      <Tooltip position="above" content="Tooltip!">
        <button>I'm a button with position above</button>
      </Tooltip>
    </>
  ),

  name: 'Basic example',
};

const ToggleTooltipButton = ({ openTooltip, closeTooltip }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    console.log(isOpen);
    if (isOpen) {
      closeTooltip();
    } else {
      openTooltip();
    }

    setIsOpen(!isOpen);
  };

  return <button onClick={toggleOpen}>Toggle tooltip</button>;
};

export const Imperative = {
  render: () => (
    <>
      <Tooltip showOnHover={false} position="below" content="Tooltip!">
        <ToggleTooltipButton />
      </Tooltip>
    </>
  ),

  name: 'Callback example',
};

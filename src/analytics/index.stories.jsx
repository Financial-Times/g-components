import { props } from '../article-layout/props';
import Analytics from './';

export default {
  title: 'Core/Analytics',
  component: Analytics,
};

export const Example = {
  render: () => (
    <>
      <h4>You won't see anything here as "Analytics" has no visual output</h4>
      <Analytics
        id="e8e6e017-d06b-3cfa-8cb6-0b9e30bc847e"
        flags={props.flags}
        scrollDepthTarget="body"
      />
    </>
  ),

  name: 'Example',

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

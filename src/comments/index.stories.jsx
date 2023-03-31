import { props } from '../article-layout/props';
import Comments from './';

export default {
  title: 'Core/Comments',
  component: Comments,
};

export const Basic = {
  render: () => <Comments flags={props.flags} url="http://localhost:8080" id={props.id} />,
  name: 'Basic',

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

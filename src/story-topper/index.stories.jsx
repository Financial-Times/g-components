import { props } from '../article-layout/props';
import StoryTopper from './';

export default {
  title: 'Core/Story Topper',
  component: StoryTopper,
};

export const Example = {
  render: () => <StoryTopper {...props} />,
  name: 'Example',
};

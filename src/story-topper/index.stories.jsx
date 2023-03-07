import { props } from '../article-layout/index.stories.mdx';
import StoryTopper from './';

export default {
  title: 'Core/Story Topper',
  component: StoryTopper,
};

export const Example = {
  render: () => <StoryTopper {...props} />,
  name: 'Example',
};

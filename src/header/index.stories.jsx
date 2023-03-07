import { props } from '../article-layout/index.stories.mdx';
import Header from './';

export default {
  title: 'Core/Header',
  component: Header,
};

export const Example = {
  render: () => <Header flags={props.flags} />,
  name: 'Example',
};

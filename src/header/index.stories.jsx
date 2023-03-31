import { props } from '../article-layout/props';
import Header from './';

export default {
  title: 'Core/Header',
  component: Header,
};

export const Example = {
  render: () => <Header flags={props.flags} />,
  name: 'Example',
};

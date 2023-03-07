import Card from './';

export default {
  title: 'Core/Card',
  component: Card,
};

export const Basic = {
  render: () => (
    <div
      style={{
        padding: '1em',
      }}
    >
      <Card>This is a basic card component. Its container has been given 1em of padding.</Card>
    </div>
  ),

  name: 'Basic',
};

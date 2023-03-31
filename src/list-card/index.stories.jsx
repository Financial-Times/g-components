import ListCard from './';

export default {
  title: 'Core/List Card',
  component: ListCard,
};

export const Examples = {
  render: () => (
    <>
      Basic, with<code>string\[]</code>as child:<ListCard title="Yay">{['One!', 'Two!']}</ListCard>
      You can also supply arbitrary elements; each child will be wrapped with<code>{`li`}</code>:
      <ListCard title="Latest Changes">
        <span>
          <strong>April 26:</strong>Streamgraph changes...
        </span>
        <span>
          <strong>April 9:</strong>Map changes...
        </span>
        <span>
          <strong>April 8:</strong>Data changes...
        </span>
      </ListCard>
    </>
  ),

  name: 'Examples',
};

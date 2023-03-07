import Expander from './';

export default {
  title: 'core/Expander',
};

export const Examples = {
  render: () => (
    <>
      Basic with one child:
      <Expander>
        <ul>
          {Array(50)
            .fill(null)
            .map((_, idx) => (
              <li key={idx}>{idx}</li>
            ))}
        </ul>
      </Expander>
      Basic with multiple children:
      <Expander>
        {Array(50)
          .fill(null)
          .map((_, idx) => (
            <div key={idx}>{idx}</div>
          ))}
      </Expander>
    </>
  ),

  name: 'Examples',
};

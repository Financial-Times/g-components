import Loading from './';

export default {
  title: 'Core/Loading',
  component: Loading,
};

export const Examples = {
  render: () => (
    <>
      Default, without props:
      <div>
        <Loading />
      </div>
      Dark variant:
      <div>
        <Loading size="small" />
        <Loading size="medium" />
        <Loading size="large" />
      </div>
      Light variant:
      <div
        style={{
          background: '#262a33',
        }}
      >
        <Loading theme="light" size="small" />
        <Loading theme="light" size="medium" />
        <Loading theme="light" size="large" />
      </div>
    </>
  ),

  name: 'Examples',
};

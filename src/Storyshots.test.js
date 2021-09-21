import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';
import fetch from 'node-fetch';

jest.useFakeTimers('modern').setSystemTime(new Date('2019-01-01').getTime());

global.getComputedStyle = jest.fn(() => {
  return {
    getPropertyValue: () =>
      '{"layouts": {"S": "490px", "M": "740px", "L": "980px", "XL": "1220px"}}',
  };
});

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => ({}),
  unobserve: () => ({}),
  disconnect: () => ({}),
}));

global.fetch = fetch;

initStoryshots({
  test: snapshotWithOptions({
    createNodeMock: (el) => {
      const ref = document.createElement(el.type);
      ref.className = el.props.className;
      ref.setAttribute('data-o-component', el.props['data-o-component']);

      return ref;
    },
  }),
});

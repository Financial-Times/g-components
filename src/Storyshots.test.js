import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';
import fetch from 'node-fetch';

const mockedDate = new Date(2019, 1, 0);
const originalDate = Date;

global.getComputedStyle = jest.fn(() => {
  return {
    getPropertyValue: () =>
      '{"layouts": {"S": "490px", "M": "740px", "L": "980px", "XL": "1220px"}}',
  };
});

global.Date = () => mockedDate;
global.Date.setDate = originalDate.setDate;
global.Date.now = () => Math.round(new Date().getTime() / 1000);
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
